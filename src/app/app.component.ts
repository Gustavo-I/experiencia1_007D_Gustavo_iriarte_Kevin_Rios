import { Component } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  


  componentes : Componente[] =[
    {
      icon: 'sunny-outline', 
      name: 'Mis Tarjetas', 
      redirecTo: '/suscripcion'
    },
    {
      icon: 'alarm-outline', 
      name: 'Noticias', 
      redirecTo: '/noticias'
    },
    {
      icon: 'paw-outline',
      name: 'FAQ', 
      redirecTo: '/action-sheet'
    }

   
   
  ]

}
