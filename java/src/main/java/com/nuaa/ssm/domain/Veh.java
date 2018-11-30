package com.nuaa.ssm.domain;

import java.util.Date;
/***
 * 车辆信息
 * */
public class Veh {
    private int id ;
    private String vehnum;
    private String vehversion;
    private String enginenum;
    private String framenum;
    private String gasvol;
    private int seatsnum;
    private double weight;
    private String color;
    private Date purdate;
    private String vehdif;
    private String vehusage;
    private String policynum;
    private String repaircardnum;
    private String oilcardnum;
    private int sfap;

    public int getSfap() {
        return sfap;
    }

    public void setSfap(int sfap) {
        this.sfap = sfap;
    }

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

    public String getVehversion() {
        return vehversion;
    }

    public void setVehversion(String vehversion) {
        this.vehversion = vehversion;
    }

    public String getEnginenum() {
        return enginenum;
    }

    public void setEnginenum(String enginenum) {
        this.enginenum = enginenum;
    }

    public String getFramenum() {
        return framenum;
    }

    public void setFramenum(String framenum) {
        this.framenum = framenum;
    }

    public String getGasvol() {
        return gasvol;
    }

    public void setGasvol(String gasvol) {
        this.gasvol = gasvol;
    }

    public int getSeatsnum() {
        return seatsnum;
    }

    public void setSeatsnum(int seatsnum) {
        this.seatsnum = seatsnum;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Date getPurdate() {
        return purdate;
    }

    public void setPurdate(Date purdate) {
        this.purdate = purdate;
    }

    public String getVehdif() {
        return vehdif;
    }

    public void setVehdif(String vehdif) {
        this.vehdif = vehdif;
    }

    public String getVehusage() {
        return vehusage;
    }

    public void setVehusage(String vehusage) {
        this.vehusage = vehusage;
    }

    public String getPolicynum() {
        return policynum;
    }

    public void setPolicynum(String policynum) {
        this.policynum = policynum;
    }

    public String getRepaircardnum() {
        return repaircardnum;
    }

    public void setRepaircardnum(String repaircardnum) {
        this.repaircardnum = repaircardnum;
    }

    public String getOilcardnum() {
        return oilcardnum;
    }

    public void setOilcardnum(String oilcardnum) {
        this.oilcardnum = oilcardnum;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
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

    public String getIsscrap() {
        return isscrap;
    }

    public void setIsscrap(String isscrap) {
        this.isscrap = isscrap;
    }

    public String getOildif() {
        return oildif;
    }

    public void setOildif(String oildif) {
        this.oildif = oildif;
    }

    public int getSfzk() {
        return sfzk;
    }

    public void setSfzk(int sfzk) {
        this.sfzk = sfzk;
    }

    public int getBaocount() {
        return baocount;
    }

    public void setBaocount(int baocount) {
        this.baocount = baocount;
    }

    public int getWeicount() {
        return weicount;
    }

    public void setWeicount(int weicount) {
        this.weicount = weicount;
    }

    public int getRepcount() {
        return repcount;
    }

    public void setRepcount(int repcount) {
        this.repcount = repcount;
    }

    public int getShicount() {
        return shicount;
    }

    public void setShicount(int shicount) {
        this.shicount = shicount;
    }

    private String supplier;
    private double travel;
    private String remarks;
    private String isscrap;
    private String oildif;
    private int sfzk;
    private int baocount;
    private int weicount;
    private int repcount;
    private int shicount;
}
