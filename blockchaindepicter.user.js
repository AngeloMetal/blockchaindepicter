// ==UserScript==
// @name        Blockchain Stats BBCode Depicter
// @namespace   BlackHatCoiner
// @author      BlackHatCoiner
// @version     1.0.0
// @include     https://bitcointalk.org/index.php?action=post;*quote=*
// @include     https://bitcointalk.org/index.php?action=pm;sa=send;f=inbox;pmsg=*;quote;u=*
// @license   MIT
// @grant none
// By BlackHatCoiner, u=2775483
// ==/UserScript==

(() => {



  // Add buttons to manually use full text, latest quote or snip
const $links = "<span style='margin-left:5%; font-size: 85%'>[ <a id='price' href='#price'>Price</a> ] [ <a id='ATH' href='#ATH'>ATH</a> ] [ <a id='chainsize' href='#chainsize'>Chain size</a> ] [ <a id='hashrate' href='#hashrate'>Hashrate</a> ] [ <a id='chainheight' href='#chainheight'>Chain height</a> ] [ <a id='nexthalvingin' href='#nexthalvingin'>Next halving in</a> ] [ <a id='supply' href='#supply'>Supply</a> ] [ <a id='totaltx' href='#totaltx'>Total TXs</a> ] [ <a id='low' href='#low'>Low Fee</a> ] [ <a id='medium' href='#medium'>Medium Fee</a> ] [ <a id='high' href='#high'>High Fee</a> ]</span>";
    document.querySelector("textarea").insertAdjacentHTML('afterend', $links);


  document.querySelector('#price').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var price = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/price/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = price;
  });

  document.querySelector('#ATH').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var ATH = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/ATH/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = ATH;
  });

  document.querySelector('#chainsize').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var chainsize = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/chainsize/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = chainsize;
  });

  document.querySelector('#hashrate').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var hashrate = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/hashrate/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = hashrate;
  });

  document.querySelector('#chainheight').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var chainheight = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/height/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = chainheight;
  });

  document.querySelector('#nexthalvingin').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var nexthalvingin = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/nexthalvingin/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = nexthalvingin;
  });

  document.querySelector('#supply').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var supply = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/supply/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = supply;
  });

  document.querySelector('#totaltx').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var totaltx = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/totaltx/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = totaltx;
  });

  document.querySelector('#low').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var low = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/lowfee/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = low;
  });

  document.querySelector('#medium').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var medium = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/mediumfee/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = medium;
  });

  document.querySelector('#high').addEventListener('click', function(e){
    e.preventDefault();
      var full_text = document.forms.postmodify.message.value;
      var high = full_text + "[abbr=BlackHatCoiner's Blockchain Stats BBCode Depicter][url=https://bitcointalk.org/index.php?topic=5366056.0][img]https://blackhatcoiner.com/highfee/[/img][/url][/abbr]";
      document.forms.postmodify.message.value = high;
  });

})();
