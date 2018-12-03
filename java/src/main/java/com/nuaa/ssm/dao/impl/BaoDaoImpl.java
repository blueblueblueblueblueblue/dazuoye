package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Bao;
import com.nuaa.ssm.domain.Veh;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 */
@Repository()
public class BaoDaoImpl extends SqlSessionDaoSupport implements BaseDao<Bao> {

    public void insert(Bao bao) {

        getSqlSession().insert("bao.insert",bao);
    }

    public void update(Bao bao) {
        getSqlSession().update("bao.update", bao);
    }

    public void delete(Integer id ) {
        getSqlSession().delete("bao.delete", id);
    }

    public Bao selectOne(Integer id) {
        return getSqlSession().selectOne("bao.selectOne",id) ;
    }

    public List<Bao> selectAll() {
        return getSqlSession().selectList("bao.selectAll");
    }

    public List<Bao> selectPage(int offset, int len) {
        return getSqlSession().selectList("bao.selectPage",new RowBounds(offset, len));
    }

    public int selectCount() {
        return getSqlSession().selectOne("bao.selectCount");
    }

    public int deleteByVehnum(String vehnum){
        return getSqlSession().delete("bao.deleteAll",vehnum);
    }

    public List<Bao> selectWaitedApPage(int offset, int len) {
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

    public List<Bao> selectSpedPage(int offset, int len) {
        return null;
    }

    public List<Bao> selectWaitedArrPage(int offset, int len) {
        return null;
    }

    public int selectWaitedArrCount() {
        return 0;
    }

    public List<Bao> selectWaitedArr(int offset, int len) {
        return null;
    }


}
