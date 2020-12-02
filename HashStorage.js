class HashStorage {
    constructor() {
      this.store = {}; // хранилище для значений
    }
  
    add(key, value) {
      this.store[key] = value; // сохраняем значение в store
    }
  
    getValue(key) {
      return this.store[key]; // тут все тоже просто и нативно
    }
  
    deleteValue(key) {
      if(!(key in this.store)) {
        return false
      }
  
      return delete this.store[key];
    }
  
    getKeys() {
      return Object.keys(this.store);
    }
  }
  
  const coctailsStorage = new HashStorage();
  
  // Дальше буду описываться кнопки
  const addButton = document.getElementById('add-coctail');
  addButton.onclick = function () {
    const coctail = {};
    // получаем данные от пользовател
    const name = window.prompt('Введите название коктеля');
    const isAlcohol = window.prompt('Напиток алкогольный?');
    
    // Добавляем значение в наше хранилище
    coctailsStorage.add(name, {name, isAlcohol});
    console.log('Coctail was added', coctailsStorage.getValue(name));
}