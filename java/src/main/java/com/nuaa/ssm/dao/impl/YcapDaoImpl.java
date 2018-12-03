package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.domain.Ycap;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    public List<User> selectWaitedArr(int offset, int len) {
        return null;
    }
}
