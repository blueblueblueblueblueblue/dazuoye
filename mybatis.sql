/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : mybatis

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-12-03 18:05:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for apinfo
-- ----------------------------
DROP TABLE IF EXISTS `apinfo`;
CREATE TABLE `apinfo` (
  `vehnum` varchar(11) DEFAULT NULL,
  `driver` varchar(255) DEFAULT NULL,
  `sqid` int(11) DEFAULT NULL,
  `kssj` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `jssj` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of apinfo
-- ----------------------------
INSERT INTO `apinfo` VALUES ('A1', '1', '3', '2018-12-03 17:58:01', '2018-12-02 17:50:53');

-- ----------------------------
-- Table structure for baoinfo
-- ----------------------------
DROP TABLE IF EXISTS `baoinfo`;
CREATE TABLE `baoinfo` (
  `id` int(11) NOT NULL,
  `vehnum` varchar(11) DEFAULT NULL,
  `baodate` date DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `baotype` varchar(255) DEFAULT NULL,
  `baoxm` varchar(255) DEFAULT NULL,
  `cost` decimal(10,2) DEFAULT NULL,
  `travel` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of baoinfo
-- ----------------------------

-- ----------------------------
-- Table structure for driver
-- ----------------------------
DROP TABLE IF EXISTS `driver`;
CREATE TABLE `driver` (
  `name` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `dept` varchar(255) DEFAULT NULL,
  `zw` varchar(255) DEFAULT NULL,
  `call` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `jsznum` varchar(255) DEFAULT NULL,
  `zjcx` varchar(255) DEFAULT NULL,
  `lzrq` date DEFAULT NULL,
  `ispro` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of driver
-- ----------------------------

-- ----------------------------
-- Table structure for repinfo
-- ----------------------------
DROP TABLE IF EXISTS `repinfo`;
CREATE TABLE `repinfo` (
  `id` int(11) NOT NULL,
  `vid` int(11) DEFAULT NULL,
  `weidate` date DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `fycd` varchar(255) DEFAULT NULL,
  `wxqkms` varchar(255) DEFAULT NULL,
  `ghlbj` varchar(255) DEFAULT NULL,
  `fy` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of repinfo
-- ----------------------------

-- ----------------------------
-- Table structure for shiinfo
-- ----------------------------
DROP TABLE IF EXISTS `shiinfo`;
CREATE TABLE `shiinfo` (
  `id` int(11) NOT NULL,
  `vid` int(11) DEFAULT NULL,
  `dept` varchar(255) DEFAULT NULL,
  `zzr` varchar(255) DEFAULT NULL,
  `sgdate` date DEFAULT NULL,
  `sgplace` varchar(255) DEFAULT NULL,
  `sgjg` varchar(1000) DEFAULT NULL,
  `zrrd` varchar(600) DEFAULT NULL,
  `cfqk` varchar(600) DEFAULT NULL,
  `pcqk` varchar(255) DEFAULT NULL,
  `nbcf` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shiinfo
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userrole` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'lyx', '616', '1');

-- ----------------------------
-- Table structure for veh
-- ----------------------------
DROP TABLE IF EXISTS `veh`;
CREATE TABLE `veh` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehnum` varchar(255) DEFAULT NULL,
  `vehversion` varchar(255) DEFAULT NULL,
  `enginenum` varchar(255) DEFAULT NULL,
  `framenum` varchar(255) DEFAULT NULL,
  `gasvol` varchar(255) DEFAULT NULL,
  `seatsnum` int(11) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `purdate` date DEFAULT NULL,
  `vehdif` varchar(255) DEFAULT NULL,
  `vehusage` varchar(255) DEFAULT NULL,
  `policynum` varchar(255) DEFAULT NULL,
  `repaircardnum` varchar(255) DEFAULT NULL,
  `oilcardnum` varchar(255) DEFAULT NULL,
  `supplier` varchar(255) DEFAULT NULL,
  `travel` double(255,0) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `isscrap` varchar(255) DEFAULT NULL,
  `oildif` varchar(255) DEFAULT NULL,
  `sfzk` int(255) DEFAULT '1',
  `baocount` int(255) DEFAULT NULL,
  `weicount` int(255) DEFAULT NULL,
  `repcount` int(255) DEFAULT NULL,
  `shicount` int(255) DEFAULT NULL,
  `sfap` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of veh
-- ----------------------------
INSERT INTO `veh` VALUES ('1', 'A1', '123', '132', '32', '123', '132', '0', '123', '2018-11-04', '小轿车', '领导用车', '1321', null, '987', '', '0', '', 'false', '97#汽油', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('2', 'A2', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '小轿车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('3', 'A3', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '中型客车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('4', 'A4', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '大型客车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('5', 'A5', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '中型客车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('6', 'A6', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '小轿车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('7', 'A7', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '中型客车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('8', 'A8', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '小轿车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('9', 'A9', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '中型客车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('10', 'A10', '1', '1', '1', '1', '1', '1', '1', '2018-11-29', '小轿车', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0');
INSERT INTO `veh` VALUES ('12', 'A11', '1231', '132', '123', '132', '231', '123', '32132', '2018-11-05', '吉普车', '领导用车', '123', null, '123', '132', '123', '12', '否', '柴油', '1', null, null, null, null, '0');
INSERT INTO `veh` VALUES ('13', '123', '987', '798', '798', '798', '987', '0', '98', '2018-11-07', '中型客车', '其他用车', '87', null, '331', '', '0', '', 'false', '柴油', '1', null, null, null, null, '0');

-- ----------------------------
-- Table structure for weiinfo
-- ----------------------------
DROP TABLE IF EXISTS `weiinfo`;
CREATE TABLE `weiinfo` (
  `id` int(11) NOT NULL,
  `vid` int(11) DEFAULT NULL,
  `dept` varchar(255) DEFAULT NULL,
  `zrr` varchar(255) DEFAULT NULL,
  `weidate` date DEFAULT NULL,
  `weiplace` varchar(255) DEFAULT NULL,
  `weixm` varchar(255) DEFAULT NULL,
  `isserious` varchar(255) DEFAULT NULL,
  `nbcf` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of weiinfo
-- ----------------------------

-- ----------------------------
-- Table structure for ycinfo
-- ----------------------------
DROP TABLE IF EXISTS `ycinfo`;
CREATE TABLE `ycinfo` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `vehnum` int(11) DEFAULT NULL,
  `driver` varchar(255) DEFAULT NULL,
  `rkrq` varchar(255) DEFAULT NULL,
  `sfwh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ycinfo
-- ----------------------------

-- ----------------------------
-- Table structure for ycspinfo
-- ----------------------------
DROP TABLE IF EXISTS `ycspinfo`;
CREATE TABLE `ycspinfo` (
  `sftg` varchar(255) DEFAULT NULL,
  `spr` varchar(255) DEFAULT NULL,
  `spsj` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `sqid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ycspinfo
-- ----------------------------

-- ----------------------------
-- Table structure for ycsqinfo
-- ----------------------------
DROP TABLE IF EXISTS `ycsqinfo`;
CREATE TABLE `ycsqinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `yccs` varchar(255) DEFAULT NULL,
  `ycr` varchar(255) DEFAULT NULL,
  `ycsj` datetime DEFAULT NULL,
  `cssj` varchar(255) DEFAULT NULL,
  `ycsy` varchar(255) DEFAULT NULL,
  `mdd` varchar(255) DEFAULT NULL,
  `isnight` varchar(255) DEFAULT NULL,
  `czrs` varchar(255) DEFAULT NULL,
  `sfxysj` varchar(255) DEFAULT NULL,
  `nfhsj` datetime DEFAULT NULL,
  `csldyj` varchar(255) DEFAULT NULL,
  `jczps` varchar(255) DEFAULT NULL,
  `apstatus` int(5) DEFAULT '0',
  `spstatus` int(5) DEFAULT '0',
  `sfwfyc` varchar(255) DEFAULT NULL,
  `sqsj` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ycsqinfo
-- ----------------------------
INSERT INTO `ycsqinfo` VALUES ('3', '456', '456', '2019-01-02 00:00:00', '456', '456', '456', '否', '456', '否', '2018-12-18 00:00:00', null, null, '0', '1', null, '2018-12-03 14:43:49');
