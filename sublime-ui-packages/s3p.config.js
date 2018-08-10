module.exports = {
    "profile": "default",
    "region": "us-east-1",
    "origin": "./libs",
    "destination": "s3://lerna-s3-test",
    "ignore": /^\.|\/\./,
    "concurrency": 1,
    "delete": true
};

module.exports.schemaVersion = 1;
