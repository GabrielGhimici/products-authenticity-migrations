import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductTypeTable1565537504668 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table product_type (
          id int(10) unsigned not null auto_increment,
          name varchar(100) not null,
          description varchar(500) null,
          status enum('enabled', 'disabled', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          index (name)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table product_type`
      );
    }

}
