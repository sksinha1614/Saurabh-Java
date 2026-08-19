package com.example.SpringAppxJDBC;

import com.example.SpringAppxJDBC.model.Student;
import com.example.SpringAppxJDBC.service.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringAppxJdbcApplication {

	public static void main(String[] args) {
		ApplicationContext context=SpringApplication.run(SpringAppxJdbcApplication.class, args);

		Student s1=context.getBean(Student.class);
		s1.setMarks(90);
		s1.setRollNo(100);
		s1.setName("Saurabh");

		StudentService service=context.getBean(StudentService.class);

		service.addStudent(s1);


		List<Student> students=service.getStudents();
		System.out.println(students);

//		System.out.print(s1);

	}

}
