// api.jsx
export const audiobooks = [
    {
      id: 1,
      title: "Becoming",
      author: "Michelle Obama",
      narrator: "Michelle Obama",
      runtime: "19 hrs 3 mins",
      genre: "Biography",
      cover: "https://prh.imgix.net/articles/Becoming_Social_1600x800px_1.jpg",
      audioUrl: "https://example.com/audio/becoming.mp3",
      description: "A deeply personal memoir by Michelle Obama, sharing her journey from childhood to becoming the First Lady of the United States.",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      narrator: "James Clear",
      runtime: "5 hrs 35 mins",
      genre: "Self-Help",
      cover: "https://assets.penguinrandomhouse.com/wp-content/uploads/2022/03/07110351/PRH-Atomic-Habits-Excerpt-Article-Header-1080x1080-1.jpg",
      audioUrl: "https://example.com/audio/atomic-habits.mp3",
      description: "Transformative book on how tiny changes can lead to remarkable results in personal and professional life.",
    },
    {
      id: 3,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      narrator: "Roger Wayne",
      runtime: "6 hrs 15 mins",
      genre: "Philosophy",
      cover: "https://bookloftlb.com/cdn/shop/files/SUBTLE_ART_OF_NOT_GIVING_A_FUCK.png?v=1716810277&width=480",
      audioUrl: "https://example.com/audio/subtle-art.mp3",
      description: "A counterintuitive approach to living a good life, focusing on what truly matters.",
    },
  ];
  
  export const bestbooks = [
    {
      id: 1,
      title: "Design Engineering Handbook",
      author: "By Invision",
      progress: 64,
      coverUrl: "https://media.licdn.com/dms/image/sync/v2/C5627AQENwFUtgWCJJQ/articleshare-shrink_800/articleshare-shrink_800/0/1720730741982?e=2147483647&v=beta&t=ka5c1Rc6pwnybsVfd1AgPMnQwEf2aXEZ1W0Z73n7j-U",
    },
    {
      id: 2,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      progress: 77,
      coverUrl: "https://bookloftlb.com/cdn/shop/files/SUBTLE_ART_OF_NOT_GIVING_A_FUCK.png?v=1716810277&width=480",
    },
    {
      id: 3,
      title: "The Lean Startup",
      author: "By Eric Ries",
      progress: 82,
      coverUrl: "https://mincorps.umn.edu/sites/mincorps.umn.edu/files/2020-06/leanstartup.png",
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      progress: 90,
      coverUrl: "https://assets.penguinrandomhouse.com/wp-content/uploads/2022/03/07110351/PRH-Atomic-Habits-Excerpt-Article-Header-1080x1080-1.jpg",
    },
    {
      id: 5,
      title: "SPRINT",
      author: "By Jake Knapp",
      progress: 100,
      coverUrl: "https://miro.medium.com/v2/resize:fit:1400/1*sMX9m9Bi6ZG9sFxHStdxBA.jpeg",
    },
  ];

   export const initialBooks = [
      {
        title: "Bedtime Storybook Library",
        author: "Morgan Housel",
        cover: "https://m.media-amazon.com/images/I/81wVn9L-KfL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        title: "Disney Classic Storybook Collection",
        author: "Matt Ridley",
        cover: "https://books.disney.com/content/uploads/2021/06/1368065791-scaled.jpg",
      },
      {
        title: "Animals Storybook Collection",
        author: "Paul Jarvis",
        cover: "https://images.booksense.com/images/980/041/9781368041980.jpg",
      },
      {
        title: "Storybook Collection",
        author: "James Clear",
        cover: "https://m.media-amazon.com/images/I/915qUAO-2-L._AC_UF1000,1000_QL80_.jpg",
      }
    ];
    
    export const allBooks = [
        {
          title: "The Bees",
          author: "Laline Paull",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384018069i/18652002.jpg",
          category: "Sci-Fi",
          rating: 4.5,
        },
        {
          title: "Real Help",
          author: "Ayodeji Awosika",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578598360i/50372880.jpg",
          category: "Business",
          rating: 4.2,
        },
        {
          title: "The Fact of a Body",
          author: "Alexandria Marzano-Lesnevich",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1496316115i/32076678.jpg",
          category: "Drama",
          rating: 4.8,
        },
        {
          title: "The Room",
          author: "Jonas Karlsson",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394827919i/17830958.jpg",
          category: "Fantasy",
          rating: 4.3,
        },
        {
          title: "Through the Breaking",
          author: "Cate Emond",
          cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1482291062i/33117798.jpg",
          category: "Education",
          rating: 4.6,
        },
        {
          title: "World Atlas",
          author: "John Smith",
          cover: "https://m.media-amazon.com/images/I/81CUJcDrowL._AC_UF1000,1000_QL80_.jpg",
          category: "Geography",
          rating: 4.4,
        },
      ]
  
  export default { audiobooks, bestbooks, initialBooks, allBooks };