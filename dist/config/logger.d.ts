interface LogMetadata {
    [key: string]: any;
}
export declare class Logger {
    static info(message: string, metadata?: LogMetadata): void;
    static warn(message: string, metadata?: LogMetadata): void;
    static error(message: string, metadata?: LogMetadata): void;
}
export {};
