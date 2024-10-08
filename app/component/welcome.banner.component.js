import { Component } from "../page.holder";

export class WelcomeBanner extends Component{
 constructor(page) {
  super(page)
 }

 get closeWelcomeBannerButton() {
  return this.page.locator('button[aria-label="Close Welcome Banner"]');
 }

 async clickCloseWelcomeBannerButton() {
  await this.closeWelcomeBannerButton.click();
 }
}

