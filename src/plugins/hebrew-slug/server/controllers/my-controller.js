'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('hebrew-slug')
      .service('myService')
      .getWelcomeMessage();
  },
});
