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

All data for the site is stored in meta files as json. The data is broken in to two main categories: raw data, and generated views.

The default directory for the meta data is the ```src/assets/meta``` folder. Examples are provided and should be replaced with your actual data.

### Manga
Each manga is stored in it's own file, named in the following format:
```m-MANGAID.json```
Where MANGAID is the GUID for the manga. Must match ID in the file.
The following fields exist on each Manga object:
- **id**: This is the unique id for the file, GUIDs are used, but technically as long as the file name matches the id field it can be anything.
- **name**: This is the name that will be displayed for the manga.
- **imageUrl**: This is a url to an image to display for the manga. You may also use a data url, but that will make your meta files larger and is only recommended for sites hosting small quantities of manga.
- **description**: A description for the manga.
- **genres**: A list of strings which are the generes for the manga. Unused currently.
- **author**: A name to display as the author of the manga.
- **artist**: A name to display as the artist of the manga.

Here is an example file with all fields filled.
```
Filename: src/assets/meta/m-a07c7408-c5c6-4fe4-92c6-af3f2be2960a.json
Contents:
{
  "id": "a07c7408-c5c6-4fe4-92c6-af3f2be2960a",
  "name": "Sample Manga 2",
  "imageUrl": "/assets/img/logo.png",
  "description": "Vestibulum sollicitudin ex at tellus feugiat sollicitudin.",
  "genres": [],
  "author": "John",
  "artist": "John"
}
```

### Chapters
All chapters for a manga are stored in a json array in a single file named like the following:
```c-MANGAID.json```
Where MANGAID is a valid identifier for a manga appearing in its own file.
The array order determines the display order. No sorting is performed intentionally to allow for weird chapter labels.
The following fields exist on a chapter object:
- **id**: A unique ID for the chapter. As with manga, GUIDs are used, but anything can be so long as it is unique across all manga to prevent collisions in the page data.
- **label**: A display name for the chapter.
- **releaseDate**: The date to display that the chapter was uploaded. Dates are treated as UTC by default. Should be in the following format: ``YYYY-MM-DD HH:MM:SS```

Here is an example file:
```
Filename: src/assets/meta/c-a07c7408-c5c6-4fe4-92c6-af3f2be2960a.json
[
  {
    "id": "3658E791-2D1B-C460-EBAB-63D32DB50FE1",
    "label": "Chapter 1",
    "releaseDate": "2018-02-09 13:12:12"
  },
  {
    "id": "4658E791-2D1B-C460-EBAB-63D32DB50FE2",
    "label": "Chapter 2",
    "releaseDate": "2018-02-09 13:12:12"
  },
  {
    "id": "5658E791-2D1B-C460-EBAB-63D32DB50FE3",
    "label": "Chapter 3",
    "releaseDate": "2018-02-09 13:12:12"
  }
]
```

### Pages

### Generated Views

## Deployment

Talk about how to deploy, given the setup above.
