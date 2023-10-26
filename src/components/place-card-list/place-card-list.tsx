import { PreviewOffer } from '../../types/offer';
import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import { PlaceCardType } from '../../data';

type PlaceCardListProps = {
  offers: PreviewOffer[];
}

function PlaceCardList({offers} : PlaceCardListProps) {
  const [activeCard, setActiveCard] = useState(' ');

  const handlePlaceCardMouseOver = (evt : React.MouseEvent) => {
    evt.preventDefault();
    const id = evt.currentTarget.getAttribute('data-id');
    if (id !== null) {
      setActiveCard(id);
    }
  };

  function getPlaceCards(cards: PreviewOffer[]) {
    return Array.from({length: offers.length}, (_, index : number) => <PlaceCard callback={handlePlaceCardMouseOver} offer={cards[index]} type={PlaceCardType.City} key={cards[index].id}/>);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {getPlaceCards(offers)}
    </div>
  );
}

export default PlaceCardList;
