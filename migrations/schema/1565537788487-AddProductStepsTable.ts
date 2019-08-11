import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductStepsTable1565537788487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table production_steps (
          id int(10) unsigned not null auto_increment,
          id_type int(10) unsigned not null,
          name varchar(100) not null,
          status enum('waiting_goods', 'producing', 'finished', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          foreign key (id_type) references product_type(id),
          index (name),
          index (id_type)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table production_steps`
      );
    }

}
