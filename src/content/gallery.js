const optimizer = (fileName) =>
  `https://beanstalk-uk.vercel.app/_next/image?q=75&url=${encodeURIComponent(
    `https://www.beanstalkdaynursery.co.uk/images/Gallery/${fileName}`
  )}&w=3840`;

export const galleryImages = [
  {
    id: "meals-and-snacks",
    src: "/images/gallery/gallery1.jpeg",
    alt: "A child enjoying meals and snacks at Beanstalk Day Nursery",
    title: "Meals and snacks",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "playground-activity",
    src: "/images/gallery/gallery2.jpeg",
    alt: "playground activity at Beanstalk Day Nursery",
    title: "Playground activity",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: " games-and-activities",
    src: "/images/gallery/gallery3.jpeg",
    alt: " Children enjoying games and activities at Beanstalk Day Nursery",
    title: "Games and activities",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "Happy children playing in the nursery",
    src: "/images/gallery/gallery4.jpeg",
    alt: "Happy children playing in the nursery",
    title: "Happy children playing in the nursery",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "Boy in playground",
    src: "/images/gallery/gallery5.jpeg",
    alt: "A boy playing in the playground",
    title: "Boy in playground",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "sensory-water-play",
    src: optimizer("3.jpg"),
    alt: "A child enjoying sensory water play",
    title: "Sensory water play",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "nursery-activity",
    src: optimizer("6.jpg"),
    alt: "Children enjoying a nursery activity",
    title: "Out and about together",
    category: "around-the-nursery",
    aspect: "aspect-[4/5]"
  },
  {
    id: "lunchtime",
    src: optimizer("7.jpg"),
    alt: "A child enjoying lunchtime",
    title: "Little lunch-time moments",
    category: "rooms",
    aspect: "aspect-[4/5]"
  },
  {
    id: "chicks",
    src: optimizer("8.jpg"),
    alt: "Chicks being cared for at nursery",
    title: "A little introduction to new life",
    category: "learning-and-play",
    aspect: "aspect-[5/4]"
  },
  {
    id: "learning-about-animals",
    src: optimizer("9.jpg"),
    alt: "A child learning about young animals",
    title: "Learning about young animals",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "animal-activity",
    src: optimizer("10.jpg"),
    alt: "A child taking part in an animal activity",
    title: "Gentle hands, curious minds",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "mealtime-activity",
    src: optimizer("11.jpg"),
    alt: "A child enjoying a mealtime activity",
    title: "Growing independence at mealtimes",
    category: "rooms",
    aspect: "aspect-[4/5]"
  },
  {
    id: "baking-treats",
    src: optimizer("12.jpg"),
    alt: "Children's baking and celebration treats",
    title: "Baking something special",
    category: "learning-and-play",
    aspect: "aspect-[5/4]"
  },
  {
    id: "nursery-celebration",
    src: optimizer("13.jpg"),
    alt: "A nursery celebration activity",
    title: "A day to celebrate",
    category: "around-the-nursery",
    aspect: "aspect-[5/4]"
  },
  {
    id: "creative-materials",
    src: optimizer("14.jpg"),
    alt: "Children exploring creative materials",
    title: "Hands-on creative discovery",
    category: "learning-and-play",
    aspect: "aspect-[4/5]"
  },
  {
    id: "dress-up-activity",
    src: optimizer("15.jpg"),
    alt: "Children dressed up for a nursery activity",
    title: "A little imagination goes a long way",
    category: "around-the-nursery",
    aspect: "aspect-[5/4]"
  },
  {
    id: "painting",
    src: optimizer("16.JPG"),
    alt: "Colourful painting and creative artwork",
    title: "Colour, creativity and expression",
    category: "learning-and-play",
    aspect: "aspect-[5/4]"
  },
  {
    id: "special-day",
    src: optimizer("17.JPG"),
    alt: "Children dressed up for a special day",
    title: "Making special memories",
    category: "around-the-nursery",
    aspect: "aspect-[5/4]"
  },
  {
    id: "playing-together",
    src: optimizer("18.jpg"),
    alt: "Children playing together",
    title: "Learning through play",
    category: "rooms",
    aspect: "aspect-[4/5]"
  }
];

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "learning-and-play", label: "Learning and play" },
  { id: "around-the-nursery", label: "Around the nursery" }
];
