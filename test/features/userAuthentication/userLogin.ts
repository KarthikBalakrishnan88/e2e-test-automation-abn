
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import * as app from '../../resources/env';

const loginPage = new LoginPage();
const homePage = new HomePage();
const userList = require('../../testData/validUsers.json');

fixture('Login Validation scenarios')
    .page(app.getLoginPageURL())
    .beforeEach(async tc => {
        await tc.eval(() => localStorage.clear());
        await homePage.maximiseWindow();
    });

userList.forEach((user:any)=>{
    test(`Login: '${user.type}' User should be allowed to login with valid credentials`, async t =>{
        await loginPage.loginToTheApplication(user.userName, user.password);
        await homePage.isUserIconDisplayed(true);
    });   
});

test('User should not be allowed to login with invalid credentials',async t =>{
    await loginPage.loginToTheApplication('inValidUser', 'noPassword');
    await homePage.isUserIconDisplayed(true);
})

test('User Should be able to sign out from the application',async t =>{
    await loginPage.loginToTheApplication(userList[0].userName, userList[0].password);
    await homePage.isUserIconDisplayed(true);
    await homePage.clickOnLogout();
    await homePage.isUserIconDisplayed(false);
})

