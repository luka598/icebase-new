import { IBModel } from "../../models"
import { flagMap, typeMap } from "./map"

function modelToFields(model: IBModel, names: boolean = true, types: boolean = false) {
    let fields = []
    for (let field in model.fields) {
        let f = model.fields[field]
        let t = ""
        if (names) {
            t += field
        }
        if (types) {
            if (names) t += ' '
            t += typeMap[model.fields[field].type]
            if (f.parameters) {
                t += `(${f.parameters.join(',')})`
            }
            if (f.flags) {
                t += ' '
                t += f.flags.map((value) => { return flagMap[value] }).join(' ')
            }
        }

        fields.push(t)
    }
    return fields
}

function createTable(model: IBModel): string {
    return `CREATE TABLE IF NOT EXISTS ${model.name} (${modelToFields(model, true, true).join(',')});`
}

function dropTable(model: IBModel) {
    return `DROP TABLE ${model.name};`
}

export default { createTable, dropTable }