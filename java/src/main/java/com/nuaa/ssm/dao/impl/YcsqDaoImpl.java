package com.nuaa.ssm.dao.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.Veh;
import com.nuaa.ssm.domain.Ycsq;
import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import java.util.List;

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


}
