import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProducts1566759408375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into product (id_type, name, public_identifier, production_date, validity_term_quantity, validity_term_unit, status)
        values (1, 'Product 1', 'a2f4a2eb-3b1d-45e7-9d85-913670ab116b', '2019-08-25 19:03:32', 1, 'month', 'delivered'),
               (2, 'Product 3', '1f40bcb2-0d51-4946-afe4-6834876d4228', '2019-08-25 19:23:32', null, 'all', 'producing'),
               (3, 'Product 2', '7fed701c-a2d3-4387-9556-9bb8f3a4f2eb', '2019-08-28 19:23:32', 10, 'year', 'producing')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from product`
      );
    }

}
