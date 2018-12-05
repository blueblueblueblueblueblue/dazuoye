package com.nuaa.ssm.domain;

import java.util.Date;

/***
 * 车辆信息
 * */
public class Shi {
    private int id ;
    private String vehnum;
    private String dept;
    private String zzr;
    private Date sgdate;
    private String sgplace;
    private String sgjg;
    private String zrrd;
    private String cfqk;
    private String pcqk;
    private String nbcf;
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

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getZzr() {
        return zzr;
    }

    public void setZzr(String zzr) {
        this.zzr = zzr;
    }

    public Date getSgdate() {
        return sgdate;
    }

    public void setSgdate(Date sgdate) {
        this.sgdate = sgdate;
    }

    public String getSgplace() {
        return sgplace;
    }

    public void setSgplace(String sgplace) {
        this.sgplace = sgplace;
    }

    public String getSgjg() {
        return sgjg;
    }

    public void setSgjg(String sgjg) {
        this.sgjg = sgjg;
    }

    public String getZrrd() {
        return zrrd;
    }

    public void setZrrd(String zrrd) {
        this.zrrd = zrrd;
    }

    public String getCfqk() {
        return cfqk;
    }

    public void setCfqk(String cfqk) {
        this.cfqk = cfqk;
    }

    public String getPcqk() {
        return pcqk;
    }

    public void setPcqk(String pcqk) {
        this.pcqk = pcqk;
    }

    public String getNbcf() {
        return nbcf;
    }

    public void setNbcf(String nbcf) {
        this.nbcf = nbcf;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
