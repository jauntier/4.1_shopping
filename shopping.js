const shoppingList = (groceries) => {
    let formattedList = '';
    
    groceries.forEach((item) => {
      const { item: itemName, quantity } = item;
      formattedList += `${itemName}: ${quantity}\n`;
    });
    
    return formattedList.trim();
  };
  
 
  const groceries = [
    { item: 'Apples', quantity: 3 },
    { item: 'Bananas', quantity: 6 },
    { item: 'Milk', quantity: 1 },
  ];
  
  console.log(shoppingList(groceries));
  