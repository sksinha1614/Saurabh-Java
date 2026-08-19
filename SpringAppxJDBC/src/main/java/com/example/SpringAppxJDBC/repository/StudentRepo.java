package com.example.SpringAppxJDBC.repository;

import com.example.SpringAppxJDBC.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentRepo {

    private JdbcTemplate jdbc;
    public void save(Student s) {
//        System.out.println("Student Added");
        String sql="insert into student (name,rollNo,marks) values(?,?,?)";
        int rows=jdbc.update(sql,s.getName(),s.getRollNo(),s.getMarks());
        System.out.println(rows +"effected");
    }


    public List<Student> findAll() {

        String sql="select * from student"; RowMapper<Student> mapper=(rs, rowNum) ->
        {
            Student s=new Student();
            s.setRollNo(rs.getInt("rollno"));
            s.setName(rs.getString("name"));
            s.setMarks(rs.getInt("marks"));
            return s;

        };

        return jdbc.query(sql, mapper);

    }

    public JdbcTemplate getJdbc() {
        return jdbc;
    }

    @Autowired
    public void setJdbc(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }
}
