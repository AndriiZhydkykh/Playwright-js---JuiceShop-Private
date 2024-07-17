import { authController } from '../api/index'
import { homePage, loginPage } from '../page/index'
export class UsersHelper {
  
  createUser() {
    const newEmail = `test${crypto.randomUUID()}@test.com`

    cy.fixture('auth/new.user.json').then((user) => {
      const userData = {
        ...user,
        email: newEmail
      };

      authController.createNewUser(userData).then((response) => {
        expect(response.status).to.eq(201);
        Cypress.env('newUserData', userData);
      });

    });
  }

 signInAsNewUser(email, password) {
    cy.session([email, password], () => {
      loginPage.open()
      loginPage.welcomeBanner.clickCloseWelcomeBannerButton()
      loginPage.cookiesWindow.clickDismissCookiesButton()
      loginPage.setEmailField(email)
      loginPage.setPasswordField(password)
      loginPage.clickSubmitBtn()
      homePage.header.expectLoaded()
      homePage.header.getBasket().should('be.visible')
    }, {
      /* validate() {
        app.homePage.open()
        app.homePage.header.getBasket().should('be.visible')
      }, */
      cacheAcrossSpecs: true,

    })
  }

}

