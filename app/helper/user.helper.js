import { AuthController } from '../../api/index'
import { userData } from '../data/user.data'

export async function createUser(request) {
 const authController = new AuthController(request);
 const response = await authController.createNewUser(userData);
 return response
}
