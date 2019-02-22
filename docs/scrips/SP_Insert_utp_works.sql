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

END