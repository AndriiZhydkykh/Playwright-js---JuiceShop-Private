import { AuthController } from '../../api/index'
import crypto from 'crypto';

const userData = {
 "email": `test${crypto.randomUUID()}@test.com`,
 "password": "superSecretPassword!!!",
 "passwordRepeat": "superSecretPassword!!!",
 "securityAnswer": "Nadia",
 "securityQuestion": {
  "id": 5,
  "question": "Maternal grandmother's first name?"
 }
};



export async function createUser(request) {
 const authController = new AuthController(request);
 const response = await authController.createNewUser(userData);
 return response
}
