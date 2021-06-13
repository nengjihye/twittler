


/* -- 각종 변수 리스트 -- */
const sendTweet = document.querySelector("#send-tweet"),
      sendUser = document.querySelector("#senduser"),
      sendMsg = document.querySelector("#sendmsg"),
      viewComment = document.querySelector("#view-comment"),
      sendButton = document.querySelector(".send-btn"),
      checkButton = document.querySelector("#check-btn");


/* -- 기존 트윗 출력 -- */
function commentList(){
  for (let i = 0; i < DATA.length; i++) {
  const li = document.createElement("li");
  const user = document.createElement("span");
        user.className = "user";
  const date = document.createElement("span");
        date.className = "date";
  const message = document.createElement("div");
        message.className = "message";


  user.innerHTML = DATA[i].user;
  date.innerHTML = DATA[i].created_at;
  message.innerHTML = DATA[i].message;
  
  viewComment.appendChild(user);
  viewComment.appendChild(date);
  viewComment.appendChild(message);
  viewComment.appendChild(li);

}};

commentList();


/* -- 랜덤 트윗 생성 -- */
checkButton.onclick = function printRandomTweet() {
  const li = document.createElement("li");
  const user = document.createElement("span");
        user.className = "user";
  const date = document.createElement("span");
        date.className = "date";
  const message = document.createElement("div");
        message.className = "message";
  const tweet = generateNewTweet();

  user.innerHTML = tweet.user;
  date.innerHTML = tweet.created_at;
  message.innerHTML = tweet.message;
    
  viewComment.prepend(message);
  viewComment.prepend(date);
  viewComment.prepend(user);
  viewComment.prepend(li);

  DATA.unshift({user: tweet.user, message: tweet.message, created_at: tweet.created_at});
  addEventHandler();
}

/* 기존 데이터에 랜덤 데이터 추가 */


/* -- 새 트윗 생성 -- */
sendButton.onclick = function addNewTweet() {
  const li = document.createElement("li");
  const user = document.createElement("span");
               user.className = "user";
  const date = document.createElement("span");
               date.className = "date";
  const message = document.createElement("div");
               message.className = "message";
  const tweet = generateNewTweet();

  user.innerHTML = sendUser.value;
  date.innerHTML = tweet.created_at;
  message.innerHTML = sendMsg.value;

  viewComment.prepend(message);
  viewComment.prepend(date);
  viewComment.prepend(user);
  viewComment.prepend(li);

  DATA.unshift({user: sendUser.value, message: sendMsg.value, created_at: tweet.created_at});
  addEventHandler();
}



/* -- 이름을 클릭했을 때 이벤트 핸들러 -- */
function addEventHandler(){
const dataUser = document.getElementsByClassName('user');
for (let i = 0; i < dataUser.length; i++) {
  dataUser[i].addEventListener('click', sortByName);
}
}


/* -- 기존 data에서 이름만 필터링된 data 배열을 생성 -- */
function sortByName() {
const filteredDATA = DATA.filter(function(tweet){
      return tweet.user === event.target.textContent;
})

renderFilteredTweets();


/* 필터링 된 데이터 출력 */
function renderFilteredTweets(){
      clearTweets();
      for (let i = 0; i < filteredDATA.length; i++) {
      const li = document.createElement("li");
      const user = document.createElement("span");
            user.className = "user";
      const date = document.createElement("span");
            date.className = "date";
      const message = document.createElement("div");
            message.className = "message";
    
      user.innerHTML = filteredDATA[i].user;
      date.innerHTML = filteredDATA[i].created_at;
      message.innerHTML = filteredDATA[i].message;
      
      viewComment.appendChild(user);
      viewComment.appendChild(date);
      viewComment.appendChild(message);
      viewComment.appendChild(li);
    }};

};

    /* 기존 데이터 삭제 */
function clearTweets(){
      viewComment.innerHTML = "";
}
