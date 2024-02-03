export interface CardObject {
    img: string;
    sender: string;
    recipient: string;
    greeting: string;
  }

export interface allCardsProps {
    allCards: CardObject[];
    setAllCards: React.Dispatch<React.SetStateAction<CardObject[]>>;
}