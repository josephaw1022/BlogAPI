import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ArticleModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
