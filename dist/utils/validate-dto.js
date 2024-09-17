"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const getMessageError = (errors) => {
    try {
        const [firstError] = errors;
        const hasNestedErrors = firstError?.children?.length > 0;
        if (hasNestedErrors) {
            const [nestedError] = firstError.children;
            const hasNestedNestedErrors = nestedError?.children?.length > 0;
            if (hasNestedNestedErrors) {
                const [nestedNestedError] = nestedError.children;
                return getMessageError([nestedNestedError]);
            }
            const [nestedMessageError] = Object.values(nestedError.constraints);
            return nestedMessageError;
        }
        const [messageError] = Object.values(firstError.constraints);
        return messageError;
    }
    catch (error) {
        return "Ops! Ocorreu um erro inesperado.";
    }
};
const validateDTO = async (DTOClass, dtoObject) => {
    dtoObject = (0, class_transformer_1.plainToInstance)(DTOClass, dtoObject);
    if (!(dtoObject instanceof DTOClass)) {
        return {
            error: "Ops! O objeto não é uma instância do DTO.",
        };
    }
    const errors = await (0, class_validator_1.validate)(dtoObject, {
        stopAtFirstError: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    });
    const hasErrors = errors.length > 0;
    if (hasErrors) {
        const messageError = getMessageError(errors);
        return {
            error: messageError,
        };
    }
    return {
        dtoValidated: dtoObject,
    };
};
exports.validateDTO = validateDTO;
//# sourceMappingURL=validate-dto.js.map