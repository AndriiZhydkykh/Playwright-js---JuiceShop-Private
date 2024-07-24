import { AuthController } from '../../api/index'
import { regNewUserDate } from '../data/user.data'

export async function createUser(request) {
 const authController = new AuthController(request);
 const response = await authController.createNewUser(regNewUserDate);
 return response
}
