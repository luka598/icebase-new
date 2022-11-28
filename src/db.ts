import { IBModel } from './models'


enum IBBackends {
    sqlite3
}

class Model {
    db: IBDataBase
    models: { [key: string]: IBModel } = {}
    constructor(db: IBDataBase) {
        this.db = db
    }

    CREATE(model: IBModel) {
        this.db.runSQL(createTable(model))
        this.models[model.name] = model
    }
    READ() {
        return this.models
    }
    UPDATE() {
        //TODO: Alter table
    }
    DELETE(model: IBModel) {
        this.db.runSQL(dropTable(model))
        delete this.models[model.name]
    }
}

class Data {
    db: IBDataBase
    constructor(db: IBDataBase) {
        this.db = db
    }

    CREATE() {

    }
    READ() {

    }
    UPDATE() {

    }
    DELETE() {

    }
}

class IBDataBase {
    db: any
    model: Model
    data: Data

    constructor(backend: IBBackends, uri: string) {
        switch (backend) {
            case IBBackends.sqlite3:
                this.db = import("./db/sqlite3/interface")
                break;
        }
        this.model = new Model(this)
        this.data = new Data(this)
    }

    runSQL(sql: string) {
        console.log("RUNNING:", sql)
        this.db.run(sql)
    }
}

export { IBDataBase, IBBackends }