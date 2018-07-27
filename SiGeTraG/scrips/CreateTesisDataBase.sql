-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: utp_tesis
-- ------------------------------------------------------
-- Server version	5.7.12-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalogs`
--

DROP TABLE IF EXISTS `catalogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogs` (
  `cat_name` varchar(45) NOT NULL,
  `cat_code` varchar(5) NOT NULL,
  PRIMARY KEY (`cat_code`),
  UNIQUE KEY `cat_code_UNIQUE` (`cat_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogs`
--

LOCK TABLES `catalogs` WRITE;
/*!40000 ALTER TABLE `catalogs` DISABLE KEYS */;
INSERT INTO `catalogs` VALUES ('graduationWorkTypes','GW'),('utpFaculties','UF'),('utpRegionalCenters','URC');
/*!40000 ALTER TABLE `catalogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogs_items`
--

DROP TABLE IF EXISTS `catalogs_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogs_items` (
  `cat_code` varchar(5) NOT NULL,
  `cati_name` varchar(200) NOT NULL,
  `cati_code` varchar(45) NOT NULL,
  `cati_code_rel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cat_code`,`cati_code`),
  CONSTRAINT `fk_cat_code` FOREIGN KEY (`cat_code`) REFERENCES `catalogs` (`cat_code`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogs_items`
--

LOCK TABLES `catalogs_items` WRITE;
/*!40000 ALTER TABLE `catalogs_items` DISABLE KEYS */;
INSERT INTO `catalogs_items` VALUES ('GW','Práctica Profesional','P',''),('GW','Trabajo teórico','T',''),('GW','Trabajo Teórico-Práctico','TP',''),('UF','Facultad de Ciencias y Tecnología','FCT',''),('UF','Facultad de Ingeniería Civil','FIC',''),('UF','Facultad de Ingeniería Eléctrica','FIE',''),('UF','Facultad de Ingeniería Industrial','FII',''),('UF','Facultad de Ingeniería Mecánica','FIM',''),('UF','Facultad de Ingeniería de Sistemas Computacionales','FISC',''),('URC','Campus “Dr. Víctor Levi Sasso”','PC',''),('URC','Sede de Howard','PH',''),('URC','Sede de Tocumen','PT',''),('URC','Centro Regional de Azuero','RA',''),('URC','Centro Regional de Bocas del Toro','RB',''),('URC','Centro Regional de Chiriquí','RCH',''),('URC','Centro Regional de Colón','RCL',''),('URC','Centro Regional de Coclé','RCO',''),('URC','Centro Regional de Panamá Oeste','RPO',''),('URC','Centro Regional de Veraguas','RV','');
/*!40000 ALTER TABLE `catalogs_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `graduation_works`
--

DROP TABLE IF EXISTS `graduation_works`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `graduation_works` (
  `work_code` int(11) NOT NULL AUTO_INCREMENT,
  `work_type` char(2) NOT NULL,
  `w_title` varchar(200) NOT NULL,
  `advisor` varchar(45) NOT NULL,
  `faculty` varchar(45) DEFAULT NULL,
  `reg_center` varchar(45) DEFAULT NULL,
  `creation_date` date NOT NULL,
  `studentsQty` int(11) NOT NULL,
  PRIMARY KEY (`work_code`),
  KEY `advisor_idx` (`advisor`),
  CONSTRAINT `advisor` FOREIGN KEY (`advisor`) REFERENCES `utp_users` (`us_doc_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graduation_works`
--

LOCK TABLES `graduation_works` WRITE;
/*!40000 ALTER TABLE `graduation_works` DISABLE KEYS */;
INSERT INTO `graduation_works` VALUES (13,'P','Impresión automática de actas en el Tribunal Electoral para las eleciones','5-482-691','FISC','PC','2018-07-13',2),(14,'TP','Manual de procedimiento para el diseño de sistemas de fontanería','1-123-11','FIC','PC','2018-04-24',1),(15,'TP','Diseño eléctrico realizado en la compañía ingeniería atlántico','8-475-1024','FIE','PC','2017-10-08',2),(16,'P','Reconocimiento, evaluación y manejo de equipos especiales de fuerza en las centrales telefónicas.','PE-14-5298','FII','PC','2017-06-10',3),(17,'TP','Sistema de gestión de la información del departamento de Bienestar Estudiantil de la Universidad Tecnológica de Panamá Centro Regional de Chiriquí','5-482-691','FIE','PC','2018-02-10',1),(18,'P','Práctica profesional en Ricardo Perez S.A. \'Ahorro energético y mejoras en la calidad de la energía\'','8-475-1024','FIE','PC','2018-02-10',2),(19,'T','Diseño y construcción de un sistema analizador de señales lentas y/o no periódicas mediante el microprocesador','1-123-11','FISC','PC','2018-07-26',2),(20,'T','Diseño y construcción del sistema didáctico SD-88 basado en el microprocesador INTEL8088','PE-14-5298','FISC','PC','2018-07-26',4),(21,'T','Nuevo método computacional para el estudio de flujo de potencia','8-475-1024','FIE','PC','2018-07-26',1),(22,'P','Mantenimiento preventivo en los sistemas de transmisión digital por cables de fibras óptica y microondas.','5-482-691','FISC','PC','2018-07-26',3),(23,'P','Implementación de un sistema de información para la logística de materiales de una empresa industrial','1-123-11','FISC','PC','2018-07-26',1);
/*!40000 ALTER TABLE `graduation_works` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utp_users`
--

DROP TABLE IF EXISTS `utp_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utp_users` (
  `us_id` int(11) NOT NULL AUTO_INCREMENT,
  `us_type` varchar(1) NOT NULL DEFAULT 'E',
  `us_fname` varchar(45) NOT NULL,
  `us_lname` varchar(45) NOT NULL,
  `us_doc_num` varchar(45) NOT NULL,
  `us_pass` varchar(45) NOT NULL,
  PRIMARY KEY (`us_id`),
  UNIQUE KEY `us_doc_num_UNIQUE` (`us_doc_num`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utp_users`
--

LOCK TABLES `utp_users` WRITE;
/*!40000 ALTER TABLE `utp_users` DISABLE KEYS */;
INSERT INTO `utp_users` VALUES (1,'E','Jorge','Girón','8-855-449','jgiron19'),(2,'E','Yirelki','Jiménez','8-901-1029','test'),(21,'P','Bruce','Wayne','5-482-691','test'),(22,'P','Diana','Prince','8-475-1024','test'),(23,'P','Kal','El','PE-14-5298','test'),(25,'E','Ranger','Rojo','8-855-448','test'),(81,'P','Harry','Potter','1-123-11','test'),(82,'E','Greysi','Diaz','1-123-12','test'),(83,'E','Ariel','Fernandez','E-8-111396','test');
/*!40000 ALTER TABLE `utp_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-27 16:31:54
