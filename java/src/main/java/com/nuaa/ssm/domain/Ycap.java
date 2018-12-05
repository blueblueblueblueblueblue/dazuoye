package com.nuaa.ssm.domain;

import java.util.Date;

public class Ycap {
    private String vehnum;
    private String driver;
    private int sqid;
    private Date kssj;
    private Date jssj;

    public String getVehnum() {
        return vehnum;
    }

    public int getSqid() {
        return sqid;
    }

    public void setSqid(int sqid) {
        this.sqid = sqid;
    }

    public void setVehnum(String vehnum) {
        this.vehnum = vehnum;
    }

    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }



    public Date getKssj() {
        return kssj;
    }

    public void setKssj(Date kssj) {
        this.kssj = kssj;
    }

    public Date getJssj() {
        return jssj;
    }

    public void setJssj(Date jssj) {
        this.jssj = jssj;
    }
}
