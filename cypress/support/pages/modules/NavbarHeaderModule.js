var pageLocators = {
    navbar: "#navbarExample",
    contactButton: "a[data-target='#exampleModal']",
    contactModal: "#exampleModal",
    contactModalTitle: "#exampleModalLabel",
    aboutUsButton: "a[data-target='#videoModal']",
    aboutUsModal: "#videoModal",
    aboutUsModalTitle: "#videoModalLabel",
    cartButton: "#cartur",
    logInButton: "#login2",
    logInModal: "#logInModal",
    logInModalTitle: "#logInModalLabel",
    singUpButton: "#signin2",
    singUpModal: "#signInModal",
    singUpModalTitle: "#signInModalLabel",
}

class NavbarHeaderModule {
    getNavbar() { return cy.get(pageLocators.navbar) }

    getContactButton() { return cy.get(pageLocators.contactButton) }

    getContactModal() { return cy.get(pageLocators.contactModal) }

    getContactModalTitle() { return cy.get(pageLocators.contactModalTitle) }

    getAboutUsButton() { return cy.get(pageLocators.aboutUsButton) }

    getAboutUsModal() { return cy.get(pageLocators.aboutUsModal) }

    getAboutUsModalTitle() { return cy.get(pageLocators.aboutUsModalTitle) }

    getCartButton() { return cy.get(pageLocators.cartButton) }

    getLogInButton() { return cy.get(pageLocators.logInButton) }

    getLogInModal() { return cy.get(pageLocators.logInModal)}

    getLogInModalTitle() { return cy.get(pageLocators.logInModalTitle) }

    getSingUpButton() { return cy.get(pageLocators.singUpButton) }

    getSingUpModal() { return cy.get(pageLocators.singUpModal) }

    getSingUpModalTitle() { return cy.get(pageLocators.singUpModalTitle) }
}

export default NavbarHeaderModule;