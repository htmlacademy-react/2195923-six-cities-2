import { Review } from '../../types/review';
import { NUMBER_PERCENT_IN_ONE_STAR } from '../../const';
import dayjs from 'dayjs';

type ReviewPageProps = {
  review: Review;
}

function ReviewPage({review} : ReviewPageProps): React.JSX.Element {

  function renderDate(date: string) {
    return dayjs(date).format('YYYY-MM-DD');
  }

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating * NUMBER_PERCENT_IN_ONE_STAR}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={renderDate(review.date)}>{dayjs(review.date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewPage;
