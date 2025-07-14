export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Get the base Strapi URL without /api suffix
export const STRAPI_BASE_URL = API_BASE_URL?.replace(/\/api$/, '');

export const fetcher = async (url: string, options?: RequestInit) => {
  const fullUrl = `${API_BASE_URL}${url}`;
  
  console.log('[API Request]', {
    url: fullUrl,
    method: options?.method || 'GET',
  });

  try {
    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[API Error]', {
        url: fullUrl,
        status: response.status,
        statusText: response.statusText,
        data,
      });
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    console.log('[API Response]', {
      url: fullUrl,
      status: response.status,
      dataLength: Array.isArray(data.data) ? data.data.length : 'N/A',
    });

    return data;
  } catch (error) {
    console.error('[API Fetch Error]', {
      url: fullUrl,
      error: error instanceof Error ? error.message : error,
    });
    throw error;
  }
};