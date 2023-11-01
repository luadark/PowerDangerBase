import { DataTypes, Model } from "sequelize";
import { database } from "../database/db";


export class powerdanger_Reservas extends Model{
    public idReservas!: number;
    public numerodereservaReservas!: number;
    public fechaingresoReservas!: Date;
    public fechasalidaReservas!: Date;
}

export interface powerdanger_Reservas_I {
    idReservas: number;
    numerodereservaReservas: number;
    fechaingresoReservas: Date;
    fechasalidaReservas: Date;
}

powerdanger_Reservas.init(
    {
        numerodereservaReservas: {
            type: DataTypes.BIGINT,
            allowNull: false
          },
        fechaingresoReservas:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        fechasalidaReservas:{
            type: DataTypes.BIGINT,
            allowNull: false
        }
    
    },{
        tableName: "Reservas",
        sequelize: database,
        timestamps: false
    }
    );