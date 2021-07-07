import { REQUIRED_ENV_VARS } from 'const/enviroment';

export const checkEnvVariables = () => {
  if (REQUIRED_ENV_VARS.some((varName) => !process.env[varName])) {
    console.error('\x1b[31m', '\nYou must set up your env variables correctly!');
    console.error('Make sure you have set these env variables correctly:\n');
    console.error('\x1b[37m', REQUIRED_ENV_VARS.join('\n '), '\n');
  }
};
