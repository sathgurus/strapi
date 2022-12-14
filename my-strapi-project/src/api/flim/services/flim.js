'use strict';

/**
 * flim service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flim.flim');
