import { Controller, Get, Module } from '@nestjs/common';
import { DEFAULT_RISK_LIMITS, type BotOverview } from '@cyzor/shared';

@Controller('api')
class StatusController {
  @Get('health')
  health() { return { status: 'ok', service: 'cyzor-bot-api' }; }

  @Get('bot/overview')
  overview(): BotOverview {
    return { status: 'stopped', mode: 'paper', connected: false, riskLimits: DEFAULT_RISK_LIMITS };
  }
}

@Module({ controllers: [StatusController] })
export class AppModule {}
