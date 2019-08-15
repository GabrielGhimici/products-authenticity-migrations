import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddGodUser1565556061571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      // tslint:disable: max-line-length
      await queryRunner.query(
        `insert into
        user (first_name, last_name, email, username, password, salt, id_role, parent_entity_id, blockchain_account, status)
        values ('Master', 'Account', 'master.account@gmail.com', 'masterAccount', '40e5c73578b599b07756c3ec406c0b667686a57d406938808e1affc10b4eabe645c8ff7a33355b3787d7db9fc5dedf43943bbe38074a0153227464146a80089d', 'A41D2E5', 4, null, 'notAnAccountForNow', 'enabled')`
      );
      // tslint:enable: max-line-length
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `delete from user
        where email = 'master.account@gmail.com'`
      );
    }

}
