package com.nuaa.ssm.web.controller;

import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.service.UserService;
import com.nuaa.ssm.service.VehService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.alibaba.fastjson.*;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 */
@Controller
public class VehController {
    private Logger logger = LoggerFactory.getLogger(VehController.class);

    @Resource(name="vehService")
    private VehService vehServices ;

    @RequestMapping("/vehInfo")
    public void vehinfo(String currentpage,String limit, HttpServletResponse response, Model model, HttpSession session) throws IOException {
        int page = Integer.parseInt(currentpage);
        logger.info("currentpage"+currentpage);
        int limint = Integer.parseInt(limit);
        int offint = (page-1)*limint;
        int count = vehServices.selectCount();
        int pagecount = count/limint;
        if ((count%limint)>0){
            pagecount++;
        }
        List<Veh> list = new ArrayList<Veh>();
        list=vehServices.selectPage(offint,limint);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        for (Veh veh:list){
            JSONObject vehli = new JSONObject();
            vehli.put("vehnum",veh.getVehnum());
            vehli.put("vehversion",veh.getVehversion());
            vehli.put("baocount",veh.getBaocount());
            vehli.put("weicount",veh.getWeicount());
            vehli.put("shicount",veh.getShicount());
            vehli.put("repcount",veh.getRepcount());
            vehList.add(vehli);
        }
        json.put("vehlist",vehList);
        json.put("status","true");
        json.put("pagecount",pagecount);
        writer.print(json);
        writer.flush();
        writer.close();
    }

    @RequestMapping("/searchByNum")
    public void searchByNum(String currentpage,String limit,String vehnum,String vehversion,HttpServletResponse response){
        int page = Integer.parseInt(currentpage);
        logger.info("currentpage"+currentpage);
        int limint = Integer.parseInt(limit);
        int offint = (page-1)*limint;
        Map<String,Object> map = new HashMap<String, Object>();
        Map<String,Object> map1 = new HashMap<String, Object>();
        map.put("vehnum",'%'+vehnum+'%');
        map.put("vehversion",'%'+vehversion+'%');
        map.put("offset",Integer.parseInt(currentpage));
        map.put("limit",limint);
        map1.put("vehnum",'%'+vehnum+'%');
        map1.put("vehversion",'%'+vehnum+'%');
        int count = vehServices.selectByNumCount(map1);
        int pagecount = count/limint;
        if ((count%limint)>0){
            pagecount++;
        }
        List<Veh> list = new ArrayList<Veh>();
        list=vehServices.selectByNum(map);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        for (Veh veh:list){
            JSONObject vehli = new JSONObject();
            vehli.put("vehnum",veh.getVehnum());
            vehli.put("vehversion",veh.getVehversion());
            vehli.put("baocount",veh.getBaocount());
            vehli.put("weicount",veh.getWeicount());
            vehli.put("shicount",veh.getShicount());
            vehli.put("repcount",veh.getRepcount());
            vehList.add(vehli);
        }
        json.put("vehlist",vehList);
        json.put("status","true");
        json.put("pagecount",pagecount);
        writer.print(json);
        writer.flush();
        writer.close();
    }

    @RequestMapping("/addVeh")
    public void addVeh(String ruleForm1,HttpServletRequest request, HttpServletResponse response) throws IOException {

        //System.out.println(ruleForm1);
        Veh vehjson = JSON.parseObject(ruleForm1,Veh.class);
        logger.info("vehnum:"+vehjson.getVehnum());
        vehServices.insert(vehjson);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        json.put("status","true");
        writer.print(json);
        writer.flush();
        writer.close();

    }

    @RequestMapping("/updateVeh")
    public void updateVeh(String ruleForm,HttpServletRequest request, HttpServletResponse response) throws IOException {

        Veh vehjson = JSON.parseObject(ruleForm,Veh.class);
        System.out.println(vehjson.getVehversion());
        vehServices.update(vehjson);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        json.put("status","true");
        writer.print(json);
        writer.flush();
        writer.close();

    }


    @RequestMapping("/deleteVeh")
    public void deleteVeh(String vehnum,HttpServletRequest request, HttpServletResponse response) throws IOException {

        System.out.println(vehnum);
        vehServices.deleteByVehnum(vehnum);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        json.put("status","true");
        writer.print(json);
        writer.flush();
        writer.close();

    }

    @RequestMapping("/getVehNum")
    public void getArrangedNum(HttpServletRequest request,HttpServletResponse response){
        int []arr  =new int [3];
        int []limit = new int[3];
        int []enable = new int[3];
        arr = vehServices.selectArranged();
        limit = vehServices.selectLimit();
        enable = vehServices.selectEnable();
        JSONObject reJson = new JSONObject();
        reJson.put("arrxiaonum",arr[0]);
        reJson.put("arrzhongnum",arr[1]);
        reJson.put("arrdanum",arr[2]);
        reJson.put("limitxiaonum",limit[0]);
        reJson.put("limitzhongnum",limit[1]);
        reJson.put("limitdanum",limit[2]);
        reJson.put("enablexiaonum",enable[0]);
        reJson.put("enablezhongnum",enable[1]);
        reJson.put("enabledanum",enable[2]);
        reJson.put("status","true");
        response.setCharacterEncoding("utf-8");
        PrintWriter writer = null;
        response.setContentType("application/json; charset=utf-8");
        try {
            writer = response.getWriter();
            writer.print(reJson);
        } catch (IOException e) {
            logger.error(""+e.getMessage());
            e.printStackTrace();
        }finally {
            writer.flush();
            writer.close();
        }

    }







}
