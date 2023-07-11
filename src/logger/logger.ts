import winston from 'winston'
import { Request, Response, NextFunction } from 'express'

const loggerTransporter = winston.createLogger({
    level:"info",
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"logs/api.log"})
    ]
})

export const logger = (req:Request, res:Response, next:NextFunction)=>{
    loggerTransporter.info(`[${req.method}] ${req.url} `)
    next()
}