import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userName: string = '';
  password: string = '';

constructor (private router: Router,
  private loginService: LoginService
) {

};

ngOnInit(): void {}

login() {
  console.log(this.userName);
  console.log(this.password);
  // this.router.navigateByUrl('home');
  this.loginService
      .login(this.userName, this.password)
      .subscribe((response: any) => {
        if (response.status) {
          this.router.navigateByUrl('home');
        }
      });
}

}
