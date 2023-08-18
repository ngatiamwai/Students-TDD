CREATE
OR ALTER PROCEDURE createStudentProc(
    @StudentId VARCHAR(100),
    @StudentName VARCHAR(50),
    @studentClass VARCHAR(50),
    @studentFees VARCHAR(50)
) AS BEGIN
INSERT INTO
    StudentTable(StudentId, StudentName, studentClass, studentFees)
VALUES
    (
        @StudentId,
        @StudentName,
        @studentClass,
        @studentFees
    )
END;

SELECT
    *
FROM
    StudentTable

    