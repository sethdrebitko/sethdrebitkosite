/*
# Menus
*/

try {

  // select the element that will be replaced
  var DefaultMenu = document.getElementById('default-menu');

  // replace el with newEL
  DefaultMenu.outerHTML = 
  `
              <div class="menu-top">
                  <b><a href="/" class="button1">Home</a></b>
                  <b><a href="https://ko-fi.com/seth" class="button1" target="blank">Awesome Club</a></b>
              </div>
  `;
} catch{}

  /*
  # Email Forms
  */

  try {
  // select the element that will be replaced
  var DefaultMenu = document.getElementById('default-email-form');

  // replace el with newEL
  DefaultMenu.outerHTML = 
  `
  <h2>Monday Missives</h2>
  
  <p>Every other Monday I write a about the Apple and Developer news and resources I found through the week, as well as topics around pursuing indie entrepreneurship in a healthy balanced way.</p>
  
  <iframe src="https://sethdrebitko.substack.com/embed" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
  `;
} catch{}
