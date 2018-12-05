package com.nuaa.ssm.web.controller;

import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.service.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.alibaba.fastjson.*;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 */
@Controller
public class UserController {

    @Resource(name="userService")
    private UserService us ;

    @RequestMapping("/loginCheck")
    public void login(String username, String password, HttpServletResponse response, Model model, HttpSession session) throws IOException {
        System.out.println(username+" "+password);

        int flag = 0;
        int loginId ;

        User user = us.selectByuname(username);
        if (user!=null){
            System.out.println(user.getPassword());
            if (user.getPassword().equals(password)){
                flag=1;
                session.setAttribute("username",user.getUsername());
            }
        }
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();

        if (flag==0){


        json.put("status","false");

        }
        else {
            json.put("status","true");
            json.put("username",session.getAttribute("username"));
            json.put("userrole",'3');
        }
        writer.print(json);
        writer.flush();
        writer.close();

    }


}
