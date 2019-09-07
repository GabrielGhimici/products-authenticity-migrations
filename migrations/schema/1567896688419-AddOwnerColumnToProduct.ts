import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOwnerColumnToProduct1567896688419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table product
        add column id_owner int(10) unsigned not null after name`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table product
        drop column id_owner`
      );
    }

}
