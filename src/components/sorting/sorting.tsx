import { MutableRefObject, useRef, useState } from 'react';
import { SortingType } from '../../const';

type SortingProps = {
  onSortTypeClick: (sortType: string) => void;
}

function Sorting({onSortTypeClick} : SortingProps) {
  const [sortType, setSortType] = useState(SortingType.POPULAR);
  const sortingRef: MutableRefObject<HTMLUListElement | null> = useRef(null);

  const handleSortingOpenClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (sortingRef.current !== null) {
      sortingRef.current.classList.add('places__options--opened');
    }
  };

  const handleSortTypeClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (evt.target instanceof Element) {
      const newSortTypeMessage = evt.target.getAttribute('data-type');
      const newSortType = Object.values(SortingType).find((sortingType) => sortingType.message === newSortTypeMessage);
      if (newSortType !== undefined) {
        setSortType(newSortType);
        onSortTypeClick(newSortType.message);
        evt.target.classList.add('places__option--active');
      }
    }

    if (sortingRef.current !== null) {
      sortingRef.current.querySelector('.places__option--active')?.classList.remove('places__option--active');
      sortingRef.current.classList.remove('places__options--opened');
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOpenClick}>
        {sortType.message}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortingRef} onClick={handleSortTypeClick}>
        <li className="places__option places__option--active" tabIndex={0} data-type={SortingType.POPULAR.message}>Popular</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_LOW_TO_HIGH.message}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_HIGH_TO_LOW.message}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.TOP_RATED_FIRST.message}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
