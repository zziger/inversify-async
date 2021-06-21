import { DecoratorTarget } from "./decorator_utils";
import { ServiceIdentifierOrFunc } from "./lazy_service_identifier";
export declare function injectBase(metadataKey: string): (serviceIdentifier: ServiceIdentifierOrFunc) => (target: DecoratorTarget, targetKey?: string | symbol | undefined, indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<unknown> | undefined) => void;
