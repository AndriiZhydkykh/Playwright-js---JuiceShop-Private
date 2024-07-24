import { UserProfilePage, LoginPage, HomePage } from '../../app/page/index'
import { staticUsers } from '../../app/data/user.data'
import { test, expect } from '@playwright/test';

test.describe('Sign in as existing user', () => {
 const user = staticUsers.buyers.testingTalk

 test('ID-1 - Sign as existing user', async ({page}) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)

  await loginPage.open()
  await loginPage.welcomeBanner.clickCloseWelcomeBannerButton()
  await loginPage.cookiesWindow.clickDismissCookiesButton()
  await loginPage.setEmailField(user.email)
  await loginPage.setPasswordField(user.password)
  await loginPage.clickSubmitBtn()
  await homePage.header.expectLoaded()
  await expect (await homePage.header.getBasket()).toBeVisible()
 })

 test('ID-2 - Visit user profile page', async ({page}) => {
  const userProfilePage = new UserProfilePage(page)
  await userProfilePage.open()
  await expect(await userProfilePage.getEmailField()).toHaveText(user.email)
 })

})

