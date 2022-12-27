const express = require('express');
const { Order, Buyer, Provider, Cnpj } = require('./database/models');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());


app.get('/provider/:id', async (req, res) => {
  const { id } = req.params;

  const providerDetails = await Provider.findOne({
    where: { id },
    attributes: ['name', 'tradingName'],
    include: [
      { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },
    ]
  });

  return res.status(200).json(providerDetails);
});

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
        attributes: ['id', 'name']
      },
    ]
  });

  return res.status(200).json(allNfs);
});

module.exports = app;
