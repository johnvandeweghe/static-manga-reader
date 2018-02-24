# Static Manga/Webtoon Reader

A manga/webtoon reader written to cut costs, and boost speeds of scanalator/translator group sites.

## Features

- Entirely static
    - No server side languages required. Once built, this reader can be deployed entirely on static web hosting; S3/Cloudfront, GitHub Pages, you name it.
    - Due to the above, this reader is super fast. Without any server side processing, performance is purely network bandwidth based.
    - Again due to the above, hosting is really affordable for this reader. Small sites can often get by for under a few $s a month. Even with 100s of GBs of images, hosting works out to tens of $s per month (more with tons of views, but that's a great problem to have).
- Simple/Minimalistic
    - This reader has just the bare minimum to read hosted manga/webtoons. No bloat.
    - Because there is so little going on overall, it's very easy to customize (or add to if desired).
    
### Future/Planned Features
- One page per page; Currently the reader only supports long strip style manga. A flag will be added to manga meta data to allow page flipping instead.
- Image preloading; i.e. waiting for all images to load before showing any when in long strip mode.
- A UI for building manga meta data; Currently all meta data must be crafted by hand.

## Setup
Fork/Clone the repo... Describe assets/storage patterns...

### Requirements
npm 5?
Node something?



### NPM Scripts

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build meta view assets for dev (src/assets)
npm run meta-dev

# build meta view assets for prod (dist/assets)
npm run meta

# lint the Typescript
npm run lint

# build for production with minification (includes view asset compilation)
npm run build

# clean the production build
npm run clean
```
## Meta data formats

### Manga

### Chapters

### Pages

### Generated Views

## Deployment

Talk about how to deploy, given the setup above.
