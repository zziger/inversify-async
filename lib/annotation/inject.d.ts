declare const inject: (serviceIdentifier: import("./lazy_service_identifier").ServiceIdentifierOrFunc) => (target: import("./decorator_utils").DecoratorTarget<Object>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<unknown> | undefined) => void;
export { inject };
