# Frontend Mentor - Results summary component solution

This is Scott Cook's solution to the [results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

<img width="376" alt="Screenshot 2023-04-27 at 12 01 52 PM" src="https://user-images.githubusercontent.com/6232294/234968723-3e964bd0-e59c-4802-9022-946d60818f5c.png">

<img width="718" alt="Screenshot 2023-04-27 at 12 02 13 PM" src="https://user-images.githubusercontent.com/6232294/234968798-cc053ddf-8830-44b1-834a-a1bd7860583e.png">

### Links

- Solution URL: [Github](https://github.com/scottmcook/results-summary-component)
- Live Site URL: [Vercel app](https://results-summary-component-coral.vercel.app/)

## My process

### Built with

- `create-react-app`
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailWind](https://tailwindcss.com/) - For utility classes

### What I learned

Here is a list of things I learned from making this project.

- **React** Keep your assets in public folder ensures you can access it anywhere in the project. By giving `/path_to_image` it has no need for any path traversal `'../../'`.
- **CSS** Best practice for buttons is to add padding rather than height.
- **CSS** I'm not ashamed to admit even as a dev for 6 plus years I still needed a refresher on best practice for margin vs padding 😅.
- **git** Github will not count commit contributions from your machine unless `git config --global user.email` is set to your Github account email.
- **Other** Variable fonts are coollll.

### Continued development

#### CSS Refactor

I could refactor a lot. My approach from the beginning was to utilize CSS variables / tokens and even though I knew I was going to add in `tailwind`. I probably should have added in tailwind first, modified the config file to fit my use cases, then added in custom tokens and classes if needed.

### Useful resources

- [StackOverflow - drawing a circle with flexbox](https://stackoverflow.com/questions/16615403/how-to-draw-a-circle-with-text-in-the-middle) - I sought out a pattern to draw a circle specifically with Flexbox.

## Author

- Website - [Runnin' Code](https://runnincode.com/)
- Github - [Scott Cook](https://github.com/scottmcook)
