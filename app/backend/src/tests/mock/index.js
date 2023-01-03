const ordersMock = [
  {
    "nNf": "99999",
    "emissionDate": "2023-01-01T11:00:00-03:00",
    "value": "100000",
    "orderStatusBuyer": "0",
    "buyer": {
      "name": "SACADO 111"
    },
    "provider": {
      "id": 1,
      "name": "CEDENTE 222"
    }
  },
  {
    "nNf": "11111",
    "emissionDate": "2023-01-01T11:00:00-03:00",
    "value": "10000000",
    "orderStatusBuyer": "0",
    "buyer": {
      "name": "SACADO 111"
    },
    "provider": {
      "id": 1,
      "name": "CEDENTE 333"
    }
  },
];

const providerDetailMock = {
  "name": "CEDENTE 002",
  "tradingName": "CEDENTE 002 LTDA",
  "cnpj": {
    "cnpj": "00000000000002"
  }
}

module.exports = { ordersMock, providerDetailMock };
