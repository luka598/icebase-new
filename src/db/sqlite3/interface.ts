import { Database } from "sqlite3";
import { IBDBInterface } from "../interface"

class Sqlite3 implements IBDBInterface {
    db: Database
    constructor(uri: string) {
        this.db = this.connect(uri)
    }

    connect(uri: string) {
        return new Database(uri)
    }

    runQuery(query: string) {
        return this.db.run(query)
    }
}

export default Sqlite3