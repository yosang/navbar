A responsive navbar is a navbar that ajudsts from horizontal, to vertical depending on wether its being viewed on a desktop device or a phone.

We are going to program this using only css, specifically the `:target` pseudo selector.

The `:target` pseudo-class selectes the element that is currently targeted by an url. This means that when a URL contains a hash `#` followed by an `ID`, the element matching the `ID` becomes the `target` element.

For example, lets say we got a an `<a>` tag, that links to `#section-id`. We can now create an element `<div id="section-id"`, and in CSS, we can do `div:target`. When we click that button, we can now apply whatever style we defined earlier to this div. 

We can can see an example of this in the [:target.html file](:target.html) - Pay attention to how the style element that we are targeting, activates the CSS style when the URL parameter changes to `#section-id`

The way this works under the hood is that style applied to the element selected with a `:target` pseudo, will only activate when the URL has a matching hash (e.g., mypage.com/index.html#section-id targets <div id="section-id">). As soon as the URL changes, or is cleared with `#` or just another link in general, the style will disappear. Also, since this is purely based on hash links, or anchor links as they are called, there wont be a page reload. This is by design, originally ment for jumping to specific elements in a page by using its id. This is demonstrated in [anchor-links.html file](anchor-links.html)