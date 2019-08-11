import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoleUserFK1565540462048 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        add constraint FK_roleUser
        foreign key (id_role) references role(id)`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        drop foreign key FK_roleUser`
      );
    }

}
