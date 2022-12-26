var pageLocators = {
    navbar: "#navbarExample",
}

class NavbarModule {
    
        getNavbar() {
            return cy.get(pageLocators.navbar)
        }
    
    }

export default NavbarModule;