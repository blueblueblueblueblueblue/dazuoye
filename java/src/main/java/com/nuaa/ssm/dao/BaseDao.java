package com.nuaa.ssm.dao;

import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;

import java.util.List;
import java.util.Map;

/**
 * 基本Dao接口
 */
public interface BaseDao<T> {
    public void insert(T t);

    public void update(T t);

    public void delete(Integer id);

    public T selectOne(Integer id);

    public List<T> selectAll();

    public List<T> selectPage(int offset,int len);

    public int selectCount();

    public int deleteByVehnum(String vehnum);

    public List<T> selectWaitedApPage(int offset,int len);

    public int selectWaitedApCount();

    public void updateTy(int id);

    public void updateNty(int id);

    public void updateArr(int id);

    public int selectSpedCount();

    public List<T> selectSpedPage(int offset,int len);

    public List<T> selectWaitedArrPage(int offset,int len);

    public int selectWaitedArrCount();

    public List<T> selectArrangedPage(int offset,int len);

    public int selectArrangedCount();

    public int selectByNumCount(Map<String,Object> map);

    public List<Veh> selectByNum(Map<String,Object> map);

    public List<Ycsq> selectByDate(Map<String,Object> map);

    public int selectByDateNum(Map<String,Object> map);
}
