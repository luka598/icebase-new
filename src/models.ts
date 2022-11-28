enum IBDataTypes {
    STRING,
    INT,
}

enum IBFlags {
    NOT_NULL
}

type IBModelDataType = { type: IBDataTypes, parameters?: any[], flags?: IBFlags[] }

// const IBDataType: { [key: string]: (...args: any) => IBModelDataType } = {
const IBDataType = {
    STRING: (length: Number, flags?: IBFlags[]) => ({ type: IBDataTypes.STRING, parameters: [length], flags: flags }),
    INT: (flags?: IBFlags[]) => ({ type: IBDataTypes.INT, flags: flags }),
}

type IBModel = {
    name: string,
    fields: { [key: string]: IBModelDataType }
}

export { IBDataTypes, IBFlags, IBModelDataType, IBDataType, IBModel }