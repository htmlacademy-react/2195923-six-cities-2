import { Review } from '../../types/review';
import ReviewPage from '../review/review';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews} : ReviewListProps) {

  function getPlaceCards(reviewsArray: Review[]) {
    return Array.from({length: reviewsArray.length}, (_, index : number) => <ReviewPage review={reviews[index]} key={reviewsArray[index].id}/>);
  }

  return (
    <ul className="reviews__list">
      {getPlaceCards(reviews)}
    </ul>
  );
}

export default ReviewList;
