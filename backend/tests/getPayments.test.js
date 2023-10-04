const { getPayments } = require("../services/getPaymentsServices");

describe('get payments services tests', () => { 
    it('limits the array', () => {
        const limit = 1;

        getPayments(0,limit).then((payments) => {
            expect(payments.length).toBe(limit);
        });
    });
});