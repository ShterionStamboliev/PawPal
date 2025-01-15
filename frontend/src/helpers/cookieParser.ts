export function getCookie() {
    const cookie = document.cookie;
    if (!cookie) {
        return null;
    }
    const token = cookie.split('=')[1];

    return token;
}
