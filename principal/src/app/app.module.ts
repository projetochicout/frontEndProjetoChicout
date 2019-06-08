import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { DCComponent } from './dc/dc.component';
import { RegataComponent } from './regata/regata.component';
import { MoletonComponent } from './moleton/moleton.component';
import { SobreComponent } from './sobre/sobre.component';
import { IronComponent } from './iron/iron.component';
import { CapitaoComponent } from './capitao/capitao.component';
import { ThorComponent } from './thor/thor.component';
import { GrootComponent } from './groot/groot.component';
import { ViuvaComponent } from './viuva/viuva.component';
import { EstranhoComponent } from './estranho/estranho.component';
import { AranhaComponent } from './aranha/aranha.component';
import { HulkComponent } from './hulk/hulk.component';
import { SuperManComponent } from './super-man/super-man.component';
import { BatmanComponent } from './batman/batman.component';
import { MaravilhaComponent } from './maravilha/maravilha.component';
import { AquamanComponent } from './aquaman/aquaman.component';
import { FlashComponent } from './flash/flash.component';
import { VerdeComponent } from './verde/verde.component';
import { GaviaoComponent } from './gaviao/gaviao.component';
import { ShazanComponent } from './shazan/shazan.component';
import { Regata01Component } from './regata01/regata01.component';
import { Regata02Component } from './regata02/regata02.component';
import { Regata03Component } from './regata03/regata03.component';
import { Regata04Component } from './regata04/regata04.component';
import { Moleton01Component } from './moleton01/moleton01.component';
import { Moleton02Component } from './moleton02/moleton02.component';
import { Moleton03Component } from './moleton03/moleton03.component';
import { Moleton04Component } from './moleton04/moleton04.component';
import { CompraComponent } from './compra/compra.component';
import { FinalComponent } from './final/final.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    DCComponent,
    RegataComponent,
    MoletonComponent,
    SobreComponent,
    IronComponent,
    CapitaoComponent,
    ThorComponent,
    GrootComponent,
    ViuvaComponent,
    EstranhoComponent,
    AranhaComponent,
    HulkComponent,
    SuperManComponent,
    BatmanComponent,
    MaravilhaComponent,
    AquamanComponent,
    FlashComponent,
    VerdeComponent,
    GaviaoComponent,
    ShazanComponent,
    Regata01Component,
    Regata02Component,
    Regata03Component,
    Regata04Component,
    Moleton01Component,
    Moleton02Component,
    Moleton03Component,
    Moleton04Component,
    CompraComponent,
    FinalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
