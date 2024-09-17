type DTOType<T> = {
    new (): T;
};
interface IValidateDtoOutput<T> {
    error?: string;
    dtoValidated?: T;
}
export declare const validateDTO: <T>(DTOClass: DTOType<T>, dtoObject: T) => Promise<IValidateDtoOutput<T>>;
export {};
