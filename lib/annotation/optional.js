"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = void 0;
var METADATA_KEY = require("../constants/metadata_keys");
var metadata_1 = require("../planning/metadata");
var decorator_utils_1 = require("./decorator_utils");
function optional() {
    return decorator_utils_1.createTaggedDecorator(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
}
exports.optional = optional;
//# sourceMappingURL=optional.js.map