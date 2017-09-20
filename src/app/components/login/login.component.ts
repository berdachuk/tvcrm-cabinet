import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from './passwordValidator';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    message:string;

    form:FormGroup;

    constructor(fb:FormBuilder,
                public authService:AuthService,
                public router:Router) {
        this.form = fb.group({
            accountNo: ['', Validators.required],
            password: ['', Validators.compose([Validators.required,
                PasswordValidator.cannotContainSpace])]
        })
    }

    ngOnInit() {
    }

    login() {
        this.message = 'Trying to log in ...';
        this.authService.login(
            this.form.controls['accountNo'].value,
            this.form.controls['password'].value
        ).subscribe(
            (data) => {
                this.authService.authorizationDetails = data
                this.message = '';
                if (this.authService.isLoggedIn()) {
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    const redirect = this.authService.redirectUrl
                        ? this.authService.redirectUrl : '/home';

                    // Redirect the user
                    this.router.navigate([redirect]);
                } else {
                    this.form.controls['password'].setErrors({
                        invalidLogin: true
                    });
                }
            }, (err:Response) => {
                console.error(err);
                if ((err.status == 0) || (err.status >= 500)) {
                    this.message = "Can't connect to REST server";
                } else {
                    this.message = "Unauthorized";
                }
            }
        );
    }

}
