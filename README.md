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

### Requirements (Build)
- A unix environment for building
- npm 5+
- A corresponding version of nodejs
- jq (available from apt, and probably brew)

### Installation

1. Fork/Clone the repo (Fork if you intend to make changes but would like to have a nice path to pull in furture updates).
2. Install dependencies with ```npm install```
3. Add meta data to assets/meta.
4. Build the project with ```npm run build``` (Site will be compiled, meta data will be generated).
5. Upload dist folder to static host.

To test changes to the project, run ```npm run dev```, which will open a browser and serve the local project. You will need to run the meta compiler when meta changes are made: ```npm run meta-dev```. Non meta changes should trigger reloads.

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
- **imageUrl**: This is a url to an image to display for the manga. You may also use a data url, but that will make your meta files larger and is only recommended for sites hosting small quantities of manga. This url can be a local url to the current domain, or a full url to a separate domain, if you wanted to host image data separately for example.
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
  "imageUrl": "/assets/img/cool_manga.png",
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
Contents:
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
All pages for a chapter are stored in a json array in a single file named like the following:
```p-CHAPTERID.json```
Where CHAPTERID is a valid identifier for a chapter appearing in its own file.
The array order determines the display order.
The following fields exist on a page object:
- **imageUrl**: This is a url to an image to display for the page. You may also use a data url, but that will make your meta files larger and is only recommended for sites hosting small quantities of manga. This url can be a local url to the current domain, or a full url to a separate domain, if you wanted to host image data separately for example.

Here is an example file:
```
Filename: src/assets/meta/p-3658E791-2D1B-C460-EBAB-63D32DB50FE1.json
Contents:
[
    {
        "imageUrl": "/assets/img/chapter1/1.png"
    },
    {
        "imageUrl": "/assets/img/chapter1/2.png"
    }
]
```

### Generated Views
The following is listed for information only, as the data for the following views is generated. You should never need to modify the generated view data manually, only the manga/chapter/page data. These are stored directly in the assets directory, not in the meta sub folder.
#### All Manga
TODO
#### Recently Updated
TODO
## Deployment

This project will be easiest to work with when forked, with meta assets being tracked in source control, and image assets being stored separately. As such, the recommendation is to host the two sets of data (static generated site from thsi project + meta data, and image data) separately. An example of this would be to host images at imgs.example.com and the rest of the site at example.com. The meta data format allows images to be hosted anywhere.
With that being said, you could very well store image data in the git repo if you choose, or go even further and use data URLs in all meta data. This is not recommended for sites of any meaningful size.

Further performance can be gained by using a CDN in conjunction with static hosting (Cloudfront/Cloudflare), which will further decrease latency to clients.

For more dynamic control, the project could be extended (by changing the base URL the meta data lookup code uses, or by extending the class) to host the meta data in something like MongoDB as well, or anything that allows mapping http requests to json response data (such as a full dynamic API).
