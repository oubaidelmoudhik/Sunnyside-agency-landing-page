# Frontend Mentor - News homepage solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![Desktop screenshot](./design/screenshots/desktop%20screenshot.jpeg)
![Mobile screenshot](./design/screenshots/mobile%20screenshot.jpeg)
![Menu dropdown screenshot](./design/screenshots/menu%20dropdown.jpg)

### Links

- Solution URL: [Frontend Mentor page](https://www.frontendmentor.io/solutions/sunnysideagencylandingpage-Ij0JZ7eSpk)
- Live Site URL: [On Github](https://theniceguywastaken.github.io/Sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This was my biggest challenge yet, I learned so much new things especially in CSS, like how to use custom variables properly, how to use utility classes (basically building a private small library), and how to build a full responsive layout using the modern ways of Grid (for 2 dimentional layouts) and Flexbox (for single dimentional layouts).<br>
Also, this was the first project I've used JavaScript in, not much, but it's a start!

```css
/* Some CSS that I'm proud of! */
.service a::after {
  content: "";
  display: block;
  width: 125px;
  height: 8px;
  margin: auto;
  border-radius: 5px;
  margin-top: -7px;
}
main .service:nth-child(2) a::after {
  background-color: var(--yellow-transparent);
}
main .service:nth-child(2) a:hover::after {
  background-color: var(--yellow);
}
```

### Continued development

I want to continue building more complexe projects to have more understanding of Flexbox and Grid. And try to implement more and more JavaScript into the mix, to eventually start learning React إن شاء الله!

### Useful resources

- [Elzero Web School](http://elzero.org/) - I have leanred so much from this guy that I can't specify only one thing, if you're arab and you want to learn front-end, this is the guy for you!
- [Kevin Powell](https://www.youtube.com/kepowob) - This is an amazing YouTube channel to learn CSS, and he helped me understand Flex and Grid much better and also easier.

## Author

- LinkedIn - [Oubaid](https://www.linkedin.com/in/oubaidelmoudhik/)
- Frontend Mentor - [@theniceguywastaken](https://www.frontendmentor.io/profile/theniceguywastaken)
- Twitter - [@oubaidem](https://www.twitter.com/oubaidem)

## Acknowledgments

الحمد لله الذي بنعمته تتم الصالحات، والصلاة والسلام على سيدنا محمد.
