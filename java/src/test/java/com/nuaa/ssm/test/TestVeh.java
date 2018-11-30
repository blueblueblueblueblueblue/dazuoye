package com.nuaa.ssm.test;

import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.service.VehService;
import com.nuaa.ssm.service.impl.VehServiceImpl;
import org.junit.Test;

public class TestVeh {

    @Test
    public void testVeh(){
        VehService us = new VehServiceImpl();

        us.selectAll();

    }
}
