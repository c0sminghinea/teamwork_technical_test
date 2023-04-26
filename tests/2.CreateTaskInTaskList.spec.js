const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create a task in a task list', async ({browser})=>

{

    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await test.step('Go to Teamwork login page and verifies that the login button is present', async () => {
        await loginPage.goTo();
        expect('signInButton').toBeVisible;
    });

    await test.step('Login and verifies that the user avatar element is present', async () => {
        await loginPage.validLogin(userData.email, userData.password);
        expect('userAvatar').toBeVisible;
    });
    
    await test.step('Navigate to the My projects tab and verifies that the project in present', async () => { 
        await homePage.navigateToMyProjectsTab();
        expect('projectLink').toBeVisible;
    });

    await test.step('Click on the project and verifies that "Add task list" button is present', async () => {
        await homePage.clickOnTheProject();
        expect('addTaskListButton').toBeVisible;
    });

    await test.step('Click on the Add task list button and verify that the "Add task list" submission button is present', async () => {
        await homePage.clickAddTaskListButton();
        expect('submitButton').toBeVisible;
    });

    await test.step('Fill in the task list name', async () => {
        await homePage.fillTaskListNameField();
    });

    await test.step('Click on submit button', async () => {
        await homePage.clickOnSubmitButton();
    });

    await test.step('Click on add a task button', async () => {
        await homePage.clickAddTaskButton();
        expect('submitButton').toBeVisible;
    });
    
    await test.step('Add task title', async () => {
        await homePage.addTaskTitle();
    });

    await test.step('Click on submit button', async () => {
        await homePage.clickOnSubmitButton();
    });

    await test.step('Making the rollback by deleting the task list', async () => {
        await homePage.rollbackTaskList();
        const pageText = await homePage.getPageText();
        expect (pageText).toBe('No Task Lists');
    });

});
