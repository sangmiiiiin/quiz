let quiz = [
    {
        id: 0,
        problem: "나는 지으링을 좋아한다",
        solve: "O"
    },
    {
        id: 1,
        problem: "나는 지은이를 사랑한다",
        solve: "O"
    },
    {
        id: 2,
        problem: "지은이는 예쁘다",
        solve: "O"
    },
    {
        id: 3,
        problem: "상미링은 바보다",
        solve: "X"
    },
    {
        id: 4,
        problem: "지은이의 생일은?",
        solve: "0514"
    }
];
let quizNumber = 0;

const SOLVE_KEY = "정답! ⭕️";
const NOT_SOLVE_KEY = "틀렸어요! ❌";



const paintInput = () => {
    const InputContainer = document.createElement("form");
    const AnswerInput = document.createElement("input");
    AnswerInput.classList.add("answer");
    quizProblem.appendChild(InputContainer);
    InputContainer.appendChild(AnswerInput);
    InputContainer.addEventListener("submit", AnswerSubmit);
}

const AnswerSubmit = (e) => {
    e.preventDefault();
    const Input = document.querySelector(".answer");
    if (Input.value === quiz[quizNumber].solve) {
        alert(SOLVE_KEY);
        quizNumber++;
        console.log(quizNumber);
        if (quizNumber > quiz.length - 1) {
            Input.classList.add("hide");
            finishQuiz();
        } else {

        }
    } else {
        alert(NOT_SOLVE_KEY);
        Input.value = "";
    }
}

    const finishQuiz = () => {
        const finish = document.querySelector(".quiz");
        finish.innerText = "준비된 문제를 모두 풀었습니다!";
        paintImage();
        const O_Button = document.querySelector(".O");
        const X_Button = document.querySelector(".X");
        O_Button.remove();
        X_Button.remove();
    }

    const paintQuiz = () => {
        startButton.classList.add("hide");
        quizProblem.classList.remove("hide");
        OX_Button.classList.remove("hide");
        const quizDiv = document.createElement("div");
        quizDiv.classList = "quiz"
        quizProblem.appendChild(quizDiv);
        quizDiv.innerText = quiz[0].problem;
        const quizO = document.createElement("button");
        const quizX = document.createElement("button");
        OX_Button.appendChild(quizO);
        OX_Button.appendChild(quizX);
        quizO.classList.add("O");
        quizX.classList.add("X");
        quizO.innerText = "⭕️";
        quizX.innerText = "❌";
        quizO.addEventListener("click", handleO);
        quizX.addEventListener("click", handleX);
    };

    const handleO = () => {
        const selectAnswerO = document.querySelector(".O");
        const nextQuiz = document.querySelector(".quiz");
        if (quiz[quizNumber].solve === selectAnswerO.className) {
            alert(SOLVE_KEY);
            quizNumber++;
            if (quizNumber < quiz.length) {
                nextQuiz.innerText = quiz[quizNumber].problem;
                if (quizNumber === 4) {
                    OX_Button.classList.add("hide");
                }
            } else {
                finishQuiz()
            }

        } else {
            alert(NOT_SOLVE_KEY);
        }
    }

    const handleX = () => {
        const selectAnswerX = document.querySelector(".X");
        if (quiz[quizNumber].solve === selectAnswerX.className) {
            alert(SOLVE_KEY);
            quizNumber++;
            if (quizNumber > quiz.length - 1) {
                finishQuiz();
            } else {
                const nextQuiz = document.querySelector(".quiz");
                nextQuiz.innerText = quiz[quizNumber].problem;
                if (quizNumber === 4) {
                    OX_Button.classList.add("hide");
                    paintInput();
                }
            }
        } else {
            alert(NOT_SOLVE_KEY);
        }
    }



    startButton.addEventListener("click", paintQuiz);



