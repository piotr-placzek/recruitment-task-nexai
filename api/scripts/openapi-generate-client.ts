import { execSync } from 'child_process';

const generationsSource = 'src/openapi.yaml';
const generationTarget = 'dist/openapi';
const frontAppSource = '../app/src/';

try {
  execSync(`rm -rf ${generationTarget}`);

  execSync(
    `docker run --rm \
  -v ${process.cwd()}:/local openapitools/openapi-generator-cli generate \
  -i /local/${generationsSource} \
  -g typescript-angular \
  -o /local/${generationTarget}`,
  );

  execSync(`mv ${generationTarget} ${frontAppSource}`);
} catch (error) {
  console.error(error);
}
