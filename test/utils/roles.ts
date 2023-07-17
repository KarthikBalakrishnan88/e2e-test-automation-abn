import { Role } from 'testcafe';
import * as app from '../resources/env';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';


const userList = require('../testData/validUsers.json');
const loginPage = new LoginPage();
const homePage = new HomePage();

export const adminUser = Role(app.getLoginPageURL(), async t => {
    await loginPage.loginToTheApplication(userList[0].userName, userList[0].password);
    await homePage.isUserIconDisplayed(true);
});

export const devUser = Role(app.getLoginPageURL(), async t => {
    await loginPage.loginToTheApplication(userList[1].userName, userList[1].password);
    await homePage.isUserIconDisplayed(true);
});

export const regularUser = Role(app.getLoginPageURL(), async t => {
    await loginPage.loginToTheApplication(userList[2].userName, userList[2].password);
    await homePage.isUserIconDisplayed(true);
});