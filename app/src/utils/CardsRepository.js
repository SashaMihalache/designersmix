const cardsData = [
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    hearts: 4,
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    hearts: 4,
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    hearts: 4,
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    views: 1000,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    views: 1000,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    views: 1000,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    views: 1000,
    comments: 10
  },
  {
    id: Math.floor(Math.random() * 9999),
    designer: "Sasha Mihalache",
    mixArt:
      "https://d292n8gq3mjg90.cloudfront.net/mixes/cover_photo/4986/small.jpeg",
    hearts: 4,
    designerPic:
      "https://d292n8gq3mjg90.cloudfront.net/users/avatar/4973/xsmall.jpeg",
    views: 1000,
    comments: 10
  }
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cardsData);
    }, 300);
  });
}

export { getData };
