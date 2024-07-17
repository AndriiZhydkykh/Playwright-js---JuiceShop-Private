export default class Header {
 constructor(page) {
   this.page = page;
 }

 get logoButton() { return this.page.locator('app-navbar button[aria-label="Back to homepage"]'); }
 get searchButton() { return this.page.locator('app-navbar #searchQuery'); }
 get accountButton() { return this.page.locator('app-navbar button#navbarAccount'); }
 get languageButton() { return this.page.locator('app-navbar button[aria-label="Language selection menu"]'); }
 get languageButtonText() { return this.page.locator('app-navbar button[aria-label="Language selection menu"] span'); }
 get loginButton() { return this.page.locator('button#navbarLoginButton'); }
 get basket() { return this.page.locator('app-navbar button[aria-label="Show the shopping cart"]'); }

 async getLogoButton() {
   return this.logoButton;
 }
 async getSearchButton() {
   return this.searchButton;
 }
 async getAccountButton() {
   return this.accountButton;
 }
 async getLanguageButton() {
   return this.languageButton;
 }
 async getLanguageButtonText() {
   return this.languageButtonText;
 }
 async getLoginButton() {
   return this.loginButton;
 }
 async getBasket() {
   return this.basket;
 }

 async clickLogoButton() {
   await this.logoButton.click();
 }
 async clickSearchButton() {
   await this.searchButton.click();
 }
 async clickAccountButton() {
   await this.accountButton.click();
 }
 async clickLanguageButton() {
   await this.languageButton.click();
 }
 async clickLoginButton() {
   await this.loginButton.click();
 }

 async expectLoaded() {
   await expect(this.getLogoButton()).toBeVisible();
   await expect(this.getSearchButton()).toBeVisible();
   await expect(this.getAccountButton()).toBeVisible();
   await expect(this.getLanguageButton()).toBeVisible();
 }
}

