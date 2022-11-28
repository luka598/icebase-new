interface IBDBInterface {
    connect: (uri: string) => any
    runQuery: (query: string) => object
}

export { IBDBInterface }