import type { Request, Response, NextFunction } from "express";
import type { z } from "zod";

// ZodObject, ZodEffects, ...
type AnyZodSchema = z.ZodTypeAny;

export function validate(schema: {
  body?: AnyZodSchema;
  query?: AnyZodSchema;
  params?: AnyZodSchema;
}) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        req.body = schema.body.parse(req.body);
      }
      if (schema.query) {
        req.query = schema.query.parse(req.query) as any;
      }
      if (schema.params) {
        req.params = schema.params.parse(req.params) as any;
      }
      next();
    } catch (error) {
      next(error); // errorHandler middleware sẽ tự động catch ZodError
    }
  };
}
