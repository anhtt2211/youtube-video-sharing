// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

// Get the migration name from the command line arguments
const migrationName = process.argv[2];

// Run the migration generation command with the substituted migration name
execSync(
  `pnpm ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli migration:create ./src/infrastructure/persistence/migrations/${migrationName}`,
  {
    stdio: 'inherit',
  },
);
