import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ActivityModule } from './modules/activity/activity.module';
import { ApiModule } from './modules/api/api.module';
import { HabitModule } from './modules/habit/habit.module';

@Module({
  imports: [UserModule, ActivityModule, HabitModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
