const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../page-objects/LoginPage');
const {HomePage} = require('../page-objects/HomePage');

test('Create a milestone and complete it', async ({browser})=>

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
    
    //Navigate to the My projects tab and verifies that the project in present
    await homePage.navigateToMyProjectsTab();
    expect('projectLink').toBeVisible;

    //Click on the project and verifies that "Add task list" button is present
    await homePage.clickOnTheProject();
    expect('addTaskListButton').toBeVisible;

    //Click on the Milestones tab
    await homePage.clickOnMilestonesTab();

    //Click on the Milestones tab and verify that "Add Milestone" button is present
    await homePage.clickOnAddMilestoneButton();
    expect('addMilestoneButton').toBeVisible;

    //Type the milestone name
    await homePage.fillInTheMilestoneName();

    //Click on the create milestone button and wait 1 sec for the milestone to be created 
    await homePage.clickOnSubmitButton();
    await page.waitForTimeout(1000);

    //Mark the milestone as completed and verify that the milestone was completed
    await ('milestoneCompletionCheck').toBeVisible;
    await homePage.checkMilestoneAsCompleted();
    await homePage.rollbackDeleteMilestone();
    expect('addFirstMilestoneButton').toBeVisible;

});