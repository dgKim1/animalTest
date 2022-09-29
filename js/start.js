const start = document.querySelector("#start");
const qna = document.querySelector("#qna");
const res = document.querySelector("#result");
const resultN = document.querySelector("#resultName");
var animals = [['사자',0],['강아지',0],['토끼',0],['거북이',0]];/*점수총합*/

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
        var select = whatAnimal(pg,idx);
        countAnimals(select);
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
    var num;
    var biggest = 0;
    for(let i in animals){
        var name = animals[i][0];
        var score = animals[i][1];
        if(score >= biggest) biggest = score;
    }
    num = resultAnimal(biggest);
    var animalN = resultList[num].animal;
    var animalA = resultList[num].about;
    resultN.innerHTML = animalN+"<br>"+animalA;
    qna.style.display = "none";
    res.style.display = "block";
}

function whatAnimal(pg,idx){
    return  qnaList[pg].animal[idx];
}
function countAnimals(text){
    for(let i=0;i<animals.length;i++){
        if(animals[i][0] == text) {
            animals[i][1] += 1;
            break;
        }
    }
}
function resultAnimal(num){
    for(let i in animals){
        if(animals[i][1] == num) return i;
    }
}
