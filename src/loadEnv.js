const fs = require('fs');
const path = require('path');

const envFile = path.resolve(__dirname, '..', '.env');
const envExampleFile = path.resolve(__dirname, '..', '.env.example');

const loadEnvVariables = () => {
  if (fs.existsSync(envFile)) {
    require('dotenv').config({ path: envFile });
  } else if (fs.existsSync(envExampleFile)) {
    console.warn(
      'No .env file found. Copying .env.example to .env. Please fill in the required environment variables.'
    );
    fs.copyFileSync(envExampleFile, envFile);
  } else {
    console.error(
      'No .env or .env.example file found. Please create a .env file with your environment variables.'
    );
  }
};

module.exports = { loadEnvVariables };
