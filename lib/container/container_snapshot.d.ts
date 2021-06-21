import { interfaces } from "../interfaces/interfaces";
declare class ContainerSnapshot implements interfaces.ContainerSnapshot {
    bindings: interfaces.Lookup<interfaces.Binding<any>>;
    activations: interfaces.Lookup<interfaces.BindingActivation<any>>;
    deactivations: interfaces.Lookup<interfaces.BindingDeactivation<any>>;
    middleware: interfaces.Next | null;
    moduleActivationStore: interfaces.ModuleActivationStore;
    static of(bindings: interfaces.Lookup<interfaces.Binding<any>>, middleware: interfaces.Next | null, activations: interfaces.Lookup<interfaces.BindingActivation<any>>, deactivations: interfaces.Lookup<interfaces.BindingDeactivation<any>>, moduleActivationStore: interfaces.ModuleActivationStore): ContainerSnapshot;
}
export { ContainerSnapshot };
