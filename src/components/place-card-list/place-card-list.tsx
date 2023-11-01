import { PreviewOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { PlaceCardType } from '../../const';

type PlaceCardListProps = {
  offers: PreviewOffer[];
  callback?: React.MouseEventHandler<HTMLElement>;
}

function PlaceCardList({offers, callback} : PlaceCardListProps) {

  function getPlaceCards(cards: PreviewOffer[]) {
    return Array.from({length: offers.length}, (_, index : number) => <PlaceCard callback={callback} offer={cards[index]} type={PlaceCardType.City} key={cards[index].id}/>);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {getPlaceCards(offers)}
    </div>
  );
}

export default PlaceCardList;
