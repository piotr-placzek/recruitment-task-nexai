import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveCompanyColumnFromCustomerEntity1710796313490 implements MigrationInterface {
    name = 'RemoveCompanyColumnFromCustomerEntity1710796313490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` DROP COLUMN \`companyName\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customers\` ADD \`companyName\` varchar(255) NOT NULL`);
    }

}
