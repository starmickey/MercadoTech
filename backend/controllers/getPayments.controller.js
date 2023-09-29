const mockdata = require('../mockdata');

const getPayments = async (req, res) => {
    let startItem = req.query.page ? req.query.page * 10 : 0;
    let lastItem = startItem + 10;

    return res.status(200).send({
        status: 200,
        payments: mockdata.payments.slice(startItem,lastItem),
        isFirstPage: req.query.page == 0,
        isLastPage: mockdata.payments.length <= lastItem
    });
}

module.exports = { getPayments };