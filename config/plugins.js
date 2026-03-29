module.exports = {
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100 * 1024 * 1024,
      },
    },
  },
};
