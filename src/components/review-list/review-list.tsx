import { Review } from '../../types/review';
import ReviewPage from '../review/review';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews} : ReviewListProps) {

  function getPlaceCards(reviewsArray: Review[]) {
    return reviewsArray.map((review) => <ReviewPage review={review} key={review.id}/>);
  }

  return (
    <ul className="reviews__list">
      {getPlaceCards(reviews)}
    </ul>
  );
}

export default ReviewList;
