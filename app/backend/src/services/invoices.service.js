const { Order, Buyer, Provider } = require('../database/models');

async function getInvoices() {
  try {
    const allNfs = await Order.findAll({
      attributes: ['nNf',
      'emissionDate',
      'value',
      'orderStatusBuyer'
    ],
    include: [
      { model: Buyer,
        as: 'buyer',
        attributes: ['name']
      },
      { model: Provider,
        as: 'provider',
        attributes: ['id', 'name']
      },
    ]});

    return allNfs;
  } catch (err) {
    err.message = 'Não foi possível acessar as informações';
    return err;
  }
};

module.exports = { getInvoices };