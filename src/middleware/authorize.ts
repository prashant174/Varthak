import { Request, Response, NextFunction } from 'express';
import { Role } from '../models/UserModel';

export const authorize = (requiredRoles: Role[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const role = req.body.role
        const hasRequiredRole = requiredRoles.some((role) => role.includes(role));
        if (requiredRoles.some((role) => role.includes(role))) {
          next();
        }else{
          res.status(200).send({ msg: 'you are not authorized' });
        }
      } catch (err) {
        res.status(401).send({ msg: "Something went wrong please try again" });
      }
    };
  };
  