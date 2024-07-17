class AuthController  {

    createNewUser(data) {
        return cy.request({
          method: 'POST',
          url: 'https://rough-casey-testingtalk-13d498f2.koyeb.app/api/Users/',
          body: data
        })
      }
      
}

export default new AuthController