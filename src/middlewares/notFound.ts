import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: `🚫 Oops! Route Not Found! 😕\nWe couldn't find ${req.originalUrl}. Please check the URL and try again! 🔍`,
  });
};
export default notFound;
