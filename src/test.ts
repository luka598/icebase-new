import { IBDataBase } from "./db";
import { IBDataType, IBModel } from "./models";

const a: IBModel = {
    name: "test_model",
    fields: {
        id: IBDataType.INT(),
        name: IBDataType.STRING(255)
    }
}

const db = new IBDataBase('test.db')
db.model.CREATE(a)
console.log(db.model.READ())
db.model.DELETE(a)
console.log(db.model.READ())