// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var progressvalue =0;
var progressbar
var ptext= "Initializing...";
let unfollowButton = document.getElementById('unfollowButton');
//let unfollowProgress = document.getElementsByClassName('progressbar');
unfollowButton.onclick = function(element) {
  progressbar = document.createElement('progress')
  progressbar.id="progressbar";
  progressbar.max = 100
  progressbar.value = progressvalue;

  chrome.storage.sync.set({"progbartext":"Initializing..."}, function() {
    console.log('Value is set to initialize');
  });
  //progressbar.innerHTML = '<progress id="file" value="32" max="100"> 32% </progress>'
  document.body.appendChild(progressbar)

  let progresstext = document.createElement('p')
  progresstext.innerHTML = "Initializing..."
  document.body.appendChild(progresstext)


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
      progressbar.value = progressvalue;
      progresstext.innerHTML= ptext
    }, 1000);
    
  };

