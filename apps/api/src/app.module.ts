import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [HealthController, AuthController],
  providers: [AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
