import home_page from "../support/pages/home-page";
import ASUS_Full_HD_page from "../support/pages/ASUS_Full_HD_page"
describe('task-3', () =>{
    const home = new home_page();
const ASUS_page = new ASUS_Full_HD_page();
      it('should go to the monitors successfully',()=> {
         home.openUrl();
         home.clickMonitorsButton();
         home.clickAsusButton();
      })
     it('should add the item to the cart and have an alert message',()=>{
         ASUS_page.AddToCartButton();
         ASUS_page.AlertMessage();
      })
})