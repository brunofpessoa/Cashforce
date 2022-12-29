const { Provider, Cnpj } = require('../database/models');

async function getProviderDetails(id) {
  try {
    const providerDetails = await Provider.findOne({
      where: { id },
      attributes: ['name', 'tradingName'],
      include: [
        { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },
      ]
    });

    return providerDetails;

  } catch (err) {
    err.message = 'Não foi possível acessar as informações';
    return err;
  }
}

module.exports = { getProviderDetails };
