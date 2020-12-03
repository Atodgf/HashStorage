class HashStorage {
  constructor() {
    this.store_ = {};
  }

  addValue(key, value) {
    this.store_[key] = value;
  }

  getValue(key) {
    if (!(key in this.store_)) {
      return false
    }
    return this.store_[key];
  }

  deleteValue(key) {
    if (!(key in this.store_)) {
      return false
    }

    return delete this.store_[key];
  }

  getKeys() {
    return Object.keys(this.store_);
  }
}

const coctailsStorage = new HashStorage();


coctailsStorage.addValue('Пеликан', {
  name: 'Коктейль "Пеликан"',
  isAlcohol: 'Безалкогольный',
  ingredients: 'Гренадин Monin 10мл, Клубничный сироп Monin 10мл, Персиковый сок 150мл, Лимонный сок 15мл, Банан 110г, Клубника 50г, Дробленый лед 60г',
  recipe: 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.'
});
coctailsStorage.addValue('Маргарита', {
  name: 'Маргарита"',
  isAlcohol: 'Алкогольный',
  ingredients: 'Водка Finlandia 50мл, Кофейный ликер 25мл, Лед в кубиках 120 г',
  recipe: 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.'
});

// Кнопка 'Добавить'
const addButton = document.getElementById('add-coctail');
addButton.onclick = function () {


  const name = window.prompt('Введите название коктеля');
  const isAlcohol = window.prompt('Напиток алкогольный?');
  const ingredients = window.prompt('Введите необходимые ингредиенты');
  const recipe = window.prompt('Введите рецепт приготовления');


  coctailsStorage.addValue(name, {
    name,
    isAlcohol,
    ingredients,
    recipe
  });

}



// Кнопка 'Рецепт'
const checkButton = document.getElementById('get-coctail');
checkButton.onclick = function () {

  const name = window.prompt('Введите название коктеля');


  if (coctailsStorage.getValue(name) == false) {
    alert('Такого напитка нет в списке')
  } 
    console.log(coctailsStorage.getValue(name));
  
}

// Кнопка 'Удалить'
const delButton = document.getElementById('delete-coctail');
delButton.onclick = function () {

  const name = window.prompt('Введите название коктеля');
  if (coctailsStorage.deleteValue(name) == false) {
    alert('Такого напитка нет в списке')
  }
  coctailsStorage.deleteValue(name);
}

// Кнопка 'Список Рецептов'
const recButton = document.getElementById('all-coctails');
recButton.onclick = function () {

  const display = document.querySelector('textarea')

  display.textContent = coctailsStorage.getKeys();

}