import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoleColumnToUserTable1565540252018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        add column id_role int(10) unsigned not null after salt`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        drop column id_role`
      );
    }

}
