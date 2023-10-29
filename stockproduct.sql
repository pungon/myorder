/*
 Navicat Premium Data Transfer

 Source Server         : DataApi
 Source Server Type    : MySQL
 Source Server Version : 80034 (8.0.34)
 Source Host           : localhost:3306
 Source Schema         : stockproduct

 Target Server Type    : MySQL
 Target Server Version : 80034 (8.0.34)
 File Encoding         : 65001

 Date: 29/10/2023 19:03:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for productlist
-- ----------------------------
DROP TABLE IF EXISTS `productlist`;
CREATE TABLE `productlist`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `stock` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productlist
-- ----------------------------
INSERT INTO `productlist` VALUES (1, 'สินค้าทดสอบ 1', '150', '20');
INSERT INTO `productlist` VALUES (2, 'สินค้าตัวอย่าง 2', '20', '5');
INSERT INTO `productlist` VALUES (3, 'สินค้าตัวอย่าง 3', '150', '7');
INSERT INTO `productlist` VALUES (4, 'สินค้าตัวอย่าง 4', '155', '70');
INSERT INTO `productlist` VALUES (5, 'สินค้าตัวอย่าง 5 ', '24', '147');
INSERT INTO `productlist` VALUES (6, 'สินค้าตัวอย่าง 6', '24', '78');
INSERT INTO `productlist` VALUES (7, 'สินค้าตัวอย่าง 7', '240', '17');
INSERT INTO `productlist` VALUES (8, 'สินค้าตัวอย่าง 8', '54', '100');
INSERT INTO `productlist` VALUES (9, 'สินค้าตัวอย่าง 9', '65', '200');
INSERT INTO `productlist` VALUES (10, 'สินค้าตัวอย่าง 10', '27', '14');
INSERT INTO `productlist` VALUES (11, 'สินค้าตัวอย่าง 11', '25', '87');
INSERT INTO `productlist` VALUES (12, 'สินค้าตัวอย่าง 12', '35', '75');
INSERT INTO `productlist` VALUES (13, 'สินค้าตัวอย่าง 13', '96', '1200');
INSERT INTO `productlist` VALUES (14, 'สินค้าตัวอย่าง 14', '59', '500');
INSERT INTO `productlist` VALUES (15, 'สินค้าตัวอย่าง 15', '63', '55');
INSERT INTO `productlist` VALUES (16, 'สินค้าตัวอย่าง 16', '68', '200');
INSERT INTO `productlist` VALUES (17, 'สินค้าตัวอย่าง 17', '57', '80');
INSERT INTO `productlist` VALUES (18, 'สินค้าตัวอย่าง 18', '95', '600');
INSERT INTO `productlist` VALUES (19, 'สินค้าตัวอย่าง 19', '75', '50');
INSERT INTO `productlist` VALUES (20, 'สินค้าตัวอย่าง 20', '540', '15');
INSERT INTO `productlist` VALUES (21, 'สินค้าตัวอย่าง 21', '69', '120');

SET FOREIGN_KEY_CHECKS = 1;
