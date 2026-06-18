import { Routes } from '@angular/router';
import { Vagas } from './view/vagas/vagas';
import { Inicio } from './view/inicio/inicio';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { CurriculoListComponent } from './view/curriculos/curriculos-detail/curriculo-list/curriculo-list';
import { CurriculoFormComponent } from './view/curriculos/curriculo-form/curriculo-form';
import { CurriculoDetail } from './view/curriculos/curriculos-detail/curriculo-detail';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'vagas', component: Vagas },
  { path: 'painel-vagas', component: PainelVagas },
  { path: 'curriculos', component: CurriculoListComponent },
  { path: 'curriculos/novo', component: CurriculoFormComponent },
  { path: 'curriculos/editar/:id', component: CurriculoFormComponent },
  { path: 'curriculos/:id', component: CurriculoDetail },
];
