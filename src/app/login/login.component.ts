import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((res) => {
      console.log(res);
      this.router.navigate(['dashboard']);
    }).catch((err) => {
      alert(err.message);
    })
  }

}
