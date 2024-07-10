const resourceURL = "http://localhost:9090"
const authorizationURL = "http://127.0.0.1:9000"
const clientId = "client"
const clientSecret = "secret"
const redirectUri = "http://localhost:4200/authorized"
const scope = "openid"
const authorizationLink = `${authorizationURL}/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`

export { resourceURL, authorizationURL, clientId, clientSecret, redirectUri, scope, authorizationLink }
