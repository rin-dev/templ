import {MigrationInterface, QueryRunner} from "typeorm";

export class User1620199967642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      INSERT INTO users (username, email, password)
      VALUES ('admin', 'admin@example.ru', '$2a$10$UmTguKl/C52erQeKQYRJpO1Pny..t5NBFv/NySrcJO2Dzl0DVl7KG')
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
      DELETE FROM users WHERE username = 'admin'
      `);
    }

}
