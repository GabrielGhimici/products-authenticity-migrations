import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddContracts1568069785108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table contract(
          id int(10) unsigned not null auto_increment,
          name varchar(500) unique not null,
          address varchar(500) not null,
          abi mediumtext not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          index (name),
          index (address)
        );`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        'drop table contract'
      );
    }

}
