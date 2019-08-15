import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEntityTable1565535078983 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table entity (
          id int(10) unsigned not null auto_increment,
          name varchar(100) not null,
          type enum('seller','provider') not null,
          description varchar(500) null,
          legal_identifier varchar(100) not null,
          status enum('enabled', 'disabled', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          index (name),
          index (legal_identifier)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table entity`
      );
    }

}
