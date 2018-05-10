// import { NextFunction, Request, Response } from 'express';
// import { LanguagesModel } from '../models/languages.model';

// export const languagesMenu: (req: Request, res: Response, next: NextFunction) => void =
//   async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const languages = await new LanguagesModel().getLanguages({});
//       req.params.languages = languages.map((language: any) => {
//         const currentLang = language.name.toLowerCase();
//         if (currentLang === req.params.lang) {
//           language.active = 'active';
//         }
//         language.href = req.params.id === null
//           ? `/${currentLang}/courses`
//           : `/${currentLang}/courses/${req.params.id}`;
//         return language;
//       });
//       return next();
//     } catch (err) {
//       // tslint:disable-next-line
//       console.log(err);
//       return next(err);
//     }
//   };
