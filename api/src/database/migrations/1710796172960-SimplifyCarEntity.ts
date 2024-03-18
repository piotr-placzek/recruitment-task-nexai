import { MigrationInterface, QueryRunner } from "typeorm";

export class SimplifyCarEntity1710796172960 implements MigrationInterface {
    name = 'SimplifyCarEntity1710796172960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_07181da104427defb6aafe247e9\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_373c579bf49b0359d85a3ba66f9\``);
        await queryRunner.query(`DROP INDEX \`REL_07181da104427defb6aafe247e\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`REL_373c579bf49b0359d85a3ba66f\` ON \`fleet\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP COLUMN \`rented\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP COLUMN \`customerId\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP COLUMN \`positionId\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD \`rentedBy\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP COLUMN \`rentedBy\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD \`positionId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD \`customerId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD \`rented\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_373c579bf49b0359d85a3ba66f\` ON \`fleet\` (\`positionId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_07181da104427defb6aafe247e\` ON \`fleet\` (\`customerId\`)`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_373c579bf49b0359d85a3ba66f9\` FOREIGN KEY (\`positionId\`) REFERENCES \`tracking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_07181da104427defb6aafe247e9\` FOREIGN KEY (\`customerId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
