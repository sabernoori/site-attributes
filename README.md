# site-attributes
This JS script handles your universal site attributes so you once update certain data like phone, email, address and etc and it updates everywhere they used.

## How to use it?
Add the following to your before </body> tags:
<script src="https://sabernoori.github.io/site-attributes/script.js"></script>

Then add the following into your head tags:
(Use or define any data you want, the data here are just examples.)
To define text data add "text-*": "", inside the function. and for making a link of that "*" you just need to define an attribute for that with "link-*": "", . 


<script>
siteAttributes = {
  "text-phone": "+1123456789",
  "link-phone": "",
  "text-email": "Send email to us",
  "link-email": "hello@site.com",
  "text-instagram": "https://instagram.com/profile"
};
</script>





