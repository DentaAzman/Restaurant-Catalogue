import RestaurantSource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../../../components/hero-element.js';

const Home = {
  async render() {
    return `
    <hero-element></hero-element>

    <section class="content">
        <div class="explore">
          <h2 class="explore__label" tabindex="0">Explore Restaurant</h2>

          <div id="restoList" class="resto-list"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restoList');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
