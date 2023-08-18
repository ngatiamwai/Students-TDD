const mssql = require('mssql')
const { sqlConfig } = require('../../Config/config')

const createTableStudent = async (req, res) => {
    try {
        const table = `
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
        `
        const pool = await mssql.connect(sqlConfig)
        await pool.query(table, (err) => {
            if (err instanceof mssql.RequestError) {
                console.log({ Error: err.message })
            } else {
                console.log('StudentTable Created as success')
            }
        })
    } catch (error) {
        return res.json({ Error: error })
    }
}
module.exports = {
    createTableStudent,
}