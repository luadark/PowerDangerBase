import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";
import { powerdanger_Categoria } from "./powerdanger_Categoria";
import { powerdanger_Reservas } from "./powerdanger_Reservas";
import { powerdanger_Habitacion } from "./powerdanger_Habitacion";


export class powerdanger_Hoteles extends Model{
    public idtHoteles!: number;
    public nitHoteles!: number;
    public nombreHoteles!: string;
    public direccionHoteles!: string;
    public añodeconstruccionHoteles!: Date;
}

export interface powerdanger_Hoteles_I {
    idtHoteles: number;
    nitHoteles: number;
    nombreHoteles: string;
    direccionHoteles: string;
    añodeconstruccionHoteles: Date;
}

powerdanger_Hoteles.init(
    {
        nitHoteles:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        nombreHoteles:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccionHoteles:{
            type: DataTypes.STRING,
            allowNull: false
        },
        añodeconstruccionHoteles:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    
    },{
        tableName: "Hoteles",
        sequelize: database,
        timestamps: false
    }
    );

  powerdanger_Hoteles.hasMany(powerdanger_Reservas)
  powerdanger_Hoteles.hasMany(powerdanger_Habitacion)
    