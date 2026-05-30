import type { Request, Response } from "express";

import { TransactionsService } from "./transactions.service.js";


export class TransactionsController {
    constructor(
        private transactionsServices = new TransactionsService()
    ) { }

    createTransaction = async ( req: Request, res: Response ) => {}
    findAll = async ( req: Request, res: Response ) => {}
    findById = async ( req: Request, res: Response ) => {}
    update = async ( req: Request, res: Response ) => {}
    remove = async ( req: Request, res: Response ) => {}
}