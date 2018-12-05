package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycap;

import com.nuaa.ssm.service.YcapService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 */
@Service("ycapService")
public class YcapServiceImpl extends BaseServiceImpl<Ycap> implements YcapService {
    @Resource(name="ycapDao")
    public void setDao(BaseDao<Ycap> dao) {
        super.setDao(dao);
    }

    /**
     * 长事务测试
     */
    public void longTx(){
        //插入item


        this.delete(1);
    }

    public void save(User u) {

    }
    public User selectByuname(String username){

        return null;
    }

    public List<String> selectUnable(Date date) {
        List<Ycap> list = selectAll();
        List<String> list1 = new ArrayList<String>();
        for (Ycap ycap:list){
             if (date.getTime()>=ycap.getKssj().getTime()&&date.getTime()<=ycap.getJssj().getTime()){
                    list1.add(ycap.getVehnum());
             }
        }
        return list1;
    }


    public void update(Ycap ycap) {

    }
}