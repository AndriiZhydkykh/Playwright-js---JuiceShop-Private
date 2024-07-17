export default class PageHolder {
 constructor(page) {
  this.page = page;
 }

 async open(url) {
  await this.page.goto(url);
 }
}






