import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1710857642926 implements MigrationInterface {
    name = 'Init1710857642926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tracking\` (\`id\` varchar(255) NOT NULL, \`position\` json NOT NULL, \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customers\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`address\` json NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fleet\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`manufacturer\` varchar(255) NOT NULL, \`license\` varchar(255) NOT NULL, \`vin\` varchar(255) NOT NULL, \`rentedById\` varchar(36) NULL, \`positionId\` varchar(36) NULL, UNIQUE INDEX \`IDX_fb702f279f5b8c777f38d589a9\` (\`license\`), UNIQUE INDEX \`IDX_6298bf6fa519b27075505957ac\` (\`vin\`), UNIQUE INDEX \`REL_f0efafb8f8bb38b20d4b3a1047\` (\`rentedById\`), UNIQUE INDEX \`REL_373c579bf49b0359d85a3ba66f\` (\`positionId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_f0efafb8f8bb38b20d4b3a10477\` FOREIGN KEY (\`rentedById\`) REFERENCES \`customers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fleet\` ADD CONSTRAINT \`FK_373c579bf49b0359d85a3ba66f9\` FOREIGN KEY (\`positionId\`) REFERENCES \`tracking\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_373c579bf49b0359d85a3ba66f9\``);
        await queryRunner.query(`ALTER TABLE \`fleet\` DROP FOREIGN KEY \`FK_f0efafb8f8bb38b20d4b3a10477\``);
        await queryRunner.query(`DROP INDEX \`REL_373c579bf49b0359d85a3ba66f\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`REL_f0efafb8f8bb38b20d4b3a1047\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`IDX_6298bf6fa519b27075505957ac\` ON \`fleet\``);
        await queryRunner.query(`DROP INDEX \`IDX_fb702f279f5b8c777f38d589a9\` ON \`fleet\``);
        await queryRunner.query(`DROP TABLE \`fleet\``);
        await queryRunner.query(`DROP TABLE \`customers\``);
        await queryRunner.query(`DROP TABLE \`tracking\``);
    }

}
