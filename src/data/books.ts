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
  series: string;
  isReread?: boolean;
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
  | "Alabama"
  | "Atlanta"
  | "Boston"
  | "California"
  | "Canada"
  | "Chicago"
  | "China"
  | "Colorado"
  | "Dominican Republic"
  | "Egypt"
  | "Fictional"
  | "Florida"
  | "France"
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
  | ""
  | "Academic"
  | "Action"
  | "Alternate History"
  | "Africa"
  | "Afrofuturism"
  | "Artificial Intelligence"
  | "Asia"
  | "Autobiography"
  | "Biography"
  | "Black"
  | "Caribbean"
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
  | "Latin America"
  | "Legal"
  | "LGBTQIA+"
  | "Mafia"
  | "Magic"
  | "Magical Realism"
  | "Music"
  | "Musical"
  | "Mystery"
  | "Mythology"
  | "Native American"
  | "Novella"
  | "Play"
  | "Psychology"
  | "Race"
  | "Religion"
  | "Retelling"
  | "Revenge"
  | "Robot"
  | "Romance"
  | "Royal"
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
  | "Tudors"
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
    title: "Exit Strategy",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 172,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/05/2025",
    dateFinished: "01/05/2025",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "",
    isReread: true
  },
  {
    title: "Rogue Protocol",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/04/2025",
    dateFinished: "01/05/2025",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "",
    isReread: true
  },
  {
    title: "Artificial Condition",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/03/2025",
    dateFinished: "01/04/2025",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "",
    isReread: true
  },
  {
    title: "Tick, Tick... Boom!",
    author: ["Jonathan Larson"],
    audioBookNarrator: [""],
    publishedYear: 2004,
    setting: ["New York City", "United States"],
    genre: ["Musical", "Romance", "Play", "LGBTQIA+", "Friendship", "Health"],
    age: "Adult",
    type: "Fiction",
    pages: 102,
    medium: "Physical",
    rating: 5,
    dateStarted: "01/01/2025",
    dateFinished: "01/03/2025",
    progress: "finished",
    color: "red",
    fav: true,
    publisher: "Applause",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "All Systems Red",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2017,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 5,
    dateStarted: "01/01/2025",
    dateFinished: "01/03/2025",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "",
    isReread: true
  },
  {
    title: "Blood over Bright Haven",
    author: ["M.L. Wang"],
    audioBookNarrator: ["Moira Quirk"],
    publishedYear: 2023,
    setting: ["Fictional"],
    genre: ["Fantasy", "Magic", "Science Fiction", "Academic"],
    age: "Adult",
    type: "Fiction",
    pages: 430,
    medium: "Audio",
    rating: 0,
    dateStarted: "12/30/2024",
    dateFinished: "01/01/2025",
    progress: "dnf",
    color: "darkblue",
    fav: false,
    publisher: "M. L. Wang",
    audioBookPublisher: "M. L. Wang",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Taming of the Queen",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2015,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 425,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/27/2024",
    dateFinished: "12/30/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Simon & Schuster UK",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Boleyn Inheritance",
    author: ["Philippa Gregory"],
    audioBookNarrator: [
      "Georgia Maguire",
      "Pippa Bennett-Warner",
      "Cathleen McCarron"
    ],
    publishedYear: 2006,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 531,
    medium: "Audio",
    rating: 4,
    dateStarted: "12/22/2024",
    dateFinished: "12/27/2024",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Harper Collins",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Other Boleyn Girl",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Vanessa Kirby"],
    publishedYear: 2001,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 661,
    medium: "Audio",
    rating: 3.5,
    dateStarted: "12/16/2024",
    dateFinished: "12/22/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Washington Square Press",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "Heartstopper: Volume One",
    author: ["Alice Oseman"],
    audioBookNarrator: [""],
    publishedYear: 2018,
    setting: ["United Kingdom"],
    genre: ["Graphic Novel", "Romance", "Friendship", "LGBTQIA+"],
    age: "Young Adult",
    type: "Fiction",
    pages: 288,
    medium: "Physical",
    rating: 4,
    dateStarted: "12/13/2024",
    dateFinished: "12/13/2024",
    progress: "finished",
    color: "pink",
    fav: false,
    publisher: "Self Published",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The King's Curse",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2014,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 592,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "12/02/2024",
    dateFinished: "12/16/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Constant Princess",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2005,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 390,
    medium: "Audio",
    rating: 0,
    dateStarted: "12/04/2024",
    dateFinished: "",
    progress: "dnf",
    color: "red",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The White Princess",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2013,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 560,
    medium: "Audio",
    rating: 4,
    dateStarted: "11/05/2024",
    dateFinished: "11/24/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Kingmakers Daughter",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2012,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Tudors",
      "Royal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 464,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "11/02/2024",
    dateFinished: "11/05/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Red Queen",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato", "Graeme Malcolm"],
    publishedYear: 2010,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Royal",
      "Tudors"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 392,
    medium: "Audio",
    rating: 4,
    dateStarted: "10/27/2024",
    dateFinished: "11/04/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The White Queen",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Susan Lyons"],
    publishedYear: 2009,
    setting: ["United Kingdom"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Royal",
      "Tudors"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 436,
    medium: "Audio",
    rating: 4,
    dateStarted: "10/16/2024",
    dateFinished: "10/27/2024",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Lady of the Rivers",
    author: ["Philippa Gregory"],
    audioBookNarrator: ["Bianca Amato"],
    publishedYear: 2011,
    setting: ["United Kingdom", "France"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "War",
      "Royal",
      "Tudors"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 513,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "10/09/2024",
    dateFinished: "10/16/2024",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Simon & Schuster",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "In the Time of the Butterflies",
    author: ["Julia Alvarez"],
    audioBookNarrator: [
      "Noemi de la Puente",
      "Alma Cuervo",
      "Bianca Carnacho",
      "Melanie Martinez"
    ],
    publishedYear: 1994,
    setting: ["Dominican Republic"],
    genre: [
      "Historical Fiction",
      "Biography",
      "Family",
      "Feminism",
      "Religion",
      "Romance",
      "Latin America",
      "Caribbean"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 324,
    medium: "Audio",
    rating: 5,
    dateStarted: "10/01/2024",
    dateFinished: "10/07/2024",
    progress: "finished",
    color: "red",
    fav: true,
    publisher: "Plume",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "The Will of the Many",
    author: ["James Islington"],
    audioBookNarrator: ["Euan Morton"],
    publishedYear: 2023,
    setting: ["Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Fantasy",
      "Horror",
      "Crime",
      "Disability",
      "Experiments",
      "Action",
      "Academic",
      "Historical Fiction",
      "Revenge",
      "Mystery"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 630,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/23/2024",
    dateFinished: "10/01/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Saga Press",
    audioBookPublisher: "Audible Studios",
    dedication: {
      to: "",
      text: ""
    },
    series: "Hierarchy"
  },
  {
    title: "Black Sun",
    author: ["Rebecca Roanhorse"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: [""],
    genre: [""],
    age: "",
    type: "",
    pages: 0,
    medium: "",
    rating: 0,
    dateStarted: "09/23/2024",
    dateFinished: "09/23/2024",
    progress: "dnf",
    color: "black",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: "Between Earth and Sky"
  },
  {
    title: "Patternmaster",
    author: ["Octavia Butler"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 1976,
    setting: ["United States", "California"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Race",
      "Horror",
      "Family",
      "Black",
      "Crime",
      "Disability",
      "Experiments",
      "Health"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 224,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/22/2024",
    dateFinished: "09/23/2024",
    progress: "finished",
    color: "purple",
    fav: false,
    publisher: "Grand Central Publishing",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Patternist"
  },
  {
    title: "Clay's Ark",
    author: ["Octavia Butler"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 1984,
    setting: ["United States"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Race",
      "Horror",
      "Family",
      "Black",
      "Crime",
      "Disability",
      "Experiments",
      "Health"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 240,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/22/2024",
    dateFinished: "09/22/2024",
    progress: "finished",
    color: "green",
    fav: false,
    publisher: "Grand Central Publishing",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Patternist"
  },
  {
    title: "Mind of My Mind",
    author: ["Octavia Butler"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 1977,
    setting: ["United States", "California"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Race",
      "Horror",
      "Family",
      "Black",
      "Crime",
      "Disability",
      "Experiments",
      "Health",
      "Slavery"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 256,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/19/2024",
    dateFinished: "09/21/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Grand Central Publishing",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Patternist"
  },
  {
    title: "Wild Seed",
    author: ["Octavia Butler"],
    audioBookNarrator: ["Robin Miles"],
    publishedYear: 1980,
    setting: ["United States", "Africa"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Race",
      "Horror",
      "Family",
      "Africa",
      "Black",
      "Crime",
      "Disability",
      "Experiments",
      "Health",
      "Historical Fiction",
      "Slavery",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 307,
    medium: "Audio",
    rating: 4,
    dateStarted: "09/13/2024",
    dateFinished: "09/19/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Grand Central Publishing",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Patternist"
  },
  {
    title: "Wandering Stars",
    author: ["Tommy Orange"],
    audioBookNarrator: [
      "Shaun Taylor-Corbett",
      "MacLeod Andrews",
      "Alma Cuervo",
      "Curtis Michael Holland",
      "Calvin Joyal",
      "Phil Ava",
      "Emmanuel Chumaceiro",
      "Christian Young",
      "Charley Flyte"
    ],
    publishedYear: 2024,
    setting: ["United States", "California", "Colorado"],
    genre: [
      "Historical Fiction",
      "Family",
      "Race",
      "Native American",
      "Health",
      "Psychology"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 315,
    medium: "Audio",
    rating: 5,
    dateStarted: "09/07/2024",
    dateFinished: "09/10/2024",
    progress: "finished",
    color: "darkblue",
    fav: true,
    publisher: "Knopf",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "Chain-Gang All-Stars",
    author: ["Nana Kwame Adjei-Brenyah"],
    audioBookNarrator: [
      "Shayna Small",
      "Aaron Goodson",
      "Michael Crouch",
      "Lee Osorio"
    ],
    publishedYear: 2023,
    setting: ["United States"],
    genre: [
      "Black",
      "Psychology",
      "Action",
      "Race",
      "Romance",
      "Social Justice",
      "Crime",
      "Dystopia",
      "Experiments",
      "Horror",
      "Slavery",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 367,
    medium: "Audio",
    rating: 5,
    dateStarted: "09/04/2024",
    dateFinished: "09/07/2024",
    progress: "finished",
    color: "red",
    fav: true,
    publisher: "Pantheon",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "Take My Hand",
    author: ["Dolen Perkins-Valdez"],
    audioBookNarrator: ["Lauren J. Daggett"],
    publishedYear: 2022,
    setting: ["Alabama", "United States"],
    genre: [
      "Historical Fiction",
      "Health",
      "Feminism",
      "Family",
      "Race",
      "Black",
      "Disability",
      "Experiments",
      "Legal"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 359,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/30/2024",
    dateFinished: "09/04/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Berkley",
    audioBookPublisher: "Penguin Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
  {
    title: "Ledgendborn",
    author: ["Tracy Deonn"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: [""],
    genre: [""],
    age: "",
    type: "",
    pages: 0,
    medium: "",
    rating: 0,
    dateStarted: "08/29/2024",
    dateFinished: "08/29/2024",
    progress: "dnf",
    color: "black",
    fav: false,
    publisher: "",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Legendborn Cycle"
  },
  {
    title: "System Collapse",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2023,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Space",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 245,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/27/2024",
    dateFinished: "08/28/2024",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Fugitive Telemetry",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2021,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 168,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/26/2024",
    dateFinished: "08/26/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Network Effect",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2020,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Space",
      "LGBTQIA+"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 350,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/23/2024",
    dateFinished: "08/26/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Exit Strategy",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 172,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/22/2024",
    dateFinished: "08/22/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Rogue Protocol",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 5,
    dateStarted: "08/20/2024",
    dateFinished: "08/22/2024",
    progress: "finished",
    color: "black",
    fav: true,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Artificial Condition",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2018,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/19/2024",
    dateFinished: "08/19/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "All Systems Red",
    author: ["Martha Wells"],
    audioBookNarrator: ["Kevin R. Free"],
    publishedYear: 2017,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Psychology",
      "Action",
      "Artificial Intelligence",
      "Robot",
      "Novella",
      "LGBTQIA+",
      "Space"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 160,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/18/2024",
    dateFinished: "08/18/2024",
    progress: "finished",
    color: "black",
    fav: false,
    publisher: "Tor.com",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: "The Murderbot Diaries"
  },
  {
    title: "Imago",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Ron Butler"],
    publishedYear: 1989,
    setting: ["Space", "Fictional"],
    genre: ["Science Fiction", "Dystopia", "Psychology", "Family", "Space"],
    age: "Adult",
    type: "Fiction",
    pages: 220,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/13/2024",
    dateFinished: "08/18/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Warner Aspect Books",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "Xenogenesis"
  },
  {
    title: "Adulthood Rites",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["JD Jackson"],
    publishedYear: 1988,
    setting: ["Fictional"],
    genre: ["Science Fiction", "Dystopia", "Psychology", "Family", "Space"],
    age: "Adult",
    type: "Fiction",
    pages: 277,
    medium: "Audio",
    rating: 4.5,
    dateStarted: "08/10/2024",
    dateFinished: "08/12/2024",
    progress: "finished",
    color: "darkblue",
    fav: false,
    publisher: "Warner Aspect Books",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "Xenogenesis"
  },
  {
    title: "Dawn",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Julienne Irons"],
    publishedYear: 1987,
    setting: ["Space", "Fictional"],
    genre: [
      "Science Fiction",
      "Dystopia",
      "Psychology",
      "Family",
      "Horror",
      "Black",
      "Space",
      "Experiments"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 248,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/09/2024",
    dateFinished: "08/10/2024",
    progress: "finished",
    color: "gold",
    fav: false,
    publisher: "Warner Aspect Books",
    audioBookPublisher: "Grand Central Publishing",
    dedication: {
      to: "",
      text: ""
    },
    series: "Xenogenesis"
  },
  {
    title: "Parable of the Sower",
    author: ["Octavia E. Butler"],
    audioBookNarrator: ["Lynne Thigpen"],
    publishedYear: 1993,
    setting: ["United States", "California"],
    genre: [
      "Science Fiction",
      "Dystopia",
      "Psychology",
      "Family",
      "Religion",
      "Horror",
      "Black",
      "Disability",
      "Race"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 345,
    medium: "Audio",
    rating: 4,
    dateStarted: "08/04/2024",
    dateFinished: "08/08/2024",
    progress: "finished",
    color: "red",
    fav: false,
    publisher: "Grand Central Publishing",
    audioBookPublisher: "Recorded Books",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
  },
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
    },
    series: "Planetfall"
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
    fav: true,
    publisher: "Ace/Roc",
    audioBookPublisher: "Tantor Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: "Planetfall"
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
    },
    series: "Planetfall"
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
    },
    series: "Planetfall"
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
    },
    series: "Planetfall"
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
  },
  {
    title: "Miss Kim Knows and Other Stories",
    author: ["Cho Nam-Joo"],
    audioBookNarrator: [""],
    publishedYear: 2021,
    setting: ["South Korea", "Asia"],
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
    },
    series: ""
  },
  {
    title: "Caste: The Origins of Our Discontents",
    author: ["Isabel Wilkerson"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United States", "Germany", "India", "Asia"],
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
    },
    series: ""
  },
  {
    title: "Penance",
    author: ["Kanae Minato"],
    audioBookNarrator: [""],
    publishedYear: 2009,
    setting: ["Japan", "Asia"],
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
  },
  {
    title: "Confessions",
    author: ["Kanae Minato"],
    audioBookNarrator: ["Elaina Erika Davis", "Noah Galvin"],
    publishedYear: 2008,
    setting: ["Japan", "Asia"],
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
    },
    series: ""
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
    },
    series: "The Broken Earth"
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
    },
    series: "The Broken Earth"
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
    },
    series: "The Broken Earth"
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
    },
    series: ""
  },
  {
    title: "Children of Blood and Bone",
    author: ["Tomi Adeyemi"],
    audioBookNarrator: ["Bahni Turpin"],
    publishedYear: 2018,
    setting: ["Fictional", "Nigeria", "Africa"],
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    setting: ["United States", "Japan", "Space", "Fictional", "Asia"],
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
      "Crime",
      "Space"
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
    },
    series: ""
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
      "Novella",
      "Robot"
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    fav: true,
    color: "black",
    publisher: "Vintage",
    audioBookPublisher: "Random House Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: "Great Cities"
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
    },
    series: ""
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
      "Friendship",
      "Academic"
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
    },
    series: ""
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
    },
    series: ""
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
    publisher: "Saga Press",
    audioBookPublisher: "Simon & Schuster Audio",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
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
      "Kevin R. Free",
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
  },
  {
    title: "The Red Palace",
    author: ["June Hur"],
    audioBookNarrator: ["Michelle H. Lee"],
    publishedYear: 2022,
    setting: ["South Korea", "Asia"],
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: "Great Cities"
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
    },
    series: "Binti"
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
    },
    series: "Binti"
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: "The Poppy War"
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
    },
    series: "The Poppy War"
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
      "Friendship",
      "Academic"
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
    },
    series: "The Poppy War"
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: "Binti"
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
      "Minnesota",
      "New Orleans"
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
    },
    series: ""
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
    },
    series: ""
  },
  {
    title: "Boyfriend Material",
    author: ["Alexis Hall"],
    audioBookNarrator: [""],
    publishedYear: 2020,
    setting: ["United Kingdom", "London"],
    genre: ["LGBTQIA+", "Romance", "Humor", "Novella"],
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
  },
  {
    title: "Kim Jiyoung, Born 1982",
    author: ["Cho Nam-Joo"],
    audioBookNarrator: [""],
    publishedYear: 2016,
    setting: ["South Korea", "Asia"],
    genre: ["Feminism", "Asia", "Korea", "Family", "Novella"],
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
    },
    series: ""
  },
  {
    title: "Gods of Jade and Shadow",
    author: ["Silvia Moreno-Garcia"],
    audioBookNarrator: [""],
    publishedYear: 2019,
    setting: ["Mexico"],
    genre: [
      "Fantasy",
      "Historical Fiction",
      "Mythology",
      "Magical Realism",
      "Latin America"
    ],
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    publisher: "Ace/Roc",
    audioBookPublisher: "",
    dedication: {
      to: "",
      text: ""
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
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
    },
    series: ""
  }
];
