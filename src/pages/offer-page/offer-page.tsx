import Header from '../../components/header/header';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { Helmet } from 'react-helmet-async';
import { FullOffer, PreviewOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { NUMBER_PERCENT_IN_ONE_STAR, PlaceCardType } from '../../const';
import ReviewList from '../../components/review-list/review-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { Navigate} from 'react-router-dom';
import { AppRoute } from '../../app-route';

type OfferPageProps = {
  offer: FullOffer;
  nearOffers: PreviewOffer[];
  reviews: Review[];
}

function OfferPage({offer, nearOffers, reviews} : OfferPageProps) : React.JSX.Element {

  function generatePhotos(images: string[]) {
    return Array.from({length: images.length}, (_, index: number) => (
      <div className="offer__image-wrapper" key={index}>
        <img className="offer__image" src={images[index]} alt="Photo studio" />
      </div>
    ));
  }

  function generateOfferInside(goods: string[]) {
    return Array.from({length: goods.length}, (_, index: number) => (
      <li className="offer__inside-item" key={index}>
        {goods[index]}
      </li>
    ));
  }

  if (offer === undefined) {
    return <Navigate to={AppRoute.Error} />;
  }

  const threeNearOffers = [nearOffers[0], nearOffers[1], nearOffers[2]];

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Offer</title>
      </Helmet>
      <Header isNavRequired isAuth={false}/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {generatePhotos(offer.images)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(offer.rating) * NUMBER_PERCENT_IN_ONE_STAR}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {generateOfferInside(offer.goods)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro &&
                  <span className="offer__user-status">
                    Pro
                  </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={reviews} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map offers={threeNearOffers} type={'offer'}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardList offers={threeNearOffers} type={PlaceCardType.Near}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

