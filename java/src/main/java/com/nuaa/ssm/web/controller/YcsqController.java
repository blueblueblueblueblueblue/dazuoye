package com.nuaa.ssm.web.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import com.nuaa.ssm.service.YcsqService;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
public class YcsqController {
    @Resource(name="ycsqService")
    private YcsqService ycsqService;

    @RequestMapping("/ycsqInfo")
    public void ycsqInfo(String currentpage, String limit, HttpServletResponse response, Model model, HttpSession session) throws IOException {
        int page = Integer.parseInt(currentpage);

        int limint = Integer.parseInt(limit);
        int offint = (page-1)*limint;
        int count = ycsqService.selectCount();
        int pagecount = count/limint;
        if ((count%limint)>0){
            pagecount++;
        }
        List<Ycsq> list = new ArrayList<Ycsq>();
        list=ycsqService.selectPage(offint,limint);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        for (Ycsq ycsq:list){
            JSONObject ycsqli = new JSONObject();
            ycsqli.put("ycsj",ycsq.getYcsj());
            ycsqli.put("ycr",ycsq.getYcr());
            ycsqli.put("ycsy",ycsq.getYcsy());
            ycsqli.put("ycrs",ycsq.getCzrs());
            ycsqli.put("mdd",ycsq.getMdd());
            ycsqli.put("sfxysj",ycsq.getSfxysj());
            ycsqli.put("csspr",ycsq.getCsspr());
            ycsqli.put("apqk",ycsq.getApqk());
            ycsqli.put("sqsj", new SimpleDateFormat("yyyy-MM-dd").format(ycsq.getSqsj()));
            ycsqli.put("status",ycsq.getStatus());
            vehList.add(ycsqli);
        }
        json.put("ycsqlist",vehList);
        json.put("status","true");
        json.put("pagecount",pagecount);
        writer.print(json);
        writer.flush();
        writer.close();
    }
}
