import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductTypes1566758653800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into product_type (name, description, status)
        values ('Type_1', 'Type 1 description', 'enabled'),
               ('Type_2', 'Type 2 description', 'enabled'),
               ('Type_3', 'Type 3 description', 'enabled')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from product_type`
      );
    }

}
