# Beanstalk Gallery — source and implementation notes

## Source
The gallery photographs were taken from the existing Beanstalk page supplied by the user:

https://beanstalk-uk.vercel.app/gallery

The page exposes 14 gallery photographs and their accessible descriptions. The implementation uses the existing site's image-optimisation endpoint so the exact photographs remain available without replacing them with stock imagery.

## Photographs included
1. A child enjoying sensory water play
2. Children enjoying a nursery activity
3. A child enjoying lunchtime
4. Chicks being cared for at nursery
5. A child learning about young animals
6. A child taking part in an animal activity
7. A child enjoying a mealtime activity
8. Children's baking and celebration treats
9. A nursery celebration activity
10. Children exploring creative materials
11. Children dressed up for a nursery activity
12. Colourful painting and creative artwork
13. Children dressed up for a special day
14. Children playing together

## Gallery filters
The filter labels follow the supplied desktop/mobile page design:
- All
- Rooms
- Learning and play
- Around the nursery

The individual category tags are assigned according to the visible activity in each photograph. The source page provides the photographs and alt descriptions, but does not expose category metadata for each image.

## Interactions
- Responsive image grid
- Category filtering
- Click/tap to open the lightbox
- Previous and next photo controls
- Escape key closes the lightbox
- Left/right arrow keys navigate photos
- Dialog focus management and accessible image descriptions

## Asset hosting note
The current code references the image-optimisation URLs served by the source website. The image files are not duplicated into the project ZIP. For a fully self-contained production deployment, copy the original source images into `public/images/gallery/` and update `src/content/gallery.js` to use local `/images/gallery/...` paths before the source host is retired.
