# CtfBeginnerGuide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Forking the Repository 
When the repository is forked the environment variables have to be exchanged to the new URL and repository owner.
This has to be done in the `enironment.ts` and the `environment.development.ts` file.

There the `owner`, `repo` and `baseURL` have to be exchanged.

If the repository structure is modified the links for loading the templates have to be adjusted. This can be done in the `template.service.ts` file.
Additionally the addTemplatesUrl has to be adjusted in the `templates.component.ts`


### Note:
If these variables don't get changed the application will still function, however the displayed templates will remain from the original repository. 
