import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, QueryRunner } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo } from './todo/todo.entity';
import { TodosModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE_NAME'),
        autoLoadEntities: true,
        //entities: [Todo], //[__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        migrationsTableName: 'migrations_history',
        migrationsRun: true,
        // ssl: true,
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: false,
        // },
        //},
      }),
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private dataSource: DataSource;
  private config: ConfigService;
  private logger: Logger;

  constructor(dataSource: DataSource, config: ConfigService) {
    this.dataSource = dataSource;
    this.config = config;
    this.logger = new Logger('AppModule');
  }

  async onModuleInit() {
    const env = this.config.get<string>('NODE_ENV');
    if (env === 'development') {
      await this.createTestData();
    }
  }

  async createTestData() {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const todoRepository = queryRunner.manager.getRepository(Todo);
      const count = await todoRepository.count();

      if (count > 0) throw 'Test data already exists';

      for (var i = 1; i <= 5; i++) {
        await todoRepository.save({
          title: `Test ${i}`,
        });
      }

      await queryRunner.commitTransaction();
    } catch (err) {
      this.logger.warn(err);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
