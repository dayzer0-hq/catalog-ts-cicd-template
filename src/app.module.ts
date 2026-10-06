import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ReportsService } from './reports.service';

@Module({
  controllers: [HealthController, PaymentsController],
  providers: [PaymentsService, ReportsService],
})
export class AppModule {}
