var firstBanner = document.getElementsByClassName('banner')[0];
var allBanners = document.getElementsByClassName('banner');
var loadingChangeBar = document.getElementById('loadingChangeBar');
var currentBannerIndexSelected;
var autoChange;
var intervalChange = 3000;
var posWidth = 0;

function bodyLoad(){
    changeBanners(firstBanner.id);
    autoChangeBanner();
    loadingBarAnimation();
}

function bannerClick(id){
    changeBanners(id);
    restartAutoChange();
    loadingChangeBar.classList.add('resetAnimationBar');
}

function autoChangeBanner(){
    autoChange = setInterval(autoChangeBannersFnc, intervalChange)

    function autoChangeBannersFnc(){
        let firstBanner = allBanners[0];
        let nextBanner = allBanners[currentBannerIndexSelected + 1];
        if(nextBanner){
            changeBanners(nextBanner.id);
        }else{
            changeBanners(firstBanner.id);
        }
    }
}

function restartAutoChange(){
    window.clearInterval(autoChange);
    autoChangeBanner();
}

function changeBanners(selectedBannerId){
    for(let i = 0; i < allBanners.length; i++){
        let currentBanner = allBanners[i];
        if(currentBanner.id === selectedBannerId){
            currentBanner.style.width = "1000px";
            currentBannerIndexSelected = i;
            restartLoadingBar();
        }
        else{
            currentBanner.style.width = "50px";
        }
    }
}

function loadingBarAnimation(){
    let loadingTimer = null;
    clearInterval(loadingTimer);
    loadingTimer = setInterval(barLoading, 30);
    
    function barLoading() {
        if (posWidth == 100) {
            console.log('teste')
            // clearInterval(id);
            posWidth = 0
        } else {
            posWidth++;
            loadingChangeBar.style.width = posWidth + '%';
        }
    }
}

function restartLoadingBar(){
    posWidth = 0;
}
