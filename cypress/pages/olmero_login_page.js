class LoginPageOlmero {
    visit() {
        cy.visit("https://ap.olmero.ch/pp/web/en");
    }

    usernameInput() {
        return cy.get('#username');
    }

    passwordInput() {
        return cy.get('#password');
    }

    loginButton() {
        return cy.get('#kc-login');
    }

    errorMessage() {
        return cy.get('#input-error');
    }

    login(username, password) {
        this.usernameInput().clear().type(username);
        this.passwordInput().clear().type(password, { log: false });
        this.loginButton().click();
    }
}

export default new LoginPageOlmero();