package com.nuaa.ssm.service.impl;

import com.nuaa.ssm.dao.BaseDao;
import com.nuaa.ssm.domain.User;
import com.nuaa.ssm.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 *
 */
@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<User> implements UserService{




    @Resource(name="userDao")
    public void setDao(BaseDao<User> dao) {
        super.setDao(dao);
    }

    /**
     * 长事务测试
     */
    public void longTx(){
        //插入item


        this.delete(1);
    }

    public void save(User u) {
        if(u.getId() != null){
            this.update(u);
        }
        else{
            this.insert(u);
        }
    }
    public User selectByuname(String username){
        List<User> list = selectAll();
        for (User user:list){
            if (user.getUsername().equals(username))
            {
                return user;
            }
        }
        return null;
    }
}