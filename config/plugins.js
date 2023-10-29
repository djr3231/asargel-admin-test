  module.exports = ({ env }) => ({

    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },

    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '1d',
        },
      },
    }
    

  });
