import {Component, OnInit} from "@angular/core";
import {NavbarService} from "../../../services/navbar/navbar.service";
import {FooterService} from "../../../services/footer/footer.service";
import {Router} from "@angular/router";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

@Component({
    selector: 'admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
    
    public dashboard: boolean = true;
    public pashmina: boolean = false;
    
    constructor(
        private nav: NavbarService,
        private footer: FooterService,
        private router: Router
    ) {  }
    
    ngOnInit() {
        this.nav.hide();
        this.footer.hide();
        
        if (!localStorage.getItem("adminDetails")) {
            this.router.navigate(['/admin/login']);
        }
        
    }
    
    private logout() {
        localStorage.clear();
        this.router.navigate(['admin/login']);
    }
    
    private goToPashmina() {
        this.dashboard = false;
        this.pashmina = true;
    }
    
    goToDashboard() {
        this.dashboard = true;
        this.pashmina = false;
    }
    
}