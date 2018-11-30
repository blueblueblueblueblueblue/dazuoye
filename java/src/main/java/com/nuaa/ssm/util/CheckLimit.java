package com.nuaa.ssm.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class CheckLimit {

    public boolean check(String s){
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        int weekOfYear = cal.get(Calendar.DAY_OF_WEEK) - 1;
        char a = s.charAt(s.length()-1);
        if ('A'<=a&&a<='Z'&&weekOfYear%2==0){
             return true;
        }
        else if ((a=='0'||a=='2'||a=='4'||a=='6'||a=='8')&&weekOfYear%2==0){
                  return true;
        }
        else if ((a=='1'||a=='3'||a=='5'||a=='7'||a=='9')&&weekOfYear%2==1){
                   return true;
        }
        return false;
    }
}
