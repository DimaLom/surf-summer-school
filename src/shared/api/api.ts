export const fetchWithErrorHandling = async (
  url: string,
  options: RequestInit = {}
) => {
  try {
    const response = await fetch(url, { ...options, cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Код: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error instanceof Error ? error : new Error('Сетевая ошибка');
  }
};
