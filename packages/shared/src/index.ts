export type TradingMode = 'paper' | 'live';
export type BotStatus = 'stopped' | 'running' | 'paused' | 'error';
export interface RiskLimits { maxOrderNotional: number; maxDailyLoss: number; maxOpenPositions: number; }
export interface BotOverview { status: BotStatus; mode: TradingMode; connected: boolean; riskLimits: RiskLimits; }
export const DEFAULT_RISK_LIMITS: RiskLimits = { maxOrderNotional: 10, maxDailyLoss: 25, maxOpenPositions: 1 };
