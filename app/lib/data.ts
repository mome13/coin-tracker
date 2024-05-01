export async function fetchCoin(name: string) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${name}`
    );
    return await response.json();
  } catch (error) {
    return {
      error:'no coin founded!'
    }
  }
}
