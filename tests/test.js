const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

const endpoints = ['/', '/add', '/lucky', '/result/:tag'];
endpoints.forEach(endpoint => {
    test('All routes should return status code 200 and text/html', t => {
        request(app)
            .get(`${endpoint}`)
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .end(err => {
                t.error(err);
                t.end();
            })
    })
})
