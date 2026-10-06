import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { PaymentsService, validateAmount } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('payments')
  record(@Body() body: { amount_paise: number }) {
    const problem = validateAmount(body?.amount_paise);
    if (problem) {
      throw new BadRequestException(problem);
    }
    return { total_paise: this.payments.record(body.amount_paise) };
  }
}
