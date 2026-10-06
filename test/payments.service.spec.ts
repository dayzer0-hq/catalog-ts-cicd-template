import { PaymentsService, validateAmount, MAX_AMOUNT_PAISE } from '../src/payments.service';

describe('validateAmount', () => {
  it.each([[1], [49_900], [MAX_AMOUNT_PAISE]])('accepts %d', (paise) => {
    expect(validateAmount(paise)).toBeNull();
  });

  it.each([[0], [-500], [1.5], [MAX_AMOUNT_PAISE + 1]])('rejects %d', (paise) => {
    expect(validateAmount(paise)).not.toBeNull();
  });
});

describe('PaymentsService', () => {
  it('keeps a running total', () => {
    const service = new PaymentsService();
    expect(service.record(100)).toBe(100);
    expect(service.record(250)).toBe(350);
  });
});
