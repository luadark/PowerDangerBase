import { AgenciasRoutes } from './rutas';
import { CategoriaRoutes } from './rutas';
import { HabitacionRoutes } from './rutas';
import { HotelesRoutes } from './rutas';
import { PersonasRoutes } from './rutas';
import { ReservasRoutes } from './rutas';


export class Routes {
    public agenciasRoutes: AgenciasRoutes = new AgenciasRoutes();
    public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
    public habitacionRoutes: HabitacionRoutes = new HabitacionRoutes();
    public hotelesRoutes: HotelesRoutes = new HotelesRoutes();
    public personasRoutes: PersonasRoutes = new PersonasRoutes();
    public reservasRoutes: ReservasRoutes = new ReservasRoutes();
}