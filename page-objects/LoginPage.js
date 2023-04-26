class LoginPage{

    constructor(page)
    {
        this.page = page;
        this.email = page.locator("#loginemail");
        this.password = page.locator("#loginpassword");
        this.signInButton = page.locator("button[type='submit']");
        this.textUserName = page.locator("(//div[contains(@class, 'v-overlay__content')]/div/a/div/div[contains(@class,'v-list-item-title')])[1]");
    }

    async goTo()
    {
        await this.page.goto('https://cosminscompany3.teamwork.com/');
    }

    async validLogin(email, password)
    {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState();
    }

    getText()
    {
        return this.textUserName.textContent(); 
    }
}
module.exports = {LoginPage};