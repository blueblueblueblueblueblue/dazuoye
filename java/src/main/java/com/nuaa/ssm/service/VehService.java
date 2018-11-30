package com.nuaa.ssm.service;

import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;

import java.util.List;

/**
 *
 */
public interface VehService extends BaseService<Veh> {
    public void longTx();

    public void save(Veh veh);

    public List<Veh> selectPage(int offset, int len);

    public Veh selectByvehversion(String vehversion);

    public int deleteByVehnum(String vehnum);

    public int [] selectArranged();

    public int [] selectLimit();

    public int [] selectEnable();
}
