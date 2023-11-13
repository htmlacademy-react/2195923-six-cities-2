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
    sortingRef.current?.querySelector('.places__option--active')?.classList.remove('places__option--active');
    const newSortType: string | null = (evt.target as Element).getAttribute('data-type');
    if (newSortType !== null) {
      setSortType(newSortType);
      onSortTypeClick(newSortType);
    }
    if (sortingRef.current !== null) {
      sortingRef.current.classList.remove('places__options--opened');
    }
    if (evt.nativeEvent.target !== null) {
      (evt.nativeEvent.target as Element).classList.add('places__option--active');
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOpenClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortingRef} onClick={handleSortTypeClick}>
        <li className="places__option places__option--active" tabIndex={0} data-type={SortingType.POPULAR}>Popular</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_LOW_TO_HIGH}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_HIGH_TO_LOW}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.TOP_RATED_FIRST}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
