import { interfaces } from "../inversify";
export declare const multiBindToService: (container: interfaces.Container) => (service: interfaces.ServiceIdentifier<any>) => (...types: interfaces.ServiceIdentifier<any>[]) => void;
export declare const ensureFullyBound: (binding: interfaces.Binding<unknown>) => void;
export declare const getFactoryDetails: (binding: interfaces.Binding<unknown>) => interfaces.FactoryDetails;
