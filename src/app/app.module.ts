import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { reducer } from './reducer';
import { MyEffects } from './effects';
import { Service } from './service';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({ visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    StoreModule.provideStore( { state: reducer }),
    EffectsModule.run(MyEffects)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
