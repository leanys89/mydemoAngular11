import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarTransaccionComponent } from './editar-transaccion/editar-transaccion.component';



const routes: Routes = [
    { path: 'editar-transaccion/:id', component: EditarTransaccionComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Gestion_TransaccionRoutingModule {}