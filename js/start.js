const start = document.querySelector("#start");
const qna = document.querySelector("#qna");
const res = document.querySelector("#result");
const resultN = document.querySelector("#resultName");
var sum = 0;/*점수총합*/

function startBttn() {
    /*시작하기 버튼을 눌렀을때 구현되는 함수*/
    start.style.display = "none";
    qna.style.display = "block";
    let pg = 0;
    next(pg);
}

function next(pg) {
    
    if(pg == qnaList.length){/*마지막 페이지에 도달하면 결과를 보여주는 함수로 이동*/
        result();
    }

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
        var select = parseInt(ansText.charAt(0));
        sum += select;
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


function result(){/*총합 점수에 알맞은 동물을 화면에 결과로 보여주는 함수*/
    var resultText;

    for(let idx in resultList){
        var name = resultList[idx].animal; 
        var maxN = resultList[idx].maxN;
        var minN = resultList[idx].minN;
        if(minN<= sum <= maxN){
            resultText = name;
            break;
        }
    }
    resultN.innerHTML = resultText;
    qna.style.display = "none";
    res.style.display = "block";
}
