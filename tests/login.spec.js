import { HomePage, LoginPage } from '../app/page/index';
import { createUser } from '../app/helper/user.helper';
import { test, expect } from '@playwright/test';

test.describe('Main page', () => {

 test('ID-1 - Login via existing user', async ({ page, request }) => {
  const userData = await createUser(request)
  console.log(userData)
  const homePage = new HomePage(page)
  const loginPage = new LoginPage(page)
  await homePage.open();
  await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
  await homePage.cookiesWindow.clickDismissCookiesButton();

  await homePage.header.clickAccountButton();
  await homePage.header.clickLoginButton();
  await expect(await homePage.header.getLoginButton()).toBeHidden();
  await loginPage.setEmailField(userData.data.email);
  await loginPage.setPasswordField('superSecretPassword!!!');
  await loginPage.clickSubmitBtn();
  await loginPage.header.expectLoaded();
  await expect(await loginPage.header.getBasket()).toBeVisible();
 });
});