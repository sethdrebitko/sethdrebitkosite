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
  <div id="revue-embed">
  <form action="https://www.getrevue.co/profile/sethdrebitko/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="revue-form-group">
    <label for="member_email">Email address</label>
    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email">
  </div>
  <div class="revue-form-actions">
    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit">
  </div>
  </form>
</div>
  `;
} catch{}
