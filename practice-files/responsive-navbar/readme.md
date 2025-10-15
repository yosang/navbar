A responsive navbar is a navbar that ajudsts from horizontal, to vertical depending on wether its being viewed on a desktop device or a phone.

We are going to program this using only css, specifically the `:target` pseudo selector.

We'll start designing the mobile version, then do the desktop version using media queries.

# :target
The `:target` pseudo-class selectes the element that is currently targeted by an url. This means that when a URL contains a hash `#` followed by an `ID`, the element matching the `ID` becomes the `target` element.

For example, lets say we got a an `<a>` tag, that links to `#section-id`. We can now create an element `<div id="section-id"`, and in CSS, we can do `div:target`. When we click that button, we can now apply whatever style we defined earlier to this div. 

We can can see an example of this in the [:target.html file](:target.html) - Pay attention to how the style element that we are targeting, activates the CSS style when the URL parameter changes to `#section-id`

The way this works under the hood is that style applied to the element selected with a `:target` pseudo, will only activate when the URL has a matching hash (e.g., mypage.com/index.html#section-id targets <div id="section-id">). As soon as the URL changes, or is cleared with `#` or just another link in general, the style will disappear. Also, since this is purely based on hash links, or anchor links as they are called, there wont be a page reload. This is by design, originally ment for jumping to specific elements in a page by using its id. This is demonstrated in [anchor-links.html file](anchor-links.html)

### Implementation
We are going to have two buttons that switch between the switchs the URL hash `#`
- `hamburger` button will switch to `#navbar`, which is the id of our navbar element and what we are targeting.
- `close` button will switch back to `#`, thus reverting the navbar element back to its original state.

Here is what thats going to look like

```html
<header>
    <a id="hamburger-btn" href="#navbar"><i class="fa-solid fa-bars" aria-hidden="true"></i></a>
    <nav id="navbar">
      <ul>
        <li><a href="#"><i class="fa-solid fa-xmark" aria-hidden="true"></i></a></li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
</header>
```

Here we have on purpose placed the hamburger button outside the navbar. Because we want it to be visible at all times.

When we click on it, the URL is going to change to `#navbar`, and now the <nav> element is our target. Nothing will happen right out off the bat, but in CSS, we want to make the <nav> element visible when we click on the hamburger button.

To do that, we are going to move the bar out of sight by default, and only when we click the hamburger button, bring it back to view.

```css
nav { /* The navbars default state is out of sight, off screen completely */
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    transform: translateY(-100px);
    transition: transform 0.2s ease;
    
    /* border: 1px solid green; */
}
```

```css
nav:target { /* This codeblock will ony run when the nav element is the target */
    transform: translateY(0px);
}
```

This should work just fine, however, we got a little issue, the hamburger button shows even when the navbar is visible and that doesnt look too pretty.

In order to make hamburger disappear, we are going to use the `:has` pseudo selector.

# :has
The `:has` pseuso selector is used to conditionally apply a style to an element as long as the provided selector is the child of its parent `parent:has(child)`. A child can be selected in different ways, we can select it by its class, id or even a state. [source](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

We want to use the `:has` pseudo-class to apply a style to our hamburger button on the element identified by `#navbar:target` which means, only when its targeted.

```css
header:has(#navbar:target) #hamburger-btn {
    display: none;
}
```

This selects the header, and checks if the element identified by `#navbar` is targeted, if it is, select the `#hamburger-btn` and apply the `display:none` style to it.

This selector is pretty cool and can even be used with forms, this1 video explains well how that can be done: https://www.youtube.com/watch?v=oVuVa9I-B04

# Mediaqueries

Our mediaquery will be `750px`, thats just what we are going to use.