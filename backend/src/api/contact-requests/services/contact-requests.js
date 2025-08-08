'use strict';

/**
 * contact-requests service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contact-requests.contact-requests');
