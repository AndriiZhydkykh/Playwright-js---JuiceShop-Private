import { userProfilePage } from '../../app/page/index'
import { usersHelper } from '../../app/helper/index'

describe('User profile page', () => {

 before(() => {
    usersHelper.createUser()
 })

 beforeEach(() => {
  const userData = Cypress.env('newUserData')
  usersHelper.signInAsNewUser(userData.email, userData.password)
  userProfilePage.open()

 })
 it('ID-1 - Visit user profile page', () => {
  const userData = Cypress.env('newUserData')
  userProfilePage.getEmailField().should('have.value', userData.email)
 })


})

