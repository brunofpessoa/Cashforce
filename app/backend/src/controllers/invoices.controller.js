const invoicesService = require('../services/invoices.service');

async function getInvoices(_req, res) {
  const data = await invoicesService.getInvoices();

  if (data instanceof Error) {
    return res.status(500).json({ message: data.message });
  }

  return res.status(200).json(data);
}

module.exports = { getInvoices };
