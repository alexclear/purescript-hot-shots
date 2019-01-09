"use strict";

exports.createStatsdClient = function (host) {
    return function (port) {
        return function () {
            var StatsD = require('hot-shots');
            return new StatsD({ host: host, port: port });
        };
    };
};

exports.timing = function (statsdClient) {
    return function(name) {
        return function(val) {
            return function () {
                statsdClient.timing(name, val);
                return {};
            };
        };
    };
};

exports.increment = function (statsdClient) {
    return function(name) {
        return function () {
            statsdClient.increment(name);
            return {};
        };
    };
};

exports.gauge = function (statsdClient) {
    return function(name) {
        return function(val) {
            return function () {
                statsdClient.gauge(name, val);
                return {};
            };
        };
    };
};
