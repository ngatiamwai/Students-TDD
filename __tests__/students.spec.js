import request from 'supertest';
import app from '../server'; 

describe('Students', () => {
    it('should fetch all students', async () => {
        const res = await request(app).get('/students');
        expect(res.status).toBe(200);
        expect(res.body.students).toBeInstanceOf(Array);
    });

    it('should fetch a single student', async () => {
        const studentId = 1; 
        const res = await request(app).get(`/students/${studentId}`);
        expect(res.status).toBe(200);
        expect(res.body.student).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                class: expect.any(String),
                feeBalance: expect.any(Number)
            })
        );
    });

    it('should return an error if student is not found', async () => {
        const nonExistentStudentId = 'uih1'; 
        const res = await request(app).get(`/students/${nonExistentStudentId}`);
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Student not found');
    });
});
