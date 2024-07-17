export default class CookiesWindow {
 constructor(page) {
   this.page = page;
 }

 get dismissCookiesButton() {
   return this.page.locator('a[aria-label="dismiss cookie message"]');
 }

 async clickDismissCookiesButton() {
   await this.dismissCookiesButton.click();
 }
}

 
