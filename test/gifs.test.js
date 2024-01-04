const should = require('chai').should()
const expect = require('chai').expect
const request = require('supertest')
const app = require('../index')


describe('GET /gifs', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/gifs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  it("should return an array", done => {
    request(app)
      .get("/gifs")
      .set("Accept", "application/json")
      .end((error, response) => {
        expect(response.body).to.be.an('array');
        done()
      })
    })

    it("should return an array of objects that have a field called 'name' ", done => {
        request(app)
          .get("/gifs")
          .set("Accept", "application/json")
          .end((error, response) => {
              response.body.forEach(gif => {
                expect(gif).to.have.property('name');
              });
            done()
         })
      })

      describe("POST /gifs", () => {
        const newGif = {
            "name": "Beyonce Lemonade Gif",
            "url": "https://media.giphy.com/media/3o6ozBUuLfzTCngAFi/giphy.gif",
            "tags": ["Beyonce", "Bey"]
        };
      before(done => {
        request(app)
          .post('/gifs')
          .set('Accept', 'application/json')
          .send(newGif)
          .end(done);
      });
      it('should add a gif object to the collection gifs and return it', done => {
        request(app)
          .get('/gifs')
          .set('Accept', 'application/json')
          .end((error, response) => {
            expect(response.body.find(gif => gif.name === newGif.name)).to.be.an(
              'object'
            );
            done();
          });
          });
      });