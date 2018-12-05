package com.nuaa.ssm.web.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.nuaa.ssm.domain.*;
import com.nuaa.ssm.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 */
@Controller
public class YcapController {

    @Resource(name="ycapService")
    private YcapService ycapService ;

    @Resource(name = "vehService")
    private VehService vehService;

    @Resource(name = "ycsqService")
    private YcsqService ycsqService;

    @Resource(name = "driverService")
    private DriverService driverService;

    @RequestMapping("/apList")
    public void selectUnable(HttpServletResponse response, HttpServletRequest request){
        List<String> list = ycapService.selectUnable(new Date());
        List<String> list1 = vehService.selectLimitList();
        list.addAll(list1);
        List<Veh> list2 = vehService.selectAll();
        List<Driver> list3 = driverService.selectAll();
        Set<Veh> set = new HashSet<Veh>();
        for (Veh veh:list2){
                if (!list.contains(veh.getVehnum())){
                    set.add(veh);
            }
        }
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        JSONArray driverList = new JSONArray();
        for (Veh veh:set){
            JSONObject vehli = new JSONObject();
            vehli.put("vehnum",veh.getVehnum());
            vehli.put("vehversion",veh.getVehversion());
            vehli.put("seatsnum",veh.getSeatsnum());
            vehList.add(vehli);
        }
        for (Driver driver:list3){
            JSONObject driverLi = new JSONObject();
            driverLi.put("name",driver.getName());
            driverList.add(driverLi);
        }
        json.put("driverlist",driverList);
        json.put("vehlist",vehList);
        json.put("status","true");

        writer.print(json);
        writer.flush();
        writer.close();

    }

    @RequestMapping("/arrange")
    public void arrange(String driver,String sqid,String kssj,String jssj,String vehnum,HttpServletRequest request,HttpServletResponse response){
        Ycap ycap = new Ycap();
        ycap.setDriver(driver);
        ycap.setSqid(Integer.parseInt(sqid));
        try {
            ycap.setJssj(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(jssj));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        try {
            ycap.setKssj(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(kssj));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        ycap.setVehnum(vehnum);
        ycapService.insert(ycap);
        ycsqService.updateArr(Integer.parseInt(sqid));
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        JSONObject json = new JSONObject();
        json.put("status","true");

        writer.print(json);
        writer.flush();
        writer.close();

    }

    @RequestMapping("/arrangedInfo")
    public void arrangedInfo(String currentpage, String limit, HttpServletResponse response, Model model, HttpSession session) throws IOException {
        int page = Integer.parseInt(currentpage);
        List<Ycsq> list;
        int limint = Integer.parseInt(limit);
        int offint = (page-1)*limint;
        int count = ycsqService.selectArrangedCount();
        int pagecount = count/limint;
        if ((count%limint)>0){
            pagecount++;
        }
        list=ycsqService.selectArrangedPage(offint,limint);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        for (Ycsq ycsq:list){
            JSONObject ycsqli = new JSONObject();
            ycsqli.put("sqid",ycsq.getId());
            ycsqli.put("ycsj",new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(ycsq.getYcsj()));
            ycsqli.put("ycr",ycsq.getYcr());
            ycsqli.put("ycsy",ycsq.getYcsy());
            ycsqli.put("ycrs",ycsq.getCzrs());
            ycsqli.put("mdd",ycsq.getMdd());
            ycsqli.put("sfxysj",ycsq.getSfxysj());
            ycsqli.put("csspr",ycsq.getCsspr());
            ycsqli.put("apqk",ycsq.getApqk());
            ycsqli.put("sqsj", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(ycsq.getSqsj()));
            ycsqli.put("apstatus",ycsq.getApstatus());
            ycsqli.put("spstatus",ycsq.getSpstatus());
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
