import { Selector, t } from 'testcafe';
import BasePage from './BasePage';

export default class LoginPage extends BasePage {
    userName: Selector;
    password: Selector;
    signInButton: Selector;
    loginErrorMessage: Selector;

    constructor () {
        super();
        this.userName = Selector('#email');
        this.password = Selector('#password');
        this.signInButton = Selector('#login .btn-login');
        this.loginErrorMessage = Selector('.errorMsg');
    }

    async loginToTheApplication (userName:string, password:string) {
        await this.clearAndTypeText(this.userName, userName);
        await this.clearAndTypeText(this.password, password);
        await t.click(this.signInButton);
    }
}