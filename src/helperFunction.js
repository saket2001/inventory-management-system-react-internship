export const dynamicSort=(property)=>{
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export const generateID = (length=10) => {
  let id = "";
  for (let i = 0; i <= length; i++) {
    id = id.toString() + Math.floor(Math.random() * 20).toString();
  }
  return id;
}
