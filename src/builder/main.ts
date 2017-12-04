import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BuilderModule } from './app/builder.module';
import { environment } from './environments/environment';

import 'hammerjs';
console.log(__dirname);

platformBrowserDynamic().bootstrapModule(BuilderModule)
    .catch(err => console.log(err));
