package org.example;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Alien {

    private int age;
//
//    @Autowired
    private  Computer comp;


    @Autowired
    public Alien(Computer comp){
        this.comp=comp;
        System.out.println("Alien Constructor Called...");
    }



    public Computer getComp() {
        return comp;
    }

    public void setComp(Computer comp) {
        this.comp = comp;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        System.out.println("Setter Called..");
        this.age = age;
    }




    public void code(){
        System.out.print("Coding by Alien and ");
        comp.compile();
    }

}
