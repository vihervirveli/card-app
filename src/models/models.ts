export interface CardObject {
    id:string;
    img: string;
    sender: string;
    recipient: string;
    greeting: string;
  }

export interface NewCardObject {
  img: string;
  sender: string;
  recipient: string;
  greeting: string;

}
export interface allCardsProps {
    allCards: CardObject[];
    setAllCards: React.Dispatch<React.SetStateAction<CardObject[]>>;
}