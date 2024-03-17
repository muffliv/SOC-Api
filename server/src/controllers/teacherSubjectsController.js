import express from "express";
import db from "../services/teacherSubjectsService.js"
const routes = express.Router()

routes.get('/:id', async (request, response) => {

    const id = request.params.id;
    try {
        const profMat = await db.getTeacherSubjects(id);

        if(profMat.length > 0){
            return response.status(200).send({message: profMat})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

routes.get('/prof/:id', async (request, response) => {

    const id = request.params.id;
    try {
        const profMat = await db.getTeacherInfo(id);

        if(profMat.length > 0){
            return response.status(200).send({message: profMat})
        }
        else{
            return response.status(204).end();
        }

    } catch(err){
        response.status(500).send({message: `Erro ao buscar os dados. ${err}`});
    }
});

export default routes;