describe('Olmero Login API Tests', () => {
    describe('POST https://ap.olmero.ch/realms/olmero/protocol/openid-connect/token', () => {

        const AUTH_URL =
            'https://ap.olmero.ch/realms/olmero/protocol/openid-connect/token';

        it('should returns 400 when called directly by a client with olmero-frontend client_id', () => {
            cy.request({
                method: 'POST',
                url: AUTH_URL,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    accept: 'text/html,application/xhtml+xml',
                },
                body: {
                    grant_type: 'password',
                    client_id: 'olmero-frontend',
                    username: 'invalid_user',
                    password: 'invalid_pass',
                },
                failOnStatusCode: false,
            }).then((res) => {
                cy.log(`Status: ${res.status}`);
                cy.log(`Body: ${JSON.stringify(res.body)}`);
                expect(res.status).to.eq(400);
            });
        });

        it('should returns 401 when called directly by a client with invalid client_id', () => {
            cy.request({
                method: 'POST',
                url: AUTH_URL,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    accept: 'text/html,application/xhtml+xml',
                },
                body: {
                    grant_type: 'password',
                    client_id: 'olmero-portal',
                    username: 'invalid_user',
                    password: 'invalid_pass',
                },
                failOnStatusCode: false,
            }).then((res) => {
                cy.log(`Status: ${res.status}`);
                cy.log(`Body: ${JSON.stringify(res.body)}`);
                expect(res.body.error).to.eq('invalid_client');
                expect(res.body.error_description).to.include('Invalid client');
            });
        });
    });
});
