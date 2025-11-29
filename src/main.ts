import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Request } from './app/request/request';

bootstrapApplication(Request, appConfig)
  .catch((err) => console.error(err));
