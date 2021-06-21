import { interfaces } from "../interfaces/interfaces";
declare class Lookup<T> implements interfaces.Lookup<T> {
    private _map;
    constructor();
    getMap(): Map<interfaces.ServiceIdentifier<any>, T[]>;
    add(serviceIdentifier: interfaces.ServiceIdentifier<any>, value: T): void;
    get(serviceIdentifier: interfaces.ServiceIdentifier<any>): T[];
    remove(serviceIdentifier: interfaces.ServiceIdentifier<any>): void;
    removeIntersection(lookup: interfaces.Lookup<T>): void;
    removeByCondition(condition: (item: T) => boolean): T[];
    hasKey(serviceIdentifier: interfaces.ServiceIdentifier<any>): boolean;
    clone(): interfaces.Lookup<T>;
    traverse(func: (key: interfaces.ServiceIdentifier<any>, value: T[]) => void): void;
    private _setValue;
}
export { Lookup };
