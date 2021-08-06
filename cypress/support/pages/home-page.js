const ASUS_BUTTON = '.hrefch'
const ASUS_Name='ASUS Full HD'
const MONITORS_BUTTON = '.list-group-item'
const Monitor_Name = 'Monitors'
const URL ='https://www.demoblaze.com/index.html#'

export default class home_page {
    // This function opens the URL.
    openUrl(){
    cy.visit(URL);
    }
    //This function clicks on monitors button in the categories
    clickMonitorsButton(){
        cy.contains(MONITORS_BUTTON,Monitor_Name).click()
    }
    //This function clicks on ASUS button in the categories
    clickAsusButton(){
        cy.contains(ASUS_BUTTON,ASUS_Name).click()
    }  
}