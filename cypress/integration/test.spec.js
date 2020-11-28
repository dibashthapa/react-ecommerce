describe('Test', function(){

  it('visit the url first'  , function(){
    cy.visit('http://localhost:3000')
    cy.get('div.MuiPaper-root.MuiCard-root.MuiGrid-root').children()
  })
})


