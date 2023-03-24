'use strict';

/**
 * try controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::try.try');
