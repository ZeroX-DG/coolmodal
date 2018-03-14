export function objectToNode(object) {
  if (object.tag) {
    let node = document.createElement(object.tag);
    node.className = object.className;
    return node;
  }
  else {
    throw new Error("Invalid object provided");
  }
}

export function stringToNode(html) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = html.trim();
  return wrapper.firstChild;
}

export function getNode(query) {
  return document.querySelector(`.${query}`);
}

export function getNodes(query) {
  return document.querySelectorAll(`.${query}`);
}