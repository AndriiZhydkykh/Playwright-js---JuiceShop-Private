import { loginWithNewUser, expect } from '../fixture/login.fixture';
import { regNewUserDate } from '../app/data/user.data';

loginWithNewUser('example test', async ({ homePage, loginPage, authController, userData }) => {
  console.log(userData); // Данные пользователя из ответа
  await homePage.open();
  await homePage.welcomeBanner.clickCloseWelcomeBannerButton();
  await homePage.cookiesWindow.clickDismissCookiesButton();

  await homePage.header.clickAccountButton();
  await homePage.header.clickLoginButton();
  await expect(await homePage.header.getLoginButton()).toBeHidden();

  await loginPage.setEmailField(userData.email);
  await loginPage.setPasswordField(regNewUserDate.password);
  await loginPage.clickSubmitBtn();
  await loginPage.header.expectLoaded();
  await expect(await loginPage.header.getBasket()).toBeVisible();
});
