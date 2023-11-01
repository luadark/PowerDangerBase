import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";


export class powerdanger_Habitacion extends Model{
    public idHabitacion!: number;
    public codigoHabitacion!: number;
    public tiposHabitaciones!: string;
}

export interface powerdanger_Habitacion_I {
    idHabitacion: number;
    codigoHabitacion: number;
    tiposHabitaciones: string;
}

powerdanger_Habitacion.init(
    {
        codigoHabitacion: {
            type: DataTypes.BIGINT,
            allowNull: false
          },
        tiposHabitaciones:{
            type: DataTypes.STRING,
            allowNull: false
        }
    
    },{
        tableName: "Habitacion",
        sequelize: database,
        timestamps: false
    }
    );