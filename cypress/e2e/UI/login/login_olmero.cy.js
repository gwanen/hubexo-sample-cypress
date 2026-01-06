import LoginPageOlmero from "../../../pages/olmero_login_page" 

describe("Pure UI Login - Olmero (POM)", () => {

    it("shows error on invalid credentials", () => {
        LoginPageOlmero.visit();
        LoginPageOlmero.login("wrong_user", "wrong_pass");
        LoginPageOlmero.errorMessage().should("be.visible");
    });
});