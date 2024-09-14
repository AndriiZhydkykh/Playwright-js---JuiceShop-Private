export const correctUser = {
 "email": `test${crypto.randomUUID()}@test.com`,
 "password": "superSecretPassword!!!",
 "passwordRepeat": "superSecretPassword!!!",
 "securityAnswer": "Nadia",
 "securityQuestion": {
  "id": 5,
  "question": "Maternal grandmother's first name?"
 }
};
export const correctUserResponse = {
 username: '',
 role: 'customer',
 deluxeToken: '',
 lastLoginIp: '0.0.0.0',
 profileImage: '/assets/public/images/uploads/default.svg',
 isActive: true,
 id: 26,
 email: 'test95585d86-54ba-45b9-8c73-f73a0ba16daa@test.com',
 updatedAt: '2024-08-16T08:13:41.166Z',
 createdAt: '2024-08-16T08:13:41.166Z',
 deletedAt: null
}
export const userResponseSchema = {
 type: 'object',
 properties: {
   username: { type: 'string', minLength: 0 }, 
   role: { type: 'string', enum: ['customer', 'admin'], minLength: 1 }, 
   deluxeToken: { type: 'string', minLength: 0 },
   lastLoginIp: { type: 'string', pattern: '^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$', minLength: 1 },
   profileImage: { type: 'string', minLength: 1 },
   isActive: { type: 'boolean' },
   id: { type: 'integer' },
   email: { type: 'string', format: 'email', minLength: 1 },
   updatedAt: { type: 'string', format: 'date-time' },
   createdAt: { type: 'string', format: 'date-time' },
   deletedAt: { type: ['null', 'string'], nullable: true }
 },
 required: ['username', 'role', 'deluxeToken', 'lastLoginIp', 'profileImage', 'isActive', 'id', 'email', 'updatedAt', 'createdAt'],
 additionalProperties: false
};