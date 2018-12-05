package com.nuaa.ssm.domain;

import java.util.Date;

/***
 * 车辆信息
 * */
public class Rep {
    private int id ;
    private String vehnum;
    private Date weidate;
    private String reason;
    private String fycd;
    private String wxqkms;
    private String ghlbj;
    private String fy;
    private String supplier;
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

    public Date getWeidate() {
        return weidate;
    }

    public void setWeidate(Date weidate) {
        this.weidate = weidate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getFycd() {
        return fycd;
    }

    public void setFycd(String fycd) {
        this.fycd = fycd;
    }

    public String getWxqkms() {
        return wxqkms;
    }

    public void setWxqkms(String wxqkms) {
        this.wxqkms = wxqkms;
    }

    public String getGhlbj() {
        return ghlbj;
    }

    public void setGhlbj(String ghlbj) {
        this.ghlbj = ghlbj;
    }

    public String getFy() {
        return fy;
    }

    public void setFy(String fy) {
        this.fy = fy;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
