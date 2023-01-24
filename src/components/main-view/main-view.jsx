import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Big Fish",
      Description: "A frustrated son tries to determine the fact from fiction in his dying father\'s life.",
      Genre: {
        Name: "Adventure",
        Description: "An adventure film is a form of adventure fiction, and is a genre of film. Subgenres of adventure films include swashbuckler films, pirate films, and survival films. Adventure films may also be combined with other film genres such as action, animation, comedy, drama, fantasy, science fiction, family, horror, or war."
      },
      Director: {
        Name: "Tim Burton",
        Bio: "Timothy Walter Burton was born in Burbank, California, to Jean Rae (Erickson), who owned a cat-themed gift shop, and William Reed Burton, who worked for the Burbank Park and Recreation Department. He spent most of his childhood as a recluse, drawing cartoons, and watching old movies (he was especially fond of films with Vincent Price). When he was in the ninth grade, his artistic talent was recognized by a local garbage company, when he won a prize for an anti-litter poster he designed. The company placed this poster on all of their garbage trucks for a year. After graduating from high school, he attended California Institute of the Arts. Like so many others who graduated from that school, Burton\'s first job was as an animator for Disney. (...)",
        Birth: new Date("1958-08-25")
      },
      ImageURL: "https://m.media-amazon.com/images/M/MV5BZTNlNTQzMGEtYjU4Yi00MzEzLThmMTQtNmM0NzcxZWI1MTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      Featured: true
    },
    {
      id: 2,
      Title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      Genre: {
        Name: "Action",
        Description: "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero."
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made. (...)",
        Birth: new Date("1970-07-30")
      },
      ImageURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      Featured: false
    },
    {
      id: 3,
      Title: "In the Mood for Love",
      Description: "Two neighbors form a strong bond after both suspect extramarital activities of their spouses. However, they agree to keep their bond platonic so as not to commit similar wrongs.",
      Genre: {
        Name: "Drama",
        Description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera, police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods. To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline."
      },
      Director: {
        Name: "Kar-Wai Wong",
        Bio: "Wong Kar-wai (born 17 July 1956) is a Hong Kong Second Wave filmmaker, internationally renowned as an auteur for his visually unique, highly stylised, emotionally resonant work, including Ah fei zing zyun (1990), Dung che sai duk (1994), Chung Hing sam lam (1994), Do lok tin si (1995), Chun gwong cha sit (1997), 2046 (2004) and My Blueberry Nights (2007), Yi dai zong shi (2013). His film Fa yeung nin wa (2000), starring Maggie Cheung and Tony Leung, garnered widespread critical acclaim. Wong\'s films frequently feature protagonists who yearn for romance in the midst of a knowingly brief life and scenes that can often be described as sketchy, digressive, exhilarating, and containing vivid imagery. Wong was the first Chinese director to win the Best Director Award of Cannes Film Festival (for his work Chun gwong cha sit in 1997). Wong was the President of the Jury at the 2006 Cannes Film Festival, which makes him the only Chinese person to preside over the jury at the Cannes Film Festival. He was also the President of the Jury at the 63rd Berlin International Film Festival in February 2013. In 2006, Wong accepted the National Order of the Legion of Honour: Knight (Highest Degree) from the French Government. In 2013, Wong accepted Order of Arts and Letters: Commander (Highest Degree) by the French Minister of Culture.",
        Birth: new Date("1956-07-17")
      },
      ImageURL: "https://m.media-amazon.com/images/M/MV5BYWVjNjMwZTgtMGYyYy00NmVhLWE1NDItMzFhMmJkYTNjYWIwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      Featured: false
    },
    {
      id: 4,
      Description: "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
      Genre: {
        Name: "Drama",
        Description: "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera, police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods. To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline."
      },
      Director: {
        Name: "Woody Allen",
        Bio: "Woody Allen was born on November 30, 1935, as Allen Konigsberg, in The Bronx, NY, the son of Martin Konigsberg and Nettie Konigsberg. He has one younger sister, Letty Aronson. As a young boy, he became intrigued with magic tricks and playing the clarinet, two hobbies that he continues today. Allen broke into show business at 15 years when he started writing jokes for a local paper, receiving $200 a week. He later moved on to write jokes for talk shows but felt that his jokes were being wasted. His agents, Charles Joffe and Jack Rollins, convinced him to start doing stand-up and telling his own jokes. Reluctantly he agreed and, although he initially performed with such fear of the audience that he would cover his ears when they applauded his jokes, he eventually became very successful at stand-up. After performing on stage for a few years, he was approached to write a script for Warren Beatty to star in: Que há de novo, gatinha? (1965) and would also have a moderate role as a character in the film. During production, Woody gave himself more and better lines and left Beatty with less compelling dialogue. Beatty inevitably quit the project and was replaced by Peter Sellers, who demanded all the best lines and more screen-time. (...)",
        Birth: new Date("1935-11-30")
      },
      ImageURL: "https://m.media-amazon.com/images/M/MV5BMTQ1NzQ4OTM4MV5BMl5BanBnXkFtZTcwNzY2OTQzMw@@._V1_QL75_UX100_CR0,4,100,148_.jpg",
      Featured: false
    },
    {
      id: 5,
      Title: "Pulp Fiction",
      Description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Genre: {
        Name: "Crime",
        Description: "Crime films, in the broadest sense, is a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection. Stylistically, the genre may overlap and combine with many other genres, such as drama or gangster film, but also include comedy, and, in turn, is divided into many sub-genres, such as mystery, suspense or noir."
      },
      Director: {
        Name: "Quentin Tarantino",
        Bio: "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old. In January of 1992, first-time writer-director Tarantino\'s Cães Danados (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately. Two years later, he followed up Dogs success with Pulp Fiction (1994) which premiered at the Cannes film festival, winning the coveted Palme D\'Or Award. At the 1995 Academy Awards, it was nominated for the best picture, best director and best original screenplay. Tarantino and writing partner Roger Avary came away with the award only for best original screenplay. In 1995, Tarantino directed one fourth of the anthology 4 Quartos (1995) with friends and fellow auteurs Alexandre Rockwell, Robert Rodriguez and Allison Anders. The film opened December 25 in the United States to very weak reviews. Tarantino\'s next film was Aberto Até de Madrugada (1996), a vampire/crime story which he wrote and co-starred with George Clooney. The film did fairly well theatrically. (...)",
        Birth: new Date("1963-03-27")
      },
      ImageURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY148_CR1,0,100,148_.jpg",
      Featured: false
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};