// Creates a DOM node with children
// html can be:
// - A string to directly insert as innerHTML
// - An array of child nodes to append
// - A DOM node to append
function createNode(elem, html, classNames = null) {
  const node = document.createElement(elem);

  if (typeof html === 'string') {
    node.innerHTML = html;
  } else if (Array.isArray(html)) {
    html.forEach(child => node.appendChild(child));
  } else {
    node.appendChild(html);
  }

  if (classNames) classNames.forEach(className => node.classList.add(className));
  return node;
}

// Calling 'removeChild' is much faster than innerHTML = '';
// https://jsperf.com/innerhtml-vs-removechild/37
function removeChildNodes(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}
