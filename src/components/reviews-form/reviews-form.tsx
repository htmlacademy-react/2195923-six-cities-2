import { useState } from 'react';
import Rating from '../rating/rating';

function ReviewsForm() {
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: Number.parseInt(evt.target.value, 10)});
  };

  const handleReviewChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, comment: evt.target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <Rating rating={formData.rating} onChange={handleRatingChange}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formData.comment} onChange={handleReviewChange} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
