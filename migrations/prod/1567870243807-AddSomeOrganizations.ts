import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSomeOrganizations1567870243807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `insert into entity (name, type, description, legal_identifier, status)
        values ('Organization 1', 'seller', 'Organization 1 description', '66057db0-72f3-47ba-a5ac-4b3b3e1cdc0c', 'enabled'),
               ('Organization 2', 'provider', 'Organization 2 description', 'b15dbe9f-0391-4a99-8989-5f321a390f40', 'enabled'),
               ('Organization 3', 'seller', 'Organization 3 description', '1dd8de7d-56f6-4a3b-b758-a274c2de764f', 'enabled')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from entity`
      );
    }

}
