import { useState } from 'react';
import { SortingType } from '../../const';

type SortingProps = {
  onSortTypeClick: (type: string) => void;
  type: string;
}

function Sorting({onSortTypeClick, type} : SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleSortingOpenClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsOpened(true);
  };

  const handleSortTypeClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (evt.target instanceof Element) {
      const newSortTypeMessage = evt.target.textContent;
      const newSortType = Object.values(SortingType).find((sortingType) => sortingType.message === newSortTypeMessage);
      if (newSortType !== undefined) {
        onSortTypeClick(newSortType.message);
        setIsOpened(false);
      }
    }
  };

  function getSortingList(): React.ReactNode {
    return Object.entries(SortingType).map(
      ([name, {message}]) => (<li className={`places__option ${type === message ? 'places__option--active' : ''} ` } tabIndex={0} key={name}>{message}</li>));
  }

  return (
    <form className="places__sorting" action="#" method="get" >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOpenClick}>
        {type}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : '' }`} onClick={handleSortTypeClick}>
        {getSortingList()}
      </ul>
    </form>
  );
}

export default Sorting;
