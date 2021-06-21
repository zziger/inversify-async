"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preDestroy = void 0;
var ERRORS_MSGS = require("../constants/error_msgs");
var METADATA_KEY = require("../constants/metadata_keys");
var property_event_decorator_1 = require("./property_event_decorator");
var preDestroy = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
exports.preDestroy = preDestroy;
//# sourceMappingURL=pre_destroy.js.map