/* eslint-disable import/prefer-default-export */
export const renderResults = (wrapper, dropdownEl, results) => {
  wrapper.append(dropdownEl);
  // eslint-disable-next-line no-param-reassign
  dropdownEl.innerHTML = '';

  results.forEach((item) => {
    dropdownEl.insertAdjacentHTML(
      'beforeend',
      `<button class="search__dropdown-button">${item.title}</button>`,
    );
  });
};
