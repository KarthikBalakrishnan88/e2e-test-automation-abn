import { Role } from 'testcafe';
import { regularUser, devUser, adminUser } from '../../utils/roles';
import HomePage from '../../pages/HomePage';
import * as app from '../../resources/env';

const homePage = new HomePage();

fixture`I should be able to access based on my role`.page(app.getLoginPageURL());

test('I should be able to access the application as admin user ', async (t) => {
  await t.useRole(adminUser);
  await homePage.isHomeLinkVisible();
  await homePage.isContactsLinkVisible();
  await homePage.isProductsLinkVisible();
  await t.useRole(Role.anonymous());
});

test('I should be able to access the application as Dev user ', async (t) => {
  await t.useRole(devUser);
  await homePage.isHomeLinkVisible();
  await homePage.isContactsLinkVisible();
  await homePage.isProductsLinkVisible();
  await t.useRole(Role.anonymous());
});

test('I should be able to access the application as regular user ', async (t) => {
  await t.useRole(regularUser);
  await homePage.isHomeLinkVisible();
  await homePage.isContactsLinkVisible();
  await homePage.isProductsLinkVisible();
  await t.useRole(Role.anonymous());
});
