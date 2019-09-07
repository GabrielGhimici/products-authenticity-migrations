import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductInOtherOrganization1567897587561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        // tslint:disable-next-line: max-line-length
        `insert into product (id_type, name, id_owner, public_identifier, production_date, validity_term_quantity, validity_term_unit, status)
        values (1, 'Product 4', 3, '21a323f4-3668-4cc3-a5d4-72b2eea65270', '2019-09-05 19:03:32', 1, 'month', 'delivered'),
               (2, 'Product 6', 3, '90f8d484-a73b-4bc9-b1d5-2a087167eabf', '2019-09-05 19:23:32', null, 'all', 'producing'),
               (3, 'Product 5', 1, 'f7546438-3650-4eff-af00-154945707796', '2019-09-08 19:23:32', 10, 'year', 'producing')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from product
        where id in (3,4,5);`
      );
    }

}
