const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');
const { Provider } = require('../database/models');
const { providerDetailMock } = require('./mock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for "/provider/:id" route', () => {
  afterEach(()=>{ sinon.restore(); });

  it('should return the details of a provider and status 200', async () => {
    sinon.stub(Provider, "findOne").resolves(providerDetailMock);

    const response = await chai.request(app).get('/provider/1')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(providerDetailMock);
  });

  it('should return not found message and status 404', async () => {
    sinon.stub(Provider, "findOne").resolves(null);

    const response = await chai.request(app).get('/provider/999')
    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.deep.equal({
      message: 'ID de cedente inválido.',
    });
  });

  it('should return an internal error message with status 500', async () => {
    sinon.stub(Provider, "findOne")
      .resolves(new Error('Não foi possível acessar as informações'));

    const response = await chai.request(app).get('/provider/999')
    expect(response.status).to.be.equal(500);
    expect(response.body).to.be.deep.equal({
      message: 'Não foi possível acessar as informações',
    });
  });
});
