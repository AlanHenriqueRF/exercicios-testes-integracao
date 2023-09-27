import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
  it("should return the lenght right to the elements passad /fibonacci?elements=5", async () => {
    const elements = 6 
    const { status ,body } = await api.get(`/fibonacci?elements=${elements}`);
    expect(body).toHaveLength(elements);
    expect(status).toBe(200);
  })
  it("Should start sequence by [0,1,1,2,3,5] when call /fibbonacci?elements=6", async()=>{
    const elements = 6 
    const { body } = await api.get(`/fibonacci?elements=${elements}`);
    expect(body).toEqual([0,1,1,2,3,5]);
  })
})