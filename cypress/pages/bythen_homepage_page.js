class bythenHomepage {
    visit() {
        cy.visit("https://bythen.ai/");
    }

    spotlightBanner() {
        return cy.get('img[alt="spotlight-asssets"]')
    }

    closeBannerButton() {
        return cy.get('svg[role="presentation"]')
    }

    homepageVideo() {
        return cy.get('img[src*="video-poster"]')

    }

    studioButton() {
        return cy.contains('button', 'STUDIO')
    }

    loginButton() {
        return cy.contains('span', 'LOG IN')
    }

    emailInput() {
        return cy.get('input[placeholder="Login with email"]')
    }

    submitEmailButton() {
        return cy.contains('span.material-symbols-outlined', 'arrow_forward')
    }

    otpInput() {
        return cy.get('input[inputmode="numeric"]')
    }

    submitOtpButton() {
        return cy.contains('button', 'Login')
    }

    profileIcon() {
        return cy.get('img[alt="profile-picture"]')
    }


}

export default new bythenHomepage();