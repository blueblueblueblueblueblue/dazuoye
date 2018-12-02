package com.nuaa.ssm.service;

import com.nuaa.ssm.domain.Ycsq;

import java.util.List;

public interface YcsqService extends BaseService<Ycsq> {
    public List<Ycsq> selectPage(int offset, int len) ;
}
