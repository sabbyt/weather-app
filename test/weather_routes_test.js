'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = require(__dirname + '/../server'); //eslint-disable-line
const request = chai.request;

const baseURI = 'localhost:3000';

describe('Weather Underground router test', () => {
  it('should GET current weather from Weather Underground API', done => {
    request(baseURI)
      .get('/api/current/98121')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('current_observation');
        expect(res.body.current_observation.display_location.zip).to.eql('98121');
        done();
      });
  });
  it('should GET forecast weather from Weather Underground API', done => {
    request(baseURI)
      .get('/api/forecast/98121')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('forecast');
        done();
      });
  });
});
