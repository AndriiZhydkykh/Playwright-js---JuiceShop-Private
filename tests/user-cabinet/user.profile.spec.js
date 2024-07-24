import { UserProfilePage } from '../../app/page/index'
import { test, expect } from '@playwright/test';
import userData from '../../app/data/user.json';

test.describe('Sign in wexisting user', () => {
 const { email } = userData.staticUsers.buyers.testingTalk;

 test('ID-1 - Visit user profile page', async ({page}) => {
  const userProfilePage = new UserProfilePage(page)
  await userProfilePage.open()
  await expect(await userProfilePage.getEmailField()).toHaveText(email)
 })

})

