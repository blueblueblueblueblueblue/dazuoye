package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Driver;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 */
@Repository("driverDao")
public class DriverDaoImpl extends SqlSessionDaoSupport implements BaseDao<Driver> {

    public void insert(Driver user) {
        getSqlSession().insert("users.insert",user);
    }

    public void update(Driver user) {
        getSqlSession().update("users.update", user);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("users.delete", id);
    }

    public Driver selectOne(Integer id) {
        return getSqlSession().selectOne("users.selectOne",id) ;
    }

    public List<Driver> selectAll() {
        return getSqlSession().selectList("driver.selectAll");
    }

    public List<Driver> selectPage(int offset, int len) {
        return getSqlSession().selectList("users.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("users.selectCount");
    }

    public int deleteByVehnum(String vehnum) {
        return 0;
    }

    public List<Driver> selectWaitedApPage(int offset, int len) {
        return null;
    }

    public int selectWaitedApCount() {
        return 0;
    }

    public void updateTy(int id) {

    }

    public void updateNty(int id) {

    }

    public void updateArr(int id) {

    }

    public int selectSpedCount() {
        return 0;
    }

    public List<Driver> selectSpedPage(int offset, int len) {
        return null;
    }

    public List<Driver> selectWaitedArrPage(int offset, int len) {
        return null;
    }

    public int selectWaitedArrCount() {
        return 0;
    }

    public List<Driver> selectArrangedPage(int offset, int len) {
        return null;
    }

    public int selectArrangedCount() {
        return 0;
    }

    public int selectByNumCount(Map<String, Object> map) {
        return 0;
    }

    public List<Veh> selectByNum(Map<String, Object> map) {
        return null;
    }

    public List<Ycsq> selectByDate(Map<String, Object> map) {
        return null;
    }

    public int selectByDateNum(Map<String, Object> map) {
        return 0;
    }


    public List<User> selectWaitedArr(int offset, int len) {
        return null;
    }
}
