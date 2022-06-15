// ==UserScript==
// @name         DMZJ-ADBLOCKER
// @namespace    https://manhua.dmzj.com/
// @version      0.11
// @description  屏蔽冻鳗之家PC端广告
// @author       ktcunreal
// @match        https://manhua.dmzj.com/*
// @match        https://manhua.dmzj1.com/*
// @match        http://manhua.dmzj.com/*
// @match        http://manhua.dmzj1.com/*

// ==/UserScript==

(function() {
    'use strict';
    function rmad(id){
        let element = document.getElementById(id);
        element == null ? null : element.parentNode.removeChild(element);
    }

   window.onload =()=> {
    if (document.getElementsByClassName("ad_bottom_code")[0] != null) {
        document.getElementsByClassName("ad_bottom_code")[0].id= "btm-ad1";
        rmad("btm-ad1");
    }
    if (document.getElementsByClassName("ads-manhua")[0] != null) {
        document.getElementsByClassName("ads-manhua")[0].id= "ads-manhua";
        rmad("ads-manhua");
    }
    if(document.getElementById("countdown") != null){
        document.getElementById("countdown").parentNode.id = "btm-ad2";
        rmad("btm-ad2");
    }
    if (document.getElementsByClassName("toppic_content")[0] != null) {
        document.getElementsByClassName("toppic_content")[0].childNodes[14].id = "top-ad1";
        rmad("top-ad1");
    }
    if (document.getElementsByClassName("read_week margin_top_10px")[0] != null){
        document.getElementsByClassName("read_week margin_top_10px")[0].id = "side-ad1";
        rmad("side-ad1");
   }
   if (document.getElementsByClassName("middleright")[0] != null){
       document.getElementsByClassName("middleright")[0].childNodes[6].id = "body-ad1";
       rmad("body-ad1");
   }
   if (document.getElementsByClassName("anim_grade margin_top_10px")[0] != null) {
       document.getElementsByClassName("anim_grade margin_top_10px")[0].id = "left-ad1";
       rmad("left-ad1");
   }
   if (document.getElementsByClassName("online_anim_debate")[0] != null){
       document.getElementsByClassName("online_anim_debate")[0].childNodes[1].children[1].children[1].id = "body-ad2";
       rmad("body-ad2");
   }
   if (document.getElementsByClassName("display_graybg")[0] != null){
       document.getElementsByClassName("display_graybg")[0].parentNode.children[15].id = "btm-ad3";
       rmad("btm-ad3");
   }
   if (document.getElementById("coupletright") != null) {
       rmad("coupletright");
   }
        if (document.getElementById("coupletleft") != null) {
       rmad("coupletleft");
   }
   if (document.getElementById("floatCode") != null) {
       rmad("floatCode");
   }
   if (document.getElementById("focus") != null){
       rmad("focus");
   }
   if (document.getElementById("note") != null) {
       rmad("note");
   }
   if (document.getElementById("HMRichBox") != null) {
       rmad("HMRichBox");
   }
   if (document.getElementById("mvdiv_2353912_holder") != null) {
       document.getElementById("mvdiv_2353912_holder").parentNode.id="sbad"
       rmad("sbad")
   }
   if (document.getElementById("container") != null) {
       rmad("container");
   }
   if (document.getElementsByClassName("display_graybg")[0] != null){
       document.getElementsByClassName("display_graybg")[0].parentNode.children[5].id = "top-ad3";
       rmad("top-ad3");
   }
   if (document.body.childNodes[7] != null){
       document.body.removeChild(document.body.childNodes[7])
   }
   if (document.getElementById("fixedid") != null) {
       document.getElementById("fixedid").parentNode.id="sbbtmad"
       rmad("sbbtmad");
   }
   }
})();
