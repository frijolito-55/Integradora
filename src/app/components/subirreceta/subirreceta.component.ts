import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-subirreceta',
  templateUrl: './subirreceta.component.html',
  styleUrls: ['./subirreceta.component.css']
})

export class SubirrecetaComponent implements OnInit{

  constructor(
    //error storage
    private storage: Storage,
    //no muestra la interfaz receta
    private userService: UserService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  }

  Subirpdf($event: any){
    const file = $event.target.files[0];
    console.log(file);
    //marcamos la referencia de donde se sube la imagen
    const pdfRef = ref(this.storage, `images/${file.name}`);

    
    //aca se sube la imagen realmete 
    uploadBytes(pdfRef, file)
      .then(response => console.log(response))
      .catch(error => console.log(error)); 
    
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));

  }

}


