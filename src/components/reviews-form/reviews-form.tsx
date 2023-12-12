import { useEffect, useState } from 'react';
import Rating from '../rating/rating';
import { UserReview } from '../../types/review';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';

type ReviewsFormProps = {
  onFormSubmit: (formData: UserReview) => void;
}

function ReviewsForm({onFormSubmit}: ReviewsFormProps) {
  const reviews = useAppSelector((state) => state.reviews);

  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  useEffect(() => {
    setFormData({
      comment: '',
      rating: 0,
    });
  }, [reviews]);

  function isValidReview() {
    if ((formData.comment.length >= MIN_COMMENT_LENGTH && formData.comment.length <= MAX_COMMENT_LENGTH) &&
        formData.rating > 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: Number.parseInt(evt.target.value, 10)});
  };

  const handleReviewChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, comment: evt.target.value});
  };

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={formData.rating} onChange={handleRatingChange}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formData.comment} onChange={handleReviewChange} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isValidReview()}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
