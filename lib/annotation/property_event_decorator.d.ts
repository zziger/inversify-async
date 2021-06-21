declare function propertyEventDecorator(eventKey: string, errorMessage: string): () => (target: any, propertyKey: string) => void;
export { propertyEventDecorator };
