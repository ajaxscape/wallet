const { Error } = require('util')

exports.module = class CustomError extends Error {}
