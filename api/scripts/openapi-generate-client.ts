import { execSync } from 'child_process';

const generationsSource = 'src/openapi.yaml';
const generationTarget = 'dist/openapi';
const generationDestination = '../app/lib';

try {
  execSync(`rm -rf ${generationTarget} ${generationDestination}/openapi`);

  execSync(
    `docker run --rm \
  -v ${process.cwd()}:/local openapitools/openapi-generator-cli generate \
  -i /local/${generationsSource} \
  -g typescript-angular \
  -o /local/${generationTarget} \
  --additional-properties=supportsES6=true,typescriptThreePlus=true,npmName=typescript-angular-nexai-rt-api-client`,
  );

  execSync(`mv ${generationTarget} ${generationDestination}`);
} catch (error) {
  console.error(error);
}
