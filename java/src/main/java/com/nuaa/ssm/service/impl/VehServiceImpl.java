package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.dao.impl.VehDaoImpl;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.service.UserService;
import com.nuaa.ssm.service.VehService;
import com.nuaa.ssm.util.CheckLimit;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 *
 */
@Service("vehService")
public class VehServiceImpl extends BaseServiceImpl<Veh> implements VehService {


    @Resource(name="vehDao")
    public void setDao(BaseDao<Veh> dao) {
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

    public Veh selectByvehversion(String vehversion) {
        return null;
    }

    public int[] selectArranged(){
        int []arranged = new int[3];
        List<Veh> list = selectAll();

        for (Veh veh:list){
            if (veh.getSfap()==1)
            {
                if (veh.getVehdif().equals("小轿车"))
                {
                    arranged[0]++;
                }
                else if (veh.getVehdif().equals("中型客车")){
                    arranged[1]++;
                }
                else {
                    arranged[2]++;
                }
            }
        }
        return arranged;
    }

    public int [] selectLimit(){

        CheckLimit ck = new CheckLimit();
        int []limit = new int [3];
        List<Veh> list = selectAll();
        for (Veh veh:list){
            String s = veh.getVehnum();
            if (ck.check(s)){
                if (veh.getVehdif().equals("小轿车"))
                {
                    limit[0]++;
                }
                else if (veh.getVehdif().equals("中型客车")){
                    limit[1]++;
                }
                else {
                    limit[2]++;
                }
            }

        }
        return limit;
    }

    public int [] selectEnable(){
        int [] enable = new int[3];
        CheckLimit ck = new CheckLimit();
        List<Veh> list = selectAll();;
        for (Veh veh : list){
            if (!ck.check(veh.getVehnum())&&veh.getSfap()==0){

                    if (veh.getVehdif().equals("小轿车"))
                    {
                        enable[0]++;
                    }
                    else if (veh.getVehdif().equals("中型客车")){
                        enable[1]++;
                    }
                    else {
                        enable[2]++;
                    }

            }
        }
        return enable;
    }

    public int deleteByVehnum(String vehnum) {
        return getDao().deleteByVehnum(vehnum);
    }

}