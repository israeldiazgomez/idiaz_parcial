import  {request, Response, Application}  from "express";
import { EquipoController } from "../controllers/equipo.controller";
export class EquipoRoutes{
    public equipoController: EquipoController = new EquipoController();
    public routes(app: Application): void {
        app.route('/equipos').get(this.equipoController.getEquipos)
        app.route('/borrarequipos').delete(this.equipoController.borrarEquipo)
        app.route('/createequipos').post(this.equipoController.createEquipo)
    }
}