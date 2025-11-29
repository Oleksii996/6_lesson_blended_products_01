import { getCategories, getProducts } from './products-api';
import { renderCategoriesList, renderProductsList } from './render-function';

export async function initHomePage() {
  const categories = await getCategories();
  renderCategoriesList(categories);

  const { products } = await getProducts(2);
  renderProductsList(products);

  console.log(products);
}
