module.exports = ({ env }) => ({
    slugify: {
        enabled: true,
        shouldUpdateSlug: true,
        config: {
          contentTypes: {
            article: {
              field: 'slug',
              references: 'title',
            },
          },
          
        },
      }
  });
