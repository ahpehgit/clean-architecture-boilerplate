const DBService = require('../../application/contracts/DBService');

const RedisSampleRepository = require('./RedisSampleRepository');

module.exports = class RedisService extends DBService {
    constructor() {
        super();
        this.sampleRepository = new RedisSampleRepository();
    }

    async initDatabase() {
        //* Write codes to connect to your db. In this case here will contain implmentation on connect to redis

        console.log('Redis DB connected!');
    }
};