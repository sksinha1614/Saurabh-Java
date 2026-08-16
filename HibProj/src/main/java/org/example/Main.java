package org.example;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        SessionFactory sf = new Configuration()
                .configure()
                .addAnnotatedClass(org.example.Laptop.class)
                .buildSessionFactory();

        Session session = sf.openSession();

//   Select * from laptop where ram=32 ->SQL
//        from Laptop where ram=32 -> HQL

        String brand = "Asus";

//        Query query = session.createQuery("from Laptop where brand like 'Asus' ");

        Query query = session.createQuery("select brand, model from Laptop where brand like ?1",Laptop.class);
        query.setParameter(1, brand);

//        List<Laptop> laptops = query.getResultList();
        List<Object[]> laptops = query.getResultList();

        for (Object[] data : laptops) {
            System.out.println((String) data[0] + " : " + (String) data[1]);
        }
//        Laptop l1=session.get(Laptop.class, 3);


        System.out.println(laptops);
        session.close();

        sf.close();


    }}




// MAPPING RELATIONSHIP

//
//        Laptop l1 = new Laptop();
//        l1.setLid(1);
//        l1.setBrand("Lenovo");
//        l1.setModel("IdeaSlimPad");
//        l1.setRam(16);
//
//        Laptop l2 = new Laptop();
//        l2.setLid(2);
//        l2.setBrand("Dell");
//        l2.setModel("G15");
//        l2.setRam(32);
//
//        Laptop l3 = new Laptop();
//        l3.setLid(3);
//        l3.setBrand("Apple");
//        l3.setModel("MacBook Pro");
//        l3.setRam(8);
//
//
//        // ---------------- ALIENS ----------------
//
//        Alien a1 = new Alien();
//        a1.setAid(101);
//        a1.setAname("Saurabh");
//        a1.setTech("Java");
//
//        Alien a2 = new Alien();
//        a2.setAid(102);
//        a2.setAname("Shubham");
//        a2.setTech(".Net");
//
//        Alien a3 = new Alien();
//        a3.setAid(103);
//        a3.setAname("Harsh");
//        a3.setTech("Python");
//
//
//        // ---------------- RELATIONSHIP ----------------
//
//        a1.setLaptops(Arrays.asList(l1, l2));
//        a2.setLaptops(Arrays.asList(l2, l3));
//        a3.setLaptops(Arrays.asList(l1));
//
//        l1.setAliens(Arrays.asList(a1, a3));
//        l2.setAliens(Arrays.asList(a1, a2));
//        l3.setAliens(Arrays.asList(a2));
//
//
//        // ---------------- HIBERNATE ----------------
//
//        SessionFactory sf = new Configuration()
//                .configure()
//                .addAnnotatedClass(Alien.class)
//                .addAnnotatedClass(Laptop.class)
//                .buildSessionFactory();
//
//        Session session = sf.openSession();
//
//        Transaction transaction = session.beginTransaction();
//
//        session.persist(l1);
//        session.persist(l2);
//        session.persist(l3);
//
//        session.persist(a1);
//        session.persist(a2);
//        session.persist(a3);
//
//        transaction.commit();
//
//
//        // ---------------- FETCH ----------------
//
//        Alien a5 = session.find(Alien.class, 102);
//
//        System.out.println(a5);
//
//
//        session.close();
//        sf.close();
//    }
//}

















//        Student s1 = new Student();
//        s1.setRollNo(106);
//        s1.setsName("Shubham");
//        s1.setsAge(27);
//
////
////        s1.setRollNo(101);
////        s1.setsName("Saurabh");
////        s1.setsAge(24);
//////
////        s1.setRollNo(105);
////        s1.setsName("Gaurav");
////        s1.setsAge(22);
//
//        Configuration cfg = new Configuration().configure();
//        cfg.addAnnotatedClass(org.example.Student.class);
//        cfg.configure("hibernate.cfg.xml");
//        SessionFactory sf = cfg.buildSessionFactory();
//        Session session = sf.openSession();
//
////        s1=session.find(Student.class,101);
//        Transaction transaction = session.beginTransaction();
//
////        session.persist(s1)
//        session.merge(s1);
//        transaction.commit();
//        System.out.println(s1);
//        session.close();
//        sf.close();
//
//    }
//
//