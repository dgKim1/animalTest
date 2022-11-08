const url = "https://fouranimalmbti.netlify.app/";

function kakaoShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '동물로 알아보는 초간단 성격테스트 결과';
    const shareName = resultList[resultAlt].nameP;
    const shareImage = url + 'img/' + shareName;
    const shareURL = url + 'page/result-' + resultAlt + '.html';
    const about = resultList[resultAlt].animal;
    console.log(shareImage);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: about,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
      buttons: [
        {
          title: '결과확인하기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL
          },
        },
      ]
    });
}