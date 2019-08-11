import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAnalyticsTable1565538708602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `create table analytics (
          date timestamp not null,
          id_user int(10) unsigned not null,
          id_product int(10) unsigned not null,
          platform enum('web', 'mobile') not null,
          createdAt timestamp not null default current_timestamp,
          updatedAt timestamp not null default current_timestamp,
          foreign key (id_user) references user(id),
          foreign key (id_product) references product(id),
          index (id_user),
          index (id_product)
        )`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `drop table analytics`
      );
    }

}
