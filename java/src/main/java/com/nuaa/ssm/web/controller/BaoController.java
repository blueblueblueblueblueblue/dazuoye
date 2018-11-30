package com.nuaa.ssm.web.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.nuaa.ssm.domain.Bao;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.service.BaoService;
import com.nuaa.ssm.service.VehService;
import com.nuaa.ssm.service.impl.BaoServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

/**
 */
@Controller
public class BaoController {

    @Resource(name="baoService")
    private BaoService baoServices ;

    @RequestMapping("/baoInfo")
    public void baoinfo(String currentpage,String limit, HttpServletResponse response, Model model, HttpSession session) throws IOException {
        int page = Integer.parseInt(currentpage);

        int limint = Integer.parseInt(limit);
        int offint = (page-1)*limint;
        int count = baoServices.selectCount();
        int pagecount = count/limint;
        if ((count%limint)>0){
            pagecount++;
        }
        List<Bao> list = new ArrayList<Bao>();
        list=baoServices.selectPage(offint,limint);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        JSONArray vehList = new JSONArray();
        for (Bao bao:list){
            JSONObject vehli = new JSONObject();
            vehli.put("vehnum",bao.getVehnum());
            vehli.put("baodate",bao.getBaodate());
            vehli.put("supplier",bao.getSupplier());
            vehli.put("baotype",bao.getBaotype());
            vehli.put("baoxm",bao.getBaoxm());
            vehli.put("cost",bao.getCost());
            vehli.put("travel",bao.getTravel());
            vehli.put("remarks",bao.getRemarks());
            vehList.add(vehli);
        }
        json.put("baolist",vehList);
        json.put("status","true");
        json.put("pagecount",pagecount);
        writer.print(json);
        writer.flush();
        writer.close();
    }

    @RequestMapping("/addBao")
    public void addVeh(String ruleForm1,HttpServletRequest request, HttpServletResponse response) throws IOException {

        //System.out.println(ruleForm1);
        Bao vehjson = JSON.parseObject(ruleForm1,Bao.class);
        baoServices.insert(vehjson);
        response.setCharacterEncoding("utf-8");
        response.setContentType("application/json; charset=utf-8");
        PrintWriter writer = response.getWriter();
        JSONObject json = new JSONObject();
        json.put("status","true");
        writer.print(json);
        writer.flush();
        writer.close();

    }





   





}
