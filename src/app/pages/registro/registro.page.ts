import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService, Registro } from 'src/app/services/data.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
    registros: Registro[] = [];
    newRegistro: Registro = <Registro>{};
    
    @ViewChild('miList')miList :IonList; 

    constructor(private storageService:DataService,
      private plt: Platform, private toastController: ToastController)
      {
        this.plt.ready().then(()=>{
          this.loadDatos();
      });
    }
  
  

    ngOnInit() {
    }
  
  //get
    loadDatos(){
      this.storageService.getDatos().then(datos=>{
        this.registros=datos;
      });
    }
  
     //create
    addDatos(){
      this.newRegistro.modified = Date.now();
      this.newRegistro.id = Date.now();
      this.storageService.addDatos(this.newRegistro).then(dato=>{
        this.newRegistro = <Registro>{};
        this.showToast('!Datos Agregados');
        this.loadDatos();
      });
    }
  
    //update
    updateDatos(dato: Registro ){
      dato.nom = `UPDATED: ${dato.nom}`;
      dato.modified = Date.now();
      this.storageService.updateDatos(dato).then(item=>{
        this.showToast('Elemento actualizado!')
        this.miList.closeSlidingItems();
        this.loadDatos();
      });
    } 
    //delete
    deleteDatos(dato: Registro){
      this.storageService.deleteDatos(dato.id).then(item=>{
        this.showToast('Elemento eliminado');
        this.miList.closeSlidingItems();
        this.loadDatos();
     });
   }
  
    async showToast(msg){
      const toast = await this.toastController.create({
      message: msg, 
        duration: 2000
      });
      toast.present();
    }

  }

