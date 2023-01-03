const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');
const { Order } = require('../database/models');
const { ordersMock } = require('./mock');

chai.use(chaiHttp);
const { expect } = chai;

describe('Test for "/" route', () => {
  afterEach(()=>{ sinon.restore(); });

  it('should return a list of orders and status 200', async () => {
    sinon.stub(Order, "findAll").resolves(ordersMock);

    const response = await chai.request(app).get('/')
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(ordersMock);
  });

  it('should return an internal error message with status 500', async () => {
    sinon.stub(Order, "findAll")
      .resolves(new Error('Não foi possível acessar as informações'));

    const response = await chai.request(app).get('/')
    expect(response.status).to.be.equal(500);
    expect(response.body).to.be.deep.equal({
      message: 'Não foi possível acessar as informações',
    });
  });
});
