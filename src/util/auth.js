// 未和后端商议好头部header,暂时使用token
export function getTokenToLocalStorage (token, sessionToken) {
    if (token) {
        localStorage.setItem("token", token)
    }
    if (sessionToken){
        localStorage.setItem("sessionToken", sessionToken)
    }
}