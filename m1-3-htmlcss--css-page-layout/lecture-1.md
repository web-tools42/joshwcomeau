# 1.3.1 - CSS Page Layout

---

## CSS Pixels

- Your monitor is divided into pixels (screen pixels).
- When you write CSS, you specify the height, width and position in `px` units.

This `px` unit is **not** a screen pixel, but a CSS pixel.

---

- Small laptop resolution: 1366 x 768
- "1080p" resolution: 1920 x 1080
- iPhone X screen resolution: 2436 x 1125

---

### Example of a Desktop site

<img src="./assets/nresp_desktop.png" />

---

The same site on a mobile device

<img src="./assets/nresp_mobile.png" />

---

## "Retina displays"

Apple's fancy branding term

Every "normal" pixel is made up of 4 pixels.

---

## A Quick Fix?

Add the following to your HTML page(s)

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

This will make the CSS pixels scale on mobile devices.

---

The same site _fixed_

<img src="./assets/nresp_mobile_fix.png" />

---

## Responsive Web Design

---

Websites shift content around depending on the screen size.

[Montreal Gazette](https://montrealgazette.com/)

---

## Mobile-first

In design, it is recommended to _start with the mobile size_.

It's easier to add stuff for larger screens than to take away stuff on smaller screens.

---

## So how do we implement these things?

---

## [Media queries](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) 🥳

Media queries can be used to check many things, such as:

- width and height of the viewport
- width and height of the device
- orientation (landscape or portrait)
- resolution

---

### A basic media query

[Try it](https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_ex1)

---

# Exercises

---

# Exercise 1

Change the font size based on the window size

https://codepen.io/joshwcomeau/pen/QWbeygM?editors=1100

---

# Exercise 2

Change the flex direction based on the orientation

https://codepen.io/joshwcomeau/pen/wvaVMpJ?editors=1100

---

# Exercise 3

Use a media query to stack the two columns

https://codepen.io/joshwcomeau/pen/GRJVpYb?editors=1100

---

# Fonts on the Web

There are only about a dozen fonts that come included with all operating systems.

They aren't pretty.

---

[Google Fonts](https://fonts.google.com/)

---

# Advanced topics

---

## CSS Pseudo selectors

### [Pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes)

- `:hover`
- `:focus`
- `:checked`
- `:first-child`

[Try it](https://www.w3schools.com/css/tryit.asp?filename=trycss_link) | [Try it](https://www.w3schools.com/css/tryit.asp?filename=trycss_first-child2)

---

### CSS Viewport units

There are many units in CSS.

Here are two handy ones:

- `vh` - percentage of the Viewport Height
- `vw` - percentage of the Viewport Width

https://codepen.io/joshwcomeau/pen/gOpVMRE

---

## [CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

- Translate
- Rotate
- Scale

[Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_transform) | [Trnasform Generator](https://html-css-js.com/css/generator/transform/)

---

## CSS Animation

Two ways to do this.

- Transition
- Keyframe animations
