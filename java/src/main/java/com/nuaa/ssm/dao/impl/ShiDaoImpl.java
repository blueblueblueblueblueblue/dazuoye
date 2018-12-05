package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Bao;
import com.nuaa.ssm.domain.Shi;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 */
@Repository()
public class ShiDaoImpl extends SqlSessionDaoSupport implements BaseDao<Shi> {

    public void insert(Shi bao) {

        getSqlSession().insert("bao.insert",bao);
    }

    public void update(Shi bao) {
        getSqlSession().update("bao.update", bao);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("bao.delete", id);
    }

    public Shi selectOne(Integer id) {
        return getSqlSession().selectOne("bao.selectOne",id) ;
    }

    public List<Shi> selectAll() {
        return getSqlSession().selectList("bao.selectAll");
    }

    public List<Shi> selectPage(int offset, int len) {
        return getSqlSession().selectList("bao.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("bao.selectCount");
    }

    public int deleteByVehnum(String vehnum){
        return getSqlSession().delete("bao.deleteAll",vehnum);
    }

    public List<Shi> selectWaitedApPage(int offset, int len) {
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

    public List<Shi> selectSpedPage(int offset, int len) {
        return null;
    }

    public List<Shi> selectWaitedArrPage(int offset, int len) {
        return null;
    }

    public int selectWaitedArrCount() {
        return 0;
    }

    public List<Shi> selectArrangedPage(int offset, int len) {
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


    public List<Bao> selectWaitedArr(int offset, int len) {
        return null;
    }


}
