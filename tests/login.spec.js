import { HomePage, LoginPage } from '../app/page/index';
import { createUser } from '../app/helper/user.helper';
import { test, expect } from '@playwright/test';

test.describe('Main page', () => {

 test.beforeAll(async ({ request }) => {
  await createUser(request);
 });

 test.beforeEach(async ({ page }) => {

 });

 test('ID-1 - Login via existing user', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginPage = new LoginPage(page)
  await homePage.open();
  await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
  await homePage.cookiesWindow.clickDismissCookiesButton();


  const userData = process.env.NEW_USER_DATA;
  await homePage.header.clickAccountButton();
  await homePage.header.clickLoginButton();
  await expect(homePage.header.getLoginButton()).toBeHidden();
  await loginPage.setEmailField(userData.email);
  await loginPage.setPasswordField(userData.password);
  await loginPage.clickSubmitBtn();
  await loginPage.header.expectLoaded();
  await expect(loginPage.header.getBasket()).toBeVisible();
 });
});