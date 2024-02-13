import { RowDataPacket } from "mysql2";

export type User = RowDataPacket & {
    id:number;
    email:number;
    password?:string;
    photoUrl:string;
    name:string;
}