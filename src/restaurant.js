/* eslint-disable max-len */
// Siga as orientações do README!

const seila = { food: {pizza: 10, hamburger: 8}, drinks: {coke: 3, juice: 5} }


const createMenu = (menu) => {
    return {
      fetchMenu: () => menu,
      consumption: [],
      order: (item) => {
        if (!menu.food[item] && !menu.drinks[item]) {
          return "Item indisponível";
        } else {
          this.consumption.push(item);
        }
      },
      pay: () => {
        return this.consumption.reduce((total, item) => {
          if (menu.food[item]) {
            total += menu.food[item];
          } else if (menu.drinks[item]) {
            total += menu.drinks[item];
          }
          return total;
        }, 0);
      },
    };
  };
  
  module.exports = createMenu;
  
console.log(createMenu("seila"))

module.exports = createMenu;
