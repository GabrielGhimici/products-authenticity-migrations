import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEntityUserFK1565535916279 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        add constraint FK_entityUser
        foreign key (parent_entity_id) references entity(id)`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `alter table user
        drop foreign key FK_entityUser`
      );
    }

}
