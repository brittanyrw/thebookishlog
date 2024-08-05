export interface Book {
  title: string;
  author: string[];
  audioBookNarrator: string[] | "";
  publishedYear: number;
  setting: Setting[];
  genre: Genres[];
  age: Ages | "";
  type: BookType | "";
  pages: number;
  medium: Medium | "";
  rating: number;
  dateStarted: string;
  dateFinished: string;
  progress: Progress;
  fav: boolean;
  color: string;
  publisher: string;
  audioBookPublisher: string;
  dedication: Object;
}

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Setting =
  | ""
  | "Africa"
  | "Atlanta"
  | "Boston"
  | "California"
  | "Canada"
  | "Chicago"
  | "China"
  | "Egypt"
  | "Fictional"
  | "Florida"
  | "Georgia (USA)"
  | "Germany"
  | "Illinois"
  | "India"
  | "Japan"
  | "Louisiana"
  | "London"
  | "Maryland"
  | "Mexico"
  | "Michigan"
  | "Minnesota"
  | "New Orleans"
  | "New York City"
  | "New York State"
  | "Nigeria"
  | "Ocean"
  | "Ohio"
  | "Philadelphia"
  | "Seattle"
  | "South Africa"
  | "South Korea"
  | "Space"
  | "Texas"
  | "United Kingdom"
  | "United States"
  | "Washington, DC"
  | "Asia";

export type Genres =
  | "Academic"
  | "Alternate History"
  | "Africa"
  | "Afrofuturism"
  | "Artificial Intelligence"
  | "Asia"
  | "Autobiography"
  | "Biography"
  | "Black"
  | "China"
  | "Crime"
  | "Disability"
  | "Dystopia"
  | "Experiments"
  | "Fairy Tale"
  | "Fantasy"
  | "Family"
  | "Feminism"
  | "Friendship"
  | "Graphic Novel"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Japan"
  | "Korea"
  | "LGBTQIA+"
  | "Mafia"
  | "Magic"
  | "Magical Realism"
  | "Music"
  | "Mystery"
  | "Mythology"
  | "Native American"
  | "Novella"
  | "Psychology"
  | "Race"
  | "Retelling"
  | "Revenge"
  | "Romance"
  | "Scandal"
  | "Science Fiction"
  | "Short Stories"
  | "Short Story Collection"
  | "Slavery"
  | "Social Justice"
  | "Space"
  | "Thriller"
  | "Time Travel"
  | "True Crime"
  | "Vampires"
  | "War"
  | "Werewolves"
  | "Western"
  | "Witches";

export type BookType = "Fiction" | "Non-Fiction";

export type Medium = "Physical" | "E-Book" | "Audio" | "Physical and Audio";

export type Progress = "finished" | "dnf" | "started";

export const bookData: Book[] = [
  {
    title: "Before, After, Alone",
    author: ["Emma Newman"],
    audioBookNarrator: ["Emma Newman"],
    publishedYear: 2023,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Mystery",
      "Artificial Intelligence",
      "Dystopia",
      "Space",
      "Psychology",
      "LGBTQIA+",
      "Family",
      "Short Story Collection"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 161,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/04/2024",
    dateFinished: "08/04/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Emmington Press",
    audioBookPublisher: "Emmington Press",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Atlas Alone",
    author: ["Emma Newman"],
    audioBookNarrator: ["Emma Newman"],
    publishedYear: 2019,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Mystery",
      "Artificial Intelligence",
      "Dystopia",
      "Space",
      "Psychology",
      "LGBTQIA+",
      "Crime"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 320,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/03/2024",
    dateFinished: "08/04/2024",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Ace/Roc",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Before Mars",
    author: ["Emma Newman"],
    audioBookNarrator: ["Emma Newman"],
    publishedYear: 2018,
    setting: ["Space"],
    genre: [
      "Science Fiction",
      "Mystery",
      "Artificial Intelligence",
      "Dystopia",
      "Space",
      "Psychology",
      "LGBTQIA+",
      "Family"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 340,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/01/2024",
    dateFinished: "08/03/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Ace/Roc",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "After Atlas",
    author: ["Emma Newman"],
    audioBookNarrator: ["Andrew Kingston"],
    publishedYear: 2016,
    setting: ["London", "United Kingdom"],
    genre: [
      "Science Fiction",
      "Mystery",
      "Artificial Intelligence",
      "Dystopia",
      "LGBTQIA+",
      "Crime",
      "Slavery"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 369,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "06/08/2024",
    dateFinished: "07/30/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Ace/Roc",
    audioBookPublisher: "Blackstone Audio, Inc",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Planetfall",
    author: ["Emma Newman"],
    audioBookNarrator: ["Emma Newman"],
    publishedYear: 2015,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Mystery",
      "Artificial Intelligence",
      "Dystopia",
      "Space",
      "Psychology",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 336,
    medium: "Audio",
    rating: 3,
    dateStarted: "06/01/2024",
    dateFinished: "06/02/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Ace/Roc",
    audioBookPublisher: "Blackstone Audio, Inc",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Wash Day Diaries",
    author: ["Jamila Rowser", "Robyn Smith"],
    audioBookNarrator: [""],
    publishedYear: 2022,
    setting: ["New York City", "United States"],
    genre: [
      "Graphic Novel",
      "Friendship",
      "Romance",
      "Black",
      "Feminism",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 192,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "02/19/2024",
    dateFinished: "02/19/2024",
    progress: "finished",
    color: "pink",
    fav: false,
    publisher: "Chronicle Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Almond",
    author: ["Sohn Won-Pyung"],
    audioBookNarrator: [""],
    publishedYear: 2017,
    setting: ["South Korea", "Asia"],
    genre: ["Family", "Friendship", "Health", "Psychology", "Asia", "Korea"],
    age: "Young Adult",
    type: "Fiction",
    pages: 272,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/14/2024",
    dateFinished: "02/19/2024",
    progress: "finished",
    color: "purple",
    fav: true,
    publisher: "HarperVia",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Firekeeper's Daughter",
    author: ["Angeline Boulley"],
    audioBookNarrator: ["Isabella Star LaBlanc"],
    publishedYear: 2021,
    setting: ["Michigan", "United States"],
    genre: ["Native American", "Mystery", "Crime", "Family", "Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 496,
    medium: "Audio",
    rating: 0,
    dateStarted: "12/13/2023",
    dateFinished: "02/19/2024",
    progress: "dnf",
    color: "red",
    fav: false,
    publisher: "Henry, Holt and Co. (BYR)",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Lakewood",
    author: ["Megan Giddings"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United States", "Michigan"],
    genre: [
      "Experiments",
      "Black",
      "Race",
      "Family",
      "Health",
      "Mystery",
      "Thriller",
      "Horror"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 288,
    medium: "Physical",
    rating: 4,
    dateStarted: "02/05/2024",
    dateFinished: "02/13/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Amistad",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Miss Kim Knows and Other Stories",
    author: ["Cho Nam-Joo"],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: ["South Korea"],
    genre: ["Feminism", "Asia", "Korea", "Family", "Short Story Collection"],
    age: "Adult",
    type: "Fiction",
    pages: 223,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "01/28/2024",
    dateFinished: "02/04/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Scribner UK",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Caste: The Origins of Our Discontents",
    author: ["Isabel Wilkerson"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United States", "Germany", "India"],
    genre: ["Race", "Black", "History", "Social Justice", "Slavery"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 496,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "01/10/2024",
    dateFinished: "01/27/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Random House",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Penance",
    author: ["Kanae Minato"],
    audioBookNarrator: [""],
    publishedYear: 2009,
    setting: ["Japan"],
    genre: [
      "Family",
      "Crime",
      "Japan",
      "Horror",
      "Revenge",
      "Academic",
      "Thriller"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 240,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "01/07/2024",
    dateFinished: "01/09/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Mulholland Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Out There Screaming: An Anthology of New Black Horror",
    author: [
      "Erin E. Adams",
      "Violet Allen",
      "Lesley Nneka Arimah",
      "Maurice Broaddus",
      "Chesya Burke",
      "P.Djèlí Clark",
      "Ezra Claytan Daniels",
      "Tananarive Due",
      "Nalo Hopkinson",
      "N.K.Jemisin",
      "Justin C.Key",
      "L.D.Lewis",
      "Nnedi Okorafor",
      "Tochi Onyebuchi",
      "Rebecca Roanhorse",
      "Nicole D.Sconiers",
      "Rion Amilcar Scott",
      "Terence Taylor",
      "Cadwell Turnbull"
    ],
    audioBookNarrator: [""],
    publishedYear: 2023,
    setting: ["United States"],
    genre: [
      "Family",
      "Black",
      "Horror",
      "Romance",
      "Race",
      "Artificial Intelligence",
      "Crime",
      "Dystopia",
      "Magic",
      "Science Fiction",
      "Short Story Collection"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 371,
    medium: "Physical",
    rating: 4,
    dateStarted: "10/18/2023",
    dateFinished: "01/06/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Random House",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Night Wherever We Go",
    author: ["Tracey Rose Peyton"],
    audioBookNarrator: ["Karen Chilton"],
    publishedYear: 2023,
    setting: ["Texas", "United States"],
    genre: [
      "Family",
      "Slavery",
      "Black",
      "Historical Fiction",
      "Feminism",
      "Romance",
      "Race",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 295,
    medium: "Audio",
    rating: 4,
    dateStarted: "10/14/2023",
    dateFinished: "12/08/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Ecco",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Love Songs of W.E.B. Du Bois",
    author: ["Honorée Fanonne Jeffers"],
    audioBookNarrator: ["Adenrele Ojo", "Karen Chilton", "Prentice Onayemi"],
    publishedYear: 2021,
    setting: ["Georgia (USA)", "United States"],
    genre: [
      "Family",
      "Slavery",
      "Black",
      "Historical Fiction",
      "Feminism",
      "Africa",
      "Native American",
      "Romance",
      "Crime",
      "Academic",
      "Race",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 816,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/16/2023",
    dateFinished: "09/23/2023",
    progress: "finished",
    color: "gold",
    fav: true,
    publisher: "Harper",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Natural Beauty",
    author: ["Ling Ling Huang"],
    audioBookNarrator: ["Carolyn Kang"],
    publishedYear: 2008,
    setting: ["New York City", "United States"],
    genre: [
      "Crime",
      "Health",
      "Horror",
      "Music",
      "Academic",
      "Thriller",
      "Race",
      "China",
      "LGBTQIA+",
      "Experiments"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 272,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/15/2023",
    dateFinished: "08/15/2023",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Mulholland Books",
    audioBookPublisher: "Penguin Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Confessions",
    author: ["Kanae Minato"],
    audioBookNarrator: ["Elaina Erika Davis", "Noah Galvin"],
    publishedYear: 2008,
    setting: ["Japan"],
    genre: [
      "Family",
      "Crime",
      "Japan",
      "Horror",
      "Revenge",
      "Academic",
      "Thriller"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 240,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/14/2023",
    dateFinished: "08/14/2023",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Mulholland Books",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Stone Sky",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2017,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Magic",
      "Black",
      "Romance",
      "Science Fiction",
      "War",
      "Family",
      "Dystopia",
      "LGBTQIA+",
      "Horror",
      "Revenge"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 416,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "07/29/2023",
    dateFinished: "08/12/2023",
    progress: "finished",
    color: "green",
    fav: true,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Obelisk Gate",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2016,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Magic",
      "Black",
      "Romance",
      "Science Fiction",
      "War",
      "Family",
      "Dystopia",
      "LGBTQIA+",
      "Horror",
      "Revenge"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 410,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "07/27/2023",
    dateFinished: "07/29/2023",
    progress: "finished",
    color: "gold",
    fav: true,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Fifth Season",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2015,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Magic",
      "Black",
      "Romance",
      "Science Fiction",
      "War",
      "Family",
      "Dystopia",
      "LGBTQIA+",
      "Revenge"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 468,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/22/2023",
    dateFinished: "07/27/2023",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Sword of Kaigen",
    author: ["M.L. Wang"],
    audioBookNarrator: ["Andrew Tell"],
    publishedYear: 2018,
    setting: ["Fictional"],
    genre: ["Fantasy", "Magic", "Science Fiction", "War", "Family", "Revenge"],
    age: "Adult",
    type: "Fiction",
    pages: 613,
    medium: "Audio",
    rating: 0,
    dateStarted: "07/14/2023",
    dateFinished: "07/19/2023",
    progress: "dnf",
    color: "darkblue",
    fav: false,
    publisher: "M. L. Wang",
    audioBookPublisher: "M. L. Wang",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Children of Blood and Bone",
    author: ["Tomi Adeyemi"],
    audioBookNarrator: ["Bahni Turpin"],
    publishedYear: 2018,
    setting: ["Fictional", "Nigeria"],
    genre: ["Fantasy", "Magic", "Black", "Romance", "Science Fiction", "War"],
    age: "Young Adult",
    type: "Fiction",
    pages: 544,
    medium: "Audio",
    rating: 0,
    dateStarted: "07/09/2023",
    dateFinished: "07/14/2023",
    progress: "dnf",
    color: "red",
    fav: false,
    publisher: "Henry Holt Company",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Passing",
    author: ["Nella Larsen"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 1929,
    setting: ["United States", "Chicago", "New York City"],
    genre: ["Black", "Novella", "Race"],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "07/08/2023",
    dateFinished: "07/08/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Signet",
    audioBookPublisher: "Audible",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Shadowed Sun",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Sarah Zimmerman"],
    publishedYear: 2012,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Magic",
      "Black",
      "Romance",
      "Science Fiction",
      "War",
      "Revenge"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 510,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "07/02/2023",
    dateFinished: "07/08/2023",
    progress: "finished",
    color: "purple",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Shades in Shadow",
    author: ["N.K. Jemisin"],
    audioBookNarrator: [""],
    publishedYear: 2015,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Magic",
      "Black",
      "Short Story Collection",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 60,
    medium: "E-Book",
    rating: 4,
    dateStarted: "07/04/2023",
    dateFinished: "07/06/2023",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Awakened Kingdom",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2014,
    setting: ["Fictional"],
    genre: ["Fantasy", "Magic", "Black", "Novella", "Science Fiction"],
    age: "Adult",
    type: "Fiction",
    pages: 96,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/02/2023",
    dateFinished: "07/02/2023",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Orbit",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Kingdom of Gods",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Casaundra Freeman"],
    publishedYear: 2011,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Romance",
      "Magic",
      "Black",
      "War",
      "LGBTQIA+",
      "Horror",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 613,
    medium: "Audio",
    rating: 4,
    dateStarted: "06/27/2023",
    dateFinished: "07/02/2023",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Broken Kingdoms",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Casaundra Freeman"],
    publishedYear: 2010,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Romance",
      "Magic",
      "Black",
      "War",
      "Disability",
      "Horror",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "06/21/2023",
    dateFinished: "06/27/2023",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "A Dead Djinn in Cairo",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: ["Suehyla El-Attar"],
    publishedYear: 2016,
    setting: ["Africa", "Egypt"],
    genre: [
      "Science Fiction",
      "Magic",
      "Horror",
      "History",
      "Mystery",
      "Short Stories"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 43,
    medium: "Audio",
    rating: 4,
    dateStarted: "06/19/2023",
    dateFinished: "06/20/2023",
    progress: "finished",
    color: "brown",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Hidden Girl and Other Stories",
    author: ["Ken Liu"],
    audioBookNarrator: [
      "Ramón de Ocampo",
      "Cindy Kay",
      "Michael Kramer",
      "Nancy Wu",
      "Emily Woo Zeller"
    ],
    publishedYear: 2020,
    setting: ["United States", "Japan", "Space", "Fictional"],
    genre: [
      "Science Fiction",
      "LGBTQIA+",
      "Romance",
      "Artificial Intelligence",
      "Short Story Collection",
      "Alternate History",
      "Asia",
      "Dystopia",
      "Family",
      "War",
      "Crime"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 411,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "06/15/2023",
    dateFinished: "06/19/2023",
    progress: "finished",
    fav: true,
    color: "red",
    publisher: "Saga Press",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Cybernetic Tea Shop",
    author: ["Meredith Katz"],
    audioBookNarrator: [""],
    publishedYear: 2016,
    setting: ["United States", "Seattle"],
    genre: [
      "Science Fiction",
      "LGBTQIA+",
      "Romance",
      "Artificial Intelligence",
      "Short Stories"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 112,
    medium: "Physical",
    rating: 4,
    dateStarted: "02/23/2023",
    dateFinished: "06/15/2023",
    progress: "finished",
    fav: false,
    color: "gold",
    publisher: "Soft Cryptid",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Amari and the Night Brothers",
    author: ["B.B. Alston"],
    audioBookNarrator: ["Imani Parks"],
    publishedYear: 2021,
    setting: ["United States", "New York City"],
    genre: ["Mystery", "Family", "Magic", "Academic", "Fantasy", "Black"],
    age: "Middle Grade",
    type: "Fiction",
    pages: 416,
    medium: "Audio",
    rating: 4,
    dateStarted: "06/06/2023",
    dateFinished: "06/10/2023",
    progress: "finished",
    fav: false,
    color: "darkblue",
    publisher: "Balzer + Bray",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Yellowface",
    author: ["R. F. Kuang"],
    audioBookNarrator: [""],
    publishedYear: 2023,
    setting: ["United States", "Washington, DC"],
    genre: ["Mystery", "Scandal", "Race", "Academic", "Crime"],
    age: "Adult",
    type: "Fiction",
    pages: 323,
    medium: "Physical",
    rating: 5,
    dateStarted: "05/30/2023",
    dateFinished: "06/03/2023",
    progress: "finished",
    fav: true,
    color: "gold",
    publisher: "William Morrow",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "There, There",
    author: ["Tommy Orange"],
    audioBookNarrator: [
      "Darrell Dennis",
      "Shaun Taylor-Corbett",
      "Alma Ceurvo",
      "Kyla Garcia"
    ],
    publishedYear: 2018,
    setting: ["United States", "California"],
    genre: ["Native American", "Mystery", "Race", "Family", "Crime", "History"],
    age: "Adult",
    type: "Fiction",
    pages: 292,
    medium: "Audio",
    rating: 5,
    dateStarted: "05/15/2023",
    dateFinished: "05/17/2023",
    progress: "finished",
    fav: false,
    color: "black",
    publisher: "Vintage",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Death of Vivek Oji",
    author: ["Akwaeke Emezi"],
    audioBookNarrator: ["Yetide Badaki", "Chukwudi Iwuji"],
    publishedYear: 2020,
    setting: ["Africa", "Nigeria"],
    genre: [
      "Black",
      "Mystery",
      "Race",
      "LGBTQIA+",
      "Family",
      "Romance",
      "Africa"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 248,
    medium: "Audio",
    rating: 5,
    dateStarted: "04/27/2023",
    dateFinished: "04/28/2023",
    progress: "finished",
    fav: false,
    color: "pink",
    publisher: "Riverhead Books",
    audioBookPublisher: "Penguin Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Bitter",
    author: ["Akwaeke Emezi"],
    audioBookNarrator: ["Bahni Turpin"],
    publishedYear: 2022,
    setting: ["Fictional"],
    genre: [
      "Black",
      "Social Justice",
      "Mystery",
      "Thriller",
      "Race",
      "Horror",
      "Magic",
      "LGBTQIA+"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 272,
    medium: "Audio",
    rating: 4,
    dateStarted: "03/14/2023",
    dateFinished: "04/20/2023",
    progress: "finished",
    fav: false,
    color: "brown",
    publisher: "Knopf Books for Young Readers",
    audioBookPublisher: "Listening Library",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "White Smoke",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: ["United States", "Fictional"],
    genre: ["Black", "Family", "Mystery", "Thriller", "Race", "Horror"],
    age: "Young Adult",
    type: "Fiction",
    pages: 373,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "02/07/2023",
    dateFinished: "04/10/2023",
    progress: "finished",
    fav: false,
    color: "purple",
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Six Crimson Cranes",
    author: ["Elizabeth Lim"],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: [],
    genre: [],
    age: "Young Adult",
    type: "Fiction",
    pages: 464,
    medium: "Audio",
    rating: 0,
    dateStarted: "03/07/2023",
    dateFinished: "03/10/2023",
    progress: "dnf",
    fav: false,
    color: "red",
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Black God's Drums",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: ["Channie Waites"],
    publishedYear: 2018,
    setting: ["United States", "New Orleans", "Louisiana"],
    genre: [
      "Historical Fiction",
      "Slavery",
      "Feminism",
      "Race",
      "Novella",
      "Black",
      "Alternate History",
      "Fantasy",
      "Magic",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 111,
    medium: "Audio",
    rating: 4,
    dateStarted: "03/06/2023",
    dateFinished: "03/06/2023",
    progress: "finished",
    fav: false,
    color: "gold",
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Davenports",
    author: ["Krystal Marquis"],
    audioBookNarrator: ["Joniece Abbott-Pratt"],
    publishedYear: 2023,
    setting: ["United States", "Chicago", "Illinois"],
    genre: [
      "Historical Fiction",
      "Slavery",
      "Feminism",
      "Race",
      "Romance",
      "Black",
      "Family"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 379,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "02/09/2023",
    dateFinished: "02/28/2023",
    progress: "finished",
    fav: false,
    color: "brown",
    publisher: "Dial Books",
    audioBookPublisher: "Listening Library",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Emergency Skin",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Jason Issacs"],
    publishedYear: 2019,
    setting: ["Space", "United States"],
    genre: ["Short Stories", "Space", "Race", "Dystopia", "Science Fiction"],
    age: "Adult",
    type: "Fiction",
    pages: 38,
    medium: "Audio",
    rating: 4,
    dateStarted: "02/04/2023",
    dateFinished: "02/04/2023",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Amazon Original Stories",
    audioBookPublisher: "Amazon Original Stories",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Weight of Blood",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [
      "JD Jackson",
      "Sarah Mollo-Christensen",
      "Joy Nash",
      "Christoper Salazar",
      "Karen Malina White"
    ],
    publishedYear: 2022,
    setting: ["Georgia (USA)", "United States"],
    genre: [
      "Black",
      "Crime",
      "Academic",
      "Thriller",
      "Family",
      "Race",
      "Romance"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 416,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "02/01/2023",
    dateFinished: "02/02/2023",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Rust in the Root",
    author: ["Justina Ireland"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2022,
    setting: ["New York City", "United States", "Ohio"],
    genre: [
      "Alternate History",
      "Black",
      "Race",
      "Magic",
      "Fantasy",
      "Historical Fiction"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 448,
    medium: "Audio",
    rating: 4,
    dateStarted: "01/28/2023",
    dateFinished: "01/30/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Balzer + Bray",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Stories from the Tenants Downstairs",
    author: ["Sidik Fofana"],
    audioBookNarrator: [
      "Joniece Abbott-Pratt",
      "Nile Bullock",
      "Sidik Fofana",
      "Dominic Hoffman",
      "DePre Owens",
      "André Santana",
      "Bahni Turpin",
      "Jade Wheeler"
    ],
    publishedYear: 2022,
    setting: ["New York City", "United States"],
    genre: ["Short Story Collection", "Black", "Crime", "Family"],
    age: "Adult",
    type: "Fiction",
    pages: 213,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/25/2023",
    dateFinished: "01/27/2023",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Scribner",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Akata Witch",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Yetide Badaki"],
    publishedYear: 2011,
    setting: ["Africa", "Nigeria"],
    genre: ["Science Fiction", "Black", "Magic", "Crime"],
    age: "Middle Grade",
    type: "Fiction",
    pages: 349,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "01/15/2023",
    dateFinished: "01/25/2023",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Speak",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Hundred Thousand Kingdoms",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Casaundra Freeman"],
    publishedYear: 2010,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "Magic", "Black", "Science Fiction", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 427,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "01/13/2023",
    dateFinished: "01/15/2023",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The World We Make",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2022,
    setting: ["New York City", "United States"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Magic",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "War"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 357,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "01/08/2023",
    dateFinished: "01/12/2023",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Orbit",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Killing Moon",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Sarah Zimmerman"],
    publishedYear: 2012,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Black", "Science Fiction", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 418,
    medium: "Audio",
    rating: 4,
    dateStarted: "01/03/2023",
    dateFinished: "01/08/2023",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Babel",
    author: ["R. F. Kuang"],
    audioBookNarrator: ["Chris Lew Kum Hoi", "Billie Fulford-Brown"],
    publishedYear: 2022,
    setting: ["Fictional", "Asia", "United Kingdom", "China"],
    genre: [
      "Fantasy",
      "Horror",
      "China",
      "Magic",
      "War",
      "Race",
      "Historical Fiction",
      "Alternate History",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 545,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/01/2023",
    dateFinished: "01/05/2023",
    progress: "finished",
    fav: true,
    color: "gold",
    publisher: "Harper Voyager",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Girl Who Fell Beneath the Sea",
    author: ["Axie Oh"],
    audioBookNarrator: ["Rosa Escoda"],
    publishedYear: 2019,
    setting: ["Asia", "Fictional"],
    genre: [
      "Romance",
      "Fantasy",
      "Asia",
      "Retelling",
      "Mythology",
      "Historical Fiction"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 323,
    medium: "Audio",
    rating: 4,
    dateStarted: "12/28/2022",
    dateFinished: "12/30/2022",
    progress: "finished",
    color: "lightblue",
    fav: false,
    publisher: "Feiwel & Friends",
    audioBookPublisher: "Dreamscape Media, LLC",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Deep",
    author: ["Rivers Solomon"],
    audioBookNarrator: ["Daveed Diggs"],
    publishedYear: 2019,
    setting: ["Fictional", "Ocean"],
    genre: [
      "Black",
      "Race",
      "Novella",
      "LGBTQIA+",
      "Slavery",
      "Romance",
      "Science Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 116,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/24/2022",
    dateFinished: "12/28/2022",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Gallery / Saga Press",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Whiteout",
    author: [
      "Dhonielle Clayton",
      "Tiffany D.Jackson",
      "Nic Stone",
      "Angie Thomas",
      "Ashley Woodfolk",
      "Nicola Yoon"
    ],
    audioBookNarrator: [
      "Nic Stone",
      "Danielle Shemaiah",
      "Shayna Small",
      "Bahni Turpin",
      "Alaska Jackson",
      "Joniece Abbott-Pratt",
      "Kevin R.Free",
      "James Fouhey",
      "Korey Jackson"
    ],
    publishedYear: 2022,
    setting: ["United States", "Georgia (USA)", "Atlanta"],
    genre: [
      "Black",
      "Romance",
      "LGBTQIA+",
      "Short Story Collection",
      "Friendship"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 291,
    medium: "Audio",
    rating: 3,
    dateStarted: "12/22/2022",
    dateFinished: "12/24/2022",
    progress: "finished",
    color: "purple",
    fav: false,
    publisher: "Quill Tree Books",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Jade City",
    author: ["Fonda Lee"],
    audioBookNarrator: ["Andrew Kishino"],
    publishedYear: 2017,
    setting: ["Asia", "Fictional"],
    genre: ["Asia", "Crime", "Mafia", "Magical Realism", "Fantasy", "War"],
    age: "Adult",
    type: "Fiction",
    pages: 560,
    medium: "Audio",
    rating: 4,
    dateStarted: "12/17/2022",
    dateFinished: "12/21/2022",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Nickel Boys",
    author: ["Colson Whitehead"],
    audioBookNarrator: ["JD Jackson"],
    publishedYear: 2019,
    setting: ["United States", "Florida"],
    genre: ["Black", "Race", "Crime"],
    age: "Adult",
    type: "Fiction",
    pages: 213,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/15/2022",
    dateFinished: "12/16/2022",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Doubleday",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Underground Railroad",
    author: ["Colson Whitehead"],
    audioBookNarrator: ["Bahni Turpin"],
    publishedYear: 2016,
    setting: ["United States"],
    genre: [
      "Black",
      "Slavery",
      "History",
      "Alternate History",
      "Historical Fiction"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 306,
    medium: "Audio",
    rating: 5,
    dateStarted: "12/13/2022",
    dateFinished: "12/14/2022",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Doubleday",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Red Palace",
    author: ["June Hur"],
    audioBookNarrator: ["Michelle H. Lee"],
    publishedYear: 2022,
    setting: ["South Korea"],
    genre: ["Asia", "Mystery", "Health", "Crime", "Korea"],
    age: "Young Adult",
    type: "Fiction",
    pages: 336,
    medium: "Audio",
    rating: 4,
    dateStarted: "12/11/2022",
    dateFinished: "12/12/2022",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Feiwel & Friends",
    audioBookPublisher: "Listening Library",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Deathless Divide",
    author: ["Justina Ireland"],
    audioBookNarrator: ["Bahni Turpin", "Jordan Cobb"],
    publishedYear: 2020,
    setting: ["United States", "California"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History",
      "War",
      "Friendship"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 560,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/14/2022",
    dateFinished: "12/15/2022",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Balzer + Bray",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Get a Life, Chloe Brown",
    author: ["Talia Hibbert"],
    audioBookNarrator: ["Adjoa Andoh"],
    publishedYear: 2019,
    setting: ["United Kingdom"],
    genre: ["Romance", "Black", "Humor", "Disability", "Health"],
    age: "Adult",
    type: "Fiction",
    pages: 373,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/01/2022",
    dateFinished: "12/11/2022",
    progress: "finished",
    color: "pink",
    fav: false,
    publisher: "Avon",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Born a Crime",
    author: ["Trevor Noah"],
    audioBookNarrator: ["Trevor Noah"],
    publishedYear: 2016,
    setting: ["Africa", "South Africa"],
    genre: ["Autobiography", "Black", "Africa", "Family", "Race"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 289,
    medium: "Audio",
    rating: 5,
    dateStarted: "10/07/2022",
    dateFinished: "10/09/2022",
    progress: "finished",
    color: "lightblue",
    fav: true,
    publisher: "One World",
    audioBookPublisher: "Audible",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The City We Became",
    author: ["N.K. Jemisin"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2020,
    setting: ["New York City", "United States"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Magic",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "War"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 434,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/05/2022",
    dateFinished: "09/22/2022",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Orbit",
    audioBookPublisher: "Orbit",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Binti: Night Masquerade",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2018,
    setting: ["Fictional", "Space"],
    genre: [
      "Novella",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 208,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/04/2022",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Binti: Home",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2017,
    setting: ["Fictional", "Space"],
    genre: [
      "Novella",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 176,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "09/03/2022",
    dateFinished: "09/03/2022",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "A Master of Djinn",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: ["Suehyla El-Attar"],
    publishedYear: 2021,
    setting: ["Africa", "Egypt"],
    genre: ["Science Fiction", "Magic", "Horror", "Race", "History", "Mystery"],
    age: "Adult",
    type: "Fiction",
    pages: 392,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/20/2022",
    dateFinished: "09/02/2022",
    progress: "finished",
    color: "brown",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Fledgling",
    author: ["Octavia E. Butler"],
    audioBookNarrator: [""],
    publishedYear: 0,
    setting: [],
    genre: [],
    age: "Adult",
    type: "Fiction",
    pages: 0,
    medium: "Audio",
    rating: 0,
    dateStarted: "08/21/2022",
    dateFinished: "08/21/2022",
    progress: "dnf",
    color: "black",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Kindred",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Kim Staunton"],
    publishedYear: 1979,
    setting: ["United States", "Maryland", "California"],
    genre: [
      "Black",
      "Science Fiction",
      "Time Travel",
      "Horror",
      "Race",
      "History",
      "Slavery"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 287,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/18/2022",
    dateFinished: "08/20/2022",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Beacon Press",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "An Unkindness of Ghosts",
    author: ["Rivers Solomon"],
    audioBookNarrator: ["Cherise Boothe"],
    publishedYear: 2017,
    setting: ["Space", "Fictional"],
    genre: ["Science Fiction", "Space", "Race", "Dystopia"],
    age: "Adult",
    type: "Fiction",
    pages: 432,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/13/2022",
    dateFinished: "08/16/2022",
    progress: "finished",
    fav: false,
    color: "darkblue",
    publisher: "Akashic Books",
    audioBookPublisher: "Blackstone Audio, Inc",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Gilded Ones",
    author: ["Namina Forna"],
    audioBookNarrator: ["Shayna Small"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "Horror", "Magic", "War", "Science Fiction"],
    age: "Young Adult",
    type: "Fiction",
    pages: 432,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "08/08/2022",
    dateFinished: "08/13/2022",
    progress: "finished",
    fav: false,
    color: "gold",
    publisher: "Delacorte Press",
    audioBookPublisher: "Listening Library",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Burning God",
    author: ["R. F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2020,
    setting: ["Fictional", "Asia"],
    genre: [
      "Fantasy",
      "Horror",
      "Retelling",
      "China",
      "Magic",
      "War",
      "Asia",
      "Revenge",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 654,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/01/2022",
    dateFinished: "08/04/2022",
    progress: "finished",
    fav: true,
    color: "purple",
    publisher: "Harper Voyager",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Dragon Republic",
    author: ["R. F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2019,
    setting: ["Fictional", "Asia"],
    genre: [
      "Fantasy",
      "Horror",
      "Retelling",
      "China",
      "Magic",
      "War",
      "Asia",
      "Revenge",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 658,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/30/2022",
    dateFinished: "08/01/2022",
    progress: "finished",
    fav: true,
    color: "darkblue",
    publisher: "Harper Voyager",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Poppy War",
    author: ["R. F. Kuang"],
    audioBookNarrator: ["Emily Woo Zeller"],
    publishedYear: 2018,
    setting: ["Fictional", "Asia"],
    genre: [
      "Fantasy",
      "Horror",
      "Retelling",
      "China",
      "Magic",
      "War",
      "Asia",
      "Revenge",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 527,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/28/2022",
    dateFinished: "07/30/2022",
    progress: "finished",
    fav: true,
    color: "red",
    publisher: "Harper Voyager",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "This Wicked Fate",
    author: ["Kalynn Bayron"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2022,
    setting: ["United States", "New York State"],
    genre: ["Fantasy", "LGBTQIA+", "Retelling", "Black", "Mythology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 320,
    medium: "Audio",
    rating: 4,
    dateStarted: "07/19/2022",
    dateFinished: "07/27/2022",
    progress: "finished",
    fav: false,
    color: "purple",
    publisher: "Bloomsbury YA",
    audioBookPublisher: "Bloomsbury Publishing Plc",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "This Poison Heart",
    author: ["Kalynn Bayron"],
    audioBookNarrator: ["Jordan Cobb"],
    publishedYear: 2021,
    setting: ["New York City", "United States", "New York State"],
    genre: ["Fantasy", "LGBTQIA+", "Retelling", "Black", "Mythology"],
    age: "Young Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 4,
    dateStarted: "07/16/2022",
    dateFinished: "07/19/2022",
    progress: "finished",
    fav: false,
    color: "green",
    publisher: "Bloomsbury YA",
    audioBookPublisher: "Bloomsbury Publishing Plc",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Iron Heart",
    author: ["Nina Varela"],
    audioBookNarrator: ["Kim Mai Guest"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Romance",
      "LGBTQIA+",
      "Science Fiction",
      "Dystopia",
      "War"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 400,
    medium: "Physical and Audio",
    rating: 4,
    dateStarted: "10/17/2021",
    dateFinished: "07/17/2022",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Quill Tree Books",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Binti",
    author: ["Nnedi Okorafor"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 2015,
    setting: ["Fictional", "Space"],
    genre: [
      "Novella",
      "Science Fiction",
      "Black",
      "Afrofuturism",
      "Space",
      "Friendship"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 96,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/16/2022",
    dateFinished: "07/16/2022",
    progress: "finished",
    color: "brown",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Iron Widow",
    author: ["Xiran Jay Zhao"],
    audioBookNarrator: ["Rong Fu"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: [
      "LGBTQIA+",
      "Fantasy",
      "Asia",
      "Science Fiction",
      "Romance",
      "Historical Fiction",
      "War",
      "Revenge"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 394,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "07/13/2022",
    dateFinished: "07/16/2022",
    progress: "finished",
    color: "orange",
    fav: false,
    publisher: "Penguin Teen",
    audioBookPublisher: "Penguin Teen Canada",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Bloodchild and Other Stories",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Janina Edwards"],
    publishedYear: 1995,
    setting: ["Fictional", "United States", "Space"],
    genre: [
      "LGBTQIA+",
      "Short Story Collection",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "Horror",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 214,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/09/2022",
    dateFinished: "07/10/2022",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Seven Stories Press",
    audioBookPublisher: "Audible",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "How Long 'til Black Future Month?",
    author: ["N.K. Jemisin"],
    audioBookNarrator: [
      "Shayna Small",
      "Gail Nelson-Holgate",
      "Robin Ray Eller",
      "Ron Butler",
      "Kevin Stillwell",
      "Je Nie Fleming",
      "Jeanette Illidge"
    ],
    publishedYear: 2018,
    setting: ["Fictional", "United States", "Space"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Magic",
      "Short Story Collection",
      "Black",
      "Science Fiction",
      "Afrofuturism",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 400,
    medium: "Audio",
    rating: 5,
    dateStarted: "07/07/2022",
    dateFinished: "07/09/2022",
    progress: "finished",
    color: "gold",
    fav: true,
    publisher: "Orbit",
    audioBookPublisher: "Hachette Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Redemptor",
    author: ["Jordan Ifueko"],
    audioBookNarrator: ["Joniece Abbott-Pratt"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 336,
    medium: "Physical and Audio",
    rating: 3.5,
    dateStarted: "06/20/2022",
    dateFinished: "06/28/2022",
    progress: "finished",
    color: "purple",
    fav: false,
    publisher: "Amulet Books",
    audioBookPublisher: "Blackstone Publishing",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Ace of Spades",
    author: ["Faridah Àbíké-Íyímídé"],
    audioBookNarrator: ["Tapiwa Mugweni"],
    publishedYear: 2021,
    setting: ["Fictional"],
    genre: ["Horror", "Thriller", "LGBTQIA+", "Black", "Race", "Academic"],
    age: "Young Adult",
    type: "Fiction",
    pages: 470,
    medium: "Physical and Audio",
    rating: 5,
    dateStarted: "06/18/2022",
    dateFinished: "06/19/2022",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Feiwel & Friends",
    audioBookPublisher: "Macmillan Audio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Dread Nation",
    author: ["Justina Ireland"],
    audioBookNarrator: [""],
    publishedYear: 2018,
    setting: ["United States"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History",
      "War"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 455,
    medium: "E-Book",
    rating: 4,
    dateStarted: "10/16/2021",
    dateFinished: "10/22/2021",
    progress: "finished",
    color: "brown",
    fav: false,
    publisher: "Balzer + Bray",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Crier's War",
    author: ["Nina Varela"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "LGBTQIA+", "Science Fiction", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 5,
    dateStarted: "10/05/2021",
    dateFinished: "10/16/2021",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Quill Tree Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Blackout",
    author: [
      "Dhonielle Clayton",
      "Tiffany D. Jackson",
      "Nic Stone",
      "Angie Thomas",
      "Ashley Woodfolk",
      "Nicola Yoon"
    ],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: ["United States", "New York City"],
    genre: ["Short Story Collection", "Black", "LGBTQIA+", "Romance"],
    age: "Young Adult",
    type: "Fiction",
    pages: 256,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "09/28/2021",
    dateFinished: "10/12/2021",
    progress: "finished",
    fav: false,
    color: "purple",
    publisher: "Quill Tree Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Such A Fun Age",
    author: ["Kiley Reid"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Philadelphia", "New York City"],
    genre: ["Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 310,
    medium: "E-Book",
    rating: 5,
    dateStarted: "09/30/2021",
    dateFinished: "10/03/2021",
    progress: "finished",
    color: "pink",
    fav: false,
    publisher: "G.P. Putnam's Sons",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Grown",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: ["Joniece Abbott-Pratt"],
    publishedYear: 2020,
    setting: ["New York City"],
    genre: ["Mystery", "Black", "Thriller"],
    age: "Young Adult",
    type: "Fiction",
    pages: 384,
    medium: "Audio",
    rating: 5,
    dateStarted: "06/16/2022",
    dateFinished: "06/17/2022",
    progress: "finished",
    color: "gold",
    fav: true,
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Let Me Hear a Rhyme",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [
      "Korey Jackson",
      "Nile Bullock",
      "Adenrele Ojo",
      "Adam Lazarre-White"
    ],
    publishedYear: 2019,
    setting: ["United States", "New York City"],
    genre: ["Mystery", "Black", "Psychology", "Crime", "Music", "Friendship"],
    age: "Young Adult",
    type: "Fiction",
    pages: 377,
    medium: "Physical and Audio",
    rating: 4,
    dateStarted: "09/24/2021",
    dateFinished: "06/18/2022",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "HarperAudio",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Allegedly",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [""],
    publishedYear: 2017,
    setting: ["New York City", "United States"],
    genre: ["Mystery", "Black", "Psychology", "Crime"],
    age: "Young Adult",
    type: "Fiction",
    pages: 387,
    medium: "Physical",
    rating: 4,
    dateStarted: "09/22/2021",
    dateFinished: "09/24/2021",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Raybearer",
    author: ["Jordan Ifueko"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Fantasy", "LGBTQIA+", "Magic", "Africa", "Black", "Revenge"],
    age: "Young Adult",
    type: "Fiction",
    pages: 368,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "09/13/2021",
    dateFinished: "09/19/2021",
    progress: "finished",
    color: "purple",
    fav: false,
    publisher: "Amulet Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Red, White & Royal Blue",
    author: ["Casey McQuiston"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: [],
    genre: [],
    age: "Young Adult",
    type: "Fiction",
    pages: 418,
    medium: "Physical",
    rating: 0,
    dateStarted: "08/29/2021",
    dateFinished: "09/17/2021",
    progress: "dnf",
    color: "purple",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Vanishing Half",
    author: ["Brit Bennett"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: [
      "United States",
      "Louisiana",
      "California",
      "New York City",
      "Washington, DC",
      "Minnesota"
    ],
    genre: ["Historical Fiction", "Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 343,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/29/2021",
    dateFinished: "09/13/2021",
    progress: "finished",
    color: "darkblue",
    fav: true,
    publisher: "Riverhead Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Testaments",
    author: ["Margaret Atwood"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: [],
    genre: [],
    age: "Adult",
    type: "Fiction",
    pages: 422,
    medium: "Physical",
    rating: 0,
    dateStarted: "11/29/2020",
    dateFinished: "09/09/2021",
    progress: "dnf",
    color: "blue",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Boyfriend Material",
    author: ["Alexis Hall"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United Kingdom", "London"],
    genre: ["LGBTQIA+", "Romance", "Humor"],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 3,
    dateStarted: "08/27/2021",
    dateFinished: "08/29/2021",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Sourcebooks Casablanca",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Ring Shout",
    author: ["P. Djèlí Clark"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional", "Georgia (USA)"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternate History",
      "Novella"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/24/2021",
    dateFinished: "08/27/2021",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Grace Year",
    author: ["Kim Liggett"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Dystopia", "Fantasy", "Feminism"],
    age: "Young Adult",
    type: "Fiction",
    pages: 404,
    medium: "Physical",
    rating: 3,
    dateStarted: "08/23/2021",
    dateFinished: "08/24/2021",
    progress: "finished",
    color: "pink",
    fav: false,
    publisher: "Wednesday Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Kim Jiyoung, Born 1982",
    author: ["Cho Nam-Joo"],
    audioBookNarrator: [""],
    publishedYear: 2016,
    setting: ["South Korea"],
    genre: ["Feminism", "Asia", "Korea", "Family"],
    age: "Adult",
    type: "Fiction",
    pages: 163,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "08/09/2021",
    dateFinished: "08/23/2021",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Liveright",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Gods of Jade and Shadow",
    author: ["Silvia Moreno-Garcia"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Mexico"],
    genre: ["Fantasy", "Historical Fiction", "Mythology", "Magical Realism"],
    age: "Adult",
    type: "Fiction",
    pages: 338,
    medium: "E-Book",
    rating: 3.5,
    dateStarted: "04/12/2021",
    dateFinished: "05/01/2021",
    progress: "finished",
    fav: false,
    color: "purple",
    publisher: "Del Rey",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Five: The Untold Lives of the Women Killed by Jack the Ripper",
    author: ["Hallie Rubenhold"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United Kingdom", "London"],
    genre: ["History", "True Crime", "Feminism", "Mystery", "Biography"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 333,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "01/30/2021",
    dateFinished: "02/20/2021",
    progress: "finished",
    fav: false,
    color: "lightblue",
    publisher: "Houghton Mifflin Harcourt",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Uprooted",
    author: ["Naomi Novik"],
    audioBookNarrator: [""],
    publishedYear: 2015,
    setting: [],
    genre: [],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/11/2021",
    dateFinished: "02/16/2021",
    progress: "dnf",
    fav: false,
    color: "gold",
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Good Luck Girls",
    author: ["Charlotte Nicole Davis"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: [],
    genre: [],
    age: "Young Adult",
    type: "Fiction",
    pages: 352,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/15/2021",
    dateFinished: "02/15/2021",
    progress: "dnf",
    color: "brown",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Full Disclosure",
    author: ["Camryn Garrett"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["LGBTQIA+", "Romance", "Health", "Mystery", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 290,
    medium: "E-Book",
    rating: 2.5,
    dateStarted: "02/12/2021",
    dateFinished: "02/14/2021",
    progress: "finished",
    fav: false,
    color: "darkblue",
    publisher: "Knopf Books for Young Readers",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Monday's Not Coming",
    author: ["Tiffany D. Jackson"],
    audioBookNarrator: [""],
    publishedYear: 2018,
    setting: ["United States", "Washington, DC"],
    genre: ["Mystery", "Black", "Crime", "Psychology", "Friendship"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/11/2021",
    dateFinished: "02/12/2021",
    progress: "finished",
    fav: true,
    color: "red",
    publisher: "Katherine Tegen Books",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "The Year of the Witching",
    author: ["Alexis Henderson"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Horror",
      "Witches",
      "Feminism",
      "Historical Fiction",
      "Race",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 359,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/09/2021",
    dateFinished: "02/11/2021",
    progress: "finished",
    fav: false,
    color: "gold",
    publisher: "Ace",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "I'm Not Dying with You Tonight",
    author: ["Kimberly Jones", "Gilly Segal"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States", "Georgia (USA)"],
    genre: ["Race", "Social Justice", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 247,
    medium: "Physical",
    rating: 4,
    dateStarted: "02/09/2021",
    dateFinished: "02/09/2021",
    progress: "finished",
    fav: false,
    color: "red",
    publisher: "Sourcebooks Fire",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "Cinderella Is Dead",
    author: ["Kalynn Bayron"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "LGBTQIA+",
      "Retelling",
      "Fairy Tale",
      "Dystopia",
      "Romance",
      "Black"
    ],
    age: "Young Adult",
    type: "Fiction",
    pages: 389,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/07/2021",
    dateFinished: "02/08/2021",
    progress: "finished",
    fav: false,
    color: "purple",
    publisher: "Bloomsbury YA",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  },
  {
    title: "She Came to Slay: The Life and Times of Harriet Tubman",
    author: ["Erica Armstrong Dunbar"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["United States"],
    genre: [
      "History",
      "Biography",
      "Feminism",
      "Race",
      "Slavery",
      "Black",
      "War"
    ],
    age: "Adult",
    type: "Non-Fiction",
    pages: 157,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "12/18/2020",
    dateFinished: "02/07/2021",
    progress: "finished",
    fav: false,
    color: "red",
    publisher: "Simon & Schuster",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    }
  }
];
