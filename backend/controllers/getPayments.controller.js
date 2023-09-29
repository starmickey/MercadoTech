const mockdata = require('../mockdata');

const getPayments = async (req, res) => {
    return res.status(200).send({
        status: 200,
        payments: mockdata
    });
}

module.exports = { getPayments };