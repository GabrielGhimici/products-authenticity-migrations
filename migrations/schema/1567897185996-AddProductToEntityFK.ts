import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductToEntityFK1567897185996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table product
        add constraint FK_productEntity
        foreign key (id_owner) references entity(id)`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        drop foreign key FK_productEntity`
      );
    }

}
