const { timeout } = require("../playwright.config");

class HomePage{

    constructor(page)
    {
        this.page = page;
        this.userAvatar = page.locator('button.v-list-item.v-list-item--link.VListItemSideNavProfile');
        this.myProjectsTab = page.locator("a[value='/home/projects']")
        this.projectLink = page.frameLocator('iframe').locator('.w-project__header-text');
        this.addTaskListButton = page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add Task List' });
        this.taskListNameField = page.frameLocator('iframe').locator('#addOrEditTaskList_name');
        this.submitButton = page.frameLocator('iframe').locator("button[type='submit']");
        this.addTaskButton = page.frameLocator('iframe').getByRole('button', { name: 'plus icon Add a task' }).last();
        this.taskTitle = page.frameLocator('iframe').locator('.w-task-input__input');
        this.milestonesTab = page.locator('[data-identifier="project-tab-milestones"]');
        this.addMilestoneButton = page.frameLocator('iframe').locator('.btn.btn-primary.main-header__button');
        this.milestoneNameField = page.frameLocator('iframe').locator('#milestoneName');
        this.milestoneCompletionCheck = page.frameLocator('iframe').locator('.w-completion-check').first();
        this.taskCheck = page.frameLocator('iframe').locator('button.w-task-row__check').first();
        this.completedTaskLink = page.frameLocator('iframe').locator('.task-link');
        this.threeDotsButtonTaskList = page.frameLocator('iframe').locator('.u-group-title__options');
        this.deleteTaskListButton = page.frameLocator('iframe').locator('.delete-action').first();
        this.deleteOkButton = page.frameLocator('iframe').locator("button[type='submit'] span");
        this.noTaskListsPageText = page.frameLocator('iframe').locator('.s-tasklists-list__blank-state--title');
        this.milestoneCompletedValue = page.frameLocator('iframe').locator('.label-success').last();
        this.completedMilestonesTab = page.frameLocator('iframe').locator("//a[@class='block' and text()='Completed']");
        this.milestoneName = page.frameLocator('iframe').locator('.h-text-overflow');
        this.deleteMilestoneButton = page.frameLocator('iframe').locator(".btn[data-bind='click: OnClickDeleteMilestone']");
        this. addFirstMilestoneButton = page.frameLocator('iframe').locator('.u-blank-slate__action');
        this.milestoneCalendarThumbnail = page.frameLocator('iframe').locator('.w-milestone-row__date');

    }

    async clickOnUserAvatar()
    {
        await this.userAvatar.click();
    }

    async navigateToMyProjectsTab()
    {
        await this.myProjectsTab.click();
    }

    async clickOnTheProject()
    {
        await this.projectLink.click();
    }

    async clickAddTaskListButton()
    {
        await this.addTaskListButton.click();
    }

    async fillTaskListNameField()
    {
        await this.taskListNameField.fill('Test Task List');
    }

    async clickOnSubmitButton()
    {
        await this.submitButton.click();
    }

    async clickAddTaskButton()
    {
        await this.addTaskButton.click();
    }

    async addTaskTitle()
    {
        await this.taskTitle.fill('Test task title');
    }

    async clickOnMilestonesTab()
    {
        await this.milestonesTab.click();
    }

    async clickOnAddMilestoneButton()
    {
        await this.addMilestoneButton.click();
    }

    async fillInTheMilestoneName()
    {
        await this.milestoneNameField.fill('Milestone Test');
    }

    async checkMilestoneAsCompleted()
    {
        await this.milestoneCompletionCheck.click();
    }

    async markTaskCompleted()
    {
        
        await this.taskCheck.click();
    }

    async rollbackTaskList()
    {
        await this.threeDotsButtonTaskList.click();
        await this.deleteTaskListButton.click();
        await this.deleteOkButton.click();
    }

    getPageText()
    {
        return this.noTaskListsPageText.textContent(); 
    }
    
    getValueBefore()
    {
        return this.milestoneCompletedValue.textContent();
    }

    getValueAfter()
    {
        return this.milestoneCompletedValue.textContent();
    }
    /*
    async rollbackDeleteMilestone()
    {
        await this.completedMilestonesTab.click();
        await this.milestoneName.click();
        await this.deleteMilestoneButton.click();
        await this.deleteOkButton.click();
    }
    */
    async rollbackDeleteMilestone(timeoutMs = 5000) {
        const completedMilestonesTabPromise = new Promise(resolve => {
          this.completedMilestonesTab.click().then(resolve);
        });
      
        const milestoneNamePromise = new Promise(resolve => {
          this.milestoneName.click().then(resolve);
        });
      
        const deleteMilestoneButtonPromise = new Promise(resolve => {
          this.deleteMilestoneButton.click().then(resolve);
        });
      
        const deleteOkButtonPromise = new Promise(resolve => {
          this.deleteOkButton.click().then(resolve);
        });
      
        await Promise.race([
          completedMilestonesTabPromise,
          milestoneNamePromise,
          deleteMilestoneButtonPromise,
          deleteOkButtonPromise,
          new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error('Timeout'));
            }, timeoutMs);
          })
        ]);
      } 
      
}
module.exports = {HomePage};