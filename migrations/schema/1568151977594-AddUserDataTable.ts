import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserDataTable1568151977594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table user_data (
          id int(10) unsigned not null auto_increment,
          user_id int(10) unsigned not null,
          unlock_data varchar(1000),
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          foreign key (user_id) references user(id),
          index (user_id)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table user_data`
      );
    }

}
