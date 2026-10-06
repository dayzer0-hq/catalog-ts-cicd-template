import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('the HTTP surface', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /healthz answers 200 with status ok', async () => {
    const res = await request(app.getHttpServer()).get('/healthz');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('POST /payments records and refuses', async () => {
    const ok = await request(app.getHttpServer()).post('/payments').send({ amount_paise: 500 });
    expect(ok.status).toBe(201);
    expect(ok.body.total_paise).toBeGreaterThanOrEqual(500);

    const bad = await request(app.getHttpServer()).post('/payments').send({ amount_paise: 0 });
    expect(bad.status).toBe(400);
  });
});
