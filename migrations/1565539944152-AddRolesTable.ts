import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRolesTable1565539944152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table role (
          id int(10) unsigned not null auto_increment,
          name varchar(100) not null,
          status enum('enabled', 'disabled', 'deleted'),
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          index (name)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table role`
      );
    }

}
