import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from "../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      "Authorization": "Bearer " + environment.GH_API_KEY,
      "X-GitHub-Api-Version": "2022-11-28"
    }
  })

  return next(req);
};
