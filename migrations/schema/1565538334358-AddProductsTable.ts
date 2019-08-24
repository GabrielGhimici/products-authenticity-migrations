import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductsTable1565538334358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table product (
          id int(10) unsigned not null auto_increment,
          id_type int(10) unsigned not null,
          name varchar(100) not null,
          production_date timestamp not null,
          validity_term_quantity int(4) unsigned null,
          validity_term_unit enum('hour', 'day', 'month', 'year', 'all') not null,
          status enum('in_stock', 'delivered', 'deleted') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          primary key (id),
          foreign key (id_type) references product_type(id),
          index (name),
          index (id_type),
          index (status)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table product`
      );
    }

}
