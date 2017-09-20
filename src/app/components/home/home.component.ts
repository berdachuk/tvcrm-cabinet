import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

import * as models from './../../client/model/models';
import {CabinetApi} from "../../client/api/CabinetApi";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cabinetAccountInfo:models.CabinetAccountInfo = null;

    constructor(private authService:AuthService,
                private cabinetApi:CabinetApi,
                public router:Router,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.cabinetAccountInfo = new models.CabinetAccountInfo();

        this.cabinetApi.getAccountInfo(this.authService.authorizationDetails.token.apiKey).subscribe(
            (cabinetAccountInfo) => {
                if (cabinetAccountInfo) {
                    this.cabinetAccountInfo = cabinetAccountInfo
                }
            }
        )
    }

    logout() {
        this.authService.logout();
        const redirect = '/login';
        // Redirect to login
        this.router.navigate([redirect]);
    }
}
