import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1565533776981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table user (
          id int(10) unsigned not null auto_increment,
          first_name varchar(100) not null,
          last_name varchar(100) not null,
          email varchar(100) unique not null,
          username varchar(100) unique not null,
          password varchar(256) not null,
          salt varchar(7) not null,
          parent_entity_id int(10) unsigned null,
          blockchain_account varchar(250) not null,
          status enum('enabled', 'disabled', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          index (email),
          index (parent_entity_id)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table user`
      );
    }

}
