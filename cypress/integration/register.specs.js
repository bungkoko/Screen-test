

describe ("Register Test",()=>{
    it('Format Email tidak sesuai',()=>{
        cy.visit(Cypress.config('baseURL'),{ timeout: 80000 })
        cy.contains('Masuk').click()
        cy.contains('Daftar').click()
        cy.get('#onboarding-register-email').type('sarah')
        cy.get('.onboarding-form__error').should('contain.text','Masukkan alamat email yang valid')
    })
    it('Tombol Daftar ketika inputan email/no handphone kosong',()=>{
        cy.get('#onboarding-register-email').clear().type(' ')
        cy.get('.onboarding-form__error').should('contain.text','Masukkan alamat email yang valid')
        cy.get('#onboarding-form-submit').should('be.disabled')
        
    })
    it('Daftar berhasil dengan email dan Tombol Daftar ketika inputan email/no handphone diisi',()=>{
      
        cy.get('#onboarding-register-email').type('sarahkusumarwardhani@gmail.com').wait(8000)
       
        //Input password kurang < 8
        cy.get('#onboarding-register-password').type('12345')
        cy.get('.onboarding-form__error').should('contain.text','Kata sandi Anda kurang dari 8 karakter')
        //Input Password >= 8
        cy.get('#onboarding-register-password').type('12345678')
        //cy.get('#onboarding-form-submit').should('not.be.disabled')
        cy.get('#onboarding-form-submit').should('be.enabled').click()

    })
    
    it('Berhasil daftar dengan nomor telepon',()=>{
        cy.get('#onboarding-register-email').type('085268690818')
        cy.get('#onboarding-form-submit').click();
        cy.get('.onboarding-content-otp__title').should('contain.text','Masukkan kode verifikasi')
    })
    
    it('Format Nomor telepon < 8 karakter',()=>{
        cy.get('#onboarding-register-email').type('085268')
        cy.get('.onboarding-form__error').should('contain.text','Masukkan nomor handphone yang valid')
    })

   
    
})