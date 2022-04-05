describe('Login',function(){


    it('Sing in',function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        //
        cy.location('protocol').should('eq','https:')
        //cy.get('input[type="email"]').type('mohoshihaque@gmail.com')
        //cy.get('input[type="password"]').type('@bswbsw123@')
        //cy.get('.btn').contains('Sign in').should('be.visible').click()

        cy.get('form').within(($form)=>{

          cy.get('input[type="email"]').type('mohoshihaque@gmail.com')
          cy.get('input[type="password"]').type('@bswbsw123@')
          cy.root().submit()

        })
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
     })

     it('Create a Post',function(){

        cy.contains('New Post').click()
        //
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Jatri Test Case')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Hello Automation people')
        cy.contains('Publish Article').click()
        //
        cy.url().should('include','article')
     })

     it('Mark-unmark as favourite',function(){
         cy.get('.nav-link').contains('Mohoshi Haque').click()
         cy.contains('My Articles').should('be.visible')
         cy.get('.ion-heart').click({ multiple: true })

     })

}) 