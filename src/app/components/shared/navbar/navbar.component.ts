import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../servicios/auth.service';
import { CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private auth:Auth, private cookieService:CookieService) {}


  /** public setCookie(name: string, value: string, expireDays: number, path: string = '') {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = `expires=${d.toUTCString()}`;
        let cpath:string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
**/
  ngOnInit() {
  //   this.setCookie('cookie', 'hola', 5,);
  }

}
