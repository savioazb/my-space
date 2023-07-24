export async function getGithubContributions<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from ${url}. Status: ${response.status}`,
    );
  }

  const data = (await response.json()) as T;
  return data;
}
