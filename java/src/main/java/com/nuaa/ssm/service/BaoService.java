package com.nuaa.ssm.service;

import com.nuaa.ssm.domain.Bao;
import com.nuaa.ssm.domain.Veh;

import java.util.List;

/**
 *
 */
public interface BaoService extends BaseService<Bao> {


    public List<Bao> selectPage(int offset, int len);

    public Veh selectByvehversion(String vehversion);

    public int deleteByVehnum(String vehnum);
}
