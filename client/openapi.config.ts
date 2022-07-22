import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: 'http://localhost:4000/api-json',
  apiFile: "./src/api/empty.ts",
  apiImport: `emptyApi`,
  outputFile: `./src/api/api.generated.ts`,
  exportName: `generatedApi`,
};

export default config;
