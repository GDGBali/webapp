const createPerson = (name, imgUrl, socials) => ({
  name,
  imgUrl: require(`@assets/images/${imgUrl}.jpg`),
  socials,
});

export default [
  createPerson('Wahyu Untoro', 'wahyu', [
    {
      id: 'facebook',
      url: 'https://www.facebook.com/wahyuunt97',
    },
    {
      id: 'instagram',
      url: 'instagram.com/_wahyu97',
    },
    {
      id: 'linkedin',
      url: 'www.linkedin.com/in/wahyu97',
    },
  ]),
  createPerson('Roby Irawan', 'roby', [
    {
      id: 'twitter',
      url: 'https://twitter.com/omrobbie',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/omrobbie/',
    },
  ]),
  createPerson('Adi Andrea', 'adi', [
    {
      id: 'twitter',
      url: 'https://twitter.com/kadek_adiandrea',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/adiandrea/',
    },
  ]),
  createPerson('Prabu Rangki', 'prabu', [
    {
      id: 'twitter',
      url: 'https://twitter.com/praburangki',
    },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/praburangki/',
    },
    {
      id: 'medium',
      url: 'https://medium.com/@praburangki',
    },
  ]),
  createPerson('Leonard Papilaya', 'leo', [
    {
      id: 'facebook',
      url: 'https://www.facebook.com/leopapilaya',
    },
  ]),
];
