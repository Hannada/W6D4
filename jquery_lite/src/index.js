import './dom_node_collection.js';
import DOMNodeCollection from './dom_node_collection.js';

window.$l = function(n) {
  const HTMLarray = [];
  if(n instanceof HTMLElement){
    HTMLarray.push(n);
    return new DOMNodeCollection(HTMLarray);
  }

  const matches = document.querySelectorAll(n); 
  return new DOMNodeCollection(Array.from(matches)); 
};