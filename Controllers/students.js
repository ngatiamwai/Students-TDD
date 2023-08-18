import mssql from 'mssql';
import { sqlConfig } from '../Config/config';

export const createStudents = async (req, res) => {
    try {
        const studentId=v4()

        const {studentName,studentClass,studentFees}=req.body

        const {error}=studentRegisterValidator.validate(req.body)

        const pool = await mssql.connect(sqlConfig);
        const result = (await pool.request()
            .input('studentId',studentId)
            .input('studentName',studentName)
            .input('studentFees',studentFees)
            .input('studentClass',studentClass)
            .execute('createStudentProc'))
            console.log(result.rowsAffected);
            if (result.rowsAffected[0] == 1){
                return res.status(200).json({message:"student Registered Succesful"})
            }else{
                return res.status(400).json({message:"Error Registering student"})
            }
    } catch (error) {
        console.error('Error fetching students:', error.message);
        res.status(500).json({
            error: 'Error fetching students'
        });
    }
};
