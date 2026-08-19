package com.example.SpringAppxJDBC.service;


import com.example.SpringAppxJDBC.model.Student;
import com.example.SpringAppxJDBC.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private StudentRepo repo;

    public void addStudent(Student s){
//        System.out.println("Student Added");
        repo.save(s);
    }



    public StudentRepo getRepo() {
        return repo;
    }

    @Autowired
    public void setRepo(StudentRepo repo) {
        this.repo = repo;
    }

    public List<Student> getStudents() {
        return repo.findAll();
    }
}
