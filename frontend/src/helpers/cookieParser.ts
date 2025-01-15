export function getCookie() {
    if (!document.cookie) {
        return null;
    }
    const cookie = document.cookie;
    const token = cookie.split('=')[1];

    return token;
}
