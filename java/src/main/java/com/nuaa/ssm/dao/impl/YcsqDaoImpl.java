package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 */
@Repository("ycsqDao")
public class YcsqDaoImpl extends SqlSessionDaoSupport implements BaseDao<Ycsq> {

    public void insert(Ycsq ycsq) {

        getSqlSession().insert("ycsq.insert",ycsq);
    }

    public void update(Ycsq ycsq) {
        getSqlSession().update("ycsq.update", ycsq);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("ycsq.delete", id);
    }

    public Ycsq selectOne(Integer id) {
        return getSqlSession().selectOne("ycsq.selectOne",id) ;
    }

    public List<Ycsq> selectAll() {
        return getSqlSession().selectList("ycsq.selectAll");
    }

    public List<Ycsq> selectPage(int offset, int len) {
        return getSqlSession().selectList("ycsq.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("ycsq.selectCount");
    }

    public int deleteByVehnum(String vehnum){
        return getSqlSession().delete("ycsq.delete",vehnum);
    }

    public List<Ycsq> selectWaitedApPage(int offset, int len) {
        return getSqlSession().selectList("ycsq.selectWaitedApPage",new RowBounds(offset,len));
    }

    public int selectWaitedApCount() {
        return getSqlSession().selectOne("ycsq.selectWaitedApCount");
    }

    public void updateTy(int id) {
        getSqlSession().update("ycsq.update",id);
    }

    public void updateNty(int id) {
        getSqlSession().update("ycsq.updateNty",id);
    }

    public void updateArr(int id) {
        getSqlSession().update("ycsq.updateArr",id);
    }

    public int selectSpedCount() {
        return getSqlSession().selectOne("ycsq.selectSpedCount");
    }

    public List<Ycsq> selectSpedPage(int offset, int len) {
        return getSqlSession().selectList("ycsq.selectSpedPage",new RowBounds(offset,len));
    }

    public List<Ycsq> selectWaitedArrPage(int offset, int len) {
        return getSqlSession().selectList("ycsq.selectWaitedArrPage",new RowBounds(offset,len));
    }

    public int selectWaitedArrCount(){
        return getSqlSession().selectOne("ycsq.selectWaitedArrCount");
    }

    public List<Ycsq> selectArrangedPage(int offset, int len) {
        return getSqlSession().selectList("ycsq.selectArrangedPage",new RowBounds(offset,len));
    }

    public int selectArrangedCount() {
        return getSqlSession().selectOne("ycsq.selectArrangedCount");
    }

    public int selectByNumCount(Map<String, Object> map) {
        return 0;
    }

    public List<Veh> selectByNum(Map<String, Object> map) {
        return null;
    }

    public List<Ycsq> selectByDate(Map<String, Object> map) {
        return getSqlSession().selectList("ycsq.selectByDate",map);
    }

    public int selectByDateNum(Map<String, Object> map) {
        return getSqlSession().selectOne("ycsq.selectByDateCount",map);
    }


}
