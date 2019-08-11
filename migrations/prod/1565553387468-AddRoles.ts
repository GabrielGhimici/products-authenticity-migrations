import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoles1565553387468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        ``
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        ``
      );
    }

}
