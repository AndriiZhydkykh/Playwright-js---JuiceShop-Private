export default class LoginPage extends PageHolder {
 constructor(page) {
   super(page);
   this.header = header;
   this.welcomeBanner = welcomeBanner;
   this.cookiesWindow = cookiesWindow;
 }

 get emailField() { return this.page.locator('input#email'); }
 get passwordField() { return this.page.locator('input#password'); }
 get submitBtn() { return this.page.locator('button#loginButton'); }

 async open() {
   await super.open('#/login');
 }

 async setEmailField(text) {
   await this.emailField.fill(text);
 }

 async setPasswordField(text) {
   await this.passwordField.fill(text);
 }

 async clickSubmitBtn() {
   await this.submitBtn.click();
 }
}

