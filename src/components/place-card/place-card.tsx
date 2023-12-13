import {Link, useNavigate} from 'react-router-dom';

import { PreviewOffer } from '../../types/offer';
import { AuthorizationStatus, PlaceCardType } from '../../const';
import { NUMBER_PERCENT_IN_ONE_STAR } from '../../const';
import { AppRoute } from '../../app-route';
import { store } from '../../store/stores';
import { changeFavoriteStatusAction } from '../../store/actions/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeFavoriteStatus } from '../../store/offer-data/offer-data.slice';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type OfferProps = {
  offer: PreviewOffer;
  type: string;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
};

function PlaceCard({offer, type, onMouseEnter, onMouseLeave} : OfferProps): React.JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteButtonClick = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      store.dispatch(changeFavoriteStatusAction({id: offer.id, favoriteStatus: Number(!offer.isFavorite)}));
      dispatch(changeFavoriteStatus(offer.id));
    }
    navigate(AppRoute.Login);
  };

  return (
    <article className={`${type}__card place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-id={offer.id}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={(type === PlaceCardType.City || type === PlaceCardType.Near) ? '260' : '150'} height={(type === PlaceCardType.City || type === PlaceCardType.Near) ? '200' : '110'} alt="Place image" />
        </Link>
      </div>
      <div className={`${type === PlaceCardType.Favorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={handleFavoriteButtonClick} className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
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
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

