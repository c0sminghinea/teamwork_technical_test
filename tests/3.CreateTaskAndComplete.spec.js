const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create task in task list and complete it', async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await test.step('Go to Teamwork login page and verifiy that the login button is present', async () => {
        await loginPage.goTo();
        expect('signInButton').toBeVisible;
    });

    await test.step('Login and verify that the user avatar element is present', async () => {
        await loginPage.validLogin(userData.email, userData.password);
        expect('userAvatar').toBeVisible;
    });
    
    await test.step('Navigate to the My projects tab and verifies that the project in present', async () => {
        await homePage.navigateToMyProjectsTab();
        expect('projectLink').toBeVisible;
    });

    await test.step('Click on the project and verify that "Add task list" button is present', async () => {
        await homePage.clickOnTheProject();
        expect('addTaskListButton').toBeVisible;
    });

    await test.step('Click on the Add task list button', async () => {
        await homePage.clickAddTaskListButton();
    });

    await test.step('Fill in the task list name', async () => {
        await homePage.fillTaskListNameField();
    });

    await test.step('Click on submit button', async () => {
        await homePage.clickOnSubmitButton();
    });

    await test.step('Click on add a task button', async () => {
        await homePage.clickAddTaskButton();
    });
    
    await test.step('Add task title', async () => {
        await homePage.addTaskTitle();
    });

    await test.step('Click on submit button', async () => {
        await homePage.clickOnSubmitButton();
        await page.waitForTimeout(1000);
    });

    await test.step('Mark the task as done and verify the task was completed', async () => {
        await homePage.markTaskCompleted;
        expect('completedTaskLink').toBeVisible;
    });
    
    await test.step('Making the rollback by deleting the task list', async () => {
        await homePage.rollbackTaskList();
        const pageText = await homePage.getPageText();
        expect (pageText).toBe('No Task Lists');
    });

});
