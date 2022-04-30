window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var delay = 800;
var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0}, 10);

/* mouse over event */
window.onload = function() {
    var rcBtn1 = document.getElementById('rcBtnCover1');
    var rcBtn2 = document.getElementById('rcBtnCover2');
    var rcBtn3 = document.getElementById('rcBtnCover3');
    var rcBtn4 = document.getElementById('rcBtnCover4');
    var rcBtn5 = document.getElementById('rcBtnCover5');
    rcBtn1.addEventListener('mouseover', (event) => {
        sectionSelected(1);
    }); 
    rcBtn1.addEventListener('mouseout', (event) => {
        if(page == 1)   return;
        sectionNotSelected(1);
    });
    
    rcBtn2.addEventListener('mouseover', (event) => {
        sectionSelected(2);
    });
    rcBtn2.addEventListener('mouseout', (event) => {
        if(page == 2)   return;
        sectionNotSelected(2);
    });

    rcBtn3.addEventListener('mouseover', (event) => {
        sectionSelected(3);
    });
    rcBtn3.addEventListener('mouseout', (event) => {
        if(page == 3)   return;
        sectionNotSelected(3);
    });

    rcBtn4.addEventListener('mouseover', (event) => {
        sectionSelected(4);
    });
    rcBtn4.addEventListener('mouseout', (event) => {
        if(page == 4)   return;
        sectionNotSelected(4);
    });

    rcBtn5.addEventListener('mouseover', (event) => {
        sectionSelected(5);
    });
    rcBtn5.addEventListener('mouseout', (event) => {
        if(page == 5)   return;
        sectionNotSelected(5);
    });
};

/* mouse scroll event*/
$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 5) return;
        sectionNotSelected(page);
        page++;
        sectionSelected(page);
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        sectionNotSelected(page);
        page--;
        sectionSelected(page);
    }
    var posTop =(page-1) * $(window).height() + (page-1) * 100;
    mHtml.animate({scrollTop : posTop}, delay);
})

$(document).ready(function(){
    $('#rcBtnContent'+page).css('visibility', 'visible');
    $('#rcBtnContent'+page).css('color', 'black');
    $('#rcBtnLine'+page).css('visibility', 'visible');
    $('#rcBtnLine'+page).css('background-color', 'black');
    $('#rcBtnCover'+page).css('border', '3px solid black');
    $('#rcBtnIn'+page).css('background-color', 'black');
});

/* css style change function */
function sectionSelected(page){
    $('#rcBtnContent'+page).css('visibility', 'visible');
    $('#rcBtnContent'+page).css('color', 'black');
    $('#rcBtnLine'+page).css('visibility', 'visible');
    $('#rcBtnLine'+page).css('background-color', 'black');
    $('#rcBtnCover'+page).css('border', '3px solid black');
    $('#rcBtnIn'+page).css('background-color', 'black');
}

function sectionNotSelected(page){
    $('#rcBtnContent'+page).css('visibility', 'hidden');
    $('#rcBtnContent'+page).css('color', 'white');
    $('#rcBtnLine'+page).css('visibility', 'hidden');
    $('#rcBtnLine'+page).css('background-color', 'white');
    $('#rcBtnCover'+page).css('border', '3px solid white');
    $('#rcBtnIn'+page).css('background-color', 'white');
}

function sectionChange(wantPage){
    if(wantPage==page)  return;
    var posTop =(wantPage-1) * $(window).height() + (wantPage-1) * 100;
    mHtml.animate({scrollTop : posTop}, delay);
    sectionSelected(wantPage);
    sectionNotSelected(page);
    page = wantPage;
}