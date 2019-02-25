CREATE DATABASE  IF NOT EXISTS `utp_tesis` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `utp_tesis`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: utp_tesis
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
-- Table structure for table `candidates`
--

DROP TABLE IF EXISTS `candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `candidates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `work_code` int(11) NOT NULL,
  `faculty` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `career` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`,`work_code`),
  KEY `fk_work_code_idx` (`work_code`),
  CONSTRAINT `fk_work_code` FOREIGN KEY (`work_code`) REFERENCES `graduation_works` (`work_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidates`
--

LOCK TABLES `candidates` WRITE;
/*!40000 ALTER TABLE `candidates` DISABLE KEYS */;
INSERT INTO `candidates` VALUES (1,52,'FCT','LCEB'),(9,56,'FISC','IS'),(10,57,'FISC','LDS'),(11,57,'FISC','LRI'),(12,57,'FISC','IS'),(13,58,'FISC','ISC'),(14,58,'FIC','IG'),(15,59,'FISC','IS'),(24,60,'FISC','LIAE');
/*!40000 ALTER TABLE `candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogs`
--

DROP TABLE IF EXISTS `catalogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogs` (
  `cat_name` varchar(45) CHARACTER SET utf8 NOT NULL,
  `cat_code` varchar(5) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`cat_code`),
  UNIQUE KEY `cat_code_UNIQUE` (`cat_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogs`
--

LOCK TABLES `catalogs` WRITE;
/*!40000 ALTER TABLE `catalogs` DISABLE KEYS */;
INSERT INTO `catalogs` VALUES ('graduationWorkTypes','GW'),('utpCareers','UC'),('utpFaculties','UF'),('utpRegionalCenters','URC');
/*!40000 ALTER TABLE `catalogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogs_items`
--

DROP TABLE IF EXISTS `catalogs_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalogs_items` (
  `cat_code` varchar(5) CHARACTER SET utf8 NOT NULL,
  `cati_name` varchar(200) CHARACTER SET utf8 NOT NULL,
  `cati_code` varchar(45) CHARACTER SET utf8 NOT NULL,
  `cati_code_rel` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`cat_code`,`cati_code`),
  CONSTRAINT `fk_cat_code` FOREIGN KEY (`cat_code`) REFERENCES `catalogs` (`cat_code`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogs_items`
--

LOCK TABLES `catalogs_items` WRITE;
/*!40000 ALTER TABLE `catalogs_items` DISABLE KEYS */;
INSERT INTO `catalogs_items` VALUES ('GW','Práctica Profesional','P',''),('GW','Trabajo teórico','T',''),('GW','Trabajo Teórico-Práctico','TP',''),('UC','Licenciatura en Ingeniería en Alimentos','IA','FCT'),('UC','Licenciatura en Ingeniería Ambiental','IAM','FIC'),('UC','Licenciatura en Ingeniería Aeronáutica','IAN','FIM'),('UC','Licenciatura en Ingeniería Civil','IC','FIC'),('UC','Licenciatura en Ingeniería de Control y Automatización','ICA','FIE'),('UC','Licenciatura en Ingeniería Eléctrica','IE','FIE'),('UC','Licenciatura en Ingeniería de Energía y Ambiente','IEA','FIM'),('UC','Licenciatura en Ingeniería Eléctrica y Electrónica','IEE','FIE'),('UC','Licenciatura en Ingeniería Electromecánica','IEM','FIE'),('UC','Licenciatura en Ingeniería Electrónica y Telecomunicaciones','IET','FIE'),('UC','Licenciatura en Ingeniería Forestal','IF','FCT'),('UC','Licenciatura en Ingeniería Geomática','IG','FIC'),('UC','Licenciatura en Ingeniería Geológica','IGE','FIC'),('UC','Licenciatura en Ingeniería Industrial','II','FII'),('UC','Licenciatura en Ingeniería Logística y Cadena de Suministro','ILCS','FII'),('UC','Licenciatura en Ingeniería Mecánica','IM','FIM'),('UC','Licenciatura en Ingeniería Mecánica Industrial','IMI','FII'),('UC','Licenciatura en Ingeniería de Mantenimiento','IMM','FIM'),('UC','Licenciatura en Ingeniería Marítima Portuaria','IMP','FIC'),('UC','Licenciatura en Ingeniería Naval','IN','FIM'),('UC','Licenciatura en Ingeniería de Software','IS','FISC'),('UC','Licenciatura en Ingeniería de Sistemas y Computación','ISC','FISC'),('UC','Licenciatura en Ingeniería de Sistemas de Información','ISI','FISC'),('UC','Licenciatura en Ingeniería en Telecomunicaciones','IT','FIE'),('UC','Licenciatura en Administración de Aviación (Piloto)','LAA','FIM'),('UC','Licenciatura en Administración de Aviación con Opción a Vuelo (Piloto)','LAAOV','FIM'),('UC','Licenciatura en Comunicación Ejecutiva Bilingüe','LCEB','FCT'),('UC','Licenciatura En Dibujo Automatizado','LDA','FIC'),('UC','Licenciatura en Desarrollo de Software','LDS','FISC'),('UC','Licenciatura en Edificaciones','LE','FIC'),('UC','Licenciatura en Electrónica y Sistemas de Comunicación','LESC','FIE'),('UC','Licenciatura en Gestión Administrativa','LGA','FII'),('UC','Licenciatura en Gestión de la Producción Industrial','LGPI','FII'),('UC','Licenciatura en Informática Aplicada a la Educación','LIAE','FISC'),('UC','Licenciatura en Logística y Transporte Multimodal','LLTM','FII'),('UC','Licenciatura en Mecánica Automotriz','LMA','FIM'),('UC','Licenciatura en Mercadeo y Comercio Internacional','LMCI','FII'),('UC','Licenciatura en Mecánica Industrial','LMI','FIM'),('UC','Licenciatura en Mercadeo y Negocios Internacionales','LMNI','FII'),('UC','Licenciatura en Operaciones Marítimas y Portuarias','LOMP','FIC'),('UC','Licenciatura en Refrigeración y Aire Acondicionado','LRAA','FIM'),('UC','Licenciatura en Recursos Humanos y Gestión de la Productividad','LRHGP','FII'),('UC','Licenciatura en Redes Informáticas','LRI','FISC'),('UC','Licenciatura en Soldadura','LS','FIM'),('UC','Licenciatura en Saneamiento y Ambiente','LSA','FIC'),('UC','Licenciatura en Sistemas Eléctricos y Automatización','LSEA','FIE'),('UC','Licenciatura en Topografía','LT','FIC'),('UC','Técnico en Autotrónica','TAT','FIE'),('UC','Técnico en Despacho de Vuelo','TDV','FIM'),('UC','Técnico en Electrónica Biomédica','TEB','FIE'),('UC','Técnico en Informática para la Gestión Empresarial','TIGE','FISC'),('UC','Técnico en Ingeniería de Mantenimiento de Aeronaves con especialización en Motores y Fuselaje','TIMAEMF','FIM'),('UC','Técnico en Sistemas Eléctricos','TSE','FIE'),('UC','Técnico en Telecomunicaciones','TTC','FIE'),('UF','Facultad de Ciencias y Tecnología','FCT',''),('UF','Facultad de Ingeniería Civil','FIC',''),('UF','Facultad de Ingeniería Eléctrica','FIE',''),('UF','Facultad de Ingeniería Industrial','FII',''),('UF','Facultad de Ingeniería Mecánica','FIM',''),('UF','Facultad de Ingeniería de Sistemas Computacionales','FISC',''),('URC','Campus “Dr. Víctor Levi Sasso”','PC',''),('URC','Sede de Howard','PH',''),('URC','Sede de Tocumen','PT',''),('URC','Centro Regional de Azuero','RA',''),('URC','Centro Regional de Bocas del Toro','RB',''),('URC','Centro Regional de Chiriquí','RCH',''),('URC','Centro Regional de Colón','RCL',''),('URC','Centro Regional de Coclé','RCO',''),('URC','Centro Regional de Panamá Oeste','RPO',''),('URC','Centro Regional de Veraguas','RV','');
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
  `work_type` char(2) CHARACTER SET utf8 NOT NULL,
  `w_title` varchar(200) CHARACTER SET utf8 NOT NULL,
  `work_desc` varchar(300) CHARACTER SET utf8 NOT NULL,
  `advisor` varchar(45) CHARACTER SET utf8 NOT NULL,
  `faculty` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `reg_center` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `creation_date` date NOT NULL,
  `studentsQty` int(11) NOT NULL,
  PRIMARY KEY (`work_code`),
  KEY `advisor_idx` (`advisor`),
  CONSTRAINT `advisor` FOREIGN KEY (`advisor`) REFERENCES `utp_users` (`us_doc_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graduation_works`
--

LOCK TABLES `graduation_works` WRITE;
/*!40000 ALTER TABLE `graduation_works` DISABLE KEYS */;
INSERT INTO `graduation_works` VALUES (13,'P','Impresión automática de actas en el Tribunal Electoral para las eleciones','','5-482-691','FISC','PC','2018-07-13',2),(15,'TP','Diseño eléctrico realizado en la compañía ingeniería atlántico','','8-475-1024','FIE','PC','2017-10-08',2),(16,'P','Reconocimiento, evaluación y manejo de equipos especiales de fuerza en las centrales telefónicas.','','PE-14-5298','FII','PC','2017-06-10',3),(17,'TP','Sistema de gestión de la información del departamento de Bienestar Estudiantil de la Universidad Tecnológica de Panamá Centro Regional de Chiriquí','','5-482-691','FIE','PC','2018-02-10',1),(18,'P','Práctica profesional en Ricardo Perez S.A. \'Ahorro energético y mejoras en la calidad de la energía\'','','8-475-1024','FIE','PC','2018-02-10',2),(20,'T','Diseño y construcción del sistema didáctico SD-88 basado en el microprocesador INTEL8088','','PE-14-5298','FISC','PC','2018-07-26',4),(21,'T','Nuevo método computacional para el estudio de flujo de potenciaaa','','8-475-1024','FISC','Pc','2018-07-26',2),(22,'P','Mantenimiento preventivo en los sistemas de transmisión digital por cables de fibras óptica y microondas.','','5-482-691','FISC','PC','2018-07-26',3),(23,'P','Implementación de un sistema de información para la logística de materiales de una empresa industrial','','1-123-11','FISC','PC','2018-07-26',1),(30,'TP','Implementación de un sistema de cualquier cosa','','1-123-11','FISC','PC','2018-08-21',3),(36,'T','AngularJS Session Storage Example','','1-123-11','FISC','PC','2018-08-21',6),(37,'P','AngularAgility sample','','1-123-11','FISC','PC','2018-08-21',1),(44,'T','Esta es la tercera página','','1-123-11','FISC','PC','2019-02-19',1),(45,'T','Esta es la tercera página','','1-123-11','FISC','PC','2019-02-19',1),(47,'P','qqadad','','1-123-11','FISC','PC','2019-02-19',2),(48,'P','Otra prueba de este asunto','','1-123-11','FISC','PC','2019-02-19',1),(49,'P','Otra prueba de este asunto','','1-123-11','FISC','PC','2019-02-19',1),(50,'P','Otra prueba de este s','','1-123-11','FISC','PC','2019-02-19',1),(51,'P','Otra prueba de este saaaassss','','1-123-11','FISC','PC','2019-02-19',1),(52,'P','Otra prueba de este saaaasssdddss','','1-123-11','FISC','PC','2019-02-19',1),(56,'P','Esta es la tercera página','sssssssss','1-123-11','FISC','PC','2019-02-19',1),(57,'T','trabajo de prueba de recuperacion','sfafafgagag','1-123-11','FISC','PC','2019-02-19',3),(58,'P','trabajo de prueba actualizacion','hwrhr yjkedujsrt artjaryja','1-123-11','FISC','PC','2019-02-19',2),(59,'T','Otra prueba de este asunto','wetgwerte 4tyeryqerywyrtw','1-123-11','FISC','PC','2019-02-19',1),(60,'P','Esta es la tercera página4851','6646546816516841','1-123-11','FISC','PC','2019-02-21',1);
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
  `us_type` varchar(1) CHARACTER SET utf8 NOT NULL DEFAULT 'E',
  `us_fname` varchar(45) CHARACTER SET utf8 NOT NULL,
  `us_lname` varchar(45) CHARACTER SET utf8 NOT NULL,
  `us_doc_num` varchar(45) CHARACTER SET utf8 NOT NULL,
  `us_pass` varchar(45) CHARACTER SET utf8 NOT NULL,
  `us_mail` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `us_facu` varchar(6) COLLATE utf8_spanish_ci DEFAULT NULL,
  `us_center` varchar(6) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`us_id`),
  UNIQUE KEY `us_doc_num_UNIQUE` (`us_doc_num`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utp_users`
--

LOCK TABLES `utp_users` WRITE;
/*!40000 ALTER TABLE `utp_users` DISABLE KEYS */;
INSERT INTO `utp_users` VALUES (1,'E','Jorge','Girón','8-855-449','jgiron19','kyoshi.giron@gmail.com',NULL,NULL),(2,'E','Yirelki','Jiménez','8-901-1029','test','kyoshi.giron@gmail.com',NULL,NULL),(21,'P','Bruce','Wayne','5-482-691','test','kyoshi.giron@gmail.com',NULL,NULL),(22,'P','Diana','Prince','8-475-1024','test','biologa507@gmail.com',NULL,NULL),(23,'P','Kal','El','PE-14-5298','test','kyoshi.giron@gmail.com',NULL,NULL),(25,'E','Ranger','Rojo','8-855-448','test','kyoshi.giron@gmail.com',NULL,NULL),(81,'P','Harry','Potter','1-123-11','test','kyoshi.giron@gmail.com','FISC','PC'),(82,'E','Greysi','Diaz','1-123-12','test','kyoshi.giron@gmail.com',NULL,NULL),(83,'E','Ariel','Fernandez','E-8-111396','test','kyoshi.giron@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `utp_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'utp_tesis'
--
/*!50003 DROP PROCEDURE IF EXISTS `insertWork` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertWork`(
IN userId VARCHAR(45), 
IN workTitle VARCHAR(200),
IN workType CHAR(2),
IN workDesc VARCHAR(255),
IN studentCount INT,
IN faculty1 VARCHAR(8),
IN career1 VARCHAR(8),
IN faculty2 VARCHAR(8),
IN career2 VARCHAR(8),
IN faculty3 VARCHAR(8),
IN career3 VARCHAR(8)
)
BEGIN
SELECT 
    us_facu, us_center
INTO
	@facu, @center
FROM
    utp_tesis.utp_users
WHERE
	us_doc_num = userId COLLATE utf8_general_ci;
    
SELECT CURDATE() INTO @today;

INSERT INTO graduation_works (work_type, w_title, work_desc, advisor, faculty, reg_center, creation_date, studentsQty) 
VALUES (workType, workTitle,workDesc,userId, @facu, @center, CURDATE(), studentCount);

SELECT LAST_INSERT_ID() INTO @workCode;

INSERT INTO candidates (work_code,faculty,career)
VALUES (@workCode, faculty1, career1);

IF STRCMP(faculty2,'') != 0 THEN

INSERT INTO candidates (work_code,faculty,career)
VALUES (@workCode, faculty2, career2);

END IF;

IF STRCMP(faculty3,'') != 0 THEN

INSERT INTO candidates (work_code,faculty,career)
VALUES (@workCode, faculty3, career3);

END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-21 11:46:08