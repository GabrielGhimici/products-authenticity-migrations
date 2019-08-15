import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueProductIdentifier1565868417579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table product
        add public_identifier varchar(100) unique not null after name`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table product
        drop column public_identifier`
      );
    }

}
