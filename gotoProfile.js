console.log("calling gotoProfile");
var lastfollowedcount =0;
var setintervalid=0;
var equalcount =0;
var tripleDot = document.getElementById("u_ps_0_1_4");
console.log(tripleDot);
tripleDot.click();
var editPreferences = document.getElementsByClassName("_54nc");
console.log("Going to wait");
setTimeout(() => {
  console.log("After wait");
  console.log(editPreferences);
  editPreferences[2].click();
  setTimeout(() => {
    let UnfollowOption = document.getElementsByClassName("_2-km");
    console.log(UnfollowOption);
    console.log(UnfollowOption[1]);
    UnfollowOption[1].click();
 
    var printFollowing = function () {
      setTimeout(() => {
        let followables = document.getElementsByClassName("_5u3n");
        console.log(followables);
        if(lastfollowedcount==followables.length)
        {
            equalcount++
            if(equalcount==5){
            console.log("Interval cleared........")
            
            clearInterval(setintervalid);
            for (let followed1 of followables) {
                //let nameLabel = followed1.getElementsByClassName("_5u3n");
                console.log(followed1.getAttribute("aria-label"));
                followed1.click();
              }
                  setTimeout(() => {
      console.log("Going to press done");
      let doneButton = document
      .getElementsByClassName(
        "_2-ks _3gox _4jy0 _4jy5 _4jy1 _51sy selected _42ft"
      );
      console.log(doneButton);
      doneButton[0].click();
    }, 2000);

            }
        }
        else
        equalcount =0;
        lastfollowedcount= followables.length;
      
      }, 2000);
    };
 
    printFollowing();
 
    // let containToScrolls = document.getElementsByClassName(
    //   "uiScrollableAreaWrap scrollable"
    // );
    // for (let containToScroll of containToScrolls) {
    //   console.log(containToScroll);
    //   console.log(containToScroll.getAttribute("style"));
    //   containToScroll.setAttribute("style", "overscroll-behavior: scroll;");
    //   containToScroll.scrollIntoView(false)
    // //   containToScroll.style.overflow = "scroll";
    //   console.log(containToScroll.clientHeight)
    //   //containToScroll.scrollTop=containToScroll.scrollHeight
    //   containToScroll.scrollTop = containToScroll.scrollTop+containToScroll.clientHeight;
    //   console.log(containToScroll.getAttribute("style"));
    // }
 
    var scroller = function () {
      let scrollable = document.getElementsByClassName(
        "uiScrollableAreaBody"
      );
      console.log(scrollable)
      for (let scroll1 of scrollable) {
        // console.log(scroll1);
        // console.log(scroll1.clientHeight);
        // scroll1.scrollTop = scroll1.scrollTop+scroll1.clientHeight;
        scroll1.scrollIntoView(false)
      }
    };

 
    // let scrollable = document.getElementsByClassName("uiScrollableAreaContent");
    // for (let scroll1 of scrollable) {
    //   console.log(scroll1);
    //   console.log(scroll1.scrollHeight);
    // }
 
    scroller();
    printFollowing();

   setintervalid= setInterval(()=>{
        console.log("Going to call scroller second time\n");
        scroller();
        printFollowing();
    },5000)
    // setTimeout(() => {
    //   console.log("Going to call scroller second time\n");
    //   scroller();
    // }, 2000);
 
    // printFollowing();
    // setTimeout(() => {
    //   console.log("Going to call scroller second time\n");
    //   scroller();
    // }, 2000);
 
   // printFollowing();
 
    // setTimeout(() => {
    //   let followables = document.getElementsByClassName("_5u3n");
    //   console.log(followables);
    //   for (let followed1 of followables) {
    //     //let nameLabel = followed1.getElementsByClassName("_5u3n");
    //     console.log(followed1.getAttribute("aria-label"));
    //     //followed1.click();
    //   }
    // }, 2000);
 
    // setTimeout(() => {
    //   let followables = document.getElementsByClassName("_5u3n");
    //   console.log(followables);
    //   for (let followed1 of followables) {
    //     //let nameLabel = followed1.getElementsByClassName("_5u3n");
    //     console.log(followed1.getAttribute("aria-label"));
    //     //followed1.click();
    //   }
    // }, 3000);
 
    // setTimeout(() => {
    //   console.log("Going to press done");
    //   let doneButton = document
    //   .getElementsByClassName(
    //     "_2-ks _3gox _4jy0 _4jy5 _4jy1 _51sy selected _42ft"
    //   );
    //   console.log(doneButton);
    //   doneButton[0].click();
    // }, 2000);
  }, 3000);
}, 2000);
 
console.log("Finished waiting");