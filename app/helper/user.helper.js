import {expect } from '@playwright/test';
import crypto from 'crypto';

const userData = {
 "email": `test${crypto.randomUUID()}@test.com`,
 "password": "superSecretPassword!!!",
 "passwordRepeat": "superSecretPassword",
 "securityAnswer": "Nadia",
 "securityQuestion": {
  "id": 5,
  "question": "Maternal grandmother's first name?"
 }
};

export async function createUser(request) {

  const response = await request.post('/path/to/api/createUser', {
   data: userData
  });

  expect(response.status()).toBe(200);

  const newUserData = await response.body();

  return newUserData;
 }
