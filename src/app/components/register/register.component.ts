import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
      this.formReg = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
  }
  ngOnInit(): void {
  }



//aca boton de registrar 
  onSubmit(){
    this.userService.register(this.formReg.value)
    .then(Response => {
      console.log(Response);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }

}