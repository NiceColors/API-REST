// import { Request, Response, NextFunction } from "express";
// import * as jwt from "jsonwebtoken";
// 
// export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
//   const token = <string>req.headers["auth"];
//   let jwtPayload;
// 
//   try {
//     jwtPayload = <any>jwt.verify(token, 'secret');
//     res.locals.jwtPayload = jwtPayload;
//   } catch (error) {
//     res.status(401).send();
//     return;
//   }
// 
//   const { userId, username } = jwtPayload;
//   const newToken = jwt.sign({ userId, username }, 'secret', {
//     expiresIn: "1h"
//   });
//   res.setHeader("token", newToken);
// 
//   next();
// };