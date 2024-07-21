import { PageHolder }  from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../../app/component";
/**
   * @param {import('@playwright/test').Page} page
   */

export class HomePage extends PageHolder {
 constructor(page) {
   super()
   this.page = page

   this.header = new Header(this.page);
   this.welcomeBanner = new WelcomeBanner(this.page);
   this.cookiesWindow = new CookiesWindow(this.page);
 }

 async open() {
   await super.open('#/');
   await this.header.expectLoaded();
 }
}



