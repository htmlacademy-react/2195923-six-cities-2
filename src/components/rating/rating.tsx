import React from 'react';
import { RatingLabel } from '../../const';
import { RatingItem } from '../rating-item/rating-item';

type RatingProps = {
  rating: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Rating({rating, onChange} : RatingProps) : React.JSX.Element {
  function generateRatingList() {
    return Object.entries(RatingLabel).map((label, index) => RatingItem({label, index, rating}));
  }

  return (
    <div className="reviews__rating-form form__rating" onChange={onChange}>
      {generateRatingList()}
    </div>
  );
}

export default Rating;
