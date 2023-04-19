/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import allIcon from '../images/drinks icons/all.png';
import cocktailIcon from '../images/drinks icons/cocktail.png';
import cocoaIcon from '../images/drinks icons/cocoa.png';
import ordinaryIcon from '../images/drinks icons/ordinary.png';
import shakeIcon from '../images/drinks icons/shake.png';
import otherIcon from '../images/drinks icons/other.png';
import { setCategory } from '../app/slices/drinks';

import '../App.css';

function DrinksCategories(props) {
  const { fetchByCategory } = props;

  const { activeCategory } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  const onClick = (value) => {
    dispatch(setCategory(value));
    fetchByCategory(value);
  };

  useEffect(() => {
    dispatch(setCategory('All'));
  }, []);

  return (
    <div>
      <label
        htmlFor="all"
        className={ activeCategory === 'All' ? 'selected' : '' }
        onClick={ () => onClick('All') }
        aria-hidden
      >
        <img
          type="button"
          id="all"
          data-testid="All-category-filter"
          src={ allIcon }
          alt="All"
          aria-hidden
        />
        All
      </label>

      <label
        htmlFor="ordinary"
        className={ activeCategory === 'Ordinary Drink' ? 'selected' : '' }
        onClick={ () => onClick('Ordinary Drink') }
        aria-hidden
      >
        <img
          type="button"
          data-testid="Ordinary Drink-category-filter"
          src={ ordinaryIcon }
          alt="Ordinary Drink"
          id="ordinary"
        />
        Ordinary
      </label>

      <label
        htmlFor="cocktail"
        className={ activeCategory === 'Cocktail' ? 'selected' : '' }
        onClick={ () => onClick('Cocktail') }
        aria-hidden
      >
        <img
          type="button"
          data-testid="Cocktail-category-filter"
          src={ cocktailIcon }
          alt="Cocktail"
          id="cocktail"
        />
        Cocktail
      </label>

      <label
        htmlFor="shake"
        className={ activeCategory === 'Shake' ? 'selected' : '' }
        onClick={ () => onClick('Shake') }
        aria-hidden
      >
        <img
          type="button"
          data-testid="Shake-category-filter"
          src={ shakeIcon }
          alt="Shake"
          id="shake"
        />
        Shake
      </label>

      <label
        htmlFor="cocoa"
        className={ activeCategory === 'Cocoa' ? 'selected' : '' }
        onClick={ () => onClick('Cocoa') }
        aria-hidden
      >
        <img
          type="button"
          data-testid="Cocoa-category-filter"
          src={ cocoaIcon }
          alt="Cocoa"
          id="cocoa"
        />
        Cocoa
      </label>

      <label
        htmlFor="other"
        className={ activeCategory === 'Other/Unknown' ? 'selected' : '' }
        onClick={ () => onClick('Other/Unknown') }
        aria-hidden
      >
        <img
          type="button"
          data-testid="Other/Unknown-category-filter"
          src={ otherIcon }
          alt="Other"
          id="other"
        />
        Other
      </label>
    </div>
  );
}

DrinksCategories.propTypes = {
  fetchByCategory: PropTypes.func.isRequired,
};

export default DrinksCategories;
