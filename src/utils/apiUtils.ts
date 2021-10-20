export function parseParams(params?: Record<string, string | number>): string {
    let uri = '';
    if (params) {
        for (const key in params) {
            uri += (uri.length > 0 ? '&' : '?') + key + '=' + encodeURIComponent(params[key]);
        }
    }
    return uri;
}
