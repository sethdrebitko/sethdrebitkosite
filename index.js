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
  <h1>Want to be Pen Pals?</h1>

      <p>
        Can't join the Awesome Club, but still want to keep up to date on all the goodness being created?
        Feel free to join the still awesome Pen Pals newsletter.
      </p>

      <!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
      <style type="text/css">
        #mc_embed_signup {
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
        }

        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                                    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://sethhimself.us5.list-manage.com/subscribe/post?u=2e15384af576d3ddd1e9b70ce&amp;id=31adad69fc"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
          novalidate>
          <div id="mc_embed_signup_scroll">
            <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                name="b_2e15384af576d3ddd1e9b70ce_31adad69fc" tabindex="-1" value=""></div>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                class="button"></div>
          </div>
        </form>
      </div>

      <!--End mc_embed_signup-->
  `;
} catch{}