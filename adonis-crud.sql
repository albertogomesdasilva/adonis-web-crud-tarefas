/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80001
Source Host           : localhost:3306
Source Database       : adonis-crud

Target Server Type    : MYSQL
Target Server Version : 80001
File Encoding         : 65001

Date: 2023-09-22 10:58:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `adonis_schema`
-- ----------------------------
DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of adonis_schema
-- ----------------------------
INSERT INTO `adonis_schema` VALUES ('1', 'database/migrations/1695073913682_users', '1', '2023-09-19 16:01:19');
INSERT INTO `adonis_schema` VALUES ('2', 'database/migrations/1695327771914_tasks', '2', '2023-09-22 10:36:38');

-- ----------------------------
-- Table structure for `adonis_schema_versions`
-- ----------------------------
DROP TABLE IF EXISTS `adonis_schema_versions`;
CREATE TABLE `adonis_schema_versions` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of adonis_schema_versions
-- ----------------------------
INSERT INTO `adonis_schema_versions` VALUES ('2');

-- ----------------------------
-- Table structure for `tasks`
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(400) NOT NULL,
  `priority` enum('important','unimportant','urgent','future_scope') NOT NULL DEFAULT 'important',
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `tasks_user_id_foreign` (`user_id`),
  CONSTRAINT `tasks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES ('1', 'Titulo Adonijs', 'Descrição adonijs', 'important', '8', '2023-09-22 10:38:56', '2023-09-22 10:38:56');
INSERT INTO `tasks` VALUES ('2', 'dfadfsadf', 'dfadsfasdfasddfadsfdsafasdf', 'important', '8', '2023-09-22 10:43:32', '2023-09-22 10:43:32');
INSERT INTO `tasks` VALUES ('3', 'Terceira Tarefa', 'desc terce', 'important', '8', '2023-09-22 10:44:51', '2023-09-22 10:44:51');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(180) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `remember)me_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('3', null, 'albertogomesdasilva@gmail.com', '$scrypt$n=16384,r=8,p=1$TMe/wqowlSVF56EBIeIR2g$Mkmn/jQtmzs2eM+i1QgcegJ7/118MYpd0M5HioNMlSniEhxr25PSpXTqR0/WURaBWIsRfXp6WR29YI4ozB4Qgg', 'Alberto', 'Gomes da Silva', null, '2023-09-19 16:02:56', '2023-09-19 16:02:56');
INSERT INTO `users` VALUES ('4', null, 'teste@teste.com', '$scrypt$n=16384,r=8,p=1$3JKRKCWhjYu1zC6vAs9irg$iG5Go9qtWKf2AQrDOWoGvR8WjXoalpQhrKN8MigWhxn7w9XOYJt5vCtxk+tgxCLXHHatH7EO74MhwWx3QhaxiQ', 'Teste', 'Teste', null, '2023-09-20 18:21:28', '2023-09-20 18:21:28');
INSERT INTO `users` VALUES ('5', null, 'alberto@gmail.com', '$scrypt$n=16384,r=8,p=1$FgdHbIumpQ36LgDE62YhYw$VE0loJmzCCYqFdNz7VSgniBSK4wg7MPRyOxafFPZprwOr2whEwwcfaf8yMy2fMD8IfqCnOgiyJaArNGCiazD7w', 'Alberto', 'Gomes', null, '2023-09-20 19:05:35', '2023-09-20 19:05:35');
INSERT INTO `users` VALUES ('6', null, 'dfdsafdf@dfdas.com', '$scrypt$n=16384,r=8,p=1$070nFJ9xysb3O6b78AxgzQ$vtMc/weppFjdD1PLgg9RYEq+Ej4fC4VsFOdQxR9vo+J52S5pNsxvM1jLFS5ya+W69aZhs/zPg87bNlQ/4scS8A', 'dfdsf', 'dfsdafsdaf', null, '2023-09-20 21:05:02', '2023-09-20 21:05:02');
INSERT INTO `users` VALUES ('7', null, 'jp@gmail.com', '$scrypt$n=16384,r=8,p=1$vK1lN7fv8AXvbNsNy0jlXw$qiXrgWaX7/RkMgqTgSvuU5hCnRknXQGL+busH5x0z3T8UNzMK0wbjIBDXq+wLrRvVjaEyrYD9qjVXUR1qxqxNw', 'Joao', 'Pereira', null, '2023-09-20 21:24:57', '2023-09-20 21:24:57');
INSERT INTO `users` VALUES ('8', null, 'admin@admin.com', '$scrypt$n=16384,r=8,p=1$B5Fhd3CpilmVc+OWL7za3g$3KFLinVpyhKQ8uPIvaf1stRHNo1s6NWlELcc0/NrDHPvaUJbMlXC49mnqVLh5H90WLLsblt2oCNVcaChCXkxYg', 'Administrador', 'Admin', null, '2023-09-21 10:45:35', '2023-09-21 10:45:35');
INSERT INTO `users` VALUES ('9', null, 'thacy@gmail.com', '$scrypt$n=16384,r=8,p=1$j5G9fKd2Y5Q3JNz7btITPw$pg0MoLPzhGd6h5l1QvO9asI4xaCFhMkEcCNo4rAr/38mQ/T7ZMvEQ+WV9OCz6Pbbg9dZJ5IzKFf3zxM/XHqnGw', 'Thacylla', 'Cristina', null, '2023-09-21 16:06:48', '2023-09-21 16:06:48');
INSERT INTO `users` VALUES ('10', null, 'dell@gmail.com', '$scrypt$n=16384,r=8,p=1$ag4Loi8RUJmftF9RQ5hh8Q$+Ajgc9JGT8Dm24UPTZ2Y6MP6DHq0vN1Fir3UaYudih/yjVcxjVVUDAqopDgkSF6keTesM86jgWoI+w88skSUwg', 'Wendell', 'Pires', null, '2023-09-21 16:10:33', '2023-09-21 16:10:33');
