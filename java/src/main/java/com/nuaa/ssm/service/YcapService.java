package com.nuaa.ssm.service;

import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Ycap;

import java.util.Date;
import java.util.List;

/**
 *
 */
public interface YcapService extends BaseService<Ycap> {
    public void longTx();

    public void save(User u);

    public List<Ycap> selectPage(int offset, int len);

    public User selectByuname(String username);

    public List<Ycap> selectUnable(Date date);

}
