package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Driver;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.service.DriverService;
import com.nuaa.ssm.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 *
 */
@Service("driverService")
public class DriverServiceImpl extends BaseServiceImpl<Driver> implements DriverService {




    @Resource(name="driverDao")
    public void setDao(BaseDao<Driver> dao) {
        super.setDao(dao);
    }


}