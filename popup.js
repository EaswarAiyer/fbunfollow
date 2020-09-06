// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var progressvalue =0;
var progressbar
var ptext= "Initializing...";
let unfollowButton = document.getElementById('unfollowButton');
let maindiv = document.getElementById("maindiv")
//let unfollowProgress = document.getElementsByClassName('progressbar');
unfollowButton.onclick = function(element) {
  // progressbar = document.createElement('progress')
  // progressbar.id="progressbar";
  // progressbar.max = 100
  // progressbar.value = progressvalue;
unfollowButton.disabled ="true"
unfollowButton.style.cursor="not-allowed"
  let bootprogmain = document.createElement('div')
  bootprogmain.classList.add("progress")
  bootprogmain.style="height:15px;margin-top:5px"
  bootprogmain.setAttribute("position","absolute")

  let bootprogsec = document.createElement('div')
  bootprogsec.classList.add("progress-bar","progress-bar-striped","active")
  bootprogsec.role ="progressbar";
  bootprogsec.setAttribute("role","progressbar")
  bootprogsec.setAttribute("aria-valuemin",0)
  bootprogsec.setAttribute("aria-valuemax",100)
 
  
  //bootprogsec.setAttribute("aria-valuemin","0")
  bootprogsec.setAttribute("aria-valuenow","50")
  bootprogsec.style="width:"+progressvalue+"%;"
  console.log(bootprogsec.style)

  let progresstext = document.createElement('p')
  progresstext.style="padding-top:0px"
  progresstext.innerHTML = "Initializing..."
  bootprogmain.appendChild(bootprogsec);
  //bootprogmain.appendChild(progresstext)



  chrome.storage.sync.set({"progbartext":"Initializing..."}, function() {
    console.log('Value is set to initialize');
  });
 
  //document.body.appendChild(bootprogmain)
  //progressbar.innerHTML = '<progress id="file" value="32" max="100"> 32% </progress>'
  //document.body.appendChild(progressbar)


 
  //document.body.appendChild(progresstext)
  maindiv.appendChild(bootprogmain)
  maindiv.appendChild(progresstext)

    let color = element.target.value;
  //  unfollowProgress[0].style.visibility = 'visible';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: "gotoProfile.js"});
    });

    setInterval(() => {
      console.log("setting prog val")
      //progressvalue = localStorage.getItem("progbarval")
      chrome.storage.sync.get(['progbarval'], function(result) {
        console.log('Value currently is ' + result.progbarval);
        progressvalue= result.progbarval
      });
      chrome.storage.sync.get(['progbartext'], function(result) {
        console.log('Value currently is ' + result.progbartext);
        ptext= result.progbartext
      });
      
      console.log(progressvalue)
      console.log(progresstext)
     //progressvalue= progressvalue+10
     // progressbar.value = progressvalue;
      bootprogsec.style="width:"+progressvalue+"%;"
     
      progresstext.innerHTML=ptext;
     
     
    }, 1000);
    
  };

