package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Bao;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.service.BaoService;
import com.nuaa.ssm.service.VehService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Service("baoService")
public class BaoServiceImpl extends BaseServiceImpl<Bao> implements BaoService {




    @Resource(name="baoDao")
    public void setDao(BaseDao<Bao> dao) {
        super.setDao(dao);
    }

    /**
     * 长事务测试
     */
    public void longTx(){
        //插入item


        this.delete(1);
    }

    public void save(Veh veh) {

    }
    public Veh selectByvehversion(String vehversion){

        return null;
    }

    public int deleteByVehnum(String vehnum) {
        return getDao().deleteByVehnum(vehnum);
    }

    public List<Bao> selectByVehnum(String vehnum) {
        List<Bao> list = selectAll();
        List<Bao> list1 = new ArrayList<Bao>();
        for (Bao bao:list){
            if (bao.getVehnum().equals(vehnum)){
                list1.add(bao);
            }
        }
        return list1;
    }

}