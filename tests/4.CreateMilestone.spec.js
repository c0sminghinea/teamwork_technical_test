const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create a milestone', async ({browser})=>

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
    
    await test.step('Navigate to the My projects tab and verifiy that the project in present', async () => {
        await homePage.navigateToMyProjectsTab();
        expect('projectLink').toBeVisible;
    });

    await test.step('Click on the project and verifiy that "Add task list" button is present', async () => {
        await homePage.clickOnTheProject();
        expect('addTaskListButton').toBeVisible;
    });

    await test.step('Click on the Milestones tab and verify that "Add Milestone" button is present', async () => {
        await homePage.clickOnMilestonesTab();
        expect('addMilestoneButton').toBeVisible;
    });

    await test.step('Click on the add milestone button and verify that the "Add milestone" submission button is present', async () => {
        await homePage.clickOnAddMilestoneButton();
        expect('submitButton').toBeVisible;
    });

    await test.step('Type the milestone name', async () => {
        await homePage.fillInTheMilestoneName();
    });

    await test.step('Click on the create milestone button', async () => {
        await homePage.clickOnSubmitButton();
    });

    await test.step('Verify that the milestone was created', async () => {
        expect ('milestoneCalendarThumbnail').toBeVisible;
    });

    await test.step('Rollback delete milestone', async () => {
        await homePage.checkMilestoneAsCompleted();
        await homePage.rollbackDeleteMilestone();
        expect('addFirstMilestoneButton').toBeVisible;
    });

});