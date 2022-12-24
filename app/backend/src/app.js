const express = require('express');
const { Order, Buyer, Provider, Cnpj } = require('./database/models');

const app = express();

app.use(express.json());

app.get('/', async (_req, res) => {
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
        attributes: ['id']
      },
    ]
  });

  return res.status(200).json(allNfs);
});

module.exports = app;
