import  {request, Response, Application}  from "express";
import { MantenimientoController } from "../controllers/mantenimiento.controller";
export class MantenimientoRoutes{
    public equipoController: MantenimientoController = new MantenimientoController();
    public routes(app: Application): void {
        app.route('/mantenimientos').get(this.equipoController.getMantenimientos)
        app.route('/borrarmantenimientos').delete(this.equipoController.borrarMantenimiento)
        app.route('/createmantenimientos').post(this.equipoController.createMantenimiento)
    }
}