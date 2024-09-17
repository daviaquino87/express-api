import { Request, Response, NextFunction } from "express";
import { InternalError } from "../errors/internal-error";
import { Logger } from "../config/logger";

export const verifyError = (
  err: Error | InternalError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof InternalError) {
    const { code, message } = err;
    return res.status(code).json({ message });
  }

  const { message } = err;
  Logger.error(message, {
    userIp: req.ip,
    status: 500,
    timestamp: new Date().toISOString(),
  });
  return res.status(500).json({ message });
};
