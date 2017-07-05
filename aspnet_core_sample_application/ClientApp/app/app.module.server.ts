import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { sharedConfig } from "./app.module.shared";

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,
        NoopAnimationsModule,
        ...sharedConfig.imports
    ]
})
export class AppModule {
}
