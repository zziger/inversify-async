"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postConstruct = void 0;
var ERRORS_MSGS = require("../constants/error_msgs");
var METADATA_KEY = require("../constants/metadata_keys");
var property_event_decorator_1 = require("./property_event_decorator");
var postConstruct = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
exports.postConstruct = postConstruct;
//# sourceMappingURL=post_construct.js.map