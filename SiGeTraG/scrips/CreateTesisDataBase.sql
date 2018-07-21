use sys;

DROP DATABASE IF EXISTS utp_tesis;

CREATE DATABASE utp_tesis;

USE utp_tesis;

-- TABLA DE USUARIOS --
CREATE TABLE utp_users (
  us_id int(11) NOT NULL AUTO_INCREMENT,
  us_type varchar(1) NOT NULL DEFAULT 'E',
  us_fname varchar(45) NOT NULL,
  us_lname varchar(45) NOT NULL,
  us_doc_num varchar(45) NOT NULL,
  us_pass varchar(45) NOT NULL,
  PRIMARY KEY (us_id),
  UNIQUE KEY us_doc_num_UNIQUE (us_doc_num)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- TABLA DE CATÁLOGOS --
CREATE TABLE catalogs (
  ct_id int(11) NOT NULL AUTO_INCREMENT,
  cat_name varchar(45) NOT NULL,
  cat_code varchar(5) NOT NULL,
  PRIMARY KEY (ct_id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- TABLA DE ITEMS DE CATÁLOGOS --
CREATE TABLE catalogs_items (
  cat_code varchar(5) NOT NULL,
  cati_name varchar(200) NOT NULL,
  cati_code varchar(45) NOT NULL,
  cati_code_rel varchar(45) DEFAULT NULL,
  PRIMARY KEY (cat_code,cati_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- TABLA DE TRABAJOS DE GRADUACIÓN --
CREATE TABLE graduation_works (
  work_code int(11) NOT NULL AUTO_INCREMENT,
  work_type char(2) NOT NULL,
  w_title varchar(200) NOT NULL,
  advisor varchar(45) NOT NULL,
  faculty varchar(45) DEFAULT NULL,
  reg_center varchar(45) DEFAULT NULL,
  creation_date date NOT NULL,
  studentsQty int(11) NOT NULL,
  PRIMARY KEY (work_code),
  KEY advisor_idx (advisor),
  CONSTRAINT advisor FOREIGN KEY (advisor) REFERENCES utp_users (us_doc_num) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
