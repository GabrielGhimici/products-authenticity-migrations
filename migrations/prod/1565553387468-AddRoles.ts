import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoles1565553387468 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into role (name, status)
         values ('User', 'enabled'),
                ('Organization user', 'enabled'),
                ('Organization admin', 'enabled'),
                ('God', 'enabled')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from role`
      );
    }

}
