import { IBDataTypes, IBFlags } from "../../models"

const typeMap = {
    [IBDataTypes.STRING]: 'VARCHAR',
    [IBDataTypes.INT]: 'INT'
}

const flagMap = {
    [IBFlags.NOT_NULL]: 'NOT NULL'
}

export { typeMap, flagMap }