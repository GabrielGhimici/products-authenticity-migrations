import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductDefaultSteps1566758992298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into default_production_step (id_type, name, status)
        values (1, 'step_1', 'enabled'),
               (1, 'step_2', 'enabled'),
               (1, 'step_3', 'enabled'),
               (1, 'step_4', 'enabled'),
               (1, 'step_5', 'enabled'),
               (2, 'step_1_1', 'enabled'),
               (2, 'step_1_2', 'enabled'),
               (2, 'step_1_3', 'enabled'),
               (3, 'step_3_1', 'enabled'),
               (3, 'step_3_2', 'enabled'),
               (3, 'step_3_3', 'enabled'),
               (3, 'step_3_4', 'enabled'),
               (3, 'step_3_5', 'enabled'),
               (3, 'step_3_6', 'enabled'),
               (3, 'step_3_7', 'enabled'),
               (3, 'step_3_8', 'enabled')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from default_production_step`
      );
    }

}
