
 

/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findBook(searchResults, searchedId) {
  const book = searchResults.find((testedBook) => {
    return testedBook.id === searchedId;
  });
  return book;
}
