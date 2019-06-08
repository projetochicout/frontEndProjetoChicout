import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [

  {path: 'produto' , component: ProdutoComponent},

  {path: 'dc' , component: DCComponent},

  {path: 'regata' , component: RegataComponent},

  {path: 'moleton' , component: MoletonComponent},

  {path: 'sobre' , component: SobreComponent},

  {path: 'iron' , component: IronComponent},

  {path: 'capitao' , component: CapitaoComponent},

  {path: 'thor' , component: ThorComponent},

  {path: 'groot' , component: GrootComponent},

  {path: 'viuva' , component: ViuvaComponent},

  {path: 'estranho' , component: EstranhoComponent},

  {path: 'aranha' , component: AranhaComponent},

  {path: 'hulk' , component: HulkComponent},

  {path: 'super-man' , component: SuperManComponent},

  {path: 'batman' , component: BatmanComponent},

  {path: 'maravilha' , component: MaravilhaComponent},

  {path: 'aquaman' , component: AquamanComponent},

  {path: 'flash' , component: FlashComponent},

  {path: 'verde' , component: VerdeComponent},

  {path: 'gaviao' , component: GaviaoComponent},

  {path: 'shazan' , component: ShazanComponent},

  {path: 'regata01' , component: Regata01Component},

  {path: 'regata02' , component: Regata02Component},

  {path: 'regata03' , component: Regata03Component},

  {path: 'regata04' , component: Regata04Component},

  {path: 'moleton01' , component: Moleton01Component},

  {path: 'moleton02' , component: Moleton02Component},

  {path: 'moleton03' , component: Moleton03Component},

  {path: 'moleton04' , component: Moleton04Component},

  {path: 'compra' , component: CompraComponent},

  {path: 'final' , component: FinalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
