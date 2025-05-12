export async function getArticles() {
  try {
    const response = await fetch('/api/articles/');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticle(id) {
  try {
    const response = await fetch(`/api/articles/${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}