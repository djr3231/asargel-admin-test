'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'slug',
    plugin: 'hebrew-slug',
    type: 'string'
  });
};
