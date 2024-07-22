import crypto from 'crypto'

export const userData = {
    "email": `test${crypto.randomUUID()}@test.com`,
    "password": "superSecretPassword!!!",
    "passwordRepeat": "superSecretPassword!!!",
    "securityAnswer": "Nadia",
    "securityQuestion": {
     "id": 5,
     "question": "Maternal grandmother's first name?"
    }
};