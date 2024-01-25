const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nodm',
        mongodb_password: 'jKtbYhaKHhbSPUOu',
        mongodb_clustername: 'cluster0.yx6gzxd',
        mongodb_database: 'udemy-nextjs-dev',
      },  
    };
  }

  return {
    env: {
      mongodb_username: 'nodm',
      mongodb_password: 'jKtbYhaKHhbSPUOu',
      mongodb_clustername: 'cluster0.yx6gzxd',
      mongodb_database: 'udemy-nextjs',
    },  
  };
};
