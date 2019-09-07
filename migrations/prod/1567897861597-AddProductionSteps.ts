import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductionSteps1567897861597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into production_step (id_product, id_default_step, status)
        values (4, 1, 'inactive'),
               (4, 2, 'inactive'),
               (4, 3, 'inactive'),
               (4, 4, 'inactive'),
               (4, 5, 'inactive'),
               (5, 6, 'finished'),
               (5, 7, 'waiting_goods'),
               (5, 8, 'inactive'),
               (6, 9, 'finished'),
               (6, 10, 'finished'),
               (6, 11, 'finished'),
               (6, 12, 'finished'),
               (6, 13, 'finished'),
               (6, 14, 'finished'),
               (6, 15, 'finished'),
               (6, 16, 'finished')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from production_step
        where id > 16 and id <= 32`
      );
    }

}
