import Footer from "./Footer";
import Header from "./Header";
import MCQ from "./MCQ";

export default function QuestionSection({
  percentageOfProgress,
  lessonId,
  currentQuestion,
  userAnswer,
  setUserAnswer,
  questions,
  currentIndex,
  feedback,
  showContinueBtn,
  showFeedback,
  checkAnswer,
  handleContinue,
}) {
  return (
    <>
      <Header percentageOfProgress={percentageOfProgress} lessonId={lessonId} />
      <MCQ
        currentQuestion={currentQuestion}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      />
      <Footer
        lessonId={lessonId}
        questions={questions}
        currentIndex={currentIndex}
        userAnswer={userAnswer}
        feedback={feedback}
        showContinueBtn={showContinueBtn}
        showFeedback={showFeedback}
        checkAnswer={checkAnswer}
        handleContinue={handleContinue}
      />
    </>
  );
}
