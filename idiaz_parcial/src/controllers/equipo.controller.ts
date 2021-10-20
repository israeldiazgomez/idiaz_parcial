import { Request, Response } from "express";
import {Equipo, EquipoI} from '../models/Equipo';

export class EquipoController{
    public async getEquipos(req: Request, res: Response){
        try {
            const equipos = await Equipo.findAll()
            if (!equipos){
                res.status(400).json({msg: 'EQUIPO MALO'})

            }
            return res.status(200).json({equipos})
        } catch (error) {
            res.status(500).json({msg: 'ERROR DETECTADO POR FAVOR REGRESE'})
            
        }
    }
    public async createEquipo(req: Request, res: Response){
        const body: EquipoI = req.body;
        try {
            if((!body.marca && !body.modelo)) return res.status(400).json({msg: 'some data is requeried'})
            const equipoExist: Equipo | null = await Equipo.findOne(
                {
                    where: {marca: body.marca},
                }
            )
            if(equipoExist){
                return res.status(400).json({msg: "producto ya existe ingrese otro "})
            }
            const equipo = await Equipo.create(body);
            res.status(200).json({equipo})
        } catch (error) {
            res.status(500).json({msg: "ERROR AL CREAR"})
        }
    }
    public async borrarEquipo(req: Request, res: Response){
        try {
            const {id} = req.body;
            const response = await Equipo.destroy({
                where: {id: id}
            })
            .then(function(data){
                const res = {success: true, data: data, message: "ejecudado el recorrido"}
                return res;
            })
            .catch(error => {
                const res = { success: false, error: error}
                return res;
            })
            res.json(response);

        } catch (e) {
            console.log(e);
            
        }
    }
}