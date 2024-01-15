import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import ReviewList from '../../components/review-list/review-list';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import { AuthorizationStatus, NUMBER_PERCENT_IN_ONE_STAR, PlaceCardType, MAX_COUNT_IMAGES_OFFERS, MAX_COMMENTS_COUNT } from '../../const';
import { AppRoute } from '../../app-route';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Review, UserReview } from '../../types/review';
import { changeFavoriteStatusAction, createReviewAction, loadNearbyOffersAction, loadOfferByIDAction, loadReviewsAction } from '../../store/actions/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect, useMemo } from 'react';
import { getCity } from '../../store/city-process/city-process.selectors';
import { getFullOffer, getNearByOffersDataLoading, getNearbyOffers, getOfferByIdDataLoading, getOffers } from '../../store/offer-data/offer-data.selectors';
import { getReviews, getReviewsDataLoading } from '../../store/review-data/review-data.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { changeActiveCard, changeFavoriteStatus } from '../../store/offer-data/offer-data.slice';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { PreviewOffer } from '../../types/offer';

function OfferPage() : React.JSX.Element {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const offer = useAppSelector(getFullOffer);
  const reviews = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearbyOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isNearByOffersDataLoadingStatus = useAppSelector(getNearByOffersDataLoading);
  const isOfferByIdDataLoadingStatus = useAppSelector(getOfferByIdDataLoading);
  const isReviewsDataLoadingStatus = useAppSelector(getReviewsDataLoading);
  const authStatus = useAppSelector(getAuthorizationStatus);
  let threeNearOffers: (PreviewOffer | undefined)[] = [];

  useEffect(() => {
    if (id !== undefined) {
      dispatch(loadOfferByIDAction(id));
      dispatch(loadNearbyOffersAction(id));
      dispatch(loadReviewsAction(id));
      dispatch(changeActiveCard(id));
    }
  }, [dispatch, id]);

  const randomNearOffersIds = useMemo(() => {
    if (!isNearByOffersDataLoadingStatus) {
      const temp = [...nearOffers];
      const randomNearOffers = [];
      for (let i = 0; i < 3; i++) {
        randomNearOffers.push(temp.splice(Math.random() * temp.length, 1)[0].id);
      }
      return randomNearOffers;
    }
  }, [isNearByOffersDataLoadingStatus]);

  function generatePhotos(images: string[]) {
    return Array.from({length: images.length > MAX_COUNT_IMAGES_OFFERS ? MAX_COUNT_IMAGES_OFFERS : images.length}, (_, index: number) => (
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

  function limitReviewsItems(fullReviewsList: Review[]) {
    if (fullReviewsList.length <= MAX_COMMENTS_COUNT) {
      return [...fullReviewsList].sort((a: Review, b: Review) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      return [...fullReviewsList].sort((a: Review, b: Review) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_COMMENTS_COUNT);
    }
  }

  const handleFormSubmit = (formData: UserReview) => {
    dispatch(createReviewAction({userReview: formData, id: id as string}));
  };

  const handleFavoriteButtonClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }
    if (offer !== undefined && id !== undefined) {
      dispatch(changeFavoriteStatusAction({id: id, favoriteStatus: Number(!offer.isFavorite)}));
      dispatch(changeFavoriteStatus(id));
    }
  };

  if (isNearByOffersDataLoadingStatus || isOfferByIdDataLoadingStatus || isReviewsDataLoadingStatus) {
    return <LoadingScreen />;
  }

  if (offer === undefined) {
    return <Navigate to={AppRoute.Error} />;
  }

  const currentPreviewOffer = offers.find((previewOffer) => previewOffer.id === offer.id) || [];
  if (randomNearOffersIds !== undefined) {
    threeNearOffers = randomNearOffersIds.map((randomNearOffersId) => nearOffers.find((nearOffer) => nearOffer.id === randomNearOffersId));
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Offer</title>
      </Helmet>
      <Header isNavRequired isAuth={authorizationStatus}/>
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
                <button onClick={handleFavoriteButtonClick} className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''} button`} type="button">
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
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={limitReviewsItems(reviews)} />
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm onFormSubmit={handleFormSubmit}/>}
              </section>
            </div>
          </div>
          <Map cityName={cityName} offers={threeNearOffers.concat(currentPreviewOffer)} type={'offer'} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardList offers={threeNearOffers} type={PlaceCardType.Near} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;

