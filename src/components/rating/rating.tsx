import React from 'react';
import { RatingLabel } from '../../const';

type RatingProps = {
  rating: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Rating({rating, onChange} : RatingProps) {
  function generateRatingItem(label: [string, RatingLabel], index: number) {
    return (
      <React.Fragment key={5 - index}>
        <input className="form__rating-input visually-hidden" name="rating" value={5 - index} id={`${5 - index}-stars`} type="radio" checked = {rating === (5 - index)}/>
        <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label" title={label[1]}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </React.Fragment>
    );
  }

  function generateRatingList() {
    return Object.entries(RatingLabel).map((label, index) => generateRatingItem(label, index));
  }

  return (
    <div className="reviews__rating-form form__rating" onChange={onChange}>
      {generateRatingList()}
    </div>
  );
}

export default Rating;
