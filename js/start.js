const start = document.querySelector("#start");
const qna = document.querySelector("#qna");

function startBttn() {
    /* 시작하기 버튼을 눌렀을때 구현되는 함수*/
    start.style.display = "none";
    qna.style.display = "block";
    let pg = 0;
    next(pg);
}

function next(pg) {

    var qBox = document.querySelector(".qBox");
    qBox.innerHTML = qnaList[pg].q;
    for (let i in qnaList[pg].a) {
        addA(i, qnaList[pg].a[i],pg);
    }
}

function addA(idx, ansText,pg) {
    var aBox = document.querySelector(".aBox"); 
    var aBttn = document.createElement("Button");
    aBttn.classList.add("answerList");
    aBttn.classList.add("mx-auto");
    aBttn.classList.add("my-3");
    aBttn.classList.add("py-3");
    aBox.appendChild(aBttn);
    aBttn.innerHTML = ansText;
    
    aBttn.addEventListener("click",function(){
        var ans = document.querySelectorAll(".answerList");
        console.log(ans.length);
        for (let i = 0 ;i < ans.length;i++){
            ans[i].disabled = true;
            ans[i].style.animation = "fadeOut 2s";

        }
        for (let i = 0 ;i < ans.length;i++){
            ans[i].style.display = "none";

        }
        next(pg+1);

        
    },false);
}
