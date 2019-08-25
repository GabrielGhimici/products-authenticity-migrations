import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductionSteps1566760714603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into production_step (id_product, id_default_step, status)
        values (1, 1, 'finished'),
               (1, 2, 'finished'),
               (1, 3, 'finished'),
               (1, 4, 'finished'),
               (1, 5, 'finished'),
               (2, 6, 'finished'),
               (2, 7, 'waiting_goods'),
               (2, 8, 'inactive'),
               (3, 9, 'finished'),
               (3, 10, 'finished'),
               (3, 11, 'finished'),
               (3, 12, 'finished'),
               (3, 13, 'producing'),
               (3, 14, 'inactive'),
               (3, 15, 'inactive'),
               (3, 16, 'inactive')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from production_step`
      );
    }

}
