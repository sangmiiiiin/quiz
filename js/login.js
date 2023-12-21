const userNameContainer = document.querySelector("#user-name");
const formContainer = document.querySelector("#form-group");
const formInput = document.querySelector("#login-input");
const startButton = document.querySelector("#start-button");
const quizProblem = document.querySelector("#quiz-container");
const OX_Button = document.querySelector("#button-container");

const USERID_KEY = "userId"

const handleLogin = (e) => {
    e.preventDefault();
    let inputValue = formInput.value;
    formInput.value = "";
    formContainer.classList.add("hide");
    userNameContainer.classList.remove("hide");
    startButton.classList.remove("hide");
    paintId(inputValue)
    localStorage.setItem("userId", inputValue);
}

const paintId = (Id) => {
    const userName = document.createElement("div");
    const logOutButton = document.createElement("button");
    userNameContainer.appendChild(userName);
    userName.innerText = `${Id}님 환영합니다!`;
    userName.id = "user-id";
    userNameContainer.appendChild(logOutButton);
    logOutButton.innerText = "로그아웃";
    logOutButton.classList.add("logOut")
    logOutButton.addEventListener("click", deleteId);
}

const deleteId = () => {
    userNameContainer.classList.add("hide");
    formContainer.classList.remove("hide");
    startButton.classList.add("hide");
    quizProblem.classList.add("hide");
    OX_Button.classList.add("hide");
    if (document.querySelector(".jieurring") !== null) {
        document.querySelector(".jieurring").classList.add("hide");
    }
    const userName = document.querySelector("#user-id");
    const logOutButton = document.querySelector(".logOut");
    userName.classList.add("hide");
    logOutButton.classList.add("hide");
    localStorage.clear();
}

const savedId = localStorage.getItem(USERID_KEY);

if(savedId === null) {
    formContainer.classList.remove("hide");
    formContainer.addEventListener("submit", handleLogin);
} else {
    formContainer.classList.add("hide");
    userNameContainer.classList.remove("hide");
    startButton.classList.remove("hide");
    paintId(savedId)
}


