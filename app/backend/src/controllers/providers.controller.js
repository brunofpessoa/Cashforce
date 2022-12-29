const providersService = require("../services/providers.service");

async function getProviderDetails(req, res) {
  const { id } = req.params;

  const data = await providersService.getProviderDetails(id);

  if (data instanceof Error) {
    return res.status(500).json({ message: data.message });
  }

  return res.status(200).json(data);
}

module.exports = { getProviderDetails };
