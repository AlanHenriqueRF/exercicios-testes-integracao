import app from "app"
import supertest from "supertest"

describe('/health tests', () => {
    it('Should return "OK!"', async () => {
        const result = await supertest(app).get('/health')
        expect(result.text).toBe('OK!')
    })
    it('Should return 200 how statuscode', async () => {
        const result = await supertest(app).get('/health')
        expect(result.statusCode).toBe(200)
    })
})