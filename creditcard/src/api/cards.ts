export type Card = {
    cardType: string;
    cardHolder: string;
    lastFourDigits: string;
  };
  
  export async function fetchCards(): Promise<Card[]> {
    const response = await fetch('/path/to/api.json');
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }
    return response.json();
  }
  