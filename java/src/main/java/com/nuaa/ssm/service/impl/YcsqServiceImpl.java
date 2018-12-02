package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import com.nuaa.ssm.service.YcsqService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service("ycsqService")
public class YcsqServiceImpl extends BaseServiceImpl<Ycsq> implements YcsqService {
    @Resource(name="ycsqDao")
    public void setDao(BaseDao<Ycsq> dao) {
        super.setDao(dao);
    }

}
