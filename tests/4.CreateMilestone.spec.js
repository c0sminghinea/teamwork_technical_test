const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create a milestone', async ({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    //Go to Teamwork login page
    await loginPage.goTo();
    expect('signInButton').toBeVisible;

    //Login
    await loginPage.validLogin(userData.email, userData.password);
    expect('userAvatar').toBeVisible;
    
    //Navigate to the My projects tab and verifiy that the project in present
    await homePage.navigateToMyProjectsTab();
    expect('projectLink').toBeVisible;

    //Click on the project and verifiy that "Add task list" button is present
    await homePage.clickOnTheProject();
    expect('addTaskListButton').toBeVisible;

    //Click on the Milestones tab and verify that "Add Milestone" button is present
    await homePage.clickOnMilestonesTab();
    expect('addMilestoneButton').toBeVisible;

    //Click on the add milestone button and verify that the "Add milestone" submission button is present
    await homePage.clickOnAddMilestoneButton();
    expect('submitButton').toBeVisible;

    //Type the milestone name
    await homePage.fillInTheMilestoneName();

    //Click on the create milestone button
    await homePage.clickOnSubmitButton();

    //Verify that the milestone was created
    expect ('milestoneCalendarThumbnail').toBeVisible;

    //Rollback delete milestone
    await homePage.checkMilestoneAsCompleted();
    await homePage.rollbackDeleteMilestone();
    expect('addFirstMilestoneButton').toBeVisible;

});