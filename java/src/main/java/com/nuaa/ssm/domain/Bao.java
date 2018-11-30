package com.nuaa.ssm.domain;

import java.util.Date;

/***
 * 车辆信息
 * */
public class Bao {
    private int id ;
    private String vehnum;
    private String baodate;
    private String supplier;
    private String baotype;
    private String baoxm;
    private int cost;
    private double travel;
    private String remarks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVehnum() {
        return vehnum;
    }

    public void setVehnum(String vehnum) {
        this.vehnum = vehnum;
    }

    public String getBaodate() {
        return baodate;
    }

    public void setBaodate(String baodate) {
        this.baodate = baodate;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getBaotype() {
        return baotype;
    }

    public void setBaotype(String baotype) {
        this.baotype = baotype;
    }

    public String getBaoxm() {
        return baoxm;
    }

    public void setBaoxm(String baoxm) {
        this.baoxm = baoxm;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public double getTravel() {
        return travel;
    }

    public void setTravel(double travel) {
        this.travel = travel;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
