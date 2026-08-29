//package com.example.demo;
//
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpSession;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//@Controller
//public class HomeController {
//
//    @RequestMapping("/")
//    public String home() {
//        return "index";
//    }
//
//
//    @RequestMapping(value = "add", method = RequestMethod.POST)
//      public String add(@RequestMapping("num1"), @RequestMapping("num2"), Model model) {
////    public String add(HttpServletRequest req, HttpSession session) {
//
//
//
////        int num1 = Integer.parseInt(req.getParameter("num1"));
////        int num2 = Integer.parseInt(req.getParameter("num2"));
//
//        int result = num1 + num2;
//
//        model.addAttribute("res",result);
//
//        return "result";
//    }
//}
//



package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "index";
    }

    @PostMapping("add")
    public String add(
            @ModelAttribute Numbers numbers,
            Model model) {

        int result = numbers.getNum1() + numbers.getNum2();

        model.addAttribute("result", result);

        return "result";
    }
}
