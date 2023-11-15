import { MutableRefObject, useRef } from 'react';
import { SortingType } from '../../const';
import { SortingElement } from '../../types/sorting';

type SortingProps = {
  onSortTypeClick: (type: string, newSortType: SortingElement) => void;
  type: SortingElement;
}

function Sorting({onSortTypeClick, type} : SortingProps) {
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
        onSortTypeClick(newSortType.message, newSortType);
        evt.target.classList.add('places__option--active');
      }
    }

    if (sortingRef.current !== null) {
      sortingRef.current.querySelector('.places__option--active')?.classList.remove('places__option--active');
      sortingRef.current.classList.remove('places__options--opened');
    }
  };

  if (type === SortingType.POPULAR) {
    sortingRef.current?.querySelectorAll('.places__option').forEach((element) => {
      element.classList.remove('places__option--active');
    });
    sortingRef.current?.querySelector('.places__option')?.classList.add('places__option--active');
  }

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOpenClick}>
        {type.message}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={sortingRef} onClick={handleSortTypeClick}>
        <li className="places__option" tabIndex={0} data-type={SortingType.POPULAR.message}>Popular</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_LOW_TO_HIGH.message}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.PRICE_HIGH_TO_LOW.message}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-type={SortingType.TOP_RATED_FIRST.message}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
