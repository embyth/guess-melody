import * as React from "react";

import GenreQuestionItem from "../genre-question-item/genre-question-item";
import {QuestionGenre} from "../../types";

interface Props {
  question: QuestionGenre;
  onAnswerSubmit: () => void;
  onAnswerChange: () => void;
  renderPlayer: (src: string, id: number) => React.ReactNode;
  userAnswers: boolean[];
}

class GenreQuestionScreen extends React.PureComponent<Props, {}> {
  render() {
    const {question, onAnswerSubmit, onAnswerChange, renderPlayer, userAnswers} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswerSubmit();
          }}
        >

          {answers.map((answer, index) => (
            <GenreQuestionItem
              answer={answer}
              id={index}
              key={`${index}-${answer.src}`}
              onAnswerChange={onAnswerChange}
              renderPlayer={renderPlayer}
              userAnswer={userAnswers[index]}
            />
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

export default GenreQuestionScreen;
