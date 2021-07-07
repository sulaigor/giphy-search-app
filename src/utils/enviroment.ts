import { REQUIRED_ENV_VARS } from 'const/enviroment';

type EnvVarNamesType = typeof REQUIRED_ENV_VARS[number];
type EnvVariablesType = Record<EnvVarNamesType, string>;

export const getEnviroment = (): EnvVariablesType =>
  REQUIRED_ENV_VARS.reduce((acc, varName: string) => {
    acc[varName as EnvVarNamesType] = process.env[varName] ?? '';
    return acc;
  }, {} as EnvVariablesType);
