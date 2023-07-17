import { ClientFunction, Selector, t } from 'testcafe';

export default class BasePage {
    
    userIcon:Selector;
    signOutLink:Selector;

    constructor () {
        this.userIcon = Selector('#user');
        this.signOutLink = Selector('#user #logout');
    }

    getPageUrl () {
        return ClientFunction(() => window.location.href);
    }
    
    getPageTitle () {
        return ClientFunction(() => document.title);
    }
    
    async maximiseWindow () {
        return await t.maximizeWindow();
    }

    async clearInput (selector: Selector) {
        await t.click(selector).pressKey('ctrl+a delete tab');
    }
    
    async clearAndTypeText (selector: Selector, text: string) {
        await this.clearInput(selector);
        if (text !== '') 
            await t.typeText(selector, text);
    }

    async isUserIconDisplayed (value:boolean) {
        value ? await t.expect(Selector(this.userIcon).filterVisible().exists).ok() : 
            await t.expect(Selector(this.userIcon).filterVisible().exists).notOk();
    }

    public async clickOnLogout(){
        await t.click(this.userIcon);
        await t.click(this.signOutLink);
    }


}