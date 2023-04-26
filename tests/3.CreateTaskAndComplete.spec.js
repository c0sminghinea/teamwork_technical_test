const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create task in task list and complete it', async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    //Go to Teamwork login page and verifies that the login button is present
    await loginPage.goTo();
    expect('signInButton').toBeVisible;

    //Login and verifies that the user avatar element is present
    await loginPage.validLogin(userData.email, userData.password);
    expect('userAvatar').toBeVisible;
    
    //Navigate to the My projects tab and verifies that the project in present
    await homePage.navigateToMyProjectsTab();
    expect('projectLink').toBeVisible;

    //Click on the project and verifiy that "Add task list" button is present
    await homePage.clickOnTheProject();
    expect('addTaskListButton').toBeVisible;

    //Click on the Add task list button
    await homePage.clickAddTaskListButton();

    //Fill in the task list name
    await homePage.fillTaskListNameField();

    //Click on submit button
    await homePage.clickOnSubmitButton();

    //Click on add a task button
    await homePage.clickAddTaskButton();
    
    //Add task title
    await homePage.addTaskTitle();

    //Click on submit button
    await homePage.clickOnSubmitButton();
    await page.waitForTimeout(1000);

    //Mark the task as done and verify the task was completed
    await homePage.markTaskCompleted;
    expect('completedTaskLink').toBeVisible;
    
    //Making the rollback by deleting the task list
    await homePage.rollbackTaskList();
    const pageText = await homePage.getPageText();
    expect (pageText).toBe('No Task Lists');

});
