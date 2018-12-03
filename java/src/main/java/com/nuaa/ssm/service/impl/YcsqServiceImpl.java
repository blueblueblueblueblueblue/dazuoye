package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Ycsq;
import com.nuaa.ssm.service.YcsqService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
@Service("ycsqService")
public class YcsqServiceImpl extends BaseServiceImpl<Ycsq> implements YcsqService {
    @Resource(name="ycsqDao")
    public void setDao(BaseDao<Ycsq> dao) {
        super.setDao(dao);
    }



    public List<Ycsq> selectWaitedSp() {
        List<Ycsq> list = new ArrayList<Ycsq>();
        List<Ycsq> list1 = new ArrayList<Ycsq>();
        list = selectAll();
        for (Ycsq ycsq :list){
            if (ycsq.getSpstatus()==0){
                list1.add(ycsq);
            }
        }
        return list1;
    }

    public List<Ycsq> selectWaitedApPage(int offset,int len){
        return getDao().selectWaitedApPage(offset,len);
    }

    public int selectWaitedApCount() {
        return getDao().selectWaitedApCount();
    }

    public void updateTy(int id) {
        getDao().updateTy(id);
    }

    public void updateNty(int id) {
        getDao().updateNty(id);
    }

    public int selectSpedCount() {
       return getDao().selectSpedCount();
    }
    public List<Ycsq> selectSpedPage(int offset,int len){
        return getDao().selectSpedPage(offset,len);
    }

    public int selectWaitedArrCount() {
        return getDao().selectWaitedArrCount();
    }

    public List<Ycsq> selectWaitedArrPage(int offset,int len) {
        return getDao().selectWaitedArrPage(offset,len);
    }


}
