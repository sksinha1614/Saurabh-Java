package com.example.Spring;

import org.springframework.stereotype.Component;

@Component
public class Desktop implements Computer{

    public void compile(){
        System.out.print("compiling in Desktop");
    }
}
