declare function tagged(metadataKey: string | number | symbol, metadataValue: any): (target: import("./decorator_utils").DecoratorTarget<Object>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<unknown> | undefined) => void;
export { tagged };
