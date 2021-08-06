const cart_BUTTON_class = '.btn' 
const cart_button_text='Add to cart'
export default class ASUS_Full_HD_page {
    //This function clicks on add to cart button
    AddToCartButton(){
    cy.contains(cart_BUTTON_class,cart_button_text).click()
    }
    //This function to check the alert message
    AlertMessage(){
      //  const stub = cy.stub()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
          })
          
       }

    }