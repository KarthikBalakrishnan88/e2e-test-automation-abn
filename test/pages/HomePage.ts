import { Selector, t } from 'testcafe';
import BasePage from './BasePage';


export default class HomePage extends BasePage {
    homeLink : Selector;
    productsLink : Selector;
    contactLink : Selector;

    constructor () {
        super();
        this.homeLink = Selector('#navigation .menu .home');
        this.productsLink = Selector('#navigation .menu .products');
        this.contactLink = Selector('#navigation .menu .contact');
    }

    async userIconDisplayed () {
        await this.isUserIconDisplayed(true);
    }

    async isHomeLinkVisible(){
        await t.expect(Selector(this.homeLink).filterVisible().exists).ok('Home Link is not available');
    }

    async isProductsLinkVisible(){
        await t.expect(Selector(this.productsLink).filterVisible().exists).ok('Home Link is not available');
    }

    async isContactsLinkVisible(){
        await t.expect(Selector(this.contactLink).filterVisible().exists).ok('Home Link is not available');
    }

}
