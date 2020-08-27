axios.get('/api/drinks')
  .then(({data}) => {
    data.forEach(drink => {
      let drinkElem = document.createElement('ul')
      drinkElem.innerHTML = `
        <li>Drink Name: ${drink.name}</li>
        <li>Bean: ${drink.bean.name}</li>
        <li>Caffeine in mg: ${drink.bean.caffeine_in_mg}</li>
        <li>Syrup: ${drink.syrup.name}</li>
        <li>Carbs in grams: ${drink.syrup.carbs_in_g}</li>
        <li>Topping: ${drink.topping.name}</li>
        <li>Topping type: ${drink.topping.type}</li>
      `
      document.getElementById('drinks').append(drinkElem)
    })
  })
  .catch(err => console.log(err))