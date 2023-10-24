import {Link} from 'react-router-dom';
import { AppRoute } from '../../data';
import { Offer } from '../../types/offer';
import { PlaceCardType } from '../../data';

type OfferProps = {
  offer: Offer;
  type: string;
};

const NUMBER_PERCENT_IN_ONE_STAR = 20;

function PlaceCard({offer, type} : OfferProps): React.JSX.Element {
  return (
    <article className={`${type}__card place-card`}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/id`}>
          <img className="place-card__image" src={offer.images[0]} width={type === PlaceCardType.City ? '260' : '150'} height={type === PlaceCardType.City ? '200' : '110'} alt="Place image" />
        </Link>
      </div>
      <div className={`${type === PlaceCardType.Favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * NUMBER_PERCENT_IN_ONE_STAR}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/id`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

