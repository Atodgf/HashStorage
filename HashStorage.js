class HashStorage {
    constructor() {
      this.store_ = {}; 
    }
  
    add(key, value) {
      this.store_[key] = value; 
    }
  
    getValue(key) {
      if(!(key in this.store_)) {
        return false
      }

      return this.store_[key]; 
    }
  
    deleteValue(key) {
      if(!(key in this.store_)) {
        return false
      }
  
      return delete this.store_[key];
    }
  
    getKeys() {
      return Object.keys(this.store_);
    }
  }
  
  const coctailsStorage = new HashStorage();

  
  coctailsStorage.add('vodka', {name: 'vodka', isAlcohol: true}); 
  coctailsStorage.add('tea', {name: 'tea',isAlcohol: false}); 
  
  // Кнопка 'Добавить'
  const addButton = document.getElementById('add-coctail');
  addButton.onclick = function () {
   
   
    const name = window.prompt('Введите название коктеля');
    const isAlcohol = window.prompt('Напиток алкогольный?');
    
     
    coctailsStorage.add(name, {name, isAlcohol});
    console.log('Coctail was added', coctailsStorage.getValue(name));
 }



// Кнопка 'Рецепт'
const checkButton = document.getElementById('get-coctail');
checkButton.onclick = function () {
  
  const input = window.prompt('Введите название коктеля');
  
  const display = document.querySelector('h1')

  display.textContent = coctailsStorage.getValue(input)


  
}

// Кнопка 'Удалить'
const delButton = document.getElementById('delete-coctail');
  delButton.onclick = function () {
     
    const name = window.prompt('Введите название коктеля');

    coctailsStorage.deleteValue(name);
    
 }

// Кнопка 'Список Рецептов'
const recButton = document.getElementById('all-coctails');
  recButton.onclick = function () {

    const display = document.querySelector('textarea')

    display.textContent = coctailsStorage.getKeys();
    
  }

  // // Кнопка 'Рецепт'
  // const checkButton = document.getElementById('get-coctail');
  //   checkButton.onclick = function () {
  //     let checkName = window.prompt('Введите название коктеля');
  //     for (let key in coctailsStorage.store_) {
  //       if (checkName == key) {
  //         alert(Object.values(coctailsStorage.store_))
  //         break
  //       }  else {
  //         alert('Данного напитка нету в списке!')
  //         break
  //       }
  //     }
  //   }
      
    
 

      
  console.log(coctailsStorage)