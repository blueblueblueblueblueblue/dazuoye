package com.nuaa.ssm.dao;

import java.util.List;

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

    public int selectSpedCount();

    public List<T> selectSpedPage(int offset,int len);

    public List<T> selectWaitedArrPage(int offset,int len);

    public int selectWaitedArrCount();
}
