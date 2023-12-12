import React from 'react';
import { RatingLabel } from '../../const';

type RatingItemProps = {
  rating: number;
  index: number;
  label: [string, RatingLabel];
}

export function RatingItem({index, label, rating} : RatingItemProps) : React.JSX.Element {
  return (
    <React.Fragment key={5 - index}>
      <input className="form__rating-input visually-hidden" name="rating" value={5 - index} id={`${5 - index}-stars`} type="radio" defaultChecked = {rating === (5 - index)}/>
      <label htmlFor={`${5 - index}-stars`} className="reviews__rating-label form__rating-label" title={label[1]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
