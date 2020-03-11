-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: utp_tesis
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
INSERT INTO `catalogs` VALUES ('graduationWorkTypes','GW'),('identificationTypes','IDT'),('utpCareers','UC'),('utpFaculties','UF'),('utpRegionalCenters','URC'),('workStates','WS');
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
INSERT INTO `catalogs_items` VALUES ('GW','Práctica Profesional','P',''),('GW','Trabajo teórico','T',''),('GW','Trabajo Teórico-Práctico','TP',''),('IDT','Cédula','ID',NULL),('IDT','Pasaporte','PASSPORT',NULL),('UC','Licenciatura en Ingeniería en Alimentos','IA','FCT'),('UC','Licenciatura en Ingeniería Ambiental','IAM','FIC'),('UC','Licenciatura en Ingeniería Aeronáutica','IAN','FIM'),('UC','Licenciatura en Ingeniería Civil','IC','FIC'),('UC','Licenciatura en Ingeniería de Control y Automatización','ICA','FIE'),('UC','Licenciatura en Ingeniería Eléctrica','IE','FIE'),('UC','Licenciatura en Ingeniería de Energía y Ambiente','IEA','FIM'),('UC','Licenciatura en Ingeniería Eléctrica y Electrónica','IEE','FIE'),('UC','Licenciatura en Ingeniería Electromecánica','IEM','FIE'),('UC','Licenciatura en Ingeniería Electrónica y Telecomunicaciones','IET','FIE'),('UC','Licenciatura en Ingeniería Forestal','IF','FCT'),('UC','Licenciatura en Ingeniería Geomática','IG','FIC'),('UC','Licenciatura en Ingeniería Geológica','IGE','FIC'),('UC','Licenciatura en Ingeniería Industrial','II','FII'),('UC','Licenciatura en Ingeniería Logística y Cadena de Suministro','ILCS','FII'),('UC','Licenciatura en Ingeniería Mecánica','IM','FIM'),('UC','Licenciatura en Ingeniería Mecánica Industrial','IMI','FII'),('UC','Licenciatura en Ingeniería de Mantenimiento','IMM','FIM'),('UC','Licenciatura en Ingeniería Marítima Portuaria','IMP','FIC'),('UC','Licenciatura en Ingeniería Naval','IN','FIM'),('UC','Licenciatura en Ingeniería de Software','IS','FISC'),('UC','Licenciatura en Ingeniería de Sistemas y Computación','ISC','FISC'),('UC','Licenciatura en Ingeniería de Sistemas de Información','ISI','FISC'),('UC','Licenciatura en Ingeniería en Telecomunicaciones','IT','FIE'),('UC','Licenciatura en Administración de Aviación (Piloto)','LAA','FIM'),('UC','Licenciatura en Administración de Aviación con Opción a Vuelo (Piloto)','LAAOV','FIM'),('UC','Licenciatura en Comunicación Ejecutiva Bilingüe','LCEB','FCT'),('UC','Licenciatura En Dibujo Automatizado','LDA','FIC'),('UC','Licenciatura en Desarrollo de Software','LDS','FISC'),('UC','Licenciatura en Edificaciones','LE','FIC'),('UC','Licenciatura en Electrónica y Sistemas de Comunicación','LESC','FIE'),('UC','Licenciatura en Gestión Administrativa','LGA','FII'),('UC','Licenciatura en Gestión de la Producción Industrial','LGPI','FII'),('UC','Licenciatura en Informática Aplicada a la Educación','LIAE','FISC'),('UC','Licenciatura en Logística y Transporte Multimodal','LLTM','FII'),('UC','Licenciatura en Mecánica Automotriz','LMA','FIM'),('UC','Licenciatura en Mercadeo y Comercio Internacional','LMCI','FII'),('UC','Licenciatura en Mecánica Industrial','LMI','FIM'),('UC','Licenciatura en Mercadeo y Negocios Internacionales','LMNI','FII'),('UC','Licenciatura en Operaciones Marítimas y Portuarias','LOMP','FIC'),('UC','Licenciatura en Refrigeración y Aire Acondicionado','LRAA','FIM'),('UC','Licenciatura en Recursos Humanos y Gestión de la Productividad','LRHGP','FII'),('UC','Licenciatura en Redes Informáticas','LRI','FISC'),('UC','Licenciatura en Soldadura','LS','FIM'),('UC','Licenciatura en Saneamiento y Ambiente','LSA','FIC'),('UC','Licenciatura en Sistemas Eléctricos y Automatización','LSEA','FIE'),('UC','Licenciatura en Topografía','LT','FIC'),('UC','Técnico en Autotrónica','TAT','FIE'),('UC','Técnico en Despacho de Vuelo','TDV','FIM'),('UC','Técnico en Electrónica Biomédica','TEB','FIE'),('UC','Técnico en Informática para la Gestión Empresarial','TIGE','FISC'),('UC','Técnico en Ingeniería de Mantenimiento de Aeronaves con especialización en Motores y Fuselaje','TIMAEMF','FIM'),('UC','Técnico en Sistemas Eléctricos','TSE','FIE'),('UC','Técnico en Telecomunicaciones','TTC','FIE'),('UF','Facultad de Ciencias y Tecnología','FCT',''),('UF','Facultad de Ingeniería Civil','FIC',''),('UF','Facultad de Ingeniería Eléctrica','FIE',''),('UF','Facultad de Ingeniería Industrial','FII',''),('UF','Facultad de Ingeniería Mecánica','FIM',''),('UF','Facultad de Ingeniería de Sistemas Computacionales','FISC',''),('URC','Centro Experimental de Ingeniería','CEI',''),('URC','Centro de Producción e Investigaciones Agroindustriales','CEPIA',''),('URC','Centro de Investigación, Desarrollo e Innovación en Tecnologías de la Información y las Comunicaciones','CIDITIC',''),('URC','Centro de Investigaciones Hidráulicas e Hidrotécnicas','CIHH',''),('URC','Centro de Investigación e Innovación Eléctrica, Mecánica y de la Industria','CINEMI',''),('URC','Centro de Innovación y Transferencia Tecnológica','CITT',''),('URC','Campus “Dr. Víctor Levi Sasso”','PC',''),('URC','Sede de Howard','PH',''),('URC','Sede de Tocumen','PT',''),('URC','Centro Regional de Azuero','RA',''),('URC','Centro Regional de Bocas del Toro','RB',''),('URC','Centro Regional de Chiriquí','RCH',''),('URC','Centro Regional de Colón','RCL',''),('URC','Centro Regional de Coclé','RCO',''),('URC','Centro Regional de Panamá Oeste','RPO',''),('URC','Centro Regional de Veraguas','RV',''),('WS','Disponible','WSD',NULL),('WS','Trabajando','WSP',NULL);
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
  `proponent` varchar(45) CHARACTER SET utf8 NOT NULL,
  `faculty` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `reg_center` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `creation_date` date NOT NULL,
  `studentsQty` int(11) NOT NULL,
  `work_state` varchar(3) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`work_code`),
  KEY `advisor_idx` (`proponent`),
  CONSTRAINT `advisor` FOREIGN KEY (`proponent`) REFERENCES `utp_users` (`us_doc_num`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graduation_works`
--

LOCK TABLES `graduation_works` WRITE;
/*!40000 ALTER TABLE `graduation_works` DISABLE KEYS */;
INSERT INTO `graduation_works` VALUES (13,'P','Impresión automática de actas en el Tribunal Electoral para las eleciones','','5-482-691','FISC','PC','2018-07-13',2,'WSD'),(15,'TP','Diseño eléctrico realizado en la compañía ingeniería atlántico','','8-475-1024','FIE','PC','2017-10-08',2,'WSP'),(16,'P','Reconocimiento, evaluación y manejo de equipos especiales de fuerza en las centrales telefónicas.','','PE-14-5298','FII','PC','2017-06-10',3,'WSD'),(17,'TP','Sistema de gestión de la información del departamento de Bienestar Estudiantil de la Universidad Tecnológica de Panamá Centro Regional de Chiriquí','','5-482-691','FIE','PC','2018-02-10',1,'WSP'),(18,'P','Práctica profesional en Ricardo Perez S.A. \'Ahorro energético y mejoras en la calidad de la energía\'','','8-475-1024','FIE','PC','2018-02-10',2,'WSD'),(20,'T','Diseño y construcción del sistema didáctico SD-88 basado en el microprocesador INTEL8088','','PE-14-5298','FISC','PC','2018-07-26',4,'WSP'),(21,'T','Nuevo método computacional para el estudio de flujo de potenciaaa','Descripción del trabajo de graduación','8-475-1024','FISC','PC','2018-07-26',2,'WSD'),(22,'P','Mantenimiento preventivo en los sistemas de transmisión digital por cables de fibras óptica y microondas.','','5-482-691','FISC','PC','2018-07-26',3,'WSD'),(30,'TP','Implementación de un sistema','Descripción del trabajo de graduación','1-123-11','FISC','PC','2018-08-21',2,'WSP'),(61,'T','Implementación de sistema de registros para hotel FITTUSEIRWEIWIJ','Descripción del trabajo de graduación','1-123-11','FISC','PC','2019-02-27',1,'WSP'),(62,'TP','Análisis, diseño de implementación para sistema de categorización de materiales de construcción para empresa multinacional','mi descripción','1-123-11','FISC','PC','2019-04-26',2,'WSP'),(63,'T','Análisis, diseño de implementación para sistema de categorización de materiales de construcción para empresa multinacional','fdfafafafafafasfafasfasfasfafafasfaf th ergegsf asetsefas','1-123-11','FISC','PC','2019-05-22',3,'WSD'),(64,'TP','Análisis, diseño de implementación para sistema de categorización de materiales de construcción para empresa multinacional','Descripción del traba@fsefse@fasefsesefsefsdg@asdcasdasda.','1-123-11','FISC','PC','2019-05-31',3,'WSP'),(65,'T','AngularAgility sample 5','La descripción de mi tema para trabajo de graduación','1-123-11','FISC','PC','2020-02-28',1,'WSD'),(66,'T','AngularAgility sample 5','La descripción de mi tema para trabajo de graduación','1-123-11','FISC','PC','2020-02-28',1,'WSP'),(67,'T','AngularAgility sample 5','La descripción de mi tema para trabajo de graduación','1-123-11','FISC','PC','2020-02-28',2,'WSD');
/*!40000 ALTER TABLE `graduation_works` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `work_code` int(11) NOT NULL,
  `faculty` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `career` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`,`work_code`),
  KEY `fk_work_code_idx` (`work_code`),
  CONSTRAINT `fk_work_code` FOREIGN KEY (`work_code`) REFERENCES `graduation_works` (`work_code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (47,21,'FISC','LDS'),(48,21,'FIM','LMI'),(72,61,'FISC','LDS'),(73,63,'FCT','IA'),(74,63,'FIE','IE'),(75,63,'FIM','LAAOV'),(100,62,'FIC','IC'),(101,62,'FIC','IC'),(130,66,'FISC','ISC'),(131,64,'FIC','IC'),(132,64,'FISC','IS'),(133,64,'FIM','IAN'),(134,30,'FISC','LDS'),(135,30,'FISC','IS'),(136,67,'FIE','IE'),(137,67,'FIE','ICA');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utp_users`
--

LOCK TABLES `utp_users` WRITE;
/*!40000 ALTER TABLE `utp_users` DISABLE KEYS */;
INSERT INTO `utp_users` VALUES (1,'E','Jorge','Girón','8-855-449','jgiron19','kyoshi.giron@gmail.com',NULL,NULL),(2,'E','Yirelki','Jiménez','8-901-1029','test','kyoshi.giron@gmail.com',NULL,NULL),(21,'P','Bruce','Wayne','5-482-691','test','kyoshi.giron@gmail.com',NULL,NULL),(22,'P','Diana','Prince','8-475-1024','test','biologa507@gmail.com',NULL,NULL),(23,'P','Kal','El','PE-14-5298','test','kyoshi.giron@gmail.com',NULL,NULL),(25,'E','Ranger','Rojo','8-855-448','test','kyoshi.giron@gmail.com',NULL,NULL),(81,'P','Harry','Potter','1-123-11','test','kyoshi.giron@gmail.com','FISC','PC'),(82,'E','Greysi','Diaz','1-123-12','test','kyoshi.giron@gmail.com',NULL,NULL),(83,'E','Ariel','Fernandez','E-8-111396','test','kyoshi.giron@gmail.com',NULL,NULL),(84,'E','Marcos','Manuel','DC1234','test','kyoshi.giron@gmail.com','FISC','PC');
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
IN state VARCHAR(3),
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
	us_doc_num = userId COLLATE utf8_spanish_ci;
    
SELECT CURDATE() INTO @today;

INSERT INTO graduation_works (work_type, w_title, work_desc, proponent, faculty, reg_center, creation_date, studentsQty, work_state) 
VALUES (workType, workTitle, workDesc, userId, @facu, @center, CURDATE(), studentCount, state);

SELECT LAST_INSERT_ID() INTO @workCode;

INSERT INTO profiles (work_code,faculty,career)
VALUES (@workCode, faculty1, career1);

IF STRCMP(faculty2,'') != 0 THEN

INSERT INTO profiles (work_code,faculty,career)
VALUES (@workCode, faculty2, career2);

END IF;

IF STRCMP(faculty3,'') != 0 THEN

INSERT INTO profiles (work_code,faculty,career)
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

-- Dump completed on 2020-02-28  1:46:16
