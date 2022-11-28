/*
Request -> Parse arguments -> Auth -> Exec
*/
import * as jwt from 'jsonwebtoken'

const SECRET = "secret"

type IBAuth = {
    jwt: string | undefined
}

type IBAuthData = {
    exp: Number,
    user: Number,
    data?: any
}

enum IBRequestMethod {
    AUTH,
    INFO,
    MODELS,
    CREATE,
    READ,
    UPDATE,
    DELETE,
}


type IBRequestData = {
    model?: string | [string]
    filter?: any
}


type IBRequest = {
    auth: IBAuth
    method: IBRequestMethod;
    data?: IBRequestData
};
function generateAuth(user: Number) {
    const expiresIn = 60 * 60 // Seconds
    const authData: IBAuthData = {
        exp: Math.floor(Date.now() / 1000) + expiresIn,
        user: user
    }
    return jwt.sign(authData, SECRET)
}

function validateAuth(auth: IBAuth): [boolean, IBAuthData] {
    const anonymous: IBAuthData = {
        exp: 0,
        user: 0
    }
    if (auth.jwt) {
        let decoded: unknown = jwt.verify(auth.jwt, SECRET)
        return [true, decoded as IBAuthData]
    } else {
        return [false, anonymous]
    }
}


function validatePermissions(request: IBRequest) {
    const [auth, user] = validateAuth(request.auth)
    return true
}

function processRequest(request: IBRequest) {
    if (validatePermissions(request)) {
        return
    } else {
        return "Err"
    }
}