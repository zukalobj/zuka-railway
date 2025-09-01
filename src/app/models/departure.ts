import { train } from "./train";


export class Departure {
    id!:number;
    source!:string;
    destination!:string;
    date!:string;
    trains!:train[]
}