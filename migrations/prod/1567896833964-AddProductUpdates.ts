import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductUpdates1567896833964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      queryRunner.query(`
        update product
        set id_owner = 1;
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      queryRunner.query(`
        update product
        set id_owner = null
      `);
    }

}
