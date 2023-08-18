BEGIN 
TRY 
CREATE TABLE studentTable(
    studentId VARCHAR(100) PRIMARY KEY,
    studentName VARCHAR(100)  NOT NULL,
    studentClass VARCHAR(100)  NOT NULL,
    studentFees VARCHAR (15)  NOT NULL,
    role VARCHAR (20) DEFAULT 'student' 
)
END TRY
BEGIN 
CATCH 
THROW 50001,'Table has already been created',1
END 
CATCH 
 select * from studentTable

-- DROP TABLE userTable 
-- DROP TABLE projectTable

