package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycap;
import com.nuaa.ssm.domain.Ycsq;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 */
@Repository("ycapDao")
public class YcapDaoImpl extends SqlSessionDaoSupport implements BaseDao<Ycap> {

    public void insert(Ycap user) {
        getSqlSession().insert("ap.insert",user);
    }

    public void update(Ycap user) {
        getSqlSession().update("ap.update", user);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("ap.delete", id);
    }

    public Ycap selectOne(Integer id) {
        return getSqlSession().selectOne("ap.selectOne",id) ;
    }

    public List<Ycap> selectAll() {
        return getSqlSession().selectList("ap.selectAll");
    }

    public List<Ycap> selectPage(int offset, int len) {
        return getSqlSession().selectList("ap.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("ap.selectCount");
    }

    public int deleteByVehnum(String vehnum) {
        return 0;
    }

    public List<Ycap> selectWaitedApPage(int offset, int len) {
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

    public List<Ycap> selectSpedPage(int offset, int len) {
        return null;
    }

    public List<Ycap> selectWaitedArrPage(int offset, int len) {
        return null;
    }

    public int selectWaitedArrCount() {
        return 0;
    }

    public List<Ycap> selectArrangedPage(int offset, int len) {
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
