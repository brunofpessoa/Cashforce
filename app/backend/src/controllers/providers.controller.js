const providersService = require("../services/providers.service");

async function getProviderDetails(req, res) {
  const { id } = req.params;

  const data = await providersService.getProviderDetails(id);

  if (data instanceof Error) {
    return res.status(500).json({ message: data.message });
  }

  if (!data) {
    return res.status(404).json({ message: 'ID de cedente inválido.' })
  }

  return res.status(200).json(data);
}

module.exports = { getProviderDetails };
