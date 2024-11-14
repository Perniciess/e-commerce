const baseURL = "http://localhost:3000"; // use your own URL here or environment variable

class ApiError extends Error {
  constructor(public data: unknown) {
    super("Api Error");
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  try {
    const response = await fetch(
      `${baseURL}${url}` + new URLSearchParams(params),
      {
        method: method.toUpperCase(),
        credentials: "include",
        headers,
        ...(data ? { body: JSON.stringify(data) } : {}),
      },
    );

    if (!response.ok) {
      throw new ApiError(await response.json());
    }

    return response.json();
  } catch (error) {
      alert("Ошибка подключения к серверу");
      console.log(4);
    throw error; // Проброс ошибки дальше, если нужно
  }
};

export type BodyType<BodyData> = BodyData;
export type ErrorType<Error> = Error;

