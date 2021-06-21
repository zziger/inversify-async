import { interfaces } from "../interfaces/interfaces";
declare type Prototype<T> = {
    [Property in keyof T]: T[Property] extends Function ? T[Property] : T[Property] | undefined;
} & {
    constructor: Function;
};
interface ConstructorFunction<T = Object> {
    new (...args: unknown[]): T;
    prototype: Prototype<T>;
}
export declare type DecoratorTarget<T = Object> = ConstructorFunction<T> | Prototype<T>;
declare function tagParameter(annotationTarget: DecoratorTarget, parameterName: string | symbol | undefined, parameterIndex: number, metadata: interfaces.MetadataOrMetadataArray): void;
declare function tagProperty(annotationTarget: DecoratorTarget, propertyName: string | symbol, metadata: interfaces.MetadataOrMetadataArray): void;
declare function createTaggedDecorator(metadata: interfaces.MetadataOrMetadataArray): (target: DecoratorTarget, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<unknown> | undefined) => void;
declare function decorate(decorator: (ClassDecorator | ParameterDecorator | MethodDecorator), target: object, parameterIndexOrProperty?: number | string): void;
export { decorate, tagParameter, tagProperty, createTaggedDecorator };
