import { Application } from "express";
import { AgenciasController } from "../controllers/Agencias.controller";
import { CategoriaController } from "../controllers/Categoria.controller";
import { HabitacionController } from "../controllers/Habitacion.controller";
import { HotelesController } from "../controllers/Hoteles.controller";
import { PersonasController } from "../controllers/Personas.controller";
import { ReservasController } from "../controllers/Reservas.controller";



export class AgenciasRoutes{
    public agenciasController: AgenciasController = new AgenciasController();

    public routes(app: Application): void {
        app.route("/Agencias").get(this.agenciasController.getAllpowerdanger_Agencias_de_viajes)
    }
}


export class CategoriaRoutes{
    public categoriaController: CategoriaController = new CategoriaController();

    public routes(app: Application): void {
        app.route("/Categorias").get(this.categoriaController.getAllpowerdanger_Categoria)
    }
}

export class HabitacionRoutes{
    public habitacionController: HabitacionController = new HabitacionController();

    public routes(app: Application): void {
        app.route("/Habitacion").get(this.habitacionController.getAllpowerdanger_Habitacion)
    }
}

export class HotelesRoutes{
    public hotelesController: HotelesController = new HotelesController();

    public routes(app: Application): void {
        app.route("/Hoteles").get(this.hotelesController.getAllpowerdanger_Hoteles)
    }
}

export class PersonasRoutes{
    public personasController: PersonasController = new PersonasController();

    public routes(app: Application): void {
        app.route("/Personas").get(this.personasController.getAllpowerdanger_Personas)
    }
}

export class ReservasRoutes{
    public reservasController: ReservasController = new ReservasController();

    public routes(app: Application): void {
        app.route("/Reservas").get(this.reservasController.getAllpowerdanger_Reservas)
    }
}