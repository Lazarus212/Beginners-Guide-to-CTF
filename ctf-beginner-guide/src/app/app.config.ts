import {APP_INITIALIZER, ApplicationConfig} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import {provideHttpClient} from "@angular/common/http";
import {TemplateService} from "./shared-services/template.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(),{
    provide:APP_INITIALIZER,
    useFactory: ((templateService: TemplateService) => () => {templateService.loadTemplates()}),
    deps:[TemplateService],
    multi:true
  }],
};
