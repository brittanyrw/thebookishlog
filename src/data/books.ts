export interface Book {
  title: string;
  author: string[];
  publishedYear: number;
  setting: string[];
  genre: Genres[];
  age: Ages;
  type: BookType;
  pages: number;
  medium: Medium;
  rating: number;
  dateStarted: string;
  dateFinished: string;
  progress: Progress;
  bookCoverColor: string;
  bookCoverObject: string;
  fav: boolean;
  pageProgress: number;
}

export type Ages =
  | "Young Adult"
  | "New Adult"
  | "Adult"
  | "Middle Grade"
  | "Childrens";

export type Genres =
  | "Alternative History"
  | "Asia"
  | "Biography"
  | "Black"
  | "Dystopia"
  | "Fairy Tale"
  | "Fantasy"
  | "Feminism"
  | "Health"
  | "Historical Fiction"
  | "History"
  | "Horror"
  | "Humor"
  | "Korea"
  | "LGBTQIA"
  | "Magical Realism"
  | "Mystery"
  | "Mythology"
  | "Psychology"
  | "Race"
  | "Retelling"
  | "Romance"
  | "Science Fiction"
  | "Slavery"
  | "Social Justice"
  | "Space"
  | "True Crime"
  | "Vampires"
  | "Werewolves"
  | "Western"
  | "Witches";

export type BookType = "Fiction" | "Non-Fiction" | "Graphic Novel";

export type Medium = "Physical" | "E-Book" | "Audio";

export type Progress = "finished" | "started" | "dnf";

export const bookData: Book[] = [
  {
    title: "She Came to Slay: The Life and Times of Harriet Tubman",
    author: ["Erica Armstrong Dunbar"],
    publishedYear: 2019,
    setting: ["United States"],
    genre: ["History", "Biography", "Feminism", "Race", "Slavery", "Black"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 157,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "12/18/2020",
    dateFinished: "02/07/2021",
    progress: "finished",
    bookCoverColor: "Tan",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "Cinderella Is Dead",
    author: ["Kalynn Bayron"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "LGBTQIA",
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
    bookCoverColor: "Purple",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "I'm Not Dying with You Tonight",
    author: ["Kimberly Jones", "Gilly Segal"],
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
    bookCoverColor: "Black",
    bookCoverObject: "Face",
    fav: false,
    pageProgress: 100
  },
  {
    title: "Fangs",
    author: ["Sarah Andersen"],
    publishedYear: 2020,
    setting: ["Unknown"],
    genre: ["Romance", "Fantasy", "Vampires", "Werewolves", "Humor"],
    age: "Adult",
    type: "Graphic Novel",
    pages: 100,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "02/09/2021",
    dateFinished: "02/09/2021",
    progress: "finished",
    bookCoverColor: "Red",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "The Year of the Witching",
    author: ["Alexis Henderson"],
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
    bookCoverColor: "Gray",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "Monday's Not Coming",
    author: ["Tiffany D. Jackson"],
    publishedYear: 2018,
    setting: ["United States", "Washington DC"],
    genre: ["Mystery", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "Physical",
    rating: 5,
    dateStarted: "02/11/2021",
    dateFinished: "02/12/2021",
    progress: "finished",
    bookCoverColor: "Red",
    bookCoverObject: "Woman",
    fav: true,
    pageProgress: 100
  },
  {
    title: "Uprooted",
    author: ["Naomi Novik"],
    publishedYear: 2015,
    setting: ["Fictional"],
    genre: ["Fantasy", "Romance", "Fairy Tale", "Retelling"],
    age: "Young Adult",
    type: "Fiction",
    pages: 435,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/11/2021",
    dateFinished: "",
    progress: "dnf",
    bookCoverColor: "Yellow",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "Full Disclosure",
    author: ["Camryn Garrett"],
    publishedYear: 2019,
    setting: ["United States", "California"],
    genre: ["LGBTQIA", "Romance", "Health", "Mystery", "Black"],
    age: "Young Adult",
    type: "Fiction",
    pages: 290,
    medium: "E-Book",
    rating: 2.5,
    dateStarted: "02/12/2021",
    dateFinished: "02/14/2021",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "The Five: The Untold Lives of the Women Killed by Jack the Ripper",
    author: ["Hallie Rubenhold"],
    publishedYear: 2019,
    setting: ["United Kingdom"],
    genre: ["History", "True Crime", "Feminism", "Mystery", "Biography"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 333,
    medium: "E-Book",
    rating: 4.5,
    dateStarted: "01/30/2021",
    dateFinished: "02/20/2021",
    progress: "finished",
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false,
    pageProgress: 100
  },
  {
    title: "The First Sister",
    author: ["Linden Lewis"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: ["Science Fiction", "Fantasy", "LGBTQIA", "Space"],
    age: "Adult",
    type: "Fiction",
    pages: 352,
    medium: "Physical",
    rating: 0,
    dateStarted: "02/14/2021",
    dateFinished: "",
    progress: "started",
    pageProgress: 9,
    bookCoverColor: "Gold",
    bookCoverObject: "Woman",
    fav: false
  },
  {
    title: "The Testaments",
    author: ["Margaret Atwood"],
    publishedYear: 2019,
    setting: ["United States", "Canada"],
    genre: ["Dystopia", "Feminism"],
    age: "Adult",
    type: "Fiction",
    pages: 422,
    medium: "Physical",
    rating: 0,
    dateStarted: "11/29/2020",
    dateFinished: "",
    progress: "started",
    pageProgress: 40,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false
  },
  {
    title: "The Good Luck Girls",
    author: ["Charlotte Nicole Davis"],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Fantasy", "Historical Fiction", "LGBTQIA", "Western", "Dystopia"],
    age: "Young Adult",
    type: "Fiction",
    pages: 352,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/15/2021",
    dateFinished: "",
    progress: "started",
    pageProgress: 13,
    bookCoverColor: "Brown",
    bookCoverObject: "Woman",
    fav: false
  },
  {
    title:
      "Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed",
    author: ["Lori Gottlieb"],
    publishedYear: 2019,
    setting: ["United States"],
    genre: ["Biography", "Psychology"],
    age: "Adult",
    type: "Non-Fiction",
    pages: 415,
    medium: "E-Book",
    rating: 0,
    dateStarted: "02/17/2021",
    dateFinished: "",
    progress: "started",
    pageProgress: 30,
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false
  },
  {
    title: "Gods of Jade and Shadow",
    author: ["Silvia Moreno-Garcia"],
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
    bookCoverColor: "Blue",
    bookCoverObject: "Tissue",
    fav: false,
    pageProgress: 100
  },
  {
    title: "Kim Jiyoung, Born 1982",
    author: ["Cho Nam-Joo"],
    publishedYear: 2016,
    setting: ["South Korea"],
    genre: ["Dystopia", "Feminism", "Asia", "Korea"],
    age: "Adult",
    type: "Fiction",
    pages: 163,
    medium: "Physical",
    rating: 3.5,
    dateStarted: "08/09/2021",
    dateFinished: "08/23/2021",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Blue",
    bookCoverObject: "Woman",
    fav: false
  },
  {
    title: "The Grace Year",
    author: ["Kim Liggett"],
    publishedYear: 2019,
    setting: ["Fictional"],
    genre: ["Dystopia", "Fantasy", "Feminism"],
    age: "Young Adult",
    type: "Fiction",
    pages: 404,
    medium: "Physical",
    rating: 4.5,
    dateStarted: "08/23/2021",
    dateFinished: "08/24/2021",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Pink",
    bookCoverObject: "Woman",
    fav: false
  },
  {
    title: "Ring Shout",
    author: ["P. Djèlí Clark"],
    publishedYear: 2020,
    setting: ["Fictional"],
    genre: [
      "Fantasy",
      "Horror",
      "Historical Fiction",
      "Race",
      "Black",
      "Alternative History"
    ],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 5,
    dateStarted: "08/24/2021",
    dateFinished: "08/27/2021",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Person",
    fav: true
  },
  {
    title: "Boyfriend Material",
    author: ["Alexis Hall"],
    publishedYear: 2020,
    setting: ["United Kingdom"],
    genre: ["LGBTQIA", "Romance", "Humor"],
    age: "Adult",
    type: "Fiction",
    pages: 185,
    medium: "E-Book",
    rating: 3,
    dateStarted: "08/27/2021",
    dateFinished: "08/29/2021",
    progress: "finished",
    pageProgress: 100,
    bookCoverColor: "Red",
    bookCoverObject: "Two People",
    fav: false
  },
  {
    title: "Red, White & Royal Blue",
    author: ["Casey McQuiston"],
    publishedYear: 2019,
    setting: ["United Kingdom", "United States"],
    genre: ["LGBTQIA", "Romance"],
    age: "New Adult",
    type: "Fiction",
    pages: 418,
    medium: "Physical",
    rating: 0,
    dateStarted: "08/29/2021",
    dateFinished: "",
    progress: "started",
    pageProgress: 42,
    bookCoverColor: "Pink",
    bookCoverObject: "Two People",
    fav: false
  },
  {
    title: "The Vanishing Half",
    author: ["Brit Bennett"],
    publishedYear: 2020,
    setting: ["United States"],
    genre: ["Historical Fiction", "Race", "Black"],
    age: "Adult",
    type: "Fiction",
    pages: 343,
    medium: "E-Book",
    rating: 0,
    dateStarted: "08/29/2021",
    dateFinished: "",
    progress: "started",
    pageProgress: 20,
    bookCoverColor: "Purple",
    bookCoverObject: "Two Women",
    fav: false
  }
];
