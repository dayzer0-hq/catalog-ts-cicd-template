import { Injectable } from '@nestjs/common';

/** The largest single payment accepted: ₹1,00,000 in paise. */
export const MAX_AMOUNT_PAISE = 100_000_00;

/** Returns a problem string, or null when the amount is acceptable. */
export function validateAmount(paise: number): string | null {
  if (!Number.isInteger(paise) || paise <= 0) {
    return 'amount must be a positive integer of paise';
  }
  if (paise > MAX_AMOUNT_PAISE) {
    return 'amount exceeds the single-payment limit';
  }
  return null;
}

@Injectable()
export class PaymentsService {
  private totalPaise = 0;

  /** Add an already-validated amount and return the new total. */
  record(paise: number): number {
    this.totalPaise += paise;
    return this.totalPaise;
  }
}
