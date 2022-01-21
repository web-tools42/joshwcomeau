import mdxTheme from '../../theme';
export const theme = mdxTheme;
import Spacer from '../../components/Spacer';

import seriesOfTubes from './assets/series-of-tubes.jpg';

# 1.1.1 - History of the Web

---

## What is the internet?

![Screengrab of tubes with a US Senator](./assets/series-of-tubes.jpg)

---

## The internet

A single network connecting most devices on the planet.

There are massive pipes filled with wires that run underneath the oceans to connect continents!

---

## Client vs Server

- Clients are our devices. Laptops, phones, smart fridges.
- Clients request information from servers.
- Servers are computers on the internet set up to _serve data_.

---

## The Web

The "web" is a part of the internet used for websites and web applications.

There are many "protocols" on the internet. The web uses two:

- HTTP
- HTTPS

---

## Technologies

The web uses three primary technologies:

- HTML
- CSS
- Javascript

These technologies are sent from the server to the client.

---

## Assets

Web servers also serve other content.

Can you name some?

---

## Web browsers

The "client" is usually a web browser.

- Chrome
- Safari
- Firefox
- Edge
- ...the list goes on

---

## Web browsers

Browsers take the raw data they receive (HTML, CSS, Javascript) and build a webpage you can see and interact with. That's their job.

---

## Browser engines

Different browsers have different _rendering engines_. This means that pages will often look slightly different depending on the browser.

It means they support different language features.

---

# Websites and Web Applications

When the web was created, the idea was that every "site" was a collection of _documents._

The killer feature of the web was the hyperlink.

---

# Websites and Web Applications

Over time, website developers got more and more ambitious.

We don't write documents anymore, we build applications.

---

# What's the difference?

What would you say?

---

## IP addresses

Every connection to the Internet has an IP address. This is how you access them.

The most common form looks like this:

```
172.217.13.206
```

---

## Domain names

It would be awful if we had to remember numbers like that to access web pages!

Instead, we buy domain names (eg. google.com), and we _point_ those domain names to a specific server.

---

## Let’s take a trip to [Wikipedia](https://en.wikipedia.org/wiki/Montreal)

What happened? Sketch it out!

---

## URLs

We can access specific content at specific URLs.

- https://www.google.com/ returns the homepage
- https://www.google.com/search?q=cats returns a bunch of cat links
  - Different HTML/CSS/JS and assets served

Servers will _route_ requests according to the URL.

---

#### Overview

- Web servers are computers that serve HTML/CSS/JS and assets (images, video, etc)
- We can access specific content at specific URLs
- We use web browsers to transform raw data into usable websites
- Websites have grown far beyond "documents" and are now akin to desktop or mobile applications
