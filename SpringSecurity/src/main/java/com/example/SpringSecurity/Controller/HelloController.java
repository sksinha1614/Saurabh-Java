package com.example.SpringSecurity.Controller;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {


    @GetMapping("hello")
    public String greet(HttpServletRequest request){

        System.out.println(request.getAttribute("_csrf"));
        return "Hello World"+request.getSession().getId()+(CsrfToken)request.getAttribute("_csrf");
    }

    @GetMapping("about")
    public String about(HttpServletRequest request){
        return "About"+request.getSession().getId();
    }
}
