import base from '@playwright/test'
import { AuthController } from '../api/index'
import { regNewUserDate } from '../app/data/user.data'
import { HomePage, LoginPage } from '../app/page/index'


export const loginWithNewUser = base.test.extend({
 storageState: {
  cookies: [],
  origins: [],
},
 authController: async ({request }, use) => {
  const authController = new AuthController(request);
  const userData  = await authController.createNewUser(regNewUserDate);
  await use({ authController, userData });
 },
 homePage: async ({ page }, use) => {
  const homePage = new HomePage(page)
  await use(homePage);
 },
 loginPage: async ({ page }, use) => {
 const loginPage = new LoginPage(page)
 await use(loginPage);
 },
 userData: async ({ authController }, use) => {
  const userData = authController.userData.data; // Получение userData из authController
  await use(userData);
},
});

export const expect = base.expect;

