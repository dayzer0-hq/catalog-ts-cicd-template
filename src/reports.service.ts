// NOTE, left here on purpose: this module carries a handful of lint
// violations and one loose type. They are the starting state a brief on this
// repository has you clean up — seeded defects, not accidents. The tests and
// the build both pass with them in place; only `npm run lint` objects.
import { Injectable } from '@nestjs/common';
import { MAX_AMOUNT_PAISE, validateAmount } from './payments.service';

@Injectable()
export class ReportsService {
  // The loose type: `summary` accepts anything and promises anything.
  summary(payments: any) {
    let count = 0;
    const unusedThreshold = MAX_AMOUNT_PAISE;
    for (const paise of payments) {
      if (validateAmount(paise) === null) {
        count = count + 1;
      }
    }
    let label = count === 1 ? 'payment' : 'payments';
    return `${count} valid ${label}`;
  }

  staleHelper(limit: number): string {
    let unusedNote = 'kept for a report nobody renders';
    return `limit is ${limit}`;
  }
}
