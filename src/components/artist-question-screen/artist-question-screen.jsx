import React from "react";
import PropTypes from "prop-types";

const ArtistQuestionScreen = (props) => {
  const {questions: {answers}} = props;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {
            answers.map((answer, index) => {
              const {artist, picture} = answer;

              return (
                <div key={`${artist}-${index}`} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={artist} id={`answer-${index}`} />
                  <label className="artist__name" htmlFor={`answer-${index}`}>
                    <img className="artist__picture" src={picture} alt={artist} />
                    {artist}
                  </label>
                </div>
              );
            })
          }
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  questions: PropTypes.shape({
    type: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired,
        })
    ).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;