import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductionStepTable1566756790872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table production_step (
          id int(10) unsigned not null auto_increment,
          id_product int(10) unsigned not null,
          id_default_step int(10) unsigned not null,
          status enum('inactive', 'waiting_goods', 'producing', 'finished', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          foreign key (id_product) references product(id),
          foreign key (id_default_step) references default_production_step(id),
          index (id_product),
          index (id_default_step)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table production_step`
      );
    }

}
