import { Router } from "express";

import { createStudents} from "../Controllers/students.js";

const studentRouter = Router()

studentRouter.get('/', createStudents)
// studentRouter.get('/students/:id', getStudents)


export default studentRouter