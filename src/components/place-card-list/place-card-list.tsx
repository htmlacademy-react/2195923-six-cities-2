import { PreviewOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { PlaceCardType } from '../../const';

type PlaceCardListProps = {
  offers: PreviewOffer[];
  type: string;
  callback?: React.MouseEventHandler<HTMLElement>;
}

function PlaceCardList({offers,type, callback} : PlaceCardListProps) {
  const [activeCard, setActiveCard] = useState(' ');

  const handlePlaceCardMouseEnter = (evt : React.MouseEvent) => {
    evt.preventDefault();
    const id = evt.currentTarget.getAttribute('data-id');
    if (id !== null) {
      setActiveCard(id);
    }
  };

  const handlePlaceCardMouseLeave = (evt : React.MouseEvent) => {
    evt.preventDefault();
    setActiveCard(' ');
  };

  function getPlaceCards(cards: PreviewOffer[]) {
    return Array.from({length: offers.length}, (_, index : number) => <PlaceCard onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} offer={cards[index]} type={type} key={cards[index].id}/>);
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
