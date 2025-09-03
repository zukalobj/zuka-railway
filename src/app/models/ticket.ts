import { Train } from "./train";

export class Ticket{
     id!:string;
    phone!: string;
    email!: string;
    date: string | undefined;
    ticketPrice!: number;
    trainID: number | undefined;
    confirmed!: boolean;
    train!: Train[];
}