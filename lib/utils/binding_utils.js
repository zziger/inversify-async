"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFactoryDetails = exports.ensureFullyBound = exports.multiBindToService = void 0;
var inversify_1 = require("../inversify");
var ERROR_MSGS = require("../constants/error_msgs");
var literal_types_1 = require("../constants/literal_types");
var factory_type_1 = require("./factory_type");
var multiBindToService = function (container) {
    return function (service) {
        return function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            return types.forEach(function (t) { return container.bind(t).toService(service); });
        };
    };
};
exports.multiBindToService = multiBindToService;
var ensureFullyBound = function (binding) {
    var boundValue = null;
    switch (binding.type) {
        case literal_types_1.BindingTypeEnum.ConstantValue:
        case literal_types_1.BindingTypeEnum.Function:
            boundValue = binding.cache;
            break;
        case literal_types_1.BindingTypeEnum.Constructor:
        case literal_types_1.BindingTypeEnum.Instance:
            boundValue = binding.implementationType;
            break;
        case literal_types_1.BindingTypeEnum.DynamicValue:
            boundValue = binding.dynamicValue;
            break;
        case literal_types_1.BindingTypeEnum.Provider:
            boundValue = binding.provider;
            break;
        case literal_types_1.BindingTypeEnum.Factory:
            boundValue = binding.factory;
            break;
    }
    if (boundValue === null) {
        var serviceIdentifierAsString = inversify_1.getServiceIdentifierAsString(binding.serviceIdentifier);
        throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifierAsString);
    }
};
exports.ensureFullyBound = ensureFullyBound;
var getFactoryDetails = function (binding) {
    switch (binding.type) {
        case literal_types_1.BindingTypeEnum.Factory:
            return { factory: binding.factory, factoryType: factory_type_1.FactoryType.Factory };
        case literal_types_1.BindingTypeEnum.Provider:
            return { factory: binding.provider, factoryType: factory_type_1.FactoryType.Provider };
        case literal_types_1.BindingTypeEnum.DynamicValue:
            return { factory: binding.dynamicValue, factoryType: factory_type_1.FactoryType.DynamicValue };
        default:
            throw new Error("Unexpected factory type " + binding.type);
    }
};
exports.getFactoryDetails = getFactoryDetails;
//# sourceMappingURL=binding_utils.js.map