
function hideAll() {
    document.getElementById("showTwitter").style.display = "none";
    document.getElementById("showFacebookDialog").style.display = "none";
    document.getElementById("showPinterest").style.display = "none";
    document.getElementById("showLinkedIn").style.display = "none";
    document.getElementById("showBuffer").style.display = "none";
    document.getElementById("showDigg").style.display = "none";
    document.getElementById("showTumblr").style.display = "none";
    document.getElementById("showReddit").style.display = "none";
    document.getElementById("showStumbleupon").style.display = "none";
    document.getElementById("showDelicious").style.display = "none";
    document.getElementById("showEmail").style.display = "none";
    document.getElementById("showFacebook").style.display = "none";
}
function deactivateSideBarAll() {
    document.getElementById("facebookColor").className = "none";
    document.getElementById("FacebookDialogColor").className = "none";
    document.getElementById("TwitterColor").className = "none";
    document.getElementById("PinterestColor").className = "none";
    document.getElementById("LinkedInColor").className = "none";
    document.getElementById("BufferColor").className = "none";
    document.getElementById("DiggColor").className = "none";
    document.getElementById("TumblrColor").className = "none";
    document.getElementById("RedditColor").className = "none";
    document.getElementById("StumbleuponColor").className = "none";
    document.getElementById("DeliciousColor").className = "none";
    document.getElementById("EmailColor").className = "none";
    document.getElementById("AllOptionActiveColor").className = "none"; //Used For Select All Valuue
}
function activateLink(elementById, sideBarLinkId) {
    hideAll();
    document.getElementById(elementById).style.display = "";
    deactivateSideBarAll();
    document.getElementById(sideBarLinkId).className = "is-active";
}
// element.className = "button is-danger";
function showAll() {
    document.getElementById("showTwitter").style.display = "";
    document.getElementById("showFacebookDialog").style.display = "";
    document.getElementById("showPinterest").style.display = "";
    document.getElementById("showLinkedIn").style.display = "";
    document.getElementById("showBuffer").style.display = "";
    document.getElementById("showDigg").style.display = "";
    document.getElementById("showTumblr").style.display = "";
    document.getElementById("showReddit").style.display = "";
    document.getElementById("showStumbleupon").style.display = "";
    document.getElementById("showDelicious").style.display = "";
    document.getElementById("showEmail").style.display = "";
    document.getElementById("showFacebook").style.display = "";
}
function allOptionActive(sideBarLinkId) {
    showAll()
    // activateLink()
    document.getElementById(sideBarLinkId).className = "is-active";
}
function refreshPage() {
    location.reload();
}


function genrateSample() {
    const sampleCode = "https://codebeautify.org/";

    document.getElementById("userEnterdWords").value = sampleCode;
    genrateLink();
}
function checkAutomaticPrintValues() {
    let checkboxEle = document.getElementById("autoPrint");
    console.log("test:->" + checkboxEle.checked)
    if (checkboxEle.checked == true) {
        // createHtmlCode()

        genrateLink();
    }
}
function genrateLink() {
    let userInputValue = document.getElementById("userEnterdWords").value;
    let facebook = "https://www.facebook.com/sharer/sharer.php?u=" + userInputValue;
    // // let  facebookDialog = "" + userInputValue;
    let twitter = "https://twitter.com/intent/tweet?text=" + userInputValue;
    let pinterest = " http://pinterest.com/pin/create/button/?url=" + userInputValue + "&media=&description=";
    let linkedIn = " https://www.linkedin.com/shareArticle?mini=true&url= " + userInputValue;
    // let buffer = " " + userInputValue;
    // let dig = " " + userInputValue;
    let tumblr = "http://www.tumblr.com/share?v=3&u=&t=" + userInputValue;
    // let reddit = " " + userInputValue;
    // let stumbleupon = " " + userInputValue;
    // let delicious = " " + userInputValue;
    // let email = " " + userInputValue;



    document.getElementById("answerFacebook").value = facebook;
    // document.getElementById("answerFacebookDialog").value = facebookDialog;
    document.getElementById("answerTwitter").value = twitter;
    document.getElementById("answerPinterest").value = pinterest;
    document.getElementById("answerLinkedIn").value = linkedIn;
    // document.getElementById("answerBuffer").value =  buffer;
    // document.getElementById("answerDigg").value =  dig;
    document.getElementById("answerTrumblr").value = tumblr;
    // document.getElementById("answerReddit").value =  reddit;
    // document.getElementById("answerStumbleupon").value =  stumbleupon;
    // document.getElementById("answerDelicious").value =  delicious;
    // document.getElementById("answerEmail").value =  email;
}

function createHtmlCode() {
    let userInputValue = document.getElementById("userEnterdWords").value;
    let preview = `<a  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u='${userInputValue}'">Share on Facebook</a>`;

    console.log("privew      " + preview)


    let facebook = '<a href="https://www.facebook.com/sharer/sharer.php?u=' + userInputValue + '">Share on Facebook</a>';
    // let facebookPreviewCode =  "<a href='https://www.w3schools.com'>" + userInputValue + "</a>";


    var x = document.getElementById("showFacebookHtmlcode");
    console.log(x)
    if (x.className == "block is-hidden") {
        x.className = "block";
    } else {
        x.className = "block is-hidden";
    }

    document.getElementById("printFacebookHtmlCode").value = facebook;

    document.getElementById("printFacebookPreviewCode").innerHTML = preview;
    
    printFacebookHtmlCode.oninput = function () {
        printFacebookPreviewCode.innerHTML = printFacebookHtmlCode.value;
    }
    previewInputBox.oninput = function () {
        printFacebookHtmlCode.value = previewInputBox.value;
    }

    // previewInputBox.oninput = function () {
    //     printFacebookPreviewCode.innerHTML = previewInputBox.value;
    // }
  



}

function copySocialLink(socialLink, socialCopy, socialText) {
    var copyText = document.getElementById(socialText);
    console.log("socialText  " + socialText)
    // if(copyText == 10){
    //     alert("kjdbcjk")
    // }
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    document.getElementById(socialLink).style.display = "none";
    console.log("socialLink  " + socialLink)

    var tooltip = document.getElementById(socialCopy);
    tooltip.innerHTML = tooltip.innerHTML + "Copied:"
    console.log("socialCopy   " + socialCopy)
    setTimeout(() => {
        tooltip.innerHTML = tooltip.innerHTML.replace("Copied:", "");
        document.getElementById(socialLink).style.display = "";
    }, 1000);
}

