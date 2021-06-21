declare function named(name: string | number | symbol): (target: import("./decorator_utils").DecoratorTarget<Object>, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<unknown> | undefined) => void;
export { named };
