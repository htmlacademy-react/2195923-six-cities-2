import { useState } from 'react';
import { SortingType } from '../../const';
import { SortingType as TSortingType } from '../../types/sorting';

type SortingProps = {
  onSortTypeClick: (type: TSortingType) => void;
  type: TSortingType;
}

function Sorting({onSortTypeClick, type} : SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortingOpenClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsOpened(true);
  };

  const handleSortingItemClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (evt.currentTarget instanceof Element && evt.currentTarget.textContent) {
      const typeSorting = Object.keys(SortingType).find((sortingType) => SortingType[sortingType as TSortingType].message === evt.currentTarget.textContent) as TSortingType;
      onSortTypeClick(typeSorting);
      setIsOpened(false);
    }
  };

  function getSortingList(): React.ReactNode {
    return Object.entries(SortingType).map(
      ([name, item]) => (
        <li
          onClick={handleSortingItemClick}
          className={`places__option ${SortingType[type].message === item.message ? 'places__option--active' : ''} ` }
          tabIndex={0}
          key={name}
        >
          {item.message}
        </li>
      ));
  }

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOpenClick}>
        {SortingType[type].message}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : '' }`}>
        {getSortingList()}
      </ul>
    </form>
  );
}

export default Sorting;
