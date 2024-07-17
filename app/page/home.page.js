import { PageHolder }  from "../page.holder";
import { header, welcomeBanner, cookiesWindow } from "../../app/component";

export default class HomePage extends PageHolder {
 constructor(page) {
   super(page);
   this.header = header;
   this.welcomeBanner = welcomeBanner;
   this.cookiesWindow = cookiesWindow;
 }

 async open() {
    super.open('#/');
    this.header.expectLoaded();
 }
}



