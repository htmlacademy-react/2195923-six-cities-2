import React from 'react';
import { MAX_RATING, RatingLabel } from '../../const';

type RatingItemProps = {
  rating: number;
  index: number;
  label: [string, RatingLabel];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function RatingItem({index, label, rating, onChange} : RatingItemProps) : React.JSX.Element {
  return (
    <React.Fragment key={MAX_RATING - index}>
      <input className="form__rating-input visually-hidden" name="rating" value={MAX_RATING - index} id={`${MAX_RATING - index}-stars`} type="radio" checked = {rating === (MAX_RATING - index)} onChange={onChange}/>
      <label htmlFor={`${MAX_RATING - index}-stars`} className="reviews__rating-label form__rating-label" title={label[1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
