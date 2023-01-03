const ordersService = require('../services/orders.service');

async function getOrders(_req, res) {
  const data = await ordersService.getOrders();

  if (data instanceof Error) {
    return res.status(500).json({ message: data.message });
  }

  return res.status(200).json(data);
}

module.exports = { getOrders };
