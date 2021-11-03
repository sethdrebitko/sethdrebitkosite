// select the element that will be replaced
var el = element.getElementsByClassName('default-menu');

// <a href="/javascript/manipulation/creating-a-dom-element-51/">create a new element</a> that will take the place of "el"
var newEl = document.createElement('p');
newEl.innerHTML = '<div class="menu-top"><b><a href="/" class="button1">Home</a></b><b><a href="/awesome-club.html" class="button1">Awesome Club</a></b></div>';