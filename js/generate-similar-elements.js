export const addToContainer = function (element, container) {
  container.appendChild(element);
};

export const pushToArray = function (element, array) {
  array.push(element);
};

export const removeAllChildren = function (parent) {
  parent.innerHTML = '';
};

export const addStringToElement = function (str, element) {
  element.textContent = str;
};

export const defineHouseType = function (type, element) {
  if (type === 'flat') {
    element.textContent = 'Квартира';
  }
  if (type === 'bungalow') {
    element.textContent = 'Бунгало';
  }
  if (type === 'house') {
    element.textContent = 'Дом';
  }
  if (type === 'palace') {
    element.textContent = 'Дворец';
  }
};

export const addChildWithTwoClasses = function (childElement, childClass1, classArray, parent, randomArr) {
  removeAllChildren(parent);
  for (let i = 0; i < randomArr.length; i++){
    let newChild = document.createElement(childElement);
    newChild.classList.add(childClass1);
    for (let j = 0; j < classArray.length; j++) {
      newChild.classList.add(classArray[i]);
    }
    parent.appendChild(newChild);
  }
};

export const addImgChildWithAttributes = function (childElement, childClass, parent, randomSrcArr) {
  removeAllChildren(parent);
  for (let i = 0; i < randomSrcArr.length; i++){
    let newChild = document.createElement(childElement);
    newChild.classList.add(childClass);
    newChild.src = randomSrcArr[i];
    newChild.width = '45';
    newChild.height = '40';
    newChild.alt = 'Фотография жилья';
    parent.appendChild(newChild);
  }
};

