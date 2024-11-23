import { SERVER_URL } from '@env';

const requestFetch = async (url, method, data, headers = {}) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsImxvZ2luSWQiOiIxMjM0Iiwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzIzODg1MjksImV4cCI6MTczMjM5MjEyOX0.f1rsYOxTeq234UGhJP2IeXfmkcvCvn2AS1FBbfycbVg';

  try {
    const options = {
      method,
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        access: token,
        ...headers,
      },
      ...(data && { body: JSON.stringify(data) }),
    };

    const response = await fetch(`${SERVER_URL}${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // PATCH 요청일 경우 text로 응답 처리
    if (method === 'PATCH') {
      const responseText = await response.text();
      return responseText;
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in ${method} request to ${url}:`, error);
    throw error;
  }
};

// POST 요청
export const requestPostFetch = async (url, data) => {
  return await requestFetch(url, 'POST', data, {
    'Content-Type': 'application/json',
  });
};

// PUT 요청
export const requestPutFetch = async (url, data) => {
  return await requestFetch(url, 'PUT', data, {
    'Content-Type': 'application/json',
  });
};

// GET 요청
export const requestGetFetch = async url => {
  return await requestFetch(url, 'GET');
};

// DELETE 요청
export const requestDeleteFetch = async url => {
  return await requestFetch(url, 'DELETE');
};

// PATCH 요청
export const requestPatchFetch = async (url, data) => {
  return await requestFetch(url, 'PATCH', data, {
    'Content-Type': 'application/json',
  });
};
