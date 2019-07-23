import chai from 'chai';
import chaiHttp from 'chai-http';
import User from '../models/user.model';
import userController from '../controllers/user.controller';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe('Users', () => {
    beforeEach((done) => {
        User.remove({ email: "test@email.com"}, (err) => {
            done();
        });
    });
});

describe('Users Tests', () => {
    describe('Get All Users', () => {
        it('should get all users in database', (done) => {
            chai.request(app)
                .get('/api/users')
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('Create User', () => {
        it('should create a user successfully', (done) => {
            const user = { username: 'TestUser', password: "password", email: "test@email.com"}
            chai.request(app)
                .post('/api/users')
                .send(user)
                .end((error, res) => {
                    if (error) {
                        console.log(error);
                        throw error;
                    }
                    res.should.have.status(201);
                    res.should.be.a('object');
                    done();
                });
        });
    });
});

