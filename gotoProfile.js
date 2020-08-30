

console.log("calling gotoProfile");
var lastfollowedcount =0;
var setintervalid=0;
var equalcount =0;
var lastfollowedcountnewui =0;
var equalcountnewui =0;
var setintervalidnewui =0;
var tripleDot = document.getElementsByClassName("_2jq5 _p");
console.log(tripleDot);

if(tripleDot.length==0)
{

  console.log("new UI")
  //var dropdown = document.getElementsByClassName("hu5pjgll lzf7d6o1 sp_LYAc5k-1MU4_2x sx_dde2ff")
  var dropdown = document.querySelectorAll('[aria-label="Account"]')
  //console.log(progressvalue)
//progressvalue = 75;
//localStorage.setItem("progbarval",75)
chrome.storage.sync.set({"progbarval": 5}, function() {
  console.log('Value is set to 5');
});


  console.log(dropdown);
  let i =0;
  dropdown[0].click()
  setTimeout(()=>{
   //var settings= document.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m")
   var settings= document.getElementsByTagName("span") 
   console.log(settings);
    console.log("Going to iterate settings class")
    for(let settingsmenu of settings)
    {
      console.log(settingsmenu.innerHTML)
      var settingsStr = "Settings &amp; privacy";
      if(settingsmenu.innerHTML.toUpperCase() ==settingsStr.toUpperCase())
      {
        chrome.storage.sync.set({"progbarval": 10}, function() {
          console.log('Value is set to 10');
        });
      console.log("inside settings and privacy")
      settingsmenu.click();
      console.log("clicked settings and privacy")
      setTimeout(()=>{
        //var newsfeed= document.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m")
        var newsfeed= document.getElementsByTagName("span") 
        console.log(newsfeed);
         console.log("Going to iterate newsfeed preferences class")
         for(let newsfeedmenu of newsfeed)
         {
           console.log(newsfeedmenu.innerHTML)
           var newsFeedStr = "News Feed preferences";
           if(newsfeedmenu.innerHTML.toUpperCase() == newsFeedStr.toUpperCase())
           {
            chrome.storage.sync.set({"progbarval": 15}, function() {
              console.log('Value is set to 15');
            });
           newsfeedmenu.click();
           console.log("clicked news feed preferences")
           setTimeout(()=>{
            //var unfollowbtn= document.getElementsByClassName("oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v knj5qynh m9osqain hzawbc8m")
            var unfollowbtn= document.getElementsByTagName("span") 
            console.log(unfollowbtn);
             for(let unfollowbtnmenu of unfollowbtn)
             {
               console.log(unfollowbtnmenu.innerHTML)
               unfollowStr = "Unfollow people, pages, and groups to hide their posts";
               unfollowStr2 = "Unfollow people, Pages and groups to hide their posts"
               if(unfollowbtnmenu.innerHTML.toUpperCase() == unfollowStr.toUpperCase() || unfollowbtnmenu.innerHTML.toUpperCase() == unfollowStr2.toUpperCase())
               {
                chrome.storage.sync.set({"progbarval": 20}, function() {
                  console.log('Value is set to 20');
                });
                 //Unfollow people, pages, and groups to hide their posts
                 //Reconnect with people, pages, and groups you unfollowed.
                 
                 //oajrlxb2 tdjehn4e qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme
                 console.log("match")
               unfollowbtnmenu.click();
               console.log("clicked unfollow button")
               var scrollerNewUi = function (className) {
                // let unfollowclicknewui = document.getElementsByClassName("hu5pjgll op6gxeva sp_goeHjAlsAx-_1_5x sx_58f0be")
                // console.log(unfollowclicknewui);
                // for(let unfollowclicknewui1 of unfollowclicknewui )
                // {
                //   console.log(unfollowclicknewui1.innerHTML)
                //   unfollowclicknewui1.click();
                // }
                setTimeout(() => {
                  let scrollable = document.getElementsByClassName(
                    className
                  );
                  console.log(scrollable)
  
                  for (let scroll1 of scrollable) {
                    // console.log(scroll1);
                    // console.log(scroll1.clientHeight);
                    // scroll1.scrollTop = scroll1.scrollTop+scroll1.clientHeight;
                    scroll1.scrollIntoView(false)
                  }
                }, 2000);

              };
              var scrollerNewUiToTop = function (className)
              {
                setTimeout(() => {
                  let scrollable = document.getElementsByClassName(
                    className
                  );
                  console.log(scrollable)
  
                  for (let scroll1 of scrollable) {
                    // console.log(scroll1);
                    // console.log(scroll1.clientHeight);
                    // scroll1.scrollTop = scroll1.scrollTop+scroll1.clientHeight;
                    scroll1.scrollIntoView(true)
                  }
                }, 2000);

              }

              var printFollowingnewui = function () {
                setTimeout(() => {
                  //let followablesnewui = document.getElementById("oajrlxb2 oo1teu6h qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme");
                  let followablesnewui = document.querySelectorAll("[aria-label='Toggle to follow']")
                  console.log(followablesnewui);
                  if(lastfollowedcountnewui==followablesnewui.length)
                  {
                      equalcountnewui++
                      if(equalcountnewui==5){
                      console.log("Interval cleared........")
                      chrome.storage.sync.set({"progbarval":60}, function() {
                        console.log('Value is set to 60');
                      });
                      chrome.storage.sync.set({"progbartext":"Unfollowing..."}, function() {
                        console.log('Value is set to unfollow');
                      });
                      clearInterval(setintervalidnewui);
                      var x = 0; 
                      var time = 500; 
                      function amol(){ 
                        console.log("printing x" + x)
                        followablesnewui[x].click(); 
                          if(++x < followablesnewui.length){ 
                          setTimeout(amol, time); 
                          }
                          else
                          { 
                            chrome.storage.sync.set({"progbarval":100}, function() {
                              console.log('Value is set to 100');
                            });
                            chrome.storage.sync.set({"progbartext":"Completed."}, function() {
                              console.log('Value is set to unfollow');
                            });
                          } 
                      } 
                      let profileElements = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 lrazzd5p")
                      
                      console.log("followables length" + followablesnewui.length)
                      console.log("profile elements" +profileElements.length)
                      amol();
                      
                      
                      //for (let followed1 of followablesnewui) {
                      //    let nameLabel = followed1.getElementsByClassName("oajrlxb2 oo1teu6h qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme");
                      //    console.log(followed1.innerHTML);
                      //    followed1.click();
                      //  }
                        // let unfollowclicknewui = document.getElementsByClassName("oajrlxb2 oo1teu6h qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t tv7at329 thwo4zme")
                        //   console.log(unfollowclicknewui);
                        //   for(let unfollowclicknewui1 of unfollowclicknewui )
                        //   {
                        //     console.log(unfollowclicknewui1.innerHTML)
                        //     unfollowclicknewui1.click();
                        //   }
                        //               setTimeout(() => {
              //   console.log("Going to press done");
              //   let doneButton = document
              //   .getElementsByClassName(
              //     "_2-ks _3gox _4jy0 _4jy5 _4jy1 _51sy selected _42ft"
              //   );
              //   console.log(doneButton);
              //   doneButton[0].click();
              // }, 2000);
          
                      }
                  }
                  else
                  equalcount =0;
                  lastfollowedcountnewui= followablesnewui.length;
                
                }, 2000);
              };
             // printFollowingnewui();
              // setTimeout(() => {
              //   scrollerNewUi("j83agx80 cbu4d94t buofh1pr");
              // }, 2000);
              chrome.storage.sync.set({"progbarval":30}, function() {
                console.log('Value is set to 30');
              });
              chrome.storage.sync.set({"progbartext":"scrolling followers..."}, function() {
                console.log('Value is set to scroll');
              });
              setintervalidnewui= setInterval(()=>{

                console.log("Going to call scroller second time\n");
                scrollerNewUi("j83agx80 cbu4d94t buofh1pr");
                printFollowingnewui();
                
            },5000)


             
               break;
               //oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m
               }
             }
           },2000)
           break;
           //oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m
           }
         }
       },2000)
     
      break;
      }
    }

  },2000)

 
}

else{
tripleDot[0].click();
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
}