import { homePage, loginPage } from '../app/page/index'
import { usersHelper} from '../app/helper/index'

describe('Main page', () => {
  before(() => {
    usersHelper.createUser()
  })
  beforeEach(() => {
    homePage.open()
    homePage.welcomeBanner.clickCloseWelcomeBannerButton()
    homePage.cookiesWindow.clickDismissCookiesButton()
  })
  it('ID-1 - Login via existing user', () => {
    const userData = Cypress.env('newUserData');
    homePage.header.clickAccountButton()
    homePage.header.clickLoginButton()
    homePage.header.getLoginButton().should('not.exist')
    loginPage.setEmailField(userData.email)
    loginPage.setPasswordField(userData.password)
    loginPage.clickSubmitBtn()
    loginPage.header.expectLoaded()
    loginPage.header.getBasket().should('be.visible')
  })
})

