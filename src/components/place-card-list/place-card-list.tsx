import { PreviewOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { PlaceCardType } from '../../const';

type PlaceCardListProps = {
  offers: PreviewOffer[] | undefined;
  type: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

function PlaceCardList({offers,type, onMouseEnter, onMouseLeave} : PlaceCardListProps) {

  function getPlaceCards(cards: PreviewOffer[] | undefined) {
    if (offers !== undefined) {
      return Array.from({length: offers.length}, (_, index : number) => <PlaceCard onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} offer={cards[index]} type={type} key={cards[index].id}/>);
    }
  }

  function getPlaceCardListClass(typeCardList: string) {
    let placeCardListClass = '';
    switch(typeCardList) {
      case PlaceCardType.City:
        placeCardListClass = 'cities__places-list';
        break;
      case PlaceCardType.Near:
        placeCardListClass = 'near-places__list';
        break;
    }
    return placeCardListClass;
  }

  return (
    <div className={`${getPlaceCardListClass(type)} places__list tabs__content`}>
      {getPlaceCards(offers)}
    </div>
  );
}

export default PlaceCardList;
