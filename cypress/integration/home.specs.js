const { before } = require("lodash")

describe ("Home",()=>{
    before(()=>{
      
        //cy.clearCookies()
        cy.visit(Cypress.config('baseURL'),{ timeout: 80000 })
        //cy.wait(3000)
    })

    
})