export default async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data || null;
  } catch (err) {
    alert(err);
    return null;
  }
};
