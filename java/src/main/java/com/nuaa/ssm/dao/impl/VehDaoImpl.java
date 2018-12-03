package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Veh;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 */
@Repository("vehDao")
public class VehDaoImpl extends SqlSessionDaoSupport implements BaseDao<Veh> {

    public void insert(Veh veh) {

        getSqlSession().insert("veh.insert",veh);
    }

    public void update(Veh veh) {
        getSqlSession().update("veh.update", veh);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("veh.delete", id);
    }

    public Veh selectOne(Integer id) {
        return getSqlSession().selectOne("veh.selectOne",id) ;
    }

    public List<Veh> selectAll() {
        return getSqlSession().selectList("veh.selectAll");
    }

    public List<Veh> selectPage(int offset, int len) {
        return getSqlSession().selectList("veh.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("veh.selectCount");
    }

    public int deleteByVehnum(String vehnum){
        return getSqlSession().delete("veh.delete",vehnum);
    }

    public List<Veh> selectWaitedApPage(int offset, int len) {
        return null;
    }

    public int selectWaitedApCount() {
        return 0;
    }

    public void updateTy(int id) {

    }

    public void updateNty(int id) {

    }

    public int selectSpedCount() {
        return 0;
    }

    public List<Veh> selectSpedPage(int offset, int len) {
        return null;
    }

    public List<Veh> selectWaitedArrPage(int offset, int len) {
        return null;
    }

    public int selectWaitedArrCount() {
        return 0;
    }

    public List<Veh> selectWaitedArr(int offset, int len) {
        return null;
    }


}
