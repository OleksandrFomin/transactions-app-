export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newObjProps
) => {
  return items.map((item) => {
    if (item[objPropName] === itemId) {
      console.log(newObjProps);
      return {
        ...item,
        ...newObjProps,
      };
    }
    return item;
  });
};

export const deleteObjectFromArray = (items, itemId, objPropName) => {
  return items.filter((item) => {
    return item[objPropName] !== itemId;
  });
};

export const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    console.log(item);
    obj[item.TransactionId] = item;
    return obj;
  }, {});
