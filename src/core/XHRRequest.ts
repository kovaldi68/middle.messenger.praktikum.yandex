function queryStringify(data: Options['data']) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const resultString = Object.entries(data).reduce((resString, [key, value]) => {
        return (resString += `${key}=${value}&`);
    }, '?');

    return resultString.slice(0, resultString.length - 1);
}

enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

type Options = {
    method: Method;
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(
            `${url}${queryStringify(options.data)}`,
            { ...options, method: Method.GET },
            options.timeout
        );
    }

    post(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, { ...options, method: Method.POST });
    }

    put(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, { ...options, method: Method.PUT });
    }

    delete(url: string, options: OptionsWithoutMethod = {}) {
        return this.request(url, { ...options, method: Method.DELETE });
    }

    request(url: string, options: Options = { method: Method.GET }, timeout = 5000) {
        const { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === Method.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    }
}
