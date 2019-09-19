class DOMNodeCollection {
  constructor(nodes) {
    // this.nodes in an arr of html elements 
    this.nodes = nodes; 
  }

  html(str) {
    if (typeof str === "string") {
      this.nodes.forEach(el => {
        el.innerHTML = str;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.nodes.forEach(el => {
      el.innerHTML = ""; 
    });
  }

  append(arg) {
    if (typeof arg === "string") {
      this.nodes.forEach(el => {
        el.innerHTML += arg;
      })
    }else if (typeof arg === DOMNodeCollection) {
      this.nodes.forEach(el => {
        let clone = el.cloneNode();
        clone.appendChild(clone.outerHTML);
      })
    } 
  }

  attr(){
    this.nodes[0].nodeName
  }

  addClass(cName){
    this.nodes[0].className += ` ${cName}`;
  }
  
  removeClass(cName){
    let classString = this.nodes[0].className.split(' ') ;
    for (let i = 0; i < classString.length; i++) {
      if (classString[i] === cName) {
        classString.splice(i, 1); 
      }
    }
    this.nodes[0].className = classString.join(' '); 
  }

  children(){
    let allChildren = [];
    this.nodes.forEach(node => {
      allChildren = allChildren.concat(Array.from(node.children));
    })
    return new DOMNodeCollection(allChildren); 
  }
}

export default DOMNodeCollection;
