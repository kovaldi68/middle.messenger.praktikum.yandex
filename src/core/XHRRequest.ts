function queryStringify(data: Options["data"]) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const arr = Object.entries(data).map(([key, value]) => {
    return `${key}=${value}`;
  });

  return `?${arr.join("&")}`;
}

enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

type Options = {
  method: METHOD;
  data?: any;
  headers?: {
    [name: string]: string;
  },
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, "method">;

export class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}) {
    return this.request(url, { ...options, method: METHOD.GET }, options.timeout);
  }

  post(url: string, options: OptionsWithoutMethod = {}) {
    return this.request(url, { ...options, method: METHOD.POST });
  }

  put(url: string, options: OptionsWithoutMethod = {}) {
    return this.request(url, { ...options, method: METHOD.PUT });
  }

  delete(url: string, options: OptionsWithoutMethod = {}) {
    return this.request(url, { ...options, method: METHOD.DELETE });
  }

  request(url: string, options: Options = { method: METHOD.GET }, timeout = 5000) {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHOD.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

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

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}
