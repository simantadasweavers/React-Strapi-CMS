'use strict';

/**
 * companies service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::companies.companies');
