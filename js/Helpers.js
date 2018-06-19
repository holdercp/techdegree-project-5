// Creates a DOM node with children
// html can be:
// - Blank for non-closing tags (i.e. img)
// - A string to directly insert as innerHTML
// - An array of child nodes to append
// - A single DOM node to append
// Optional single calss name or array of class names
// Optional object of attributes
function createNode(elem, html = null, classNames = null, attrs = null) {
  const node = document.createElement(elem);

  if (html) {
    if (typeof html === 'string') {
      node.innerHTML = html;
    } else if (Array.isArray(html)) {
      html.forEach(child => node.appendChild(child));
    } else {
      node.appendChild(html);
    }
  }

  if (classNames) {
    if (typeof classNames === 'string') {
      node.classList.add(classNames);
    } else {
      classNames.forEach(className => node.classList.add(className));
    }
  }

  if (attrs) {
    Object.entries(attrs).forEach((attr) => {
      node.setAttribute(attr[0], attr[1]);
    });
  }
  return node;
}

// Calling 'removeChild' is much faster than innerHTML = '';
// https://jsperf.com/innerhtml-vs-removechild/37
function removeChildNodes(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

// Capitalizes each word of string
function capitalize(string) {
  const arr = string.split(' ');
  return arr.reduce((prevWord, currentWord, index) => {
    let newString = prevWord + currentWord.charAt(0).toUpperCase() + currentWord.substring(1);
    if (index < arr.length - 1) newString += ' ';
    return newString;
  }, '');
}

// Takes a timestamp and returns a string in the format "mm/dd/yy"
function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getMonth().toString()}/${date.getDay().toString()}/${date
    .getFullYear()
    .toString()
    .slice(2)}`;
}
