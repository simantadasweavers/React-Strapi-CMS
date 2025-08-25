'use strict';

/**
 * companies controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::companies.companies');
