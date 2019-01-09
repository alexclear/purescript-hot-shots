"use strict";

exports.timing = function (host) {
    return function (port) {
        return function(name) {
            return function(val) {
                return function () {
                    var StatsD = require('hot-shots');
                    var StatsdClient = new StatsD({ host: host, port: port });
                    StatsdClient.timing(name, val);
                    return {};
                };
            };
        };
    };
};

exports.increment = function (host) {
    return function (port) {
        return function(name) {
            return function () {
                var StatsD = require('hot-shots');
                var StatsdClient = new StatsD({ host: host, port: port });
                StatsdClient.increment(name);
                return {};
            };
        };
    };
};

exports.gauge = function (host) {
    return function (port) {
        return function(name) {
            return function(val) {
                return function () {
                    var StatsD = require('hot-shots');
                    var StatsdClient = new StatsD({ host: host, port: port });
                    StatsdClient.gauge(name, val);
                    return {};
                };
            };
        };
    };
};
