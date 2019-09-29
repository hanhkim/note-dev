import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/authen/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    errLogingMessage: string = '';
    errBoolean: boolean = false;

    constructor(
        private authService: AuthenticationService,
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {
        if (this.loginForm.invalid) {
            this.errBoolean = true;
            this.errLogingMessage = "Username and Password not empty!"; 
            return;
        }

        this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
            .subscribe(data => {
                if (data) {
                    this.errBoolean = false;
                    this.router.navigate(['/dashboard']);
                }
            }, err => {
                this.errBoolean = true;
                this.errLogingMessage = "Username or Password wrong!"; 
            });
    }
}
