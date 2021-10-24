import { environment } from "base-ui-utilities/lib/environment";

function isTesting(): boolean {
  return /^(QA[1-9]?)$/i.test(environment.ENV_NAME);
}

function isDevelopment(): boolean {
  return /^(LOCAL|DEV[1-9]?)$/i.test(environment.ENV_NAME);
}

function isProduction(): boolean {
  return /^(STAGE|PROD|PRODUCTION)$/i.test(environment.ENV_NAME);
}

export { environment, isTesting, isDevelopment, isProduction };
