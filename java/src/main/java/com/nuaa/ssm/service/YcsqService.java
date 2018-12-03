package com.nuaa.ssm.service;

import com.nuaa.ssm.domain.Ycsq;

import java.util.List;

public interface YcsqService extends BaseService<Ycsq> {
    public List<Ycsq> selectPage(int offset, int len) ;

    public List<Ycsq> selectWaitedSp();

    public List<Ycsq> selectWaitedApPage(int offset,int len);

    public int selectWaitedApCount();

    public void updateTy(int id);

    public void updateNty(int id);

    public int selectSpedCount();

    public List<Ycsq> selectSpedPage(int offset,int len);

    public int selectWaitedArrCount();

    public List<Ycsq> selectWaitedArrPage(int offset,int len);
}
