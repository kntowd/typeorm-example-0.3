import { MigrationInterface, QueryRunner } from "typeorm";

export class createPhotos1653445731795 implements MigrationInterface {
    name = 'createPhotos1653445731795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`photo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`filename\` varchar(255) NOT NULL, \`views\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`photo\``);
    }

}
