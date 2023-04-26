const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Validate a successful login', async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await test.step('Go to Teamwork login page and verifies that the login button is present', async () => {
        await loginPage.goTo();
        expect('signInButton').toBeVisible; 
    });

    await test.step('Login and verifiy that the user avatar element is present', async () => {
        await loginPage.validLogin(userData.email, userData.password);
        expect('userAvatar').toBeVisible;
    });

    await test.step('Click on user\'s avatar and verify that the user\'s name in visible in the new modal open', async () => {
        await homePage.clickOnUserAvatar();
        expect('textUserName').toBeVisible;
    });

    await test.step('Verify the user\'s name is correct', async () => {
        const userName = await loginPage.getText();
        expect(userName.trim()).toBe(userData.username);
    });

});