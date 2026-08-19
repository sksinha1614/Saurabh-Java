package com.example.Spring;

import org.springframework.stereotype.Component;

@Component
public class Laptop implements Computer{

    public void compile(){
        System.out.print("compiling in Laptop");
    }
}
