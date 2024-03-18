import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1710790248705 implements MigrationInterface {
    name = 'Init1710790248705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tracking\` (\`id\` varchar(255) NOT NULL, \`position\` json NOT NULL, \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`address\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fleet\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`manufacturer\` varchar(255) NOT NULL, \`license\` varchar(255) NOT NULL, \`vin\` varchar(255) NOT NULL, \`rented\` tinyint NOT NULL DEFAULT 0, \`customerId\` varchar(36) NULL, \`positionId\` varchar(36) NULL, UNIQUE INDEX \`IDX_fb702f279f5b8c777f38d589a9\` (\`license\`), UNIQUE INDEX \`IDX_6298bf6fa519b27075505957ac\` (\`vin\`), UNIQUE INDEX \`REL_07181da104427defb6aafe247e\` (\`customerId\`), UNIQUE INDEX \`REL_373c579bf49b0359d85a3ba66f\` (\`positionId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_07181da104427defb6aafe247e9\` FOREIGN KEY (\`customerId\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_373c579bf49b0359d85a3ba66f9\` FOREIGN KEY (\`positionId\`) REFERENCES \`tracking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_373c579bf49b0359d85a3ba66f9\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_07181da104427defb6aafe247e9\``);
        await queryRunner.query(`DROP INDEX \`REL_373c579bf49b0359d85a3ba66f\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`REL_07181da104427defb6aafe247e\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`IDX_6298bf6fa519b27075505957ac\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`IDX_fb702f279f5b8c777f38d589a9\` ON \`fleet\``);
        await queryRunner.query(`DROP TABLE \`fleet\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`tracking\``);
    }

}
