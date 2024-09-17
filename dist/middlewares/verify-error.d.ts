import { Request, Response, NextFunction } from "express";
import { InternalError } from "../errors/internal-error";
export declare const verifyError: (err: Error | InternalError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
