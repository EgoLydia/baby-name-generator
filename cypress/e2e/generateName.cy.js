describe('Generate Names', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('should get all button element', () => {
        cy.get('button')
    })

    it('should display baby names when find names is clicked', () => {
        cy.contains('button', 'Girl').click()
        cy.contains('button', 'Trendy').click()
        cy.contains('button', 'All').click()
        cy.contains('button', 'Find Names').click()
    })

    it('should clear baby names when x is clicked', () => {
        cy.contains('button', 'Boy').click()
        cy.contains('button', 'Unique').click()
        cy.contains('button', 'All').click()
        cy.contains('button', 'Find Names').click()
        for (let n = 0; n < 2; n++) {
            cy.contains('p', 'x').click()
        }
    })
})