import bythen_homepage from '../../../pages/bythen_homepage_page';

describe('Bythen Homepage Tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });
    const homepage = bythen_homepage;

    it('should visit the Bythen homepage and perform login', () => {
        homepage.visit();
        homepage.closeBannerButton().click('center');
        homepage.spotlightBanner().should('not.exist');
        homepage.homepageVideo().should('be.visible');
        homepage.loginButton().trigger('mouseover').wait(100).click()
        homepage.emailInput().type('bythen24@bythen.ai');
        homepage.submitEmailButton().click();   
        // Assuming OTP is '123456' for testing purposes
        homepage.otpInput().first().type('123456')
        homepage.submitOtpButton().click();
        // Verify login by checking for profile icon
        homepage.profileIcon().should('be.visible');
    });
});