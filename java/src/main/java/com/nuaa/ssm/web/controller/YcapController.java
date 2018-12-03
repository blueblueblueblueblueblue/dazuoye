package com.nuaa.ssm.web.controller;

import com.alibaba.fastjson.JSONObject;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Ycap;
import com.nuaa.ssm.service.UserService;
import com.nuaa.ssm.service.YcapService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;

/**
 */
@Controller
public class YcapController {

    @Resource(name="ycapService")
    private YcapService ycapService ;

    @RequestMapping("/unable")
    public void selectUnable(HttpServletResponse response, HttpServletRequest request){
        List<Ycap> list = ycapService.selectUnable(new Date());

    }

}
