import { AuthController } from '../../api/index';
import { regNewUserDate } from '../../app/data/user.data';
import { userResponseSchema } from '../../app/data/api/auth.data';
import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

test.describe('Main page', () => {
 const ajv = new Ajv();
 addFormats(ajv)
 test('ID-1 - Login via existing user - random user', async ({ request }) => {
   const authController = new AuthController(request)
   const response = await authController.createNewUser(regNewUserDate);
   const validate = ajv.compile(userResponseSchema);
   const valid = validate(response.data);
   expect(valid,`Validation errors: ${JSON.stringify(validate.errors, null, 2)}`).toBe(true);

 });
 
 
});