import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";
import { powerdanger_Reservas } from "./powerdanger_Reservas";



export class powerdanger_Agencias_de_viajes extends Model{
    public idAgencia!: number;
    public nombreAgencia!: string;
    public direccionAgencia!: string;
    public telefonoAgencia!: number;
    public ciudadAgencia!: string;
}

export interface powerdanger_Agencias_de_viajes_I {
    idAgencia: number;
    nombreAgencia: string;
    direccionAgencia: string;
    telefonoAgencia: number;
    ciudadAgencia: string;
}

powerdanger_Agencias_de_viajes.init(
{
    nombreAgencia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    direccionAgencia:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefonoAgencia: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      ciudadAgencia: {
        type: DataTypes.STRING,
        allowNull: false
      }

},{
    tableName: "Agencias",
    sequelize: database,
    timestamps: false
}
);


powerdanger_Agencias_de_viajes.hasMany(powerdanger_Reservas)