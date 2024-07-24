import { App } from "../page.holder";
import { Header, WelcomeBanner, CookiesWindow } from "../../app/component";

export class HomePage extends App {
 constructor(page) {
  super(page)
  this.header = new Header(this.page);
  this.welcomeBanner = new WelcomeBanner(this.page);
  this.cookiesWindow = new CookiesWindow(this.page);
 }

 async open() {
  await super.open('#/');
  await this.header.expectLoaded();
 }
}



