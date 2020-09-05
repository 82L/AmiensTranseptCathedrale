



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "JY5uTODgdeTTx0s25wd1QBP63nw:1356944928798";
 
 
 var CS_env = {"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"projectName":"webgl-globe","token":"JY5uTODgdeTTx0s25wd1QBP63nw:1356944928798","profileUrl":"/u/103961560919112817044/","loggedInUserEmail":"emouaddib@gmail.com","relativeBaseUrl":"","projectHomeUrl":"/p/webgl-globe","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-23152241-3'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>ThreeWebGL.js - 
 webgl-globe -
 
 
 Geographic Data Visualization Platform meant for the web. - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16229512607128645344/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>emouaddib@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/103961560919112817044/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/103961560919112817044/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fwebgl-globe%2Fsource%2Fbrowse%2Fglobe%2FThree%2FThreeWebGL.js%3Fr%3D167cd00544424b26d90f76d56ea22d53aa02bb1a" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/webgl-globe">
 <a href="/p/webgl-globe/">
 
 
 <img src="/p/webgl-globe/logo?cct=1351294237"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/webgl-globe/"><span itemprop="name">webgl-globe</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/webgl-globe/"><span itemprop="description">Geographic Data Visualization Platform meant for the web.</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/webgl-globe/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/webgl-globe/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 
 
 <a href="/p/webgl-globe/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/webgl-globe/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 <form action="/p/webgl-globe/source/browse" style="display: inline">
 
 Repository:
 <select name="repo" id="repo" style="font-size: 92%" onchange="submit()">
 <option value="default">default</option><option value="wiki">wiki</option>
 </select>
 </form>
 
 


 <span class="inst1"><a href="/p/webgl-globe/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/webgl-globe/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/webgl-globe/source/list">Changes</a></span> &nbsp;
 <span class="inst4"><a href="/p/webgl-globe/source/clones">Clones</a></span> &nbsp; 
 &nbsp;
 
 
 <form action="/p/webgl-globe/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/webgl-globe/source/browse/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">hg</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/webgl-globe/source/browse/globe/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">globe</a><span class="sp">/&nbsp;</span><a href="/p/webgl-globe/source/browse/globe/Three/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">Three</a><span class="sp">/&nbsp;</span>ThreeWebGL.js</span>
 
 

 <span class="sourcelabel">Download <a href="//webgl-globe.googlecode.com/archive/167cd00544424b26d90f76d56ea22d53aa02bb1a.zip">zip</a></span>


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>167cd0054442</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_290"

><td id="290"><a href="#290">290</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_1

><td class="source">// ThreeWebGL.js r40 - http://github.com/mrdoob/three.js<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_2

><td class="source">var THREE=THREE||{};if(!window.Int32Array){window.Int32Array=Array;window.Float32Array=Array}THREE.Color=function(b){this.setHex(b)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_3

><td class="source">THREE.Color.prototype={autoUpdate:!0,copy:function(b){this.r=b.r;this.g=b.g;this.b=b.b;this.hex=b.hex;this.__styleString=b.__styleString},setRGB:function(b,d,e){this.r=b;this.g=d;this.b=e;if(this.autoUpdate){this.updateHex();this.updateStyleString()}},setHSV:function(b,d,e){var g,h,o,n,q,r;if(e==0)g=h=o=0;else{n=Math.floor(b*6);q=b*6-n;b=e*(1-d);r=e*(1-d*q);d=e*(1-d*(1-q));switch(n){case 1:g=r;h=e;o=b;break;case 2:g=b;h=e;o=d;break;case 3:g=b;h=r;o=e;break;case 4:g=d;h=b;o=e;break;case 5:g=e;h=b;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_4

><td class="source">o=r;break;case 6:case 0:g=e;h=d;o=b}}this.r=g;this.g=h;this.b=o;if(this.autoUpdate){this.updateHex();this.updateStyleString()}},setHex:function(b){this.hex=~~b&amp;16777215;if(this.autoUpdate){this.updateRGB();this.updateStyleString()}},updateHex:function(){this.hex=~~(this.r*255)&lt;&lt;16^~~(this.g*255)&lt;&lt;8^~~(this.b*255)},updateRGB:function(){this.r=(this.hex&gt;&gt;16&amp;255)/255;this.g=(this.hex&gt;&gt;8&amp;255)/255;this.b=(this.hex&amp;255)/255},updateStyleString:function(){this.__styleString=&quot;rgb(&quot;+~~(this.r*255)+&quot;,&quot;+~~(this.g*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_5

><td class="source">255)+&quot;,&quot;+~~(this.b*255)+&quot;)&quot;},clone:function(){return new THREE.Color(this.hex)}};THREE.Vector2=function(b,d){this.set(b||0,d||0)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_6

><td class="source">THREE.Vector2.prototype={set:function(b,d){this.x=b;this.y=d;return this},copy:function(b){this.set(b.x,b.y);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y);return this},multiplyScalar:function(b){this.set(this.x*b,this.y*b);return this},negate:function(){this.set(-this.x,-this.y);return this},unit:function(){this.multiplyScalar(1/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_7

><td class="source">this.length());return this},length:function(){return Math.sqrt(this.lengthSq())},lengthSq:function(){return this.x*this.x+this.y*this.y},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(b,d,e){this.set(b||0,d||0,e||0)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_8

><td class="source">THREE.Vector3.prototype={set:function(b,d,e){this.x=b;this.y=d;this.z=e;return this},copy:function(b){this.set(b.x,b.y,b.z);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y,b.z+d.z);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y,this.z+b.z);return this},addScalar:function(b){this.set(this.x+b,this.y+b,this.z+b);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y,b.z-d.z);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y,this.z-b.z);return this},cross:function(b,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_9

><td class="source">d){this.set(b.y*d.z-b.z*d.y,b.z*d.x-b.x*d.z,b.x*d.y-b.y*d.x);return this},crossSelf:function(b){var d=this.x,e=this.y,g=this.z;this.set(e*b.z-g*b.y,g*b.x-d*b.z,d*b.y-e*b.x);return this},multiply:function(b,d){this.set(b.x*d.x,b.y*d.y,b.z*d.z);return this},multiplySelf:function(b){this.set(this.x*b.x,this.y*b.y,this.z*b.z);return this},multiplyScalar:function(b){this.set(this.x*b,this.y*b,this.z*b);return this},divideSelf:function(b){this.set(this.x/b.x,this.y/b.y,this.z/b.z);return this},divideScalar:function(b){this.set(this.x/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_10

><td class="source">b,this.y/b,this.z/b);return this},negate:function(){this.set(-this.x,-this.y,-this.z);return this},dot:function(b){return this.x*b.x+this.y*b.y+this.z*b.z},distanceTo:function(b){return Math.sqrt(this.distanceToSquared(b))},distanceToSquared:function(b){var d=this.x-b.x,e=this.y-b.y;b=this.z-b.z;return d*d+e*e+b*b},length:function(){return Math.sqrt(this.lengthSq())},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},lengthManhattan:function(){return this.x+this.y+this.z},normalize:function(){var b=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_11

><td class="source">this.length();b&gt;0?this.multiplyScalar(1/b):this.set(0,0,0);return this},setPositionFromMatrix:function(b){this.x=b.n14;this.y=b.n24;this.z=b.n34},setRotationFromMatrix:function(b){var d=Math.cos(this.y);this.y=Math.asin(b.n13);if(Math.abs(d)&gt;1.0E-5){this.x=Math.atan2(-b.n23/d,b.n33/d);this.z=Math.atan2(-b.n12/d,b.n11/d)}else{this.x=0;this.z=Math.atan2(b.n21,b.n22)}},setLength:function(b){return this.normalize().multiplyScalar(b)},isZero:function(){return Math.abs(this.x)&lt;1.0E-4&amp;&amp;Math.abs(this.y)&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_12

><td class="source">1.0E-4&amp;&amp;Math.abs(this.z)&lt;1.0E-4},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(b,d,e,g){this.set(b||0,d||0,e||0,g||1)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_13

><td class="source">THREE.Vector4.prototype={set:function(b,d,e,g){this.x=b;this.y=d;this.z=e;this.w=g;return this},copy:function(b){this.set(b.x,b.y,b.z,b.w||1);return this},add:function(b,d){this.set(b.x+d.x,b.y+d.y,b.z+d.z,b.w+d.w);return this},addSelf:function(b){this.set(this.x+b.x,this.y+b.y,this.z+b.z,this.w+b.w);return this},sub:function(b,d){this.set(b.x-d.x,b.y-d.y,b.z-d.z,b.w-d.w);return this},subSelf:function(b){this.set(this.x-b.x,this.y-b.y,this.z-b.z,this.w-b.w);return this},multiplyScalar:function(b){this.set(this.x*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_14

><td class="source">b,this.y*b,this.z*b,this.w*b);return this},divideScalar:function(b){this.set(this.x/b,this.y/b,this.z/b,this.w/b);return this},lerpSelf:function(b,d){this.set(this.x+(b.x-this.x)*d,this.y+(b.y-this.y)*d,this.z+(b.z-this.z)*d,this.w+(b.w-this.w)*d)},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Ray=function(b,d){this.origin=b||new THREE.Vector3;this.direction=d||new THREE.Vector3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_15

><td class="source">THREE.Ray.prototype={intersectScene:function(b){var d,e,g=b.objects,h=[];b=0;for(d=g.length;b&lt;d;b++){e=g[b];e instanceof THREE.Mesh&amp;&amp;(h=h.concat(this.intersectObject(e)))}h.sort(function(o,n){return o.distance-n.distance});return h},intersectObject:function(b){function d(V,L,ra,da){da=da.clone().subSelf(L);ra=ra.clone().subSelf(L);var pa=V.clone().subSelf(L);V=da.dot(da);L=da.dot(ra);da=da.dot(pa);var $=ra.dot(ra);ra=ra.dot(pa);pa=1/(V*$-L*L);$=($*da-L*ra)*pa;V=(V*ra-L*da)*pa;return $&gt;0&amp;&amp;V&gt;0&amp;&amp;$+V&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_16

><td class="source">1}var e,g,h,o,n,q,r,v,E,F,H,I=b.geometry,M=I.vertices,N=[];e=0;for(g=I.faces.length;e&lt;g;e++){h=I.faces[e];F=this.origin.clone();H=this.direction.clone();r=b.matrixWorld;o=r.multiplyVector3(M[h.a].position.clone());n=r.multiplyVector3(M[h.b].position.clone());q=r.multiplyVector3(M[h.c].position.clone());r=h instanceof THREE.Face4?r.multiplyVector3(M[h.d].position.clone()):null;v=b.matrixRotationWorld.multiplyVector3(h.normal.clone());E=H.dot(v);if(b.doubleSided||(b.flipSided?E&gt;0:E&lt;0)){v=v.dot((new THREE.Vector3).sub(o,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_17

><td class="source">F))/E;F=F.addSelf(H.multiplyScalar(v));if(h instanceof THREE.Face3){if(d(F,o,n,q)){h={distance:this.origin.distanceTo(F),point:F,face:h,object:b};N.push(h)}}else if(h instanceof THREE.Face4&amp;&amp;(d(F,o,n,r)||d(F,n,q,r))){h={distance:this.origin.distanceTo(F),point:F,face:h,object:b};N.push(h)}}}return N}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_18

><td class="source">THREE.Rectangle=function(){function b(){o=g-d;n=h-e}var d,e,g,h,o,n,q=!0;this.getX=function(){return d};this.getY=function(){return e};this.getWidth=function(){return o};this.getHeight=function(){return n};this.getLeft=function(){return d};this.getTop=function(){return e};this.getRight=function(){return g};this.getBottom=function(){return h};this.set=function(r,v,E,F){q=!1;d=r;e=v;g=E;h=F;b()};this.addPoint=function(r,v){if(q){q=!1;d=r;e=v;g=r;h=v}else{d=d&lt;r?d:r;e=e&lt;v?e:v;g=g&gt;r?g:r;h=h&gt;v?h:v}b()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_19

><td class="source">this.add3Points=function(r,v,E,F,H,I){if(q){q=!1;d=r&lt;E?r&lt;H?r:H:E&lt;H?E:H;e=v&lt;F?v&lt;I?v:I:F&lt;I?F:I;g=r&gt;E?r&gt;H?r:H:E&gt;H?E:H;h=v&gt;F?v&gt;I?v:I:F&gt;I?F:I}else{d=r&lt;E?r&lt;H?r&lt;d?r:d:H&lt;d?H:d:E&lt;H?E&lt;d?E:d:H&lt;d?H:d;e=v&lt;F?v&lt;I?v&lt;e?v:e:I&lt;e?I:e:F&lt;I?F&lt;e?F:e:I&lt;e?I:e;g=r&gt;E?r&gt;H?r&gt;g?r:g:H&gt;g?H:g:E&gt;H?E&gt;g?E:g:H&gt;g?H:g;h=v&gt;F?v&gt;I?v&gt;h?v:h:I&gt;h?I:h:F&gt;I?F&gt;h?F:h:I&gt;h?I:h}b()};this.addRectangle=function(r){if(q){q=!1;d=r.getLeft();e=r.getTop();g=r.getRight();h=r.getBottom()}else{d=d&lt;r.getLeft()?d:r.getLeft();e=e&lt;r.getTop()?e:r.getTop();g=g&gt;r.getRight()?<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_20

><td class="source">g:r.getRight();h=h&gt;r.getBottom()?h:r.getBottom()}b()};this.inflate=function(r){d-=r;e-=r;g+=r;h+=r;b()};this.minSelf=function(r){d=d&gt;r.getLeft()?d:r.getLeft();e=e&gt;r.getTop()?e:r.getTop();g=g&lt;r.getRight()?g:r.getRight();h=h&lt;r.getBottom()?h:r.getBottom();b()};this.instersects=function(r){return Math.min(g,r.getRight())-Math.max(d,r.getLeft())&gt;=0&amp;&amp;Math.min(h,r.getBottom())-Math.max(e,r.getTop())&gt;=0};this.empty=function(){q=!0;h=g=e=d=0;b()};this.isEmpty=function(){return q}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_21

><td class="source">THREE.Matrix3=function(){this.m=[]};THREE.Matrix3.prototype={transpose:function(){var b,d=this.m;b=d[1];d[1]=d[3];d[3]=b;b=d[2];d[2]=d[6];d[6]=b;b=d[5];d[5]=d[7];d[7]=b;return this},transposeIntoArray:function(b){var d=this.m;b[0]=d[0];b[1]=d[3];b[2]=d[6];b[3]=d[1];b[4]=d[4];b[5]=d[7];b[6]=d[2];b[7]=d[5];b[8]=d[8];return this}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_22

><td class="source">THREE.Matrix4=function(b,d,e,g,h,o,n,q,r,v,E,F,H,I,M,N){this.set(b||1,d||0,e||0,g||0,h||0,o||1,n||0,q||0,r||0,v||0,E||1,F||0,H||0,I||0,M||0,N||1);this.flat=Array(16);this.m33=new THREE.Matrix3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_23

><td class="source">THREE.Matrix4.prototype={set:function(b,d,e,g,h,o,n,q,r,v,E,F,H,I,M,N){this.n11=b;this.n12=d;this.n13=e;this.n14=g;this.n21=h;this.n22=o;this.n23=n;this.n24=q;this.n31=r;this.n32=v;this.n33=E;this.n34=F;this.n41=H;this.n42=I;this.n43=M;this.n44=N;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(b){this.set(b.n11,b.n12,b.n13,b.n14,b.n21,b.n22,b.n23,b.n24,b.n31,b.n32,b.n33,b.n34,b.n41,b.n42,b.n43,b.n44);return this},lookAt:function(b,d,e){var g=THREE.Matrix4.__v1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_24

><td class="source">h=THREE.Matrix4.__v2,o=THREE.Matrix4.__v3;o.sub(b,d).normalize();if(o.length()===0)o.z=1;g.cross(e,o).normalize();if(g.length()===0){o.x+=1.0E-4;g.cross(e,o).normalize()}h.cross(o,g).normalize();this.n11=g.x;this.n12=h.x;this.n13=o.x;this.n21=g.y;this.n22=h.y;this.n23=o.y;this.n31=g.z;this.n32=h.z;this.n33=o.z;return this},multiplyVector3:function(b){var d=b.x,e=b.y,g=b.z,h=1/(this.n41*d+this.n42*e+this.n43*g+this.n44);b.x=(this.n11*d+this.n12*e+this.n13*g+this.n14)*h;b.y=(this.n21*d+this.n22*e+this.n23*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_25

><td class="source">g+this.n24)*h;b.z=(this.n31*d+this.n32*e+this.n33*g+this.n34)*h;return b},multiplyVector4:function(b){var d=b.x,e=b.y,g=b.z,h=b.w;b.x=this.n11*d+this.n12*e+this.n13*g+this.n14*h;b.y=this.n21*d+this.n22*e+this.n23*g+this.n24*h;b.z=this.n31*d+this.n32*e+this.n33*g+this.n34*h;b.w=this.n41*d+this.n42*e+this.n43*g+this.n44*h;return b},rotateAxis:function(b){var d=b.x,e=b.y,g=b.z;b.x=d*this.n11+e*this.n12+g*this.n13;b.y=d*this.n21+e*this.n22+g*this.n23;b.z=d*this.n31+e*this.n32+g*this.n33;b.normalize();<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_26

><td class="source">return b},crossVector:function(b){var d=new THREE.Vector4;d.x=this.n11*b.x+this.n12*b.y+this.n13*b.z+this.n14*b.w;d.y=this.n21*b.x+this.n22*b.y+this.n23*b.z+this.n24*b.w;d.z=this.n31*b.x+this.n32*b.y+this.n33*b.z+this.n34*b.w;d.w=b.w?this.n41*b.x+this.n42*b.y+this.n43*b.z+this.n44*b.w:1;return d},multiply:function(b,d){var e=b.n11,g=b.n12,h=b.n13,o=b.n14,n=b.n21,q=b.n22,r=b.n23,v=b.n24,E=b.n31,F=b.n32,H=b.n33,I=b.n34,M=b.n41,N=b.n42,V=b.n43,L=b.n44,ra=d.n11,da=d.n12,pa=d.n13,$=d.n14,K=d.n21,Ia=d.n22,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_27

><td class="source">ca=d.n23,Fa=d.n24,fa=d.n31,R=d.n32,c=d.n33,ga=d.n34;this.n11=e*ra+g*K+h*fa;this.n12=e*da+g*Ia+h*R;this.n13=e*pa+g*ca+h*c;this.n14=e*$+g*Fa+h*ga+o;this.n21=n*ra+q*K+r*fa;this.n22=n*da+q*Ia+r*R;this.n23=n*pa+q*ca+r*c;this.n24=n*$+q*Fa+r*ga+v;this.n31=E*ra+F*K+H*fa;this.n32=E*da+F*Ia+H*R;this.n33=E*pa+F*ca+H*c;this.n34=E*$+F*Fa+H*ga+I;this.n41=M*ra+N*K+V*fa;this.n42=M*da+N*Ia+V*R;this.n43=M*pa+N*ca+V*c;this.n44=M*$+N*Fa+V*ga+L;return this},multiplyToArray:function(b,d,e){this.multiply(b,d);e[0]=this.n11;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_28

><td class="source">e[1]=this.n21;e[2]=this.n31;e[3]=this.n41;e[4]=this.n12;e[5]=this.n22;e[6]=this.n32;e[7]=this.n42;e[8]=this.n13;e[9]=this.n23;e[10]=this.n33;e[11]=this.n43;e[12]=this.n14;e[13]=this.n24;e[14]=this.n34;e[15]=this.n44;return this},multiplySelf:function(b){this.multiply(this,b);return this},multiplyScalar:function(b){this.n11*=b;this.n12*=b;this.n13*=b;this.n14*=b;this.n21*=b;this.n22*=b;this.n23*=b;this.n24*=b;this.n31*=b;this.n32*=b;this.n33*=b;this.n34*=b;this.n41*=b;this.n42*=b;this.n43*=b;this.n44*=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_29

><td class="source">b;return this},determinant:function(){var b=this.n11,d=this.n12,e=this.n13,g=this.n14,h=this.n21,o=this.n22,n=this.n23,q=this.n24,r=this.n31,v=this.n32,E=this.n33,F=this.n34,H=this.n41,I=this.n42,M=this.n43,N=this.n44;return g*n*v*H-e*q*v*H-g*o*E*H+d*q*E*H+e*o*F*H-d*n*F*H-g*n*r*I+e*q*r*I+g*h*E*I-b*q*E*I-e*h*F*I+b*n*F*I+g*o*r*M-d*q*r*M-g*h*v*M+b*q*v*M+d*h*F*M-b*o*F*M-e*o*r*N+d*n*r*N+e*h*v*N-b*n*v*N-d*h*E*N+b*o*E*N},transpose:function(){var b;b=this.n21;this.n21=this.n12;this.n12=b;b=this.n31;this.n31=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_30

><td class="source">this.n13;this.n13=b;b=this.n32;this.n32=this.n23;this.n23=b;b=this.n41;this.n41=this.n14;this.n14=b;b=this.n42;this.n42=this.n24;this.n24=b;b=this.n43;this.n43=this.n34;this.n43=b;return this},clone:function(){var b=new THREE.Matrix4;b.n11=this.n11;b.n12=this.n12;b.n13=this.n13;b.n14=this.n14;b.n21=this.n21;b.n22=this.n22;b.n23=this.n23;b.n24=this.n24;b.n31=this.n31;b.n32=this.n32;b.n33=this.n33;b.n34=this.n34;b.n41=this.n41;b.n42=this.n42;b.n43=this.n43;b.n44=this.n44;return b},flatten:function(){this.flat[0]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_31

><td class="source">this.n11;this.flat[1]=this.n21;this.flat[2]=this.n31;this.flat[3]=this.n41;this.flat[4]=this.n12;this.flat[5]=this.n22;this.flat[6]=this.n32;this.flat[7]=this.n42;this.flat[8]=this.n13;this.flat[9]=this.n23;this.flat[10]=this.n33;this.flat[11]=this.n43;this.flat[12]=this.n14;this.flat[13]=this.n24;this.flat[14]=this.n34;this.flat[15]=this.n44;return this.flat},flattenToArray:function(b){b[0]=this.n11;b[1]=this.n21;b[2]=this.n31;b[3]=this.n41;b[4]=this.n12;b[5]=this.n22;b[6]=this.n32;b[7]=this.n42;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_32

><td class="source">b[8]=this.n13;b[9]=this.n23;b[10]=this.n33;b[11]=this.n43;b[12]=this.n14;b[13]=this.n24;b[14]=this.n34;b[15]=this.n44;return b},flattenToArrayOffset:function(b,d){b[d]=this.n11;b[d+1]=this.n21;b[d+2]=this.n31;b[d+3]=this.n41;b[d+4]=this.n12;b[d+5]=this.n22;b[d+6]=this.n32;b[d+7]=this.n42;b[d+8]=this.n13;b[d+9]=this.n23;b[d+10]=this.n33;b[d+11]=this.n43;b[d+12]=this.n14;b[d+13]=this.n24;b[d+14]=this.n34;b[d+15]=this.n44;return b},setTranslation:function(b,d,e){this.set(1,0,0,b,0,1,0,d,0,0,1,e,0,0,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_33

><td class="source">0,1);return this},setScale:function(b,d,e){this.set(b,0,0,0,0,d,0,0,0,0,e,0,0,0,0,1);return this},setRotationX:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(1,0,0,0,0,d,-b,0,0,b,d,0,0,0,0,1);return this},setRotationY:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(d,0,b,0,0,1,0,0,-b,0,d,0,0,0,0,1);return this},setRotationZ:function(b){var d=Math.cos(b);b=Math.sin(b);this.set(d,-b,0,0,b,d,0,0,0,0,1,0,0,0,0,1);return this},setRotationAxis:function(b,d){var e=Math.cos(d),g=Math.sin(d),h=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_34

><td class="source">1-e,o=b.x,n=b.y,q=b.z,r=h*o,v=h*n;this.set(r*o+e,r*n-g*q,r*q+g*n,0,r*n+g*q,v*n+e,v*q-g*o,0,r*q-g*n,v*q+g*o,h*q*q+e,0,0,0,0,1);return this},setPosition:function(b){this.n14=b.x;this.n24=b.y;this.n34=b.z;return this},getPosition:function(){if(!this.position)this.position=new THREE.Vector3;this.position.set(this.n14,this.n24,this.n34);return this.position},getColumnX:function(){if(!this.columnX)this.columnX=new THREE.Vector3;this.columnX.set(this.n11,this.n21,this.n31);return this.columnX},getColumnY:function(){if(!this.columnY)this.columnY=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_35

><td class="source">new THREE.Vector3;this.columnY.set(this.n12,this.n22,this.n32);return this.columnY},getColumnZ:function(){if(!this.columnZ)this.columnZ=new THREE.Vector3;this.columnZ.set(this.n13,this.n23,this.n33);return this.columnZ},setRotationFromEuler:function(b){var d=b.x,e=b.y,g=b.z;b=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);var o=Math.cos(g);g=Math.sin(g);var n=b*e,q=d*e;this.n11=h*o;this.n12=-h*g;this.n13=e;this.n21=q*o+b*g;this.n22=-q*g+b*o;this.n23=-d*h;this.n31=-n*o+d*g;this.n32=n*g+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_36

><td class="source">d*o;this.n33=b*h;return this},setRotationFromQuaternion:function(b){var d=b.x,e=b.y,g=b.z,h=b.w,o=d+d,n=e+e,q=g+g;b=d*o;var r=d*n;d*=q;var v=e*n;e*=q;g*=q;o*=h;n*=h;h*=q;this.n11=1-(v+g);this.n12=r-h;this.n13=d+n;this.n21=r+h;this.n22=1-(b+g);this.n23=e-o;this.n31=d-n;this.n32=e+o;this.n33=1-(b+v);return this},scale:function(b){var d=b.x,e=b.y;b=b.z;this.n11*=d;this.n12*=e;this.n13*=b;this.n21*=d;this.n22*=e;this.n23*=b;this.n31*=d;this.n32*=e;this.n33*=b;this.n41*=d;this.n42*=e;this.n43*=b;return this},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_37

><td class="source">extractPosition:function(b){this.n14=b.n14;this.n24=b.n24;this.n34=b.n34},extractRotation:function(b,d){var e=1/d.x,g=1/d.y,h=1/d.z;this.n11=b.n11*e;this.n21=b.n21*e;this.n31=b.n31*e;this.n12=b.n12*g;this.n22=b.n22*g;this.n32=b.n32*g;this.n13=b.n13*h;this.n23=b.n23*h;this.n33=b.n33*h}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_38

><td class="source">THREE.Matrix4.makeInvert=function(b,d){var e=b.n11,g=b.n12,h=b.n13,o=b.n14,n=b.n21,q=b.n22,r=b.n23,v=b.n24,E=b.n31,F=b.n32,H=b.n33,I=b.n34,M=b.n41,N=b.n42,V=b.n43,L=b.n44;d===undefined&amp;&amp;(d=new THREE.Matrix4);d.n11=r*I*N-v*H*N+v*F*V-q*I*V-r*F*L+q*H*L;d.n12=o*H*N-h*I*N-o*F*V+g*I*V+h*F*L-g*H*L;d.n13=h*v*N-o*r*N+o*q*V-g*v*V-h*q*L+g*r*L;d.n14=o*r*F-h*v*F-o*q*H+g*v*H+h*q*I-g*r*I;d.n21=v*H*M-r*I*M-v*E*V+n*I*V+r*E*L-n*H*L;d.n22=h*I*M-o*H*M+o*E*V-e*I*V-h*E*L+e*H*L;d.n23=o*r*M-h*v*M-o*n*V+e*v*V+h*n*L-e*r*L;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_39

><td class="source">d.n24=h*v*E-o*r*E+o*n*H-e*v*H-h*n*I+e*r*I;d.n31=q*I*M-v*F*M+v*E*N-n*I*N-q*E*L+n*F*L;d.n32=o*F*M-g*I*M-o*E*N+e*I*N+g*E*L-e*F*L;d.n33=h*v*M-o*q*M+o*n*N-e*v*N-g*n*L+e*q*L;d.n34=o*q*E-g*v*E-o*n*F+e*v*F+g*n*I-e*q*I;d.n41=r*F*M-q*H*M-r*E*N+n*H*N+q*E*V-n*F*V;d.n42=g*H*M-h*F*M+h*E*N-e*H*N-g*E*V+e*F*V;d.n43=h*q*M-g*r*M-h*n*N+e*r*N+g*n*V-e*q*V;d.n44=g*r*E-h*q*E+h*n*F-e*r*F-g*n*H+e*q*H;d.multiplyScalar(1/b.determinant());return d};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_40

><td class="source">THREE.Matrix4.makeInvert3x3=function(b){var d=b.m33,e=d.m,g=b.n33*b.n22-b.n32*b.n23,h=-b.n33*b.n21+b.n31*b.n23,o=b.n32*b.n21-b.n31*b.n22,n=-b.n33*b.n12+b.n32*b.n13,q=b.n33*b.n11-b.n31*b.n13,r=-b.n32*b.n11+b.n31*b.n12,v=b.n23*b.n12-b.n22*b.n13,E=-b.n23*b.n11+b.n21*b.n13,F=b.n22*b.n11-b.n21*b.n12;b=b.n11*g+b.n21*n+b.n31*v;if(b==0)throw&quot;matrix not invertible&quot;;b=1/b;e[0]=b*g;e[1]=b*h;e[2]=b*o;e[3]=b*n;e[4]=b*q;e[5]=b*r;e[6]=b*v;e[7]=b*E;e[8]=b*F;return d};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_41

><td class="source">THREE.Matrix4.makeFrustum=function(b,d,e,g,h,o){var n;n=new THREE.Matrix4;n.n11=2*h/(d-b);n.n12=0;n.n13=(d+b)/(d-b);n.n14=0;n.n21=0;n.n22=2*h/(g-e);n.n23=(g+e)/(g-e);n.n24=0;n.n31=0;n.n32=0;n.n33=-(o+h)/(o-h);n.n34=-2*o*h/(o-h);n.n41=0;n.n42=0;n.n43=-1;n.n44=0;return n};THREE.Matrix4.makePerspective=function(b,d,e,g){var h;b=e*Math.tan(b*Math.PI/360);h=-b;return THREE.Matrix4.makeFrustum(h*d,b*d,h,b,e,g)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_42

><td class="source">THREE.Matrix4.makeOrtho=function(b,d,e,g,h,o){var n,q,r,v;n=new THREE.Matrix4;q=d-b;r=e-g;v=o-h;n.n11=2/q;n.n12=0;n.n13=0;n.n14=-((d+b)/q);n.n21=0;n.n22=2/r;n.n23=0;n.n24=-((e+g)/r);n.n31=0;n.n32=0;n.n33=-2/v;n.n34=-((o+h)/v);n.n41=0;n.n42=0;n.n43=0;n.n44=1;return n};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_43

><td class="source">THREE.Object3D=function(){this.parent=undefined;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.scale=new THREE.Vector3(1,1,1);this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_44

><td class="source">!0;this._vector=new THREE.Vector3;this.name=&quot;&quot;};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_45

><td class="source">THREE.Object3D.prototype={translate:function(b,d){this.matrix.rotateAxis(d);this.position.addSelf(d.multiplyScalar(b))},translateX:function(b){this.translate(b,this._vector.set(1,0,0))},translateY:function(b){this.translate(b,this._vector.set(0,1,0))},translateZ:function(b){this.translate(b,this._vector.set(0,0,1))},lookAt:function(b){this.matrix.lookAt(b,this.position,this.up);this.rotationAutoUpdate&amp;&amp;this.rotation.setRotationFromMatrix(this.matrix)},addChild:function(b){if(this.children.indexOf(b)===<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_46

><td class="source">-1){b.parent!==undefined&amp;&amp;b.parent.removeChild(b);b.parent=this;this.children.push(b);for(var d=this;d.parent!==undefined;)d=d.parent;d!==undefined&amp;&amp;d instanceof THREE.Scene&amp;&amp;d.addChildRecurse(b)}},removeChild:function(b){var d=this.children.indexOf(b);if(d!==-1){b.parent=undefined;this.children.splice(d,1)}},getChildByName:function(b,d){var e,g,h;e=0;for(g=this.children.length;e&lt;g;e++){h=this.children[e];if(h.name===b)return h;if(d){h=h.getChildByName(b,d);if(h!==undefined)return h}}},updateMatrix:function(){this.matrix.setPosition(this.position);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_47

><td class="source">this.useQuaternion?this.matrix.setRotationFromQuaternion(this.quaternion):this.matrix.setRotationFromEuler(this.rotation);if(this.scale.x!==1||this.scale.y!==1||this.scale.z!==1){this.matrix.scale(this.scale);this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z))}this.matrixWorldNeedsUpdate=!0},update:function(b,d,e){this.matrixAutoUpdate&amp;&amp;this.updateMatrix();if(this.matrixWorldNeedsUpdate||d){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_48

><td class="source">this.matrixRotationWorld.extractRotation(this.matrixWorld,this.scale);this.matrixWorldNeedsUpdate=!1;d=!0}b=0;for(var g=this.children.length;b&lt;g;b++)this.children[b].update(this.matrixWorld,d,e)}};THREE.Quaternion=function(b,d,e,g){this.set(b||0,d||0,e||0,g!==undefined?g:1)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_49

><td class="source">THREE.Quaternion.prototype={set:function(b,d,e,g){this.x=b;this.y=d;this.z=e;this.w=g;return this},copy:function(b){this.x=b.x;this.y=b.y;this.z=b.z;this.w=b.w;return this},setFromEuler:function(b){var d=0.5*Math.PI/360,e=b.x*d,g=b.y*d,h=b.z*d;b=Math.cos(g);g=Math.sin(g);d=Math.cos(-h);h=Math.sin(-h);var o=Math.cos(e);e=Math.sin(e);var n=b*d,q=g*h;this.w=n*o-q*e;this.x=n*e+q*o;this.y=g*d*o+b*h*e;this.z=b*h*o-g*d*e;return this},setFromAxisAngle:function(b,d){var e=d/2,g=Math.sin(e);this.x=b.x*g;this.y=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_50

><td class="source">b.y*g;this.z=b.z*g;this.w=Math.cos(e);return this},calculateW:function(){this.w=-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var b=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);if(b==0)this.w=this.z=this.y=this.x=0;else{b=1/b;this.x*=b;this.y*=b;this.z*=b;this.w*=b}return this},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_51

><td class="source">multiplySelf:function(b){var d=this.x,e=this.y,g=this.z,h=this.w,o=b.x,n=b.y,q=b.z;b=b.w;this.x=d*b+h*o+e*q-g*n;this.y=e*b+h*n+g*o-d*q;this.z=g*b+h*q+d*n-e*o;this.w=h*b-d*o-e*n-g*q;return this},multiply:function(b,d){this.x=b.x*d.w+b.y*d.z-b.z*d.y+b.w*d.x;this.y=-b.x*d.z+b.y*d.w+b.z*d.x+b.w*d.y;this.z=b.x*d.y-b.y*d.x+b.z*d.w+b.w*d.z;this.w=-b.x*d.x-b.y*d.y-b.z*d.z+b.w*d.w;return this},multiplyVector3:function(b,d){d||(d=b);var e=b.x,g=b.y,h=b.z,o=this.x,n=this.y,q=this.z,r=this.w,v=r*e+n*h-q*g,E=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_52

><td class="source">r*g+q*e-o*h,F=r*h+o*g-n*e;e=-o*e-n*g-q*h;d.x=v*r+e*-o+E*-q-F*-n;d.y=E*r+e*-n+F*-o-v*-q;d.z=F*r+e*-q+v*-n-E*-o;return d}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_53

><td class="source">THREE.Quaternion.slerp=function(b,d,e,g){var h=b.w*d.w+b.x*d.x+b.y*d.y+b.z*d.z;if(Math.abs(h)&gt;=1){e.w=b.w;e.x=b.x;e.y=b.y;e.z=b.z;return e}var o=Math.acos(h),n=Math.sqrt(1-h*h);if(Math.abs(n)&lt;0.0010){e.w=0.5*(b.w+d.w);e.x=0.5*(b.x+d.x);e.y=0.5*(b.y+d.y);e.z=0.5*(b.z+d.z);return e}h=Math.sin((1-g)*o)/n;g=Math.sin(g*o)/n;e.w=b.w*h+d.w*g;e.x=b.x*h+d.x*g;e.y=b.y*h+d.y*g;e.z=b.z*h+d.z*g;return e};THREE.Vertex=function(b){this.position=b||new THREE.Vector3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_54

><td class="source">THREE.Face3=function(b,d,e,g,h,o){this.a=b;this.b=d;this.c=e;this.normal=g instanceof THREE.Vector3?g:new THREE.Vector3;this.vertexNormals=g instanceof Array?g:[];this.color=h instanceof THREE.Color?h:new THREE.Color;this.vertexColors=h instanceof Array?h:[];this.vertexTangents=[];this.materials=o instanceof Array?o:[o];this.centroid=new THREE.Vector3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_55

><td class="source">THREE.Face4=function(b,d,e,g,h,o,n){this.a=b;this.b=d;this.c=e;this.d=g;this.normal=h instanceof THREE.Vector3?h:new THREE.Vector3;this.vertexNormals=h instanceof Array?h:[];this.color=o instanceof THREE.Color?o:new THREE.Color;this.vertexColors=o instanceof Array?o:[];this.vertexTangents=[];this.materials=n instanceof Array?n:[n];this.centroid=new THREE.Vector3};THREE.UV=function(b,d){this.set(b||0,d||0)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_56

><td class="source">THREE.UV.prototype={set:function(b,d){this.u=b;this.v=d;return this},copy:function(b){this.set(b.u,b.v);return this}};THREE.Geometry=function(){this.id=&quot;Geometry&quot;+THREE.GeometryIdCounter++;this.vertices=[];this.colors=[];this.faces=[];this.edges=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_57

><td class="source">THREE.Geometry.prototype={computeCentroids:function(){var b,d,e;b=0;for(d=this.faces.length;b&lt;d;b++){e=this.faces[b];e.centroid.set(0,0,0);if(e instanceof THREE.Face3){e.centroid.addSelf(this.vertices[e.a].position);e.centroid.addSelf(this.vertices[e.b].position);e.centroid.addSelf(this.vertices[e.c].position);e.centroid.divideScalar(3)}else if(e instanceof THREE.Face4){e.centroid.addSelf(this.vertices[e.a].position);e.centroid.addSelf(this.vertices[e.b].position);e.centroid.addSelf(this.vertices[e.c].position);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_58

><td class="source">e.centroid.addSelf(this.vertices[e.d].position);e.centroid.divideScalar(4)}}},computeFaceNormals:function(b){var d,e,g,h,o,n,q=new THREE.Vector3,r=new THREE.Vector3;g=0;for(h=this.faces.length;g&lt;h;g++){o=this.faces[g];if(b&amp;&amp;o.vertexNormals.length){q.set(0,0,0);d=0;for(e=o.vertexNormals.length;d&lt;e;d++)q.addSelf(o.vertexNormals[d]);q.divideScalar(3)}else{d=this.vertices[o.a];e=this.vertices[o.b];n=this.vertices[o.c];q.sub(n.position,e.position);r.sub(d.position,e.position);q.crossSelf(r)}q.isZero()||<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_59

><td class="source">q.normalize();o.normal.copy(q)}},computeVertexNormals:function(){var b,d,e,g;if(this.__tmpVertices==undefined){g=this.__tmpVertices=Array(this.vertices.length);b=0;for(d=this.vertices.length;b&lt;d;b++)g[b]=new THREE.Vector3;b=0;for(d=this.faces.length;b&lt;d;b++){e=this.faces[b];if(e instanceof THREE.Face3)e.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];else if(e instanceof THREE.Face4)e.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]}}else{g=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_60

><td class="source">this.__tmpVertices;b=0;for(d=this.vertices.length;b&lt;d;b++)g[b].set(0,0,0)}b=0;for(d=this.faces.length;b&lt;d;b++){e=this.faces[b];if(e instanceof THREE.Face3){g[e.a].addSelf(e.normal);g[e.b].addSelf(e.normal);g[e.c].addSelf(e.normal)}else if(e instanceof THREE.Face4){g[e.a].addSelf(e.normal);g[e.b].addSelf(e.normal);g[e.c].addSelf(e.normal);g[e.d].addSelf(e.normal)}}b=0;for(d=this.vertices.length;b&lt;d;b++)g[b].normalize();b=0;for(d=this.faces.length;b&lt;d;b++){e=this.faces[b];if(e instanceof THREE.Face3){e.vertexNormals[0].copy(g[e.a]);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_61

><td class="source">e.vertexNormals[1].copy(g[e.b]);e.vertexNormals[2].copy(g[e.c])}else if(e instanceof THREE.Face4){e.vertexNormals[0].copy(g[e.a]);e.vertexNormals[1].copy(g[e.b]);e.vertexNormals[2].copy(g[e.c]);e.vertexNormals[3].copy(g[e.d])}}},computeTangents:function(){function b(Y,na,oa,ha,Z,va,qa){q=Y.vertices[na].position;r=Y.vertices[oa].position;v=Y.vertices[ha].position;E=n[Z];F=n[va];H=n[qa];I=r.x-q.x;M=v.x-q.x;N=r.y-q.y;V=v.y-q.y;L=r.z-q.z;ra=v.z-q.z;da=F.u-E.u;pa=H.u-E.u;$=F.v-E.v;K=H.v-E.v;Ia=1/(da*K-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_62

><td class="source">pa*$);R.set((K*I-$*M)*Ia,(K*N-$*V)*Ia,(K*L-$*ra)*Ia);c.set((da*M-pa*I)*Ia,(da*V-pa*N)*Ia,(da*ra-pa*L)*Ia);Fa[na].addSelf(R);Fa[oa].addSelf(R);Fa[ha].addSelf(R);fa[na].addSelf(c);fa[oa].addSelf(c);fa[ha].addSelf(c)}var d,e,g,h,o,n,q,r,v,E,F,H,I,M,N,V,L,ra,da,pa,$,K,Ia,ca,Fa=[],fa=[],R=new THREE.Vector3,c=new THREE.Vector3,ga=new THREE.Vector3,xa=new THREE.Vector3,sa=new THREE.Vector3;d=0;for(e=this.vertices.length;d&lt;e;d++){Fa[d]=new THREE.Vector3;fa[d]=new THREE.Vector3}d=0;for(e=this.faces.length;d&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_63

><td class="source">e;d++){o=this.faces[d];n=this.faceVertexUvs[0][d];if(o instanceof THREE.Face3)b(this,o.a,o.b,o.c,0,1,2);else if(o instanceof THREE.Face4){b(this,o.a,o.b,o.c,0,1,2);b(this,o.a,o.b,o.d,0,1,3)}}var ya=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;];d=0;for(e=this.faces.length;d&lt;e;d++){o=this.faces[d];for(g=0;g&lt;o.vertexNormals.length;g++){sa.copy(o.vertexNormals[g]);h=o[ya[g]];ca=Fa[h];ga.copy(ca);ga.subSelf(sa.multiplyScalar(sa.dot(ca))).normalize();xa.cross(o.vertexNormals[g],ca);h=xa.dot(fa[h]);h=h&lt;0?-1:1;o.vertexTangents[g]=new THREE.Vector4(ga.x,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_64

><td class="source">ga.y,ga.z,h)}}this.hasTangents=!0},computeBoundingBox:function(){var b;if(this.vertices.length&gt;0){this.boundingBox={x:[this.vertices[0].position.x,this.vertices[0].position.x],y:[this.vertices[0].position.y,this.vertices[0].position.y],z:[this.vertices[0].position.z,this.vertices[0].position.z]};for(var d=1,e=this.vertices.length;d&lt;e;d++){b=this.vertices[d];if(b.position.x&lt;this.boundingBox.x[0])this.boundingBox.x[0]=b.position.x;else if(b.position.x&gt;this.boundingBox.x[1])this.boundingBox.x[1]=b.position.x;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_65

><td class="source">if(b.position.y&lt;this.boundingBox.y[0])this.boundingBox.y[0]=b.position.y;else if(b.position.y&gt;this.boundingBox.y[1])this.boundingBox.y[1]=b.position.y;if(b.position.z&lt;this.boundingBox.z[0])this.boundingBox.z[0]=b.position.z;else if(b.position.z&gt;this.boundingBox.z[1])this.boundingBox.z[1]=b.position.z}}},computeBoundingSphere:function(){for(var b=this.boundingSphere===null?0:this.boundingSphere.radius,d=0,e=this.vertices.length;d&lt;e;d++)b=Math.max(b,this.vertices[d].position.length());this.boundingSphere=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_66

><td class="source">{radius:b}},computeEdgeFaces:function(){function b(r,v){return Math.min(r,v)+&quot;_&quot;+Math.max(r,v)}function d(r,v,E){if(r[v]===undefined){r[v]={set:{},array:[]};r[v].set[E]=1;r[v].array.push(E)}else if(r[v].set[E]===undefined){r[v].set[E]=1;r[v].array.push(E)}}var e,g,h,o,n,q={};e=0;for(g=this.faces.length;e&lt;g;e++){n=this.faces[e];if(n instanceof THREE.Face3){h=b(n.a,n.b);d(q,h,e);h=b(n.b,n.c);d(q,h,e);h=b(n.a,n.c);d(q,h,e)}else if(n instanceof THREE.Face4){h=b(n.b,n.d);d(q,h,e);h=b(n.a,n.b);d(q,h,e);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_67

><td class="source">h=b(n.a,n.d);d(q,h,e);h=b(n.b,n.c);d(q,h,e);h=b(n.c,n.d);d(q,h,e)}}e=0;for(g=this.edges.length;e&lt;g;e++){n=this.edges[e];h=n.vertexIndices[0];o=n.vertexIndices[1];n.faceIndices=q[b(h,o)].array;for(h=0;h&lt;n.faceIndices.length;h++){o=n.faceIndices[h];n.faces.push(this.faces[o])}}}};THREE.GeometryIdCounter=0;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_68

><td class="source">THREE.Camera=function(b,d,e,g,h){THREE.Object3D.call(this);this.fov=b||50;this.aspect=d||1;this.near=e||0.1;this.far=g||2E3;this.target=h||new THREE.Object3D;this.useTarget=!0;this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=null;this.updateProjectionMatrix()};THREE.Camera.prototype=new THREE.Object3D;THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.supr=THREE.Object3D.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_69

><td class="source">THREE.Camera.prototype.translate=function(b,d){this.matrix.rotateAxis(d);this.position.addSelf(d.multiplyScalar(b));this.target.position.addSelf(d.multiplyScalar(b))};THREE.Camera.prototype.updateProjectionMatrix=function(){this.projectionMatrix=THREE.Matrix4.makePerspective(this.fov,this.aspect,this.near,this.far)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_70

><td class="source">THREE.Camera.prototype.update=function(b,d,e){if(this.useTarget){this.matrix.lookAt(this.position,this.target.position,this.up);this.matrix.setPosition(this.position);b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse);d=!0}else{this.matrixAutoUpdate&amp;&amp;this.updateMatrix();if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_71

><td class="source">!1;d=!0;THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse)}}for(b=0;b&lt;this.children.length;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.Light=function(b){THREE.Object3D.call(this);this.color=new THREE.Color(b)};THREE.Light.prototype=new THREE.Object3D;THREE.Light.prototype.constructor=THREE.Light;THREE.Light.prototype.supr=THREE.Object3D.prototype;THREE.AmbientLight=function(b){THREE.Light.call(this,b)};THREE.AmbientLight.prototype=new THREE.Light;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_72

><td class="source">THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.DirectionalLight=function(b,d,e,g){THREE.Light.call(this,b);this.position=new THREE.Vector3(0,1,0);this.intensity=d||1;this.distance=e||0;this.castShadow=g!==undefined?g:!1};THREE.DirectionalLight.prototype=new THREE.Light;THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;THREE.PointLight=function(b,d,e){THREE.Light.call(this,b);this.position=new THREE.Vector3;this.intensity=d||1;this.distance=e||0};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_73

><td class="source">THREE.PointLight.prototype=new THREE.Light;THREE.PointLight.prototype.constructor=THREE.PointLight;THREE.LensFlare=function(b,d,e,g){THREE.Object3D.call(this);this.positionScreen=new THREE.Vector3;this.lensFlares=[];this.customUpdateCallback=undefined;b!==undefined&amp;&amp;this.add(b,d,e,g)};THREE.LensFlare.prototype=new THREE.Object3D;THREE.LensFlare.prototype.constructor=THREE.LensFlare;THREE.LensFlare.prototype.supr=THREE.Object3D.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_74

><td class="source">THREE.LensFlare.prototype.add=function(b,d,e,g){d===undefined&amp;&amp;(d=-1);e===undefined&amp;&amp;(e=0);if(g===undefined)g=THREE.BillboardBlending;e=Math.min(e,Math.max(0,e));this.lensFlares.push({texture:b,size:d,distance:e,x:0,y:0,z:0,scale:1,rotation:1,opacity:1,blending:g})};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_75

><td class="source">THREE.LensFlare.prototype.updateLensFlares=function(){var b,d=this.lensFlares.length,e,g=-this.positionScreen.x*2,h=-this.positionScreen.y*2;for(b=0;b&lt;d;b++){e=this.lensFlares[b];e.x=this.positionScreen.x+g*e.distance;e.y=this.positionScreen.y+h*e.distance;e.wantedRotation=e.x*Math.PI*0.25;e.rotation+=(e.wantedRotation-e.rotation)*0.25}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_76

><td class="source">THREE.Material=function(b){this.id=THREE.MaterialCounter.value++;b=b||{};this.opacity=b.opacity!==undefined?b.opacity:1;this.transparent=b.transparent!==undefined?b.transparent:!1;this.blending=b.blending!==undefined?b.blending:THREE.NormalBlending;this.depthTest=b.depthTest!==undefined?b.depthTest:!0};THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NormalBlending=0;THREE.AdditiveBlending=1;THREE.SubtractiveBlending=2;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_77

><td class="source">THREE.MultiplyBlending=3;THREE.AdditiveAlphaBlending=4;THREE.MaterialCounter={value:0};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.LatitudeReflectionMapping=function(){};THREE.LatitudeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.UVMapping=function(){};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_78

><td class="source">THREE.LineBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.linewidth=b.linewidth!==undefined?b.linewidth:1;this.linecap=b.linecap!==undefined?b.linecap:&quot;round&quot;;this.linejoin=b.linejoin!==undefined?b.linejoin:&quot;round&quot;;this.vertexColors=b.vertexColors?b.vertexColors:!1};THREE.LineBasicMaterial.prototype=new THREE.Material;THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_79

><td class="source">THREE.MeshBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_80

><td class="source">b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:&quot;round&quot;;this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:&quot;round&quot;;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_81

><td class="source">b.morphTargets:!1};THREE.MeshBasicMaterial.prototype=new THREE.Material;THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_82

><td class="source">THREE.MeshLambertMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_83

><td class="source">b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:&quot;round&quot;;this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:&quot;round&quot;;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_84

><td class="source">b.morphTargets:!1};THREE.MeshLambertMaterial.prototype=new THREE.Material;THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_85

><td class="source">THREE.MeshPhongMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.ambient=b.ambient!==undefined?new THREE.Color(b.ambient):new THREE.Color(328965);this.specular=b.specular!==undefined?new THREE.Color(b.specular):new THREE.Color(1118481);this.shininess=b.shininess!==undefined?b.shininess:30;this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_86

><td class="source">b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:0.98;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:&quot;round&quot;;this.wireframeLinejoin=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_87

><td class="source">b.wireframeLinejoin!==undefined?b.wireframeLinejoin:&quot;round&quot;;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?b.morphTargets:!1};THREE.MeshPhongMaterial.prototype=new THREE.Material;THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_88

><td class="source">THREE.MeshDepthMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1};THREE.MeshDepthMaterial.prototype=new THREE.Material;THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_89

><td class="source">THREE.MeshNormalMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.shading=b.shading?b.shading:THREE.FlatShading;this.wireframe=b.wireframe?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth?b.wireframeLinewidth:1};THREE.MeshNormalMaterial.prototype=new THREE.Material;THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshFaceMaterial=function(){};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_90

><td class="source">THREE.MeshShaderMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.fragmentShader=b.fragmentShader!==undefined?b.fragmentShader:&quot;void main() {}&quot;;this.vertexShader=b.vertexShader!==undefined?b.vertexShader:&quot;void main() {}&quot;;this.uniforms=b.uniforms!==undefined?b.uniforms:{};this.attributes=b.attributes;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_91

><td class="source">1;this.fog=b.fog!==undefined?b.fog:!1;this.lights=b.lights!==undefined?b.lights:!1;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==undefined?b.morphTargets:!1};THREE.MeshShaderMaterial.prototype=new THREE.Material;THREE.MeshShaderMaterial.prototype.constructor=THREE.MeshShaderMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_92

><td class="source">THREE.ParticleBasicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.size=b.size!==undefined?b.size:1;this.sizeAttenuation=b.sizeAttenuation!==undefined?b.sizeAttenuation:!0;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1};THREE.ParticleBasicMaterial.prototype=new THREE.Material;THREE.ParticleBasicMaterial.prototype.constructor=THREE.ParticleBasicMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_93

><td class="source">THREE.ShadowVolumeDynamicMaterial=function(b){THREE.Material.call(this,b);b=b||{};this.color=b.color!==undefined?new THREE.Color(b.color):new THREE.Color(16777215);this.map=b.map!==undefined?b.map:null;this.lightMap=b.lightMap!==undefined?b.lightMap:null;this.envMap=b.envMap!==undefined?b.envMap:null;this.combine=b.combine!==undefined?b.combine:THREE.MultiplyOperation;this.reflectivity=b.reflectivity!==undefined?b.reflectivity:1;this.refractionRatio=b.refractionRatio!==undefined?b.refractionRatio:<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_94

><td class="source">0.98;this.shading=b.shading!==undefined?b.shading:THREE.SmoothShading;this.wireframe=b.wireframe!==undefined?b.wireframe:!1;this.wireframeLinewidth=b.wireframeLinewidth!==undefined?b.wireframeLinewidth:1;this.wireframeLinecap=b.wireframeLinecap!==undefined?b.wireframeLinecap:&quot;round&quot;;this.wireframeLinejoin=b.wireframeLinejoin!==undefined?b.wireframeLinejoin:&quot;round&quot;;this.vertexColors=b.vertexColors!==undefined?b.vertexColors:!1;this.skinning=b.skinning!==undefined?b.skinning:!1;this.morphTargets=b.morphTargets!==<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_95

><td class="source">undefined?b.morphTargets:!1};THREE.ShadowVolumeDynamicMaterial.prototype=new THREE.Material;THREE.ShadowVolumeDynamicMaterial.prototype.constructor=THREE.ShadowVolumeDynamicMaterial;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_96

><td class="source">THREE.Texture=function(b,d,e,g,h,o){this.image=b;this.mapping=d!==undefined?d:new THREE.UVMapping;this.wrapS=e!==undefined?e:THREE.ClampToEdgeWrapping;this.wrapT=g!==undefined?g:THREE.ClampToEdgeWrapping;this.magFilter=h!==undefined?h:THREE.LinearFilter;this.minFilter=o!==undefined?o:THREE.LinearMipMapLinearFilter;this.needsUpdate=!1};THREE.Texture.prototype={clone:function(){return new THREE.Texture(this.image,this.mapping,this.wrapS,this.wrapT,this.magFilter,this.minFilter)}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_97

><td class="source">THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.RepeatWrapping=0;THREE.ClampToEdgeWrapping=1;THREE.MirroredRepeatWrapping=2;THREE.NearestFilter=3;THREE.NearestMipMapNearestFilter=4;THREE.NearestMipMapLinearFilter=5;THREE.LinearFilter=6;THREE.LinearMipMapNearestFilter=7;THREE.LinearMipMapLinearFilter=8;THREE.ByteType=9;THREE.UnsignedByteType=10;THREE.ShortType=11;THREE.UnsignedShortType=12;THREE.IntType=13;THREE.UnsignedIntType=14;THREE.FloatType=15;THREE.AlphaFormat=16;THREE.RGBFormat=17;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_98

><td class="source">THREE.RGBAFormat=18;THREE.LuminanceFormat=19;THREE.LuminanceAlphaFormat=20;THREE.Particle=function(b){THREE.Object3D.call(this);this.materials=b instanceof Array?b:[b]};THREE.Particle.prototype=new THREE.Object3D;THREE.Particle.prototype.constructor=THREE.Particle;THREE.ParticleSystem=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.sortParticles=!1};THREE.ParticleSystem.prototype=new THREE.Object3D;THREE.ParticleSystem.prototype.constructor=THREE.ParticleSystem;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_99

><td class="source">THREE.Line=function(b,d,e){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.type=e!=undefined?e:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=new THREE.Object3D;THREE.Line.prototype.constructor=THREE.Line;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_100

><td class="source">THREE.Mesh=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d&amp;&amp;d.length?d:[d];this.flipSided=!1;this.doubleSided=!1;this.overdraw=!1;if(this.geometry){this.geometry.boundingSphere||this.geometry.computeBoundingSphere();this.boundRadius=b.boundingSphere.radius;if(this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var e=0;e&lt;this.geometry.morphTargets.length;e++){this.morphTargetInfluences.push(0);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_101

><td class="source">this.morphTargetDictionary[this.geometry.morphTargets[e].name]=e}}}};THREE.Mesh.prototype=new THREE.Object3D;THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.supr=THREE.Object3D.prototype;THREE.Mesh.prototype.getMorphTargetIndexByName=function(b){if(this.morphTargetDictionary[b]!==undefined)return this.morphTargetDictionary[b];console.log(&quot;THREE.Mesh.getMorphTargetIndexByName: morph target &quot;+b+&quot; does not exist. Returning 0.&quot;);return 0};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_102

><td class="source">THREE.Bone=function(b){THREE.Object3D.call(this);this.skin=b;this.skinMatrix=new THREE.Matrix4;this.hasNoneBoneChildren=!1};THREE.Bone.prototype=new THREE.Object3D;THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.supr=THREE.Object3D.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_103

><td class="source">THREE.Bone.prototype.update=function(b,d,e){this.matrixAutoUpdate&amp;&amp;(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.skinMatrix.multiply(b,this.matrix):this.skinMatrix.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g,h=this.children.length;if(this.hasNoneBoneChildren){this.matrixWorld.multiply(this.skin.matrixWorld,this.skinMatrix);for(g=0;g&lt;h;g++){b=this.children[g];b instanceof THREE.Bone?b.update(this.skinMatrix,d,e):b.update(this.matrixWorld,!0,e)}}else for(g=0;g&lt;h;g++)this.children[g].update(this.skinMatrix,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_104

><td class="source">d,e)};THREE.Bone.prototype.addChild=function(b){if(this.children.indexOf(b)===-1){b.parent!==undefined&amp;&amp;b.parent.removeChild(b);b.parent=this;this.children.push(b);if(!(b instanceof THREE.Bone))this.hasNoneBoneChildren=!0}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_105

><td class="source">THREE.SkinnedMesh=function(b,d){THREE.Mesh.call(this,b,d);this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var e,g,h,o,n,q;if(this.geometry.bones!==undefined){for(e=0;e&lt;this.geometry.bones.length;e++){h=this.geometry.bones[e];o=h.pos;n=h.rotq;q=h.scl;g=this.addBone();g.name=h.name;g.position.set(o[0],o[1],o[2]);g.quaternion.set(n[0],n[1],n[2],n[3]);g.useQuaternion=!0;q!==undefined?g.scale.set(q[0],q[1],q[2]):g.scale.set(1,1,1)}for(e=0;e&lt;this.bones.length;e++){h=this.geometry.bones[e];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_106

><td class="source">g=this.bones[e];h.parent===-1?this.addChild(g):this.bones[h.parent].addChild(g)}this.boneMatrices=new Float32Array(16*this.bones.length);this.pose()}};THREE.SkinnedMesh.prototype=new THREE.Mesh;THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_107

><td class="source">THREE.SkinnedMesh.prototype.update=function(b,d,e){if(this.visible){this.matrixAutoUpdate&amp;&amp;(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g,h=this.children.length;for(g=0;g&lt;h;g++){b=this.children[g];b instanceof THREE.Bone?b.update(this.identityMatrix,!1,e):b.update(this.matrixWorld,d,e)}e=this.bones.length;ba=this.bones;bm=this.boneMatrices;for(d=0;d&lt;e;d++)ba[d].skinMatrix.flattenToArrayOffset(bm,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_108

><td class="source">d*16)}};THREE.SkinnedMesh.prototype.addBone=function(b){b===undefined&amp;&amp;(b=new THREE.Bone(this));this.bones.push(b);return b};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_109

><td class="source">THREE.SkinnedMesh.prototype.pose=function(){this.update(undefined,!0);for(var b,d=[],e=0;e&lt;this.bones.length;e++){b=this.bones[e];d.push(THREE.Matrix4.makeInvert(b.skinMatrix));b.skinMatrix.flattenToArrayOffset(this.boneMatrices,e*16)}if(this.geometry.skinVerticesA===undefined){this.geometry.skinVerticesA=[];this.geometry.skinVerticesB=[];var g;for(b=0;b&lt;this.geometry.skinIndices.length;b++){e=this.geometry.vertices[b].position;var h=this.geometry.skinIndices[b].x,o=this.geometry.skinIndices[b].y;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_110

><td class="source">g=new THREE.Vector3(e.x,e.y,e.z);this.geometry.skinVerticesA.push(d[h].multiplyVector3(g));g=new THREE.Vector3(e.x,e.y,e.z);this.geometry.skinVerticesB.push(d[o].multiplyVector3(g));if(this.geometry.skinWeights[b].x+this.geometry.skinWeights[b].y!==1){e=(1-(this.geometry.skinWeights[b].x+this.geometry.skinWeights[b].y))*0.5;this.geometry.skinWeights[b].x+=e;this.geometry.skinWeights[b].y+=e}}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_111

><td class="source">THREE.Ribbon=function(b,d){THREE.Object3D.call(this);this.geometry=b;this.materials=d instanceof Array?d:[d];this.flipSided=!1;this.doubleSided=!1};THREE.Ribbon.prototype=new THREE.Object3D;THREE.Ribbon.prototype.constructor=THREE.Ribbon;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_112

><td class="source">THREE.Sound=function(b,d,e,g){THREE.Object3D.call(this);this.isLoaded=!1;this.isAddedToDOM=!1;this.isPlaying=!1;this.duration=-1;this.radius=d!==undefined?Math.abs(d):100;this.volume=Math.min(1,Math.max(0,e!==undefined?e:1));this.domElement=document.createElement(&quot;audio&quot;);this.domElement.volume=0;this.domElement.pan=0;this.domElement.loop=g!==undefined?g:!0;this.sources=b instanceof Array?b:[b];var h;e=this.sources.length;for(b=0;b&lt;e;b++){d=this.sources[b];d.toLowerCase();if(d.indexOf(&quot;.mp3&quot;)!==-1)h=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_113

><td class="source">&quot;audio/mpeg&quot;;else if(d.indexOf(&quot;.ogg&quot;)!==-1)h=&quot;audio/ogg&quot;;else d.indexOf(&quot;.wav&quot;)!==-1&amp;&amp;(h=&quot;audio/wav&quot;);if(this.domElement.canPlayType(h)){h=document.createElement(&quot;source&quot;);h.src=this.sources[b];this.domElement.THREESound=this;this.domElement.appendChild(h);this.domElement.addEventListener(&quot;canplay&quot;,this.onLoad,!0);this.domElement.load();break}}};THREE.Sound.prototype=new THREE.Object3D;THREE.Sound.prototype.constructor=THREE.Sound;THREE.Sound.prototype.supr=THREE.Object3D.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_114

><td class="source">THREE.Sound.prototype.onLoad=function(){var b=this.THREESound;if(!b.isLoaded){this.removeEventListener(&quot;canplay&quot;,this.onLoad,!0);b.isLoaded=!0;b.duration=this.duration;b.isPlaying&amp;&amp;b.play()}};THREE.Sound.prototype.addToDOM=function(b){this.isAddedToDOM=!0;b.appendChild(this.domElement)};THREE.Sound.prototype.play=function(b){this.isPlaying=!0;if(this.isLoaded){this.domElement.play();if(b)this.domElement.currentTime=b%this.duration}};THREE.Sound.prototype.pause=function(){this.isPlaying=!1;this.domElement.pause()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_115

><td class="source">THREE.Sound.prototype.stop=function(){this.isPlaying=!1;this.domElement.pause();this.domElement.currentTime=0};THREE.Sound.prototype.calculateVolumeAndPan=function(b){b=b.length();this.domElement.volume=b&lt;=this.radius?this.volume*(1-b/this.radius):0};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_116

><td class="source">THREE.Sound.prototype.update=function(b,d,e){if(this.matrixAutoUpdate){this.matrix.setPosition(this.position);d=!0}if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}var g=this.children.length;for(b=0;b&lt;g;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.LOD=function(){THREE.Object3D.call(this);this.LODs=[]};THREE.LOD.prototype=new THREE.Object3D;THREE.LOD.prototype.constructor=THREE.LOD;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_117

><td class="source">THREE.LOD.prototype.supr=THREE.Object3D.prototype;THREE.LOD.prototype.add=function(b,d){d===undefined&amp;&amp;(d=0);d=Math.abs(d);for(var e=0;e&lt;this.LODs.length;e++)if(d&lt;this.LODs[e].visibleAtDistance)break;this.LODs.splice(e,0,{visibleAtDistance:d,object3D:b});this.addChild(b)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_118

><td class="source">THREE.LOD.prototype.update=function(b,d,e){this.matrixAutoUpdate&amp;&amp;(d|=this.updateMatrix());if(d||this.matrixWorldNeedsUpdate){b?this.matrixWorld.multiply(b,this.matrix):this.matrixWorld.copy(this.matrix);this.matrixWorldNeedsUpdate=!1;d=!0}if(this.LODs.length&gt;1){b=e.matrixWorldInverse;b=-(b.n31*this.position.x+b.n32*this.position.y+b.n33*this.position.z+b.n34);this.LODs[0].object3D.visible=!0;for(var g=1;g&lt;this.LODs.length;g++)if(b&gt;=this.LODs[g].visibleAtDistance){this.LODs[g-1].object3D.visible=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_119

><td class="source">!1;this.LODs[g].object3D.visible=!0}else break;for(;g&lt;this.LODs.length;g++)this.LODs[g].object3D.visible=!1}for(b=0;b&lt;this.children.length;b++)this.children[b].update(this.matrixWorld,d,e)};THREE.ShadowVolume=function(b,d){if(b instanceof THREE.Mesh){THREE.Mesh.call(this,b.geometry,d?[new THREE.ShadowVolumeDynamicMaterial]:[new THREE.ShadowVolumeDynamicMaterial]);b.addChild(this)}else THREE.Mesh.call(this,b,d?[new THREE.ShadowVolumeDynamicMaterial]:[new THREE.ShadowVolumeDynamicMaterial]);this.calculateShadowVolumeGeometry()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_120

><td class="source">THREE.ShadowVolume.prototype=new THREE.Mesh;THREE.ShadowVolume.prototype.constructor=THREE.ShadowVolume;THREE.ShadowVolume.prototype.supr=THREE.Mesh.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_121

><td class="source">THREE.ShadowVolume.prototype.calculateShadowVolumeGeometry=function(){if(this.geometry.edges&amp;&amp;this.geometry.edges.length){var b,d,e,g,h,o,n,q,r,v,E,F,H,I,M=new THREE.Geometry;M.vertices=this.geometry.vertices;g=M.faces=this.geometry.faces;var N=M.egdes=this.geometry.edges,V=M.edgeFaces=[];h=0;var L=[];b=0;for(d=g.length;b&lt;d;b++){e=g[b];L.push(h);h+=e instanceof THREE.Face3?3:4;e.vertexNormals[0]=e.normal;e.vertexNormals[1]=e.normal;e.vertexNormals[2]=e.normal;if(e instanceof THREE.Face4)e.vertexNormals[3]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_122

><td class="source">e.normal}b=0;for(d=N.length;b&lt;d;b++){q=N[b];e=q.faces[0];g=q.faces[1];h=q.faceIndices[0];o=q.faceIndices[1];n=q.vertexIndices[0];q=q.vertexIndices[1];if(e.a===n){r=&quot;a&quot;;E=L[h]+0}else if(e.b===n){r=&quot;b&quot;;E=L[h]+1}else if(e.c===n){r=&quot;c&quot;;E=L[h]+2}else if(e.d===n){r=&quot;d&quot;;E=L[h]+3}if(e.a===q){r+=&quot;a&quot;;F=L[h]+0}else if(e.b===q){r+=&quot;b&quot;;F=L[h]+1}else if(e.c===q){r+=&quot;c&quot;;F=L[h]+2}else if(e.d===q){r+=&quot;d&quot;;F=L[h]+3}if(g.a===n){v=&quot;a&quot;;H=L[o]+0}else if(g.b===n){v=&quot;b&quot;;H=L[o]+1}else if(g.c===n){v=&quot;c&quot;;H=L[o]+2}else if(g.d===<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_123

><td class="source">n){v=&quot;d&quot;;H=L[o]+3}if(g.a===q){v+=&quot;a&quot;;I=L[o]+0}else if(g.b===q){v+=&quot;b&quot;;I=L[o]+1}else if(g.c===q){v+=&quot;c&quot;;I=L[o]+2}else if(g.d===q){v+=&quot;d&quot;;I=L[o]+3}if(r===&quot;ac&quot;||r===&quot;ad&quot;||r===&quot;ca&quot;||r===&quot;da&quot;){if(E&gt;F){e=E;E=F;F=e}}else if(E&lt;F){e=E;E=F;F=e}if(v===&quot;ac&quot;||v===&quot;ad&quot;||v===&quot;ca&quot;||v===&quot;da&quot;){if(H&gt;I){e=H;H=I;I=e}}else if(H&lt;I){e=H;H=I;I=e}e=new THREE.Face4(E,F,H,I);e.normal.set(1,0,0);V.push(e)}this.geometry=M}else this.calculateShadowVolumeGeometryWithoutEdgeInfo(this.geometry)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_124

><td class="source">THREE.ShadowVolume.prototype.calculateShadowVolumeGeometryWithoutEdgeInfo=function(b){this.geometry=new THREE.Geometry;this.geometry.boundingSphere=b.boundingSphere;this.geometry.edgeFaces=[];var d=this.geometry.vertices,e=this.geometry.faces,g=this.geometry.edgeFaces,h=b.faces;b=b.vertices;var o=h.length,n,q,r,v,E,F=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;];for(r=0;r&lt;o;r++){q=d.length;n=h[r];if(n instanceof THREE.Face4){v=4;q=new THREE.Face4(q,q+1,q+2,q+3)}else{v=3;q=new THREE.Face3(q,q+1,q+2)}q.normal.copy(n.normal);e.push(q);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_125

><td class="source">for(q=0;q&lt;v;q++){E=b[n[F[q]]];d.push(new THREE.Vertex(E.position.clone()))}}for(o=0;o&lt;h.length-1;o++){b=e[o];for(n=o+1;n&lt;h.length;n++){q=e[n];q=this.facesShareEdge(d,b,q);if(q!==undefined){q=new THREE.Face4(q.indices[0],q.indices[3],q.indices[2],q.indices[1]);q.normal.set(1,0,0);g.push(q)}}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_126

><td class="source">THREE.ShadowVolume.prototype.facesShareEdge=function(b,d,e){var g,h,o,n,q,r,v,E,F,H,I,M,N,V=0,L=[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;];g=d instanceof THREE.Face4?4:3;h=e instanceof THREE.Face4?4:3;for(M=0;M&lt;g;M++){o=d[L[M]];q=b[o];for(N=0;N&lt;h;N++){n=e[L[N]];r=b[n];if(Math.abs(q.position.x-r.position.x)&lt;1.0E-4&amp;&amp;Math.abs(q.position.y-r.position.y)&lt;1.0E-4&amp;&amp;Math.abs(q.position.z-r.position.z)&lt;1.0E-4){V++;if(V===1){v=q;E=r;F=o;H=n;I=L[M]}if(V===2){I+=L[M];return I===&quot;ad&quot;||I===&quot;ac&quot;?{faces:[d,e],vertices:[v,E,r,q],indices:[F,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_127

><td class="source">H,n,o],vertexTypes:[1,2,2,1],extrudable:!0}:{faces:[d,e],vertices:[v,q,r,E],indices:[F,o,n,H],vertexTypes:[1,1,2,2],extrudable:!0}}}}}};THREE.Scene=function(){THREE.Object3D.call(this);this.matrixAutoUpdate=!1;this.collisions=this.fog=null;this.objects=[];this.lights=[];this.sounds=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=new THREE.Object3D;THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.supr=THREE.Object3D.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_128

><td class="source">THREE.Scene.prototype.addChild=function(b){this.supr.addChild.call(this,b);this.addChildRecurse(b)};THREE.Scene.prototype.addChildRecurse=function(b){if(b instanceof THREE.Light)this.lights.indexOf(b)===-1&amp;&amp;this.lights.push(b);else if(b instanceof THREE.Sound)this.sounds.indexOf(b)===-1&amp;&amp;this.sounds.push(b);else if(!(b instanceof THREE.Camera||b instanceof THREE.Bone)&amp;&amp;this.objects.indexOf(b)===-1){this.objects.push(b);this.__objectsAdded.push(b)}for(var d=0;d&lt;b.children.length;d++)this.addChildRecurse(b.children[d])};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_129

><td class="source">THREE.Scene.prototype.removeChild=function(b){this.supr.removeChild.call(this,b);this.removeChildRecurse(b)};THREE.Scene.prototype.removeChildRecurse=function(b){if(b instanceof THREE.Light){var d=this.lights.indexOf(b);d!==-1&amp;&amp;this.lights.splice(d,1)}else if(b instanceof THREE.Sound){d=this.sounds.indexOf(b);d!==-1&amp;&amp;this.sounds.splice(d,1)}else if(!(b instanceof THREE.Camera)){d=this.objects.indexOf(b);if(d!==-1){this.objects.splice(d,1);this.__objectsRemoved.push(b)}}for(d=0;d&lt;b.children.length;d++)this.removeChildRecurse(b.children[d])};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_130

><td class="source">THREE.Scene.prototype.addObject=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeObject=THREE.Scene.prototype.removeChild;THREE.Scene.prototype.addLight=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeLight=THREE.Scene.prototype.removeChild;THREE.Fog=function(b,d,e){this.color=new THREE.Color(b);this.near=d||1;this.far=e||1E3};THREE.FogExp2=function(b,d){this.color=new THREE.Color(b);this.density=d!==undefined?d:2.5E-4};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_131

><td class="source">THREE.Projector=function(){function b(){var R=r[q]=r[q]||new THREE.RenderableVertex;q++;return R}function d(R,c){return c.z-R.z}function e(R,c){var ga=0,xa=1,sa=R.z+R.w,ya=c.z+c.w,Y=-R.z+R.w,na=-c.z+c.w;if(sa&gt;=0&amp;&amp;ya&gt;=0&amp;&amp;Y&gt;=0&amp;&amp;na&gt;=0)return!0;else if(sa&lt;0&amp;&amp;ya&lt;0||Y&lt;0&amp;&amp;na&lt;0)return!1;else{if(sa&lt;0)ga=Math.max(ga,sa/(sa-ya));else ya&lt;0&amp;&amp;(xa=Math.min(xa,sa/(sa-ya)));if(Y&lt;0)ga=Math.max(ga,Y/(Y-na));else na&lt;0&amp;&amp;(xa=Math.min(xa,Y/(Y-na)));if(xa&lt;ga)return!1;else{R.lerpSelf(c,ga);c.lerpSelf(R,1-xa);return!0}}}var g,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_132

><td class="source">h,o=[],n,q,r=[],v,E,F=[],H,I=[],M,N,V=[],L,ra,da=[],pa=new THREE.Vector4,$=new THREE.Vector4,K=new THREE.Matrix4,Ia=new THREE.Matrix4,ca=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],Fa=new THREE.Vector4,fa=new THREE.Vector4;this.projectVector=function(R,c){K.multiply(c.projectionMatrix,c.matrixWorldInverse);K.multiplyVector3(R);return R};this.unprojectVector=function(R,c){K.multiply(c.matrixWorld,THREE.Matrix4.makeInvert(c.projectionMatrix));<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_133

><td class="source">K.multiplyVector3(R);return R};this.projectObjects=function(R,c,ga){c=[];var xa,sa,ya;h=0;sa=R.objects;R=0;for(xa=sa.length;R&lt;xa;R++){ya=sa[R];var Y;if(!(Y=!ya.visible))if(Y=ya instanceof THREE.Mesh){a:{Y=void 0;for(var na=ya.matrixWorld,oa=-ya.geometry.boundingSphere.radius*Math.max(ya.scale.x,Math.max(ya.scale.y,ya.scale.z)),ha=0;ha&lt;6;ha++){Y=ca[ha].x*na.n14+ca[ha].y*na.n24+ca[ha].z*na.n34+ca[ha].w;if(Y&lt;=oa){Y=!1;break a}}Y=!0}Y=!Y}if(!Y){Y=o[h]=o[h]||new THREE.RenderableObject;h++;g=Y;pa.copy(ya.position);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_134

><td class="source">K.multiplyVector3(pa);g.object=ya;g.z=pa.z;c.push(g)}}ga&amp;&amp;c.sort(d);return c};this.projectScene=function(R,c,ga){var xa=[],sa=c.near,ya=c.far,Y,na,oa,ha,Z,va,qa,za,Aa,aa,Pa,Ta,Xa,Ua,Sa,S,J;ra=N=H=E=0;c.matrixAutoUpdate&amp;&amp;c.update(undefined,!0);R.update(undefined,!1,c);K.multiply(c.projectionMatrix,c.matrixWorldInverse);ca[0].set(K.n41-K.n11,K.n42-K.n12,K.n43-K.n13,K.n44-K.n14);ca[1].set(K.n41+K.n11,K.n42+K.n12,K.n43+K.n13,K.n44+K.n14);ca[2].set(K.n41+K.n21,K.n42+K.n22,K.n43+K.n23,K.n44+K.n24);ca[3].set(K.n41-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_135

><td class="source">K.n21,K.n42-K.n22,K.n43-K.n23,K.n44-K.n24);ca[4].set(K.n41-K.n31,K.n42-K.n32,K.n43-K.n33,K.n44-K.n34);ca[5].set(K.n41+K.n31,K.n42+K.n32,K.n43+K.n33,K.n44+K.n34);for(Y=0;Y&lt;6;Y++){Aa=ca[Y];Aa.divideScalar(Math.sqrt(Aa.x*Aa.x+Aa.y*Aa.y+Aa.z*Aa.z))}Aa=this.projectObjects(R,c,!0);R=0;for(Y=Aa.length;R&lt;Y;R++){aa=Aa[R].object;if(aa.visible){Pa=aa.matrixWorld;Ta=aa.matrixRotationWorld;Xa=aa.materials;Ua=aa.overdraw;q=0;if(aa instanceof THREE.Mesh){Sa=aa.geometry;ha=Sa.vertices;S=Sa.faces;Sa=Sa.faceVertexUvs;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_136

><td class="source">na=0;for(oa=ha.length;na&lt;oa;na++){n=b();n.positionWorld.copy(ha[na].position);Pa.multiplyVector3(n.positionWorld);n.positionScreen.copy(n.positionWorld);K.multiplyVector4(n.positionScreen);n.positionScreen.x/=n.positionScreen.w;n.positionScreen.y/=n.positionScreen.w;n.visible=n.positionScreen.z&gt;sa&amp;&amp;n.positionScreen.z&lt;ya}ha=0;for(na=S.length;ha&lt;na;ha++){oa=S[ha];if(oa instanceof THREE.Face3){Z=r[oa.a];va=r[oa.b];qa=r[oa.c];if(Z.visible&amp;&amp;va.visible&amp;&amp;qa.visible&amp;&amp;(aa.doubleSided||aa.flipSided!=(qa.positionScreen.x-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_137

><td class="source">Z.positionScreen.x)*(va.positionScreen.y-Z.positionScreen.y)-(qa.positionScreen.y-Z.positionScreen.y)*(va.positionScreen.x-Z.positionScreen.x)&lt;0)){za=F[E]=F[E]||new THREE.RenderableFace3;E++;v=za;v.v1.copy(Z);v.v2.copy(va);v.v3.copy(qa)}else continue}else if(oa instanceof THREE.Face4){Z=r[oa.a];va=r[oa.b];qa=r[oa.c];za=r[oa.d];if(Z.visible&amp;&amp;va.visible&amp;&amp;qa.visible&amp;&amp;za.visible&amp;&amp;(aa.doubleSided||aa.flipSided!=((za.positionScreen.x-Z.positionScreen.x)*(va.positionScreen.y-Z.positionScreen.y)-(za.positionScreen.y-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_138

><td class="source">Z.positionScreen.y)*(va.positionScreen.x-Z.positionScreen.x)&lt;0||(va.positionScreen.x-qa.positionScreen.x)*(za.positionScreen.y-qa.positionScreen.y)-(va.positionScreen.y-qa.positionScreen.y)*(za.positionScreen.x-qa.positionScreen.x)&lt;0))){J=I[H]=I[H]||new THREE.RenderableFace4;H++;v=J;v.v1.copy(Z);v.v2.copy(va);v.v3.copy(qa);v.v4.copy(za)}else continue}v.normalWorld.copy(oa.normal);Ta.multiplyVector3(v.normalWorld);v.centroidWorld.copy(oa.centroid);Pa.multiplyVector3(v.centroidWorld);v.centroidScreen.copy(v.centroidWorld);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_139

><td class="source">K.multiplyVector3(v.centroidScreen);qa=oa.vertexNormals;Z=0;for(va=qa.length;Z&lt;va;Z++){za=v.vertexNormalsWorld[Z];za.copy(qa[Z]);Ta.multiplyVector3(za)}Z=0;for(va=Sa.length;Z&lt;va;Z++)if(J=Sa[Z][ha]){qa=0;for(za=J.length;qa&lt;za;qa++)v.uvs[Z][qa]=J[qa]}v.meshMaterials=Xa;v.faceMaterials=oa.materials;v.overdraw=Ua;v.z=v.centroidScreen.z;xa.push(v)}}else if(aa instanceof THREE.Line){Ia.multiply(K,Pa);ha=aa.geometry.vertices;Z=b();Z.positionScreen.copy(ha[0].position);Ia.multiplyVector4(Z.positionScreen);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_140

><td class="source">na=1;for(oa=ha.length;na&lt;oa;na++){Z=b();Z.positionScreen.copy(ha[na].position);Ia.multiplyVector4(Z.positionScreen);va=r[q-2];Fa.copy(Z.positionScreen);fa.copy(va.positionScreen);if(e(Fa,fa)){Fa.multiplyScalar(1/Fa.w);fa.multiplyScalar(1/fa.w);Pa=V[N]=V[N]||new THREE.RenderableLine;N++;M=Pa;M.v1.positionScreen.copy(Fa);M.v2.positionScreen.copy(fa);M.z=Math.max(Fa.z,fa.z);M.materials=aa.materials;xa.push(M)}}}else if(aa instanceof THREE.Particle){$.set(aa.matrixWorld.n14,aa.matrixWorld.n24,aa.matrixWorld.n34,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_141

><td class="source">1);K.multiplyVector4($);$.z/=$.w;if($.z&gt;0&amp;&amp;$.z&lt;1){Pa=da[ra]=da[ra]||new THREE.RenderableParticle;ra++;L=Pa;L.x=$.x/$.w;L.y=$.y/$.w;L.z=$.z;L.rotation=aa.rotation.z;L.scale.x=aa.scale.x*Math.abs(L.x-($.x+c.projectionMatrix.n11)/($.w+c.projectionMatrix.n14));L.scale.y=aa.scale.y*Math.abs(L.y-($.y+c.projectionMatrix.n22)/($.w+c.projectionMatrix.n24));L.materials=aa.materials;xa.push(L)}}}}ga&amp;&amp;xa.sort(d);return xa}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_142

><td class="source">THREE.SoundRenderer=function(){this.volume=1;this.domElement=document.createElement(&quot;div&quot;);this.domElement.id=&quot;THREESound&quot;;this.cameraPosition=new THREE.Vector3;this.soundPosition=new THREE.Vector3;this.render=function(b,d,e){e&amp;&amp;b.update(undefined,!1,d);e=b.sounds;var g,h=e.length;for(g=0;g&lt;h;g++){b=e[g];this.soundPosition.set(b.matrixWorld.n14,b.matrixWorld.n24,b.matrixWorld.n34);this.soundPosition.subSelf(d.position);if(b.isPlaying&amp;&amp;b.isLoaded){b.isAddedToDOM||b.addToDOM(this.domElement);b.calculateVolumeAndPan(this.soundPosition)}}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_143

><td class="source">THREE.ShaderChunk={fog_pars_fragment:&quot;#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif&quot;,fog_fragment:&quot;#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_144

><td class="source">envmap_pars_fragment:&quot;#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif&quot;,envmap_fragment:&quot;#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif&quot;,envmap_pars_vertex:&quot;#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_145

><td class="source">envmap_vertex:&quot;#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif&quot;,map_particle_pars_fragment:&quot;#ifdef USE_MAP\nuniform sampler2D map;\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_146

><td class="source">map_particle_fragment:&quot;#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif&quot;,map_pars_fragment:&quot;#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif&quot;,map_pars_vertex:&quot;#ifdef USE_MAP\nvarying vec2 vUv;\n#endif&quot;,map_fragment:&quot;#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif&quot;,map_vertex:&quot;#ifdef USE_MAP\nvUv = uv;\n#endif&quot;,lightmap_pars_fragment:&quot;#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif&quot;,lightmap_pars_vertex:&quot;#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_147

><td class="source">lightmap_fragment:&quot;#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif&quot;,lightmap_vertex:&quot;#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif&quot;,lights_pars_vertex:&quot;uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS &gt; 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS &gt; 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_148

><td class="source">lights_vertex:&quot;if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS &gt; 0\nfor( int i = 0; i &lt; MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS &gt; 0\nfor( int i = 0; i &lt; MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] &gt; 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_149

><td class="source">lights_pars_fragment:&quot;#if MAX_DIR_LIGHTS &gt; 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS &gt; 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;&quot;,lights_fragment:&quot;vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS &gt; 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor ( int i = 0; i &lt; MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + vViewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf &gt;= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS &gt; 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i &lt; MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf &gt;= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS &gt; 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS &gt; 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_150

><td class="source">color_pars_fragment:&quot;#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif&quot;,color_fragment:&quot;#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif&quot;,color_pars_vertex:&quot;#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif&quot;,color_vertex:&quot;#ifdef USE_COLOR\nvColor = color;\n#endif&quot;,skinning_pars_vertex:&quot;#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif&quot;,skinning_vertex:&quot;#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_151

><td class="source">morphtarget_pars_vertex:&quot;#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif&quot;,morphtarget_vertex:&quot;#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_152

><td class="source">default_vertex:&quot;#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif&quot;};THREE.UniformsUtils={merge:function(b){var d,e,g,h={};for(d=0;d&lt;b.length;d++){g=this.clone(b[d]);for(e in g)h[e]=g[e]}return h},clone:function(b){var d,e,g,h={};for(d in b){h[d]={};for(e in b[d]){g=b[d][e];h[d][e]=g instanceof THREE.Color||g instanceof THREE.Vector3||g instanceof THREE.Texture?g.clone():g}}return h}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_153

><td class="source">THREE.UniformsLib={common:{diffuse:{type:&quot;c&quot;,value:new THREE.Color(15658734)},opacity:{type:&quot;f&quot;,value:1},map:{type:&quot;t&quot;,value:0,texture:null},lightMap:{type:&quot;t&quot;,value:2,texture:null},envMap:{type:&quot;t&quot;,value:1,texture:null},useRefract:{type:&quot;i&quot;,value:0},reflectivity:{type:&quot;f&quot;,value:1},refractionRatio:{type:&quot;f&quot;,value:0.98},combine:{type:&quot;i&quot;,value:0},fogDensity:{type:&quot;f&quot;,value:2.5E-4},fogNear:{type:&quot;f&quot;,value:1},fogFar:{type:&quot;f&quot;,value:2E3},fogColor:{type:&quot;c&quot;,value:new THREE.Color(16777215)},morphTargetInfluences:{type:&quot;f&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_154

><td class="source">value:0}},lights:{enableLighting:{type:&quot;i&quot;,value:1},ambientLightColor:{type:&quot;fv&quot;,value:[]},directionalLightDirection:{type:&quot;fv&quot;,value:[]},directionalLightColor:{type:&quot;fv&quot;,value:[]},pointLightColor:{type:&quot;fv&quot;,value:[]},pointLightPosition:{type:&quot;fv&quot;,value:[]},pointLightDistance:{type:&quot;fv1&quot;,value:[]}},particle:{psColor:{type:&quot;c&quot;,value:new THREE.Color(15658734)},opacity:{type:&quot;f&quot;,value:1},size:{type:&quot;f&quot;,value:1},scale:{type:&quot;f&quot;,value:1},map:{type:&quot;t&quot;,value:0,texture:null},fogDensity:{type:&quot;f&quot;,value:2.5E-4},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_155

><td class="source">fogNear:{type:&quot;f&quot;,value:1},fogFar:{type:&quot;f&quot;,value:2E3},fogColor:{type:&quot;c&quot;,value:new THREE.Color(16777215)}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_156

><td class="source">THREE.ShaderLib={lensFlareVertexTexture:{vertexShader:&quot;uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nuniform\tsampler2D\tocclusionMap;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvarying\tfloat\tvVisibility;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ));\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}&quot;,fragmentShader:&quot;#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvarying\tfloat\t\tvVisibility;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_157

><td class="source">lensFlare:{vertexShader:&quot;uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_158

><td class="source">fragmentShader:&quot;#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tsampler2D\tocclusionMap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 )).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_159

><td class="source">sprite:{vertexShader:&quot;uniform\tint\t\tuseScreenCoordinates;\nuniform    int     affectedByDistance;\nuniform\tvec3\tscreenPosition;\nuniform \tmat4 \tmodelViewMatrix;\nuniform \tmat4 \tprojectionMatrix;\nuniform    float   rotation;\nuniform    vec2    scale;\nuniform    vec2    alignment;\nuniform    vec2    uvOffset;\nuniform\tvec2    uvScale;\nattribute \tvec2 \tposition;\nattribute  vec2\tuv;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_160

><td class="source">fragmentShader:&quot;#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}&quot;},shadowPost:{vertexShader:&quot;uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main(void)\n{\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}&quot;,fragmentShader:&quot;#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main( void )\n{\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_161

><td class="source">shadowVolumeDynamic:{uniforms:{directionalLightDirection:{type:&quot;fv&quot;,value:[]}},vertexShader:&quot;uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm )), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}&quot;,fragmentShader:&quot;void main() {\ngl_FragColor = vec4( 1.0 );\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_162

><td class="source">depth:{uniforms:{mNear:{type:&quot;f&quot;,value:1},mFar:{type:&quot;f&quot;,value:2E3},opacity:{type:&quot;f&quot;,value:1}},fragmentShader:&quot;uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}&quot;,vertexShader:&quot;void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;},normal:{uniforms:{opacity:{type:&quot;f&quot;,value:1}},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_163

><td class="source">fragmentShader:&quot;uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}&quot;,vertexShader:&quot;varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}&quot;},basic:{uniforms:THREE.UniformsLib.common,fragmentShader:[&quot;uniform vec3 diffuse;\nuniform float opacity;&quot;,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_164

><td class="source">THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,&quot;void main() {\ngl_FragColor = vec4( diffuse, opacity );&quot;,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,&quot;}&quot;].join(&quot;\n&quot;),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_165

><td class="source">THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,&quot;void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );&quot;,THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,&quot;}&quot;].join(&quot;\n&quot;)},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.lights]),<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_166

><td class="source">fragmentShader:[&quot;uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;&quot;,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,&quot;void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );&quot;,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_167

><td class="source">THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,&quot;}&quot;].join(&quot;\n&quot;),vertexShader:[&quot;varying vec3 vLightWeighting;&quot;,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,&quot;void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );&quot;,THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_168

><td class="source">THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,&quot;vec3 transformedNormal = normalize( normalMatrix * normal );&quot;,THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,&quot;}&quot;].join(&quot;\n&quot;)},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.lights,{ambient:{type:&quot;c&quot;,value:new THREE.Color(328965)},specular:{type:&quot;c&quot;,value:new THREE.Color(1118481)},shininess:{type:&quot;f&quot;,value:30}}]),<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_169

><td class="source">fragmentShader:[&quot;uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;&quot;,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_pars_fragment,&quot;void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );&quot;,THREE.ShaderChunk.lights_fragment,THREE.ShaderChunk.map_fragment,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_170

><td class="source">THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,&quot;}&quot;].join(&quot;\n&quot;),vertexShader:[&quot;#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;&quot;,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_171

><td class="source">&quot;void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );&quot;,THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,&quot;#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;&quot;,THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_172

><td class="source">THREE.ShaderChunk.default_vertex,&quot;}&quot;].join(&quot;\n&quot;)},particle_basic:{uniforms:THREE.UniformsLib.particle,fragmentShader:[&quot;uniform vec3 psColor;\nuniform float opacity;&quot;,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,&quot;void main() {\ngl_FragColor = vec4( psColor, opacity );&quot;,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,&quot;}&quot;].join(&quot;\n&quot;),vertexShader:[&quot;uniform float size;\nuniform float scale;&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_173

><td class="source">THREE.ShaderChunk.color_pars_vertex,&quot;void main() {&quot;,THREE.ShaderChunk.color_vertex,&quot;vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;\n}&quot;].join(&quot;\n&quot;)}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_174

><td class="source">THREE.WebGLRenderer=function(b){function d(f,p,j){var k,m,x,y=f.vertices,u=y.length,A=f.colors,t=A.length,w=f.__vertexArray,z=f.__colorArray,D=f.__sortArray,B=f.__dirtyVertices,O=f.__dirtyColors;if(j.sortParticles){Pa.multiplySelf(j.matrixWorld);for(k=0;k&lt;u;k++){m=y[k].position;Ua.copy(m);Pa.multiplyVector3(Ua);D[k]=[Ua.z,k]}D.sort(function(W,P){return P[0]-W[0]});for(k=0;k&lt;u;k++){m=y[D[k][1]].position;x=k*3;w[x]=m.x;w[x+1]=m.y;w[x+2]=m.z}for(k=0;k&lt;t;k++){x=k*3;color=A[D[k][1]];z[x]=color.r;z[x+1]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_175

><td class="source">color.g;z[x+2]=color.b}}else{if(B)for(k=0;k&lt;u;k++){m=y[k].position;x=k*3;w[x]=m.x;w[x+1]=m.y;w[x+2]=m.z}if(O)for(k=0;k&lt;t;k++){color=A[k];x=k*3;z[x]=color.r;z[x+1]=color.g;z[x+2]=color.b}}if(B||j.sortParticles){c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,w,p)}if(O||j.sortParticles){c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,z,p)}}function e(f,p,j,k,m){k.program||R.initMaterial(k,p,j,m);var x=k.program,y=x.uniforms,u=k.uniforms;if(x!=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_176

><td class="source">sa){c.useProgram(x);sa=x}c.uniformMatrix4fv(y.projectionMatrix,!1,Ta);if(j&amp;&amp;(k instanceof THREE.MeshBasicMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshPhongMaterial||k instanceof THREE.LineBasicMaterial||k instanceof THREE.ParticleBasicMaterial||k.fog)){u.fogColor.value=j.color;if(j instanceof THREE.Fog){u.fogNear.value=j.near;u.fogFar.value=j.far}else if(j instanceof THREE.FogExp2)u.fogDensity.value=j.density}if(k instanceof THREE.MeshPhongMaterial||k instanceof THREE.MeshLambertMaterial||<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_177

><td class="source">k.lights){var A,t,w=0,z=0,D=0,B,O,W,P,X=Sa,Ga=X.directional.colors,T=X.directional.positions,Q=X.point.colors,U=X.point.positions,ta=X.point.distances,s=0,G=0;j=t=P=0;for(A=p.length;j&lt;A;j++){t=p[j];B=t.color;O=t.position;W=t.intensity;P=t.distance;if(t instanceof THREE.AmbientLight){w+=B.r;z+=B.g;D+=B.b}else if(t instanceof THREE.DirectionalLight){P=s*3;Ga[P]=B.r*W;Ga[P+1]=B.g*W;Ga[P+2]=B.b*W;T[P]=O.x;T[P+1]=O.y;T[P+2]=O.z;s+=1}else if(t instanceof THREE.PointLight){t=G*3;Q[t]=B.r*W;Q[t+1]=B.g*W;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_178

><td class="source">Q[t+2]=B.b*W;U[t]=O.x;U[t+1]=O.y;U[t+2]=O.z;ta[G]=P;G+=1}}for(j=s*3;j&lt;Ga.length;j++)Ga[j]=0;for(j=G*3;j&lt;Q.length;j++)Q[j]=0;X.point.length=G;X.directional.length=s;X.ambient[0]=w;X.ambient[1]=z;X.ambient[2]=D;j=Sa;u.enableLighting.value=j.directional.length+j.point.length;u.ambientLightColor.value=j.ambient;u.directionalLightColor.value=j.directional.colors;u.directionalLightDirection.value=j.directional.positions;u.pointLightColor.value=j.point.colors;u.pointLightPosition.value=j.point.positions;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_179

><td class="source">u.pointLightDistance.value=j.point.distances}if(k instanceof THREE.MeshBasicMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshPhongMaterial){u.diffuse.value=k.color;u.opacity.value=k.opacity;u.map.texture=k.map;u.lightMap.texture=k.lightMap;u.envMap.texture=k.envMap;u.reflectivity.value=k.reflectivity;u.refractionRatio.value=k.refractionRatio;u.combine.value=k.combine;u.useRefract.value=k.envMap&amp;&amp;k.envMap.mapping instanceof THREE.CubeRefractionMapping}if(k instanceof THREE.LineBasicMaterial){u.diffuse.value=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_180

><td class="source">k.color;u.opacity.value=k.opacity}else if(k instanceof THREE.ParticleBasicMaterial){u.psColor.value=k.color;u.opacity.value=k.opacity;u.size.value=k.size;u.scale.value=ga.height/2;u.map.texture=k.map}else if(k instanceof THREE.MeshPhongMaterial){u.ambient.value=k.ambient;u.specular.value=k.specular;u.shininess.value=k.shininess}else if(k instanceof THREE.MeshDepthMaterial){u.mNear.value=f.near;u.mFar.value=f.far;u.opacity.value=k.opacity}else if(k instanceof THREE.MeshNormalMaterial)u.opacity.value=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_181

><td class="source">k.opacity;for(var i in u)if(z=x.uniforms[i]){A=u[i];w=A.type;j=A.value;if(w==&quot;i&quot;)c.uniform1i(z,j);else if(w==&quot;f&quot;)c.uniform1f(z,j);else if(w==&quot;fv1&quot;)c.uniform1fv(z,j);else if(w==&quot;fv&quot;)c.uniform3fv(z,j);else if(w==&quot;v2&quot;)c.uniform2f(z,j.x,j.y);else if(w==&quot;v3&quot;)c.uniform3f(z,j.x,j.y,j.z);else if(w==&quot;v4&quot;)c.uniform4f(z,j.x,j.y,j.z,j.w);else if(w==&quot;c&quot;)c.uniform3f(z,j.r,j.g,j.b);else if(w==&quot;t&quot;){c.uniform1i(z,j);if(A=A.texture)if(A.image instanceof Array&amp;&amp;A.image.length==6){if(A.image.length==6){if(A.needsUpdate){if(A.__webglInit){c.bindTexture(c.TEXTURE_CUBE_MAP,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_182

><td class="source">A.image.__webglTextureCube);for(w=0;w&lt;6;++w)c.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,c.RGBA,c.UNSIGNED_BYTE,A.image[w])}else{A.image.__webglTextureCube=c.createTexture();c.bindTexture(c.TEXTURE_CUBE_MAP,A.image.__webglTextureCube);for(w=0;w&lt;6;++w)c.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,A.image[w]);A.__webglInit=!0}$(c.TEXTURE_CUBE_MAP,A,A.image[0]);c.bindTexture(c.TEXTURE_CUBE_MAP,null);A.needsUpdate=!1}c.activeTexture(c.TEXTURE0+j);c.bindTexture(c.TEXTURE_CUBE_MAP,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_183

><td class="source">A.image.__webglTextureCube)}}else K(A,j)}}c.uniformMatrix4fv(y.modelViewMatrix,!1,m._modelViewMatrixArray);c.uniformMatrix3fv(y.normalMatrix,!1,m._normalMatrixArray);(k instanceof THREE.MeshShaderMaterial||k instanceof THREE.MeshPhongMaterial||k.envMap)&amp;&amp;y.cameraPosition!==null&amp;&amp;c.uniform3f(y.cameraPosition,f.position.x,f.position.y,f.position.z);(k instanceof THREE.MeshShaderMaterial||k.envMap||k.skinning)&amp;&amp;y.objectMatrix!==null&amp;&amp;c.uniformMatrix4fv(y.objectMatrix,!1,m._objectMatrixArray);(k instanceof<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_184

><td class="source">THREE.MeshPhongMaterial||k instanceof THREE.MeshLambertMaterial||k instanceof THREE.MeshShaderMaterial||k.skinning)&amp;&amp;y.viewMatrix!==null&amp;&amp;c.uniformMatrix4fv(y.viewMatrix,!1,Xa);if(k instanceof THREE.ShadowVolumeDynamicMaterial){f=u.directionalLightDirection.value;f[0]=-p[1].position.x;f[1]=-p[1].position.y;f[2]=-p[1].position.z;c.uniform3fv(y.directionalLightDirection,f);c.uniformMatrix4fv(y.objectMatrix,!1,m._objectMatrixArray);c.uniformMatrix4fv(y.viewMatrix,!1,Xa)}if(k.skinning){c.uniformMatrix4fv(y.cameraInverseMatrix,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_185

><td class="source">!1,Xa);c.uniformMatrix4fv(y.boneGlobalMatrices,!1,m.boneMatrices)}return x}function g(f,p,j,k,m,x){if(k.opacity!=0){var y;f=e(f,p,j,k,x).attributes;if(!k.morphTargets&amp;&amp;f.position&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglVertexBuffer);c.vertexAttribPointer(f.position,3,c.FLOAT,!1,0,0)}else{p=k.program.attributes;if(x.morphTargetBase!==-1){c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[x.morphTargetBase]);c.vertexAttribPointer(p.position,3,c.FLOAT,!1,0,0)}else if(p.position&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_186

><td class="source">m.__webglVertexBuffer);c.vertexAttribPointer(p.position,3,c.FLOAT,!1,0,0)}if(x.morphTargetForcedOrder.length){j=0;for(var u=x.morphTargetForcedOrder,A=x.morphTargetInfluences;j&lt;k.numSupportedMorphTargets&amp;&amp;j&lt;u.length;){c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[u[j]]);c.vertexAttribPointer(p[&quot;morphTarget&quot;+j],3,c.FLOAT,!1,0,0);x.__webglMorphTargetInfluences[j]=A[u[j]];j++}}else{u=[];var t=-1,w=0;A=x.morphTargetInfluences;var z,D=A.length;j=0;for(x.morphTargetBase!==-1&amp;&amp;(u[x.morphTargetBase]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_187

><td class="source">!0);j&lt;k.numSupportedMorphTargets;){for(z=0;z&lt;D;z++)if(!u[z]&amp;&amp;A[z]&gt;t){w=z;t=A[w]}c.bindBuffer(c.ARRAY_BUFFER,m.__webglMorphTargetsBuffers[w]);c.vertexAttribPointer(p[&quot;morphTarget&quot;+j],3,c.FLOAT,!1,0,0);x.__webglMorphTargetInfluences[j]=t;u[w]=1;t=-1;j++}}k.program.uniforms.morphTargetInfluences!==null&amp;&amp;c.uniform1fv(k.program.uniforms.morphTargetInfluences,x.__webglMorphTargetInfluences)}if(k.attributes)for(y in k.attributes)if(f[y]&gt;=0){p=k.attributes[y];c.bindBuffer(c.ARRAY_BUFFER,p.buffer);c.vertexAttribPointer(f[y],<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_188

><td class="source">p.size,c.FLOAT,!1,0,0)}if(f.color&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglColorBuffer);c.vertexAttribPointer(f.color,3,c.FLOAT,!1,0,0)}if(f.normal&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglNormalBuffer);c.vertexAttribPointer(f.normal,3,c.FLOAT,!1,0,0)}if(f.tangent&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglTangentBuffer);c.vertexAttribPointer(f.tangent,4,c.FLOAT,!1,0,0)}if(f.uv&gt;=0)if(m.__webglUVBuffer){c.bindBuffer(c.ARRAY_BUFFER,m.__webglUVBuffer);c.vertexAttribPointer(f.uv,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(f.uv)}else c.disableVertexAttribArray(f.uv);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_189

><td class="source">if(f.uv2&gt;=0)if(m.__webglUV2Buffer){c.bindBuffer(c.ARRAY_BUFFER,m.__webglUV2Buffer);c.vertexAttribPointer(f.uv2,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(f.uv2)}else c.disableVertexAttribArray(f.uv2);if(k.skinning&amp;&amp;f.skinVertexA&gt;=0&amp;&amp;f.skinVertexB&gt;=0&amp;&amp;f.skinIndex&gt;=0&amp;&amp;f.skinWeight&gt;=0){c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinVertexABuffer);c.vertexAttribPointer(f.skinVertexA,4,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinVertexBBuffer);c.vertexAttribPointer(f.skinVertexB,4,c.FLOAT,!1,0,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_190

><td class="source">0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinIndicesBuffer);c.vertexAttribPointer(f.skinIndex,4,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,m.__webglSkinWeightsBuffer);c.vertexAttribPointer(f.skinWeight,4,c.FLOAT,!1,0,0)}if(x instanceof THREE.Mesh){if(k.wireframe){c.lineWidth(k.wireframeLinewidth);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,m.__webglLineBuffer);c.drawElements(c.LINES,m.__webglLineCount,c.UNSIGNED_SHORT,0)}else{c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,m.__webglFaceBuffer);c.drawElements(c.TRIANGLES,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_191

><td class="source">m.__webglFaceCount,c.UNSIGNED_SHORT,0)}R.data.vertices+=m.__webglFaceCount;R.data.faces+=m.__webglFaceCount/3;R.data.drawCalls++}else if(x instanceof THREE.Line){x=x.type==THREE.LineStrip?c.LINE_STRIP:c.LINES;c.lineWidth(k.linewidth);c.drawArrays(x,0,m.__webglLineCount);R.data.drawCalls++}else if(x instanceof THREE.ParticleSystem){c.drawArrays(c.POINTS,0,m.__webglParticleCount);R.data.drawCalls++}else if(x instanceof THREE.Ribbon){c.drawArrays(c.TRIANGLE_STRIP,0,m.__webglVertexCount);R.data.drawCalls++}}}<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_192

><td class="source">function h(f,p,j){if(!f.__webglVertexBuffer)f.__webglVertexBuffer=c.createBuffer();if(!f.__webglNormalBuffer)f.__webglNormalBuffer=c.createBuffer();if(f.hasPos){c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,f.positionArray,c.DYNAMIC_DRAW);c.enableVertexAttribArray(p.attributes.position);c.vertexAttribPointer(p.attributes.position,3,c.FLOAT,!1,0,0)}if(f.hasNormal){c.bindBuffer(c.ARRAY_BUFFER,f.__webglNormalBuffer);if(j==THREE.FlatShading){var k,m,x,y,u,A,t,w,z,D,B=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_193

><td class="source">f.count*3;for(D=0;D&lt;B;D+=9){j=f.normalArray;k=j[D];m=j[D+1];x=j[D+2];y=j[D+3];A=j[D+4];w=j[D+5];u=j[D+6];t=j[D+7];z=j[D+8];k=(k+y+u)/3;m=(m+A+t)/3;x=(x+w+z)/3;j[D]=k;j[D+1]=m;j[D+2]=x;j[D+3]=k;j[D+4]=m;j[D+5]=x;j[D+6]=k;j[D+7]=m;j[D+8]=x}}c.bufferData(c.ARRAY_BUFFER,f.normalArray,c.DYNAMIC_DRAW);c.enableVertexAttribArray(p.attributes.normal);c.vertexAttribPointer(p.attributes.normal,3,c.FLOAT,!1,0,0)}c.drawArrays(c.TRIANGLES,0,f.count);f.count=0}function o(f){if(na!=f.doubleSided){f.doubleSided?c.disable(c.CULL_FACE):<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_194

><td class="source">c.enable(c.CULL_FACE);na=f.doubleSided}if(oa!=f.flipSided){f.flipSided?c.frontFace(c.CW):c.frontFace(c.CCW);oa=f.flipSided}}function n(f){if(Z!=f){f?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST);Z=f}}function q(f){aa[0].set(f.n41-f.n11,f.n42-f.n12,f.n43-f.n13,f.n44-f.n14);aa[1].set(f.n41+f.n11,f.n42+f.n12,f.n43+f.n13,f.n44+f.n14);aa[2].set(f.n41+f.n21,f.n42+f.n22,f.n43+f.n23,f.n44+f.n24);aa[3].set(f.n41-f.n21,f.n42-f.n22,f.n43-f.n23,f.n44-f.n24);aa[4].set(f.n41-f.n31,f.n42-f.n32,f.n43-f.n33,f.n44-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_195

><td class="source">f.n34);aa[5].set(f.n41+f.n31,f.n42+f.n32,f.n43+f.n33,f.n44+f.n34);var p;for(f=0;f&lt;6;f++){p=aa[f];p.divideScalar(Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z))}}function r(f){for(var p=f.matrixWorld,j=-f.geometry.boundingSphere.radius*Math.max(f.scale.x,Math.max(f.scale.y,f.scale.z)),k=0;k&lt;6;k++){f=aa[k].x*p.n14+aa[k].y*p.n24+aa[k].z*p.n34+aa[k].w;if(f&lt;=j)return!1}return!0}function v(f,p){f.list[f.count]=p;f.count+=1}function E(f){var p,j,k=f.object,m=f.opaque,x=f.transparent;x.count=0;f=m.count=0;for(p=k.materials.length;f&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_196

><td class="source">p;f++){j=k.materials[f];j.transparent?v(x,j):v(m,j)}}function F(f){var p,j,k,m,x=f.object,y=f.buffer,u=f.opaque,A=f.transparent;A.count=0;f=u.count=0;for(k=x.materials.length;f&lt;k;f++){p=x.materials[f];if(p instanceof THREE.MeshFaceMaterial){p=0;for(j=y.materials.length;p&lt;j;p++)(m=y.materials[p])&amp;&amp;(m.transparent?v(A,m):v(u,m))}else(m=p)&amp;&amp;(m.transparent?v(A,m):v(u,m))}}function H(f,p){return p.z-f.z}function I(f){c.enable(c.POLYGON_OFFSET_FILL);c.polygonOffset(0.1,1);c.enable(c.STENCIL_TEST);c.enable(c.DEPTH_TEST);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_197

><td class="source">c.depthMask(!1);c.colorMask(!1,!1,!1,!1);c.stencilFunc(c.ALWAYS,1,255);c.stencilOpSeparate(c.BACK,c.KEEP,c.INCR,c.KEEP);c.stencilOpSeparate(c.FRONT,c.KEEP,c.DECR,c.KEEP);var p,j=f.lights.length,k,m=f.lights,x=[],y,u,A,t,w,z=f.__webglShadowVolumes.length;for(p=0;p&lt;j;p++){k=f.lights[p];if(k instanceof THREE.DirectionalLight&amp;&amp;k.castShadow){x[0]=-k.position.x;x[1]=-k.position.y;x[2]=-k.position.z;for(w=0;w&lt;z;w++){k=f.__webglShadowVolumes[w].object;y=f.__webglShadowVolumes[w].buffer;u=k.materials[0];u.program||<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_198

><td class="source">R.initMaterial(u,m,undefined,k);u=u.program;A=u.uniforms;t=u.attributes;if(sa!==u){c.useProgram(u);sa=u;c.uniformMatrix4fv(A.projectionMatrix,!1,Ta);c.uniformMatrix4fv(A.viewMatrix,!1,Xa);c.uniform3fv(A.directionalLightDirection,x)}k.matrixWorld.flattenToArray(k._objectMatrixArray);c.uniformMatrix4fv(A.objectMatrix,!1,k._objectMatrixArray);c.bindBuffer(c.ARRAY_BUFFER,y.__webglVertexBuffer);c.vertexAttribPointer(t.position,3,c.FLOAT,!1,0,0);c.bindBuffer(c.ARRAY_BUFFER,y.__webglNormalBuffer);c.vertexAttribPointer(t.normal,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_199

><td class="source">3,c.FLOAT,!1,0,0);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,y.__webglFaceBuffer);c.cullFace(c.FRONT);c.drawElements(c.TRIANGLES,y.__webglFaceCount,c.UNSIGNED_SHORT,0);c.cullFace(c.BACK);c.drawElements(c.TRIANGLES,y.__webglFaceCount,c.UNSIGNED_SHORT,0)}}}c.disable(c.POLYGON_OFFSET_FILL);c.colorMask(!0,!0,!0,!0);c.stencilFunc(c.NOTEQUAL,0,255);c.stencilOp(c.KEEP,c.KEEP,c.KEEP);c.disable(c.DEPTH_TEST);ha=&quot;&quot;;sa=S.program;c.useProgram(S.program);c.uniformMatrix4fv(S.projectionLocation,!1,Ta);c.uniform1f(S.darknessLocation,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_200

><td class="source">S.darkness);c.bindBuffer(c.ARRAY_BUFFER,S.vertexBuffer);c.vertexAttribPointer(S.vertexLocation,3,c.FLOAT,!1,0,0);c.enableVertexAttribArray(S.vertexLocation);c.blendFunc(c.ONE,c.ONE_MINUS_SRC_ALPHA);c.blendEquation(c.FUNC_ADD);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,S.elementBuffer);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);c.disable(c.STENCIL_TEST);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function M(f,p){var j,k,m;j=_sprite.attributes;var x=_sprite.uniforms,y=Aa/za,u,A=[],t=za*0.5,w=Aa*0.5,z=!0;c.useProgram(_sprite.program);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_201

><td class="source">sa=_sprite.program;ha=&quot;&quot;;if(!ob){c.enableVertexAttribArray(_sprite.attributes.position);c.enableVertexAttribArray(_sprite.attributes.uv);ob=!0}c.disable(c.CULL_FACE);c.enable(c.BLEND);c.depthMask(!0);c.bindBuffer(c.ARRAY_BUFFER,_sprite.vertexBuffer);c.vertexAttribPointer(j.position,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(j.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,_sprite.elementBuffer);c.uniformMatrix4fv(x.projectionMatrix,!1,Ta);c.activeTexture(c.TEXTURE0);c.uniform1i(x.map,0);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_202

><td class="source">j=0;for(k=f.__webglSprites.length;j&lt;k;j++){m=f.__webglSprites[j];if(m.useScreenCoordinates)m.z=-m.position.z;else{m._modelViewMatrix.multiplyToArray(p.matrixWorldInverse,m.matrixWorld,m._modelViewMatrixArray);m.z=-m._modelViewMatrix.n34}}f.__webglSprites.sort(H);j=0;for(k=f.__webglSprites.length;j&lt;k;j++){m=f.__webglSprites[j];if(m.material===undefined&amp;&amp;m.map&amp;&amp;m.map.image&amp;&amp;m.map.image.width){if(m.useScreenCoordinates){c.uniform1i(x.useScreenCoordinates,1);c.uniform3f(x.screenPosition,(m.position.x-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_203

><td class="source">t)/t,(w-m.position.y)/w,Math.max(0,Math.min(1,m.position.z)))}else{c.uniform1i(x.useScreenCoordinates,0);c.uniform1i(x.affectedByDistance,m.affectedByDistance?1:0);c.uniformMatrix4fv(x.modelViewMatrix,!1,m._modelViewMatrixArray)}u=m.map.image.width/(m.affectedByDistance?1:Aa);A[0]=u*y*m.scale.x;A[1]=u*m.scale.y;c.uniform2f(x.uvScale,m.uvScale.x,m.uvScale.y);c.uniform2f(x.uvOffset,m.uvOffset.x,m.uvOffset.y);c.uniform2f(x.alignment,m.alignment.x,m.alignment.y);c.uniform1f(x.opacity,m.opacity);c.uniform1f(x.rotation,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_204

><td class="source">m.rotation);c.uniform2fv(x.scale,A);if(m.mergeWith3D&amp;&amp;!z){c.enable(c.DEPTH_TEST);z=!0}else if(!m.mergeWith3D&amp;&amp;z){c.disable(c.DEPTH_TEST);z=!1}pa(m.blending);K(m.map,0);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function N(f,p){var j,k,m=f.__webglLensFlares.length,x,y,u,A=new THREE.Vector3,t=Aa/za,w=za*0.5,z=Aa*0.5,D=16/Aa,B=[D*t,D],O=[1,1,0],W=[1,1],P=J.uniforms;j=J.attributes;c.useProgram(J.program);sa=J.program;ha=&quot;&quot;;if(!pb){c.enableVertexAttribArray(J.attributes.vertex);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_205

><td class="source">c.enableVertexAttribArray(J.attributes.uv);pb=!0}c.uniform1i(P.occlusionMap,0);c.uniform1i(P.map,1);c.bindBuffer(c.ARRAY_BUFFER,J.vertexBuffer);c.vertexAttribPointer(j.vertex,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(j.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,J.elementBuffer);c.disable(c.CULL_FACE);c.depthMask(!1);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.activeTexture(c.TEXTURE1);for(k=0;k&lt;m;k++){j=f.__webglLensFlares[k].object;A.set(j.matrixWorld.n14,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_206

><td class="source">j.matrixWorld.n24,j.matrixWorld.n34);p.matrixWorldInverse.multiplyVector3(A);p.projectionMatrix.multiplyVector3(A);O[0]=A.x;O[1]=A.y;O[2]=A.z;W[0]=O[0]*w+w;W[1]=O[1]*z+z;if(J.hasVertexTexture||W[0]&gt;0&amp;&amp;W[0]&lt;za&amp;&amp;W[1]&gt;0&amp;&amp;W[1]&lt;Aa){c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGB,W[0]-8,W[1]-8,16,16,0);c.uniform1i(P.renderType,0);c.uniform2fv(P.scale,B);c.uniform3fv(P.screenPosition,O);c.disable(c.BLEND);c.enable(c.DEPTH_TEST);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_207

><td class="source">0);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGBA,W[0]-8,W[1]-8,16,16,0);c.uniform1i(P.renderType,1);c.disable(c.DEPTH_TEST);c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);j.positionScreen.x=O[0];j.positionScreen.y=O[1];j.positionScreen.z=O[2];j.customUpdateCallback?j.customUpdateCallback(j):j.updateLensFlares();c.uniform1i(P.renderType,2);c.enable(c.BLEND);x=0;for(y=j.lensFlares.length;x&lt;y;x++){u=j.lensFlares[x];if(u.opacity&gt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_208

><td class="source">0.0010&amp;&amp;u.scale&gt;0.0010){O[0]=u.x;O[1]=u.y;O[2]=u.z;D=u.size*u.scale/Aa;B[0]=D*t;B[1]=D;c.uniform3fv(P.screenPosition,O);c.uniform2fv(P.scale,B);c.uniform1f(P.rotation,u.rotation);c.uniform1f(P.opacity,u.opacity);pa(u.blending);K(u.texture,1);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0)}}}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(Y)}function V(f,p){f._modelViewMatrix.multiplyToArray(p.matrixWorldInverse,f.matrixWorld,f._modelViewMatrixArray);THREE.Matrix4.makeInvert3x3(f._modelViewMatrix).transposeIntoArray(f._normalMatrixArray)}<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_209

><td class="source">function L(f){var p,j,k,m,x;if(f instanceof THREE.Mesh){j=f.geometry;for(p in j.geometryGroups){k=j.geometryGroups[p];x=!1;for(m in k.__webglCustomAttributes)if(k.__webglCustomAttributes[m].needsUpdate){x=!0;break}if(j.__dirtyVertices||j.__dirtyMorphTargets||j.__dirtyElements||j.__dirtyUvs||j.__dirtyNormals||j.__dirtyColors||j.__dirtyTangents||x){x=c.DYNAMIC_DRAW;var y=void 0,u=void 0,A=void 0,t=void 0;A=void 0;var w=void 0,z=void 0,D=void 0,B=void 0,O=void 0,W=void 0,P=void 0,X=void 0,Ga=void 0,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_210

><td class="source">T=void 0,Q=void 0,U=void 0,ta=void 0;z=void 0;D=void 0;t=void 0;B=void 0;t=void 0;var s=void 0,G=void 0;z=void 0;s=void 0;G=void 0;var i=void 0,Ka=void 0;s=void 0;G=void 0;i=void 0;Ka=void 0;s=void 0;G=void 0;i=void 0;Ka=void 0;s=void 0;G=void 0;i=void 0;t=void 0;B=void 0;w=void 0;A=void 0;A=void 0;s=void 0;G=void 0;i=void 0;var Va=void 0,ua=0,Ba=0,Za=0,$a=0,Ja=0,La=0,ea=0,Ma=0,wa=0,C=0,Ca=0;G=s=0;var Da=k.__vertexArray,fb=k.__uvArray,gb=k.__uv2Array,Qa=k.__normalArray,ia=k.__tangentArray,Ea=k.__colorArray,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_211

><td class="source">ja=k.__skinVertexAArray,ka=k.__skinVertexBArray,la=k.__skinIndexArray,ma=k.__skinWeightArray,hb=k.__morphTargetsArrays,Ra=k.__webglCustomAttributes;i=void 0;var Na=k.__faceArray,Oa=k.__lineArray,qb=k.__needsSmoothNormals;W=k.__vertexColorType;O=k.__uvType;P=k.__normalType;var Ha=f.geometry,ib=Ha.__dirtyVertices,jb=Ha.__dirtyElements,eb=Ha.__dirtyUvs,kb=Ha.__dirtyNormals,lb=Ha.__dirtyTangents,mb=Ha.__dirtyColors,nb=Ha.__dirtyMorphTargets,ab=Ha.vertices,rb=k.faces,ub=Ha.faces,sb=Ha.faceVertexUvs[0],<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_212

><td class="source">tb=Ha.faceVertexUvs[1],bb=Ha.skinVerticesA,cb=Ha.skinVerticesB,db=Ha.skinIndices,Wa=Ha.skinWeights,Ya=f instanceof THREE.ShadowVolume?Ha.edgeFaces:undefined;morphTargets=Ha.morphTargets;if(Ra)for(Va in Ra){Ra[Va].offset=0;Ra[Va].offsetSrc=0}y=0;for(u=rb.length;y&lt;u;y++){A=rb[y];t=ub[A];sb&amp;&amp;(X=sb[A]);tb&amp;&amp;(Ga=tb[A]);A=t.vertexNormals;w=t.normal;z=t.vertexColors;D=t.color;B=t.vertexTangents;if(t instanceof THREE.Face3){if(ib){T=ab[t.a].position;Q=ab[t.b].position;U=ab[t.c].position;Da[Ba]=T.x;Da[Ba+1]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_213

><td class="source">T.y;Da[Ba+2]=T.z;Da[Ba+3]=Q.x;Da[Ba+4]=Q.y;Da[Ba+5]=Q.z;Da[Ba+6]=U.x;Da[Ba+7]=U.y;Da[Ba+8]=U.z;Ba+=9}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){s=i.offset;G=i.offsetSrc;if(i.size===1){if(i.boundTo===undefined||i.boundTo===&quot;vertices&quot;){i.array[s+0]=i.value[t.a];i.array[s+1]=i.value[t.b];i.array[s+2]=i.value[t.c]}else if(i.boundTo===&quot;faces&quot;){i.array[s+0]=i.value[G];i.array[s+1]=i.value[G];i.array[s+2]=i.value[G];i.offsetSrc++}else if(i.boundTo===&quot;faceVertices&quot;){i.array[s+0]=i.value[G+0];i.array[s+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_214

><td class="source">1]=i.value[G+1];i.array[s+2]=i.value[G+2];i.offsetSrc+=3}i.offset+=3}else{if(i.boundTo===undefined||i.boundTo===&quot;vertices&quot;){T=i.value[t.a];Q=i.value[t.b];U=i.value[t.c]}else if(i.boundTo===&quot;faces&quot;){T=i.value[G];Q=i.value[G];U=i.value[G];i.offsetSrc++}else if(i.boundTo===&quot;faceVertices&quot;){T=i.value[G+0];Q=i.value[G+1];U=i.value[G+2];i.offsetSrc+=3}if(i.size===2){i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=Q.x;i.array[s+3]=Q.y;i.array[s+4]=U.x;i.array[s+5]=U.y;i.offset+=6}else if(i.size===3){if(i.type===<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_215

><td class="source">&quot;c&quot;){i.array[s+0]=T.r;i.array[s+1]=T.g;i.array[s+2]=T.b;i.array[s+3]=Q.r;i.array[s+4]=Q.g;i.array[s+5]=Q.b;i.array[s+6]=U.r;i.array[s+7]=U.g;i.array[s+8]=U.b}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=Q.x;i.array[s+4]=Q.y;i.array[s+5]=Q.z;i.array[s+6]=U.x;i.array[s+7]=U.y;i.array[s+8]=U.z}i.offset+=9}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=T.w;i.array[s+4]=Q.x;i.array[s+5]=Q.y;i.array[s+6]=Q.z;i.array[s+7]=Q.w;i.array[s+8]=U.x;i.array[s+9]=U.y;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_216

><td class="source">i.array[s+10]=U.z;i.array[s+11]=U.w;i.offset+=12}}}}if(nb){s=0;for(G=morphTargets.length;s&lt;G;s++){T=morphTargets[s].vertices[t.a].position;Q=morphTargets[s].vertices[t.b].position;U=morphTargets[s].vertices[t.c].position;i=hb[s];i[Ca+0]=T.x;i[Ca+1]=T.y;i[Ca+2]=T.z;i[Ca+3]=Q.x;i[Ca+4]=Q.y;i[Ca+5]=Q.z;i[Ca+6]=U.x;i[Ca+7]=U.y;i[Ca+8]=U.z}Ca+=9}if(Wa.length){s=Wa[t.a];G=Wa[t.b];i=Wa[t.c];ma[C]=s.x;ma[C+1]=s.y;ma[C+2]=s.z;ma[C+3]=s.w;ma[C+4]=G.x;ma[C+5]=G.y;ma[C+6]=G.z;ma[C+7]=G.w;ma[C+8]=i.x;ma[C+9]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_217

><td class="source">i.y;ma[C+10]=i.z;ma[C+11]=i.w;s=db[t.a];G=db[t.b];i=db[t.c];la[C]=s.x;la[C+1]=s.y;la[C+2]=s.z;la[C+3]=s.w;la[C+4]=G.x;la[C+5]=G.y;la[C+6]=G.z;la[C+7]=G.w;la[C+8]=i.x;la[C+9]=i.y;la[C+10]=i.z;la[C+11]=i.w;s=bb[t.a];G=bb[t.b];i=bb[t.c];ja[C]=s.x;ja[C+1]=s.y;ja[C+2]=s.z;ja[C+3]=1;ja[C+4]=G.x;ja[C+5]=G.y;ja[C+6]=G.z;ja[C+7]=1;ja[C+8]=i.x;ja[C+9]=i.y;ja[C+10]=i.z;ja[C+11]=1;s=cb[t.a];G=cb[t.b];i=cb[t.c];ka[C]=s.x;ka[C+1]=s.y;ka[C+2]=s.z;ka[C+3]=1;ka[C+4]=G.x;ka[C+5]=G.y;ka[C+6]=G.z;ka[C+7]=1;ka[C+8]=i.x;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_218

><td class="source">ka[C+9]=i.y;ka[C+10]=i.z;ka[C+11]=1;C+=12}if(mb&amp;&amp;W){if(z.length==3&amp;&amp;W==THREE.VertexColors){t=z[0];s=z[1];G=z[2]}else G=s=t=D;Ea[wa]=t.r;Ea[wa+1]=t.g;Ea[wa+2]=t.b;Ea[wa+3]=s.r;Ea[wa+4]=s.g;Ea[wa+5]=s.b;Ea[wa+6]=G.r;Ea[wa+7]=G.g;Ea[wa+8]=G.b;wa+=9}if(lb&amp;&amp;Ha.hasTangents){z=B[0];D=B[1];t=B[2];ia[ea]=z.x;ia[ea+1]=z.y;ia[ea+2]=z.z;ia[ea+3]=z.w;ia[ea+4]=D.x;ia[ea+5]=D.y;ia[ea+6]=D.z;ia[ea+7]=D.w;ia[ea+8]=t.x;ia[ea+9]=t.y;ia[ea+10]=t.z;ia[ea+11]=t.w;ea+=12}if(kb&amp;&amp;P)if(A.length==3&amp;&amp;qb)for(B=0;B&lt;3;B++){w=A[B];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_219

><td class="source">Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}else for(B=0;B&lt;3;B++){Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}if(eb&amp;&amp;X!==undefined&amp;&amp;O)for(B=0;B&lt;3;B++){A=X[B];fb[Za]=A.u;fb[Za+1]=A.v;Za+=2}if(eb&amp;&amp;Ga!==undefined&amp;&amp;O)for(B=0;B&lt;3;B++){A=Ga[B];gb[$a]=A.u;gb[$a+1]=A.v;$a+=2}if(jb){Na[Ja]=ua;Na[Ja+1]=ua+1;Na[Ja+2]=ua+2;Ja+=3;Oa[Ma]=ua;Oa[Ma+1]=ua+1;Oa[Ma+2]=ua;Oa[Ma+3]=ua+2;Oa[Ma+4]=ua+1;Oa[Ma+5]=ua+2;Ma+=6;ua+=3}}else if(t instanceof THREE.Face4){if(ib){T=ab[t.a].position;Q=ab[t.b].position;U=ab[t.c].position;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_220

><td class="source">ta=ab[t.d].position;Da[Ba]=T.x;Da[Ba+1]=T.y;Da[Ba+2]=T.z;Da[Ba+3]=Q.x;Da[Ba+4]=Q.y;Da[Ba+5]=Q.z;Da[Ba+6]=U.x;Da[Ba+7]=U.y;Da[Ba+8]=U.z;Da[Ba+9]=ta.x;Da[Ba+10]=ta.y;Da[Ba+11]=ta.z;Ba+=12}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){s=i.offset;G=i.offsetSrc;if(i.size===1){if(i.boundTo===undefined||i.boundTo===&quot;vertices&quot;){i.array[s+0]=i.value[t.a];i.array[s+1]=i.value[t.b];i.array[s+2]=i.value[t.c];i.array[s+3]=i.value[t.d]}else if(i.boundTo===&quot;faces&quot;){i.array[s+0]=i.value[G];i.array[s+1]=i.value[G];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_221

><td class="source">i.array[s+2]=i.value[G];i.array[s+3]=i.value[G];i.offsetSrc++}else if(i.boundTo===&quot;faceVertices&quot;){i.array[s+0]=i.value[G+0];i.array[s+1]=i.value[G+1];i.array[s+2]=i.value[G+2];i.array[s+3]=i.value[G+3];i.offsetSrc+=4}i.offset+=4}else{if(i.boundTo===undefined||i.boundTo===&quot;vertices&quot;){T=i.value[t.a];Q=i.value[t.b];U=i.value[t.c];ta=i.value[t.d]}else if(i.boundTo===&quot;faces&quot;){T=i.value[G];Q=i.value[G];U=i.value[G];ta=i.value[G];i.offsetSrc++}else if(i.boundTo===&quot;faceVertices&quot;){T=i.value[G+0];Q=i.value[G+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_222

><td class="source">1];U=i.value[G+2];ta=i.value[G+3];i.offsetSrc+=4}if(i.size===2){i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=Q.x;i.array[s+3]=Q.y;i.array[s+4]=U.x;i.array[s+5]=U.y;i.array[s+6]=ta.x;i.array[s+7]=ta.y;i.offset+=8}else if(i.size===3){if(i.type===&quot;c&quot;){i.array[s+0]=T.r;i.array[s+1]=T.g;i.array[s+2]=T.b;i.array[s+3]=Q.r;i.array[s+4]=Q.g;i.array[s+5]=Q.b;i.array[s+6]=U.r;i.array[s+7]=U.g;i.array[s+8]=U.b;i.array[s+9]=ta.r;i.array[s+10]=ta.g;i.array[s+11]=ta.b}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_223

><td class="source">2]=T.z;i.array[s+3]=Q.x;i.array[s+4]=Q.y;i.array[s+5]=Q.z;i.array[s+6]=U.x;i.array[s+7]=U.y;i.array[s+8]=U.z;i.array[s+9]=ta.x;i.array[s+10]=ta.y;i.array[s+11]=ta.z}i.offset+=12}else{i.array[s+0]=T.x;i.array[s+1]=T.y;i.array[s+2]=T.z;i.array[s+3]=T.w;i.array[s+4]=Q.x;i.array[s+5]=Q.y;i.array[s+6]=Q.z;i.array[s+7]=Q.w;i.array[s+8]=U.x;i.array[s+9]=U.y;i.array[s+10]=U.z;i.array[s+11]=U.w;i.array[s+12]=ta.x;i.array[s+13]=ta.y;i.array[s+14]=ta.z;i.array[s+15]=ta.w;i.offset+=16}}}}if(nb){s=0;for(G=morphTargets.length;s&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_224

><td class="source">G;s++){T=morphTargets[s].vertices[t.a].position;Q=morphTargets[s].vertices[t.b].position;U=morphTargets[s].vertices[t.c].position;ta=morphTargets[s].vertices[t.d].position;i=hb[s];i[Ca+0]=T.x;i[Ca+1]=T.y;i[Ca+2]=T.z;i[Ca+3]=Q.x;i[Ca+4]=Q.y;i[Ca+5]=Q.z;i[Ca+6]=U.x;i[Ca+7]=U.y;i[Ca+8]=U.z;i[Ca+9]=ta.x;i[Ca+10]=ta.y;i[Ca+11]=ta.z}Ca+=12}if(Wa.length){s=Wa[t.a];G=Wa[t.b];i=Wa[t.c];Ka=Wa[t.d];ma[C]=s.x;ma[C+1]=s.y;ma[C+2]=s.z;ma[C+3]=s.w;ma[C+4]=G.x;ma[C+5]=G.y;ma[C+6]=G.z;ma[C+7]=G.w;ma[C+8]=i.x;ma[C+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_225

><td class="source">9]=i.y;ma[C+10]=i.z;ma[C+11]=i.w;ma[C+12]=Ka.x;ma[C+13]=Ka.y;ma[C+14]=Ka.z;ma[C+15]=Ka.w;s=db[t.a];G=db[t.b];i=db[t.c];Ka=db[t.d];la[C]=s.x;la[C+1]=s.y;la[C+2]=s.z;la[C+3]=s.w;la[C+4]=G.x;la[C+5]=G.y;la[C+6]=G.z;la[C+7]=G.w;la[C+8]=i.x;la[C+9]=i.y;la[C+10]=i.z;la[C+11]=i.w;la[C+12]=Ka.x;la[C+13]=Ka.y;la[C+14]=Ka.z;la[C+15]=Ka.w;s=bb[t.a];G=bb[t.b];i=bb[t.c];Ka=bb[t.d];ja[C]=s.x;ja[C+1]=s.y;ja[C+2]=s.z;ja[C+3]=1;ja[C+4]=G.x;ja[C+5]=G.y;ja[C+6]=G.z;ja[C+7]=1;ja[C+8]=i.x;ja[C+9]=i.y;ja[C+10]=i.z;ja[C+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_226

><td class="source">11]=1;ja[C+12]=Ka.x;ja[C+13]=Ka.y;ja[C+14]=Ka.z;ja[C+15]=1;s=cb[t.a];G=cb[t.b];i=cb[t.c];t=cb[t.d];ka[C]=s.x;ka[C+1]=s.y;ka[C+2]=s.z;ka[C+3]=1;ka[C+4]=G.x;ka[C+5]=G.y;ka[C+6]=G.z;ka[C+7]=1;ka[C+8]=i.x;ka[C+9]=i.y;ka[C+10]=i.z;ka[C+11]=1;ka[C+12]=t.x;ka[C+13]=t.y;ka[C+14]=t.z;ka[C+15]=1;C+=16}if(mb&amp;&amp;W){if(z.length==4&amp;&amp;W==THREE.VertexColors){t=z[0];s=z[1];G=z[2];z=z[3]}else z=G=s=t=D;Ea[wa]=t.r;Ea[wa+1]=t.g;Ea[wa+2]=t.b;Ea[wa+3]=s.r;Ea[wa+4]=s.g;Ea[wa+5]=s.b;Ea[wa+6]=G.r;Ea[wa+7]=G.g;Ea[wa+8]=G.b;Ea[wa+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_227

><td class="source">9]=z.r;Ea[wa+10]=z.g;Ea[wa+11]=z.b;wa+=12}if(lb&amp;&amp;Ha.hasTangents){z=B[0];D=B[1];t=B[2];B=B[3];ia[ea]=z.x;ia[ea+1]=z.y;ia[ea+2]=z.z;ia[ea+3]=z.w;ia[ea+4]=D.x;ia[ea+5]=D.y;ia[ea+6]=D.z;ia[ea+7]=D.w;ia[ea+8]=t.x;ia[ea+9]=t.y;ia[ea+10]=t.z;ia[ea+11]=t.w;ia[ea+12]=B.x;ia[ea+13]=B.y;ia[ea+14]=B.z;ia[ea+15]=B.w;ea+=16}if(kb&amp;&amp;P)if(A.length==4&amp;&amp;qb)for(B=0;B&lt;4;B++){w=A[B];Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}else for(B=0;B&lt;4;B++){Qa[La]=w.x;Qa[La+1]=w.y;Qa[La+2]=w.z;La+=3}if(eb&amp;&amp;X!==undefined&amp;&amp;O)for(B=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_228

><td class="source">0;B&lt;4;B++){A=X[B];fb[Za]=A.u;fb[Za+1]=A.v;Za+=2}if(eb&amp;&amp;Ga!==undefined&amp;&amp;O)for(B=0;B&lt;4;B++){A=Ga[B];gb[$a]=A.u;gb[$a+1]=A.v;$a+=2}if(jb){Na[Ja]=ua;Na[Ja+1]=ua+1;Na[Ja+2]=ua+3;Na[Ja+3]=ua+1;Na[Ja+4]=ua+2;Na[Ja+5]=ua+3;Ja+=6;Oa[Ma]=ua;Oa[Ma+1]=ua+1;Oa[Ma+2]=ua;Oa[Ma+3]=ua+3;Oa[Ma+4]=ua+1;Oa[Ma+5]=ua+2;Oa[Ma+6]=ua+2;Oa[Ma+7]=ua+3;Ma+=8;ua+=4}}}if(Ya){y=0;for(u=Ya.length;y&lt;u;y++){Na[Ja]=Ya[y].a;Na[Ja+1]=Ya[y].b;Na[Ja+2]=Ya[y].c;Na[Ja+3]=Ya[y].a;Na[Ja+4]=Ya[y].c;Na[Ja+5]=Ya[y].d;Ja+=6}}if(ib){c.bindBuffer(c.ARRAY_BUFFER,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_229

><td class="source">k.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,Da,x)}if(Ra)for(Va in Ra){i=Ra[Va];if(i.needsUpdate){c.bindBuffer(c.ARRAY_BUFFER,i.buffer);c.bufferData(c.ARRAY_BUFFER,i.array,x);i.needsUpdate=!1}}if(nb){s=0;for(G=morphTargets.length;s&lt;G;s++){c.bindBuffer(c.ARRAY_BUFFER,k.__webglMorphTargetsBuffers[s]);c.bufferData(c.ARRAY_BUFFER,hb[s],x)}}if(mb&amp;&amp;wa&gt;0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,Ea,x)}if(kb){c.bindBuffer(c.ARRAY_BUFFER,k.__webglNormalBuffer);c.bufferData(c.ARRAY_BUFFER,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_230

><td class="source">Qa,x)}if(lb&amp;&amp;Ha.hasTangents){c.bindBuffer(c.ARRAY_BUFFER,k.__webglTangentBuffer);c.bufferData(c.ARRAY_BUFFER,ia,x)}if(eb&amp;&amp;Za&gt;0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglUVBuffer);c.bufferData(c.ARRAY_BUFFER,fb,x)}if(eb&amp;&amp;$a&gt;0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglUV2Buffer);c.bufferData(c.ARRAY_BUFFER,gb,x)}if(jb){c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k.__webglFaceBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,Na,x);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k.__webglLineBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_231

><td class="source">Oa,x)}if(C&gt;0){c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinVertexABuffer);c.bufferData(c.ARRAY_BUFFER,ja,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinVertexBBuffer);c.bufferData(c.ARRAY_BUFFER,ka,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinIndicesBuffer);c.bufferData(c.ARRAY_BUFFER,la,x);c.bindBuffer(c.ARRAY_BUFFER,k.__webglSkinWeightsBuffer);c.bufferData(c.ARRAY_BUFFER,ma,x)}}}j.__dirtyVertices=!1;j.__dirtyMorphTargets=!1;j.__dirtyElements=!1;j.__dirtyUvs=!1;j.__dirtyNormals=!1;j.__dirtyTangents=!1;j.__dirtyColors=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_232

><td class="source">!1}else if(f instanceof THREE.Ribbon){j=f.geometry;if(j.__dirtyVertices||j.__dirtyColors){f=j;p=c.DYNAMIC_DRAW;W=f.vertices;k=f.colors;P=W.length;x=k.length;X=f.__vertexArray;y=f.__colorArray;Ga=f.__dirtyColors;if(f.__dirtyVertices){for(u=0;u&lt;P;u++){O=W[u].position;m=u*3;X[m]=O.x;X[m+1]=O.y;X[m+2]=O.z}c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,X,p)}if(Ga){for(u=0;u&lt;x;u++){color=k[u];m=u*3;y[m]=color.r;y[m+1]=color.g;y[m+2]=color.b}c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_233

><td class="source">c.bufferData(c.ARRAY_BUFFER,y,p)}}j.__dirtyVertices=!1;j.__dirtyColors=!1}else if(f instanceof THREE.Line){j=f.geometry;if(j.__dirtyVertices||j.__dirtyColors){f=j;p=c.DYNAMIC_DRAW;W=f.vertices;k=f.colors;P=W.length;x=k.length;X=f.__vertexArray;y=f.__colorArray;Ga=f.__dirtyColors;if(f.__dirtyVertices){for(u=0;u&lt;P;u++){O=W[u].position;m=u*3;X[m]=O.x;X[m+1]=O.y;X[m+2]=O.z}c.bindBuffer(c.ARRAY_BUFFER,f.__webglVertexBuffer);c.bufferData(c.ARRAY_BUFFER,X,p)}if(Ga){for(u=0;u&lt;x;u++){color=k[u];m=u*3;y[m]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_234

><td class="source">color.r;y[m+1]=color.g;y[m+2]=color.b}c.bindBuffer(c.ARRAY_BUFFER,f.__webglColorBuffer);c.bufferData(c.ARRAY_BUFFER,y,p)}}j.__dirtyVertices=!1;j.__dirtyColors=!1}else if(f instanceof THREE.ParticleSystem){j=f.geometry;(j.__dirtyVertices||j.__dirtyColors||f.sortParticles)&amp;&amp;d(j,c.DYNAMIC_DRAW,f);j.__dirtyVertices=!1;j.__dirtyColors=!1}}function ra(f){function p(D){var B=[];j=0;for(k=D.length;j&lt;k;j++)D[j]==undefined?B.push(&quot;undefined&quot;):B.push(D[j].id);return B.join(&quot;_&quot;)}var j,k,m,x,y,u,A,t,w={},z=f.morphTargets!==<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_235

><td class="source">undefined?f.morphTargets.length:0;f.geometryGroups={};m=0;for(x=f.faces.length;m&lt;x;m++){y=f.faces[m];u=y.materials;A=p(u);w[A]==undefined&amp;&amp;(w[A]={hash:A,counter:0});t=w[A].hash+&quot;_&quot;+w[A].counter;f.geometryGroups[t]==undefined&amp;&amp;(f.geometryGroups[t]={faces:[],materials:u,vertices:0,numMorphTargets:z});y=y instanceof THREE.Face3?3:4;if(f.geometryGroups[t].vertices+y&gt;65535){w[A].counter+=1;t=w[A].hash+&quot;_&quot;+w[A].counter;f.geometryGroups[t]==undefined&amp;&amp;(f.geometryGroups[t]={faces:[],materials:u,vertices:0,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_236

><td class="source">numMorphTargets:z})}f.geometryGroups[t].faces.push(m);f.geometryGroups[t].vertices+=y}}function da(f,p,j){f.push({buffer:p,object:j,opaque:{list:[],count:0},transparent:{list:[],count:0}})}function pa(f){if(f!=ha){switch(f){case THREE.AdditiveBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.SRC_ALPHA,c.ONE);break;case THREE.SubtractiveBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.ZERO,c.ONE_MINUS_SRC_COLOR);break;case THREE.MultiplyBlending:c.blendEquation(c.FUNC_ADD);c.blendFunc(c.ZERO,c.SRC_COLOR);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_237

><td class="source">break;default:c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD);c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA)}ha=f}}function $(f,p,j){if((j.width&amp;j.width-1)==0&amp;&amp;(j.height&amp;j.height-1)==0){c.texParameteri(f,c.TEXTURE_WRAP_S,fa(p.wrapS));c.texParameteri(f,c.TEXTURE_WRAP_T,fa(p.wrapT));c.texParameteri(f,c.TEXTURE_MAG_FILTER,fa(p.magFilter));c.texParameteri(f,c.TEXTURE_MIN_FILTER,fa(p.minFilter));c.generateMipmap(f)}else{c.texParameteri(f,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_238

><td class="source">c.texParameteri(f,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(f,c.TEXTURE_MAG_FILTER,Fa(p.magFilter));c.texParameteri(f,c.TEXTURE_MIN_FILTER,Fa(p.minFilter))}}function K(f,p){if(f.needsUpdate){if(f.__webglInit){c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texSubImage2D(c.TEXTURE_2D,0,0,0,c.RGBA,c.UNSIGNED_BYTE,f.image)}else{f.__webglTexture=c.createTexture();c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,f.image);f.__webglInit=!0}$(c.TEXTURE_2D,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_239

><td class="source">f,f.image);c.bindTexture(c.TEXTURE_2D,null);f.needsUpdate=!1}c.activeTexture(c.TEXTURE0+p);c.bindTexture(c.TEXTURE_2D,f.__webglTexture)}function Ia(f){if(f&amp;&amp;!f.__webglFramebuffer){if(f.depthBuffer===undefined)f.depthBuffer=!0;if(f.stencilBuffer===undefined)f.stencilBuffer=!0;f.__webglFramebuffer=c.createFramebuffer();f.__webglRenderbuffer=c.createRenderbuffer();f.__webglTexture=c.createTexture();c.bindTexture(c.TEXTURE_2D,f.__webglTexture);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,fa(f.wrapS));<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_240

><td class="source">c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,fa(f.wrapT));c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,fa(f.magFilter));c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,fa(f.minFilter));c.texImage2D(c.TEXTURE_2D,0,fa(f.format),f.width,f.height,0,fa(f.format),fa(f.type),null);c.bindRenderbuffer(c.RENDERBUFFER,f.__webglRenderbuffer);c.bindFramebuffer(c.FRAMEBUFFER,f.__webglFramebuffer);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,f.__webglTexture,0);if(f.depthBuffer&amp;&amp;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_241

><td class="source">!f.stencilBuffer){c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,f.width,f.height);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,f.__webglRenderbuffer)}else if(f.depthBuffer&amp;&amp;f.stencilBuffer){c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_STENCIL,f.width,f.height);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.RENDERBUFFER,f.__webglRenderbuffer)}else c.renderbufferStorage(c.RENDERBUFFER,c.RGBA4,f.width,f.height);c.bindTexture(c.TEXTURE_2D,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_242

><td class="source">null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null)}var p,j;if(f){p=f.__webglFramebuffer;j=f.width;f=f.height}else{p=null;j=za;f=Aa}if(p!=ya){c.bindFramebuffer(c.FRAMEBUFFER,p);c.viewport(va,qa,j,f);ya=p}}function ca(f,p){var j;if(f==&quot;fragment&quot;)j=c.createShader(c.FRAGMENT_SHADER);else f==&quot;vertex&quot;&amp;&amp;(j=c.createShader(c.VERTEX_SHADER));c.shaderSource(j,p);c.compileShader(j);if(!c.getShaderParameter(j,c.COMPILE_STATUS)){console.error(c.getShaderInfoLog(j));console.error(p);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_243

><td class="source">return null}return j}function Fa(f){switch(f){case THREE.NearestFilter:case THREE.NearestMipMapNearestFilter:case THREE.NearestMipMapLinearFilter:return c.NEAREST;default:return c.LINEAR}}function fa(f){switch(f){case THREE.RepeatWrapping:return c.REPEAT;case THREE.ClampToEdgeWrapping:return c.CLAMP_TO_EDGE;case THREE.MirroredRepeatWrapping:return c.MIRRORED_REPEAT;case THREE.NearestFilter:return c.NEAREST;case THREE.NearestMipMapNearestFilter:return c.NEAREST_MIPMAP_NEAREST;case THREE.NearestMipMapLinearFilter:return c.NEAREST_MIPMAP_LINEAR;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_244

><td class="source">case THREE.LinearFilter:return c.LINEAR;case THREE.LinearMipMapNearestFilter:return c.LINEAR_MIPMAP_NEAREST;case THREE.LinearMipMapLinearFilter:return c.LINEAR_MIPMAP_LINEAR;case THREE.ByteType:return c.BYTE;case THREE.UnsignedByteType:return c.UNSIGNED_BYTE;case THREE.ShortType:return c.SHORT;case THREE.UnsignedShortType:return c.UNSIGNED_SHORT;case THREE.IntType:return c.INT;case THREE.UnsignedShortType:return c.UNSIGNED_INT;case THREE.FloatType:return c.FLOAT;case THREE.AlphaFormat:return c.ALPHA;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_245

><td class="source">case THREE.RGBFormat:return c.RGB;case THREE.RGBAFormat:return c.RGBA;case THREE.LuminanceFormat:return c.LUMINANCE;case THREE.LuminanceAlphaFormat:return c.LUMINANCE_ALPHA}return 0}var R=this,c,ga=document.createElement(&quot;canvas&quot;),xa=[],sa=null,ya=null,Y=!0,na=null,oa=null,ha=null,Z=null,va=0,qa=0,za=0,Aa=0,aa=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],Pa=new THREE.Matrix4,Ta=new Float32Array(16),Xa=new Float32Array(16),Ua=new THREE.Vector4,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_246

><td class="source">Sa={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]}};b=b||{};stencil=b.stencil!==undefined?b.stencil:!0;antialias=b.antialias!==undefined?b.antialias:!1;clearColor=b.clearColor!==undefined?new THREE.Color(b.clearColor):new THREE.Color(0);clearAlpha=b.clearAlpha!==undefined?b.clearAlpha:0;this.data={vertices:0,faces:0,drawCalls:0};this.maxMorphTargets=8;this.domElement=ga;this.autoClear=!0;this.sortObjects=!0;(function(f,p,j,k){try{if(!(c=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_247

><td class="source">ga.getContext(&quot;experimental-webgl&quot;,{antialias:f,stencil:k})))throw&quot;Error creating WebGL context.&quot;;}catch(m){console.error(m)}console.log(navigator.userAgent+&quot; | &quot;+c.getParameter(c.VERSION)+&quot; | &quot;+c.getParameter(c.VENDOR)+&quot; | &quot;+c.getParameter(c.RENDERER)+&quot; | &quot;+c.getParameter(c.SHADING_LANGUAGE_VERSION));c.clearColor(0,0,0,1);c.clearDepth(1);c.enable(c.DEPTH_TEST);c.depthFunc(c.LEQUAL);c.frontFace(c.CCW);c.cullFace(c.BACK);c.enable(c.CULL_FACE);c.enable(c.BLEND);c.blendEquation(c.FUNC_ADD);c.blendFunc(c.SRC_ALPHA,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_248

><td class="source">c.ONE_MINUS_SRC_ALPHA);c.clearColor(p.r,p.g,p.b,j)})(antialias,clearColor,clearAlpha,stencil);this.context=c;if(stencil){var S={};S.vertices=new Float32Array(12);S.faces=new Uint16Array(6);S.darkness=0.5;S.vertices[0]=-20;S.vertices[1]=-20;S.vertices[2]=-1;S.vertices[3]=20;S.vertices[4]=-20;S.vertices[5]=-1;S.vertices[6]=20;S.vertices[7]=20;S.vertices[8]=-1;S.vertices[9]=-20;S.vertices[10]=20;S.vertices[11]=-1;S.faces[0]=0;S.faces[1]=1;S.faces[2]=2;S.faces[3]=0;S.faces[4]=2;S.faces[5]=3;S.vertexBuffer=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_249

><td class="source">c.createBuffer();S.elementBuffer=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,S.vertexBuffer);c.bufferData(c.ARRAY_BUFFER,S.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,S.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,S.faces,c.STATIC_DRAW);S.program=c.createProgram();c.attachShader(S.program,ca(&quot;fragment&quot;,THREE.ShaderLib.shadowPost.fragmentShader));c.attachShader(S.program,ca(&quot;vertex&quot;,THREE.ShaderLib.shadowPost.vertexShader));c.linkProgram(S.program);S.vertexLocation=c.getAttribLocation(S.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_250

><td class="source">&quot;position&quot;);S.projectionLocation=c.getUniformLocation(S.program,&quot;projectionMatrix&quot;);S.darknessLocation=c.getUniformLocation(S.program,&quot;darkness&quot;)}var J={};J.vertices=new Float32Array(16);J.faces=new Uint16Array(6);b=0;J.vertices[b++]=-1;J.vertices[b++]=-1;J.vertices[b++]=0;J.vertices[b++]=0;J.vertices[b++]=1;J.vertices[b++]=-1;J.vertices[b++]=1;J.vertices[b++]=0;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=1;J.vertices[b++]=-1;J.vertices[b++]=1;J.vertices[b++]=0;J.vertices[b++]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_251

><td class="source">1;b=0;J.faces[b++]=0;J.faces[b++]=1;J.faces[b++]=2;J.faces[b++]=0;J.faces[b++]=2;J.faces[b++]=3;J.vertexBuffer=c.createBuffer();J.elementBuffer=c.createBuffer();J.tempTexture=c.createTexture();J.occlusionTexture=c.createTexture();c.bindBuffer(c.ARRAY_BUFFER,J.vertexBuffer);c.bufferData(c.ARRAY_BUFFER,J.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,J.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,J.faces,c.STATIC_DRAW);c.bindTexture(c.TEXTURE_2D,J.tempTexture);c.texImage2D(c.TEXTURE_2D,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_252

><td class="source">0,c.RGB,16,16,0,c.RGB,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.bindTexture(c.TEXTURE_2D,J.occlusionTexture);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,16,16,0,c.RGBA,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_253

><td class="source">c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);if(c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&lt;=0){J.hasVertexTexture=!1;J.program=c.createProgram();c.attachShader(J.program,ca(&quot;fragment&quot;,THREE.ShaderLib.lensFlare.fragmentShader));c.attachShader(J.program,ca(&quot;vertex&quot;,THREE.ShaderLib.lensFlare.vertexShader))}else{J.hasVertexTexture=!0;J.program=c.createProgram();c.attachShader(J.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_254

><td class="source">ca(&quot;fragment&quot;,THREE.ShaderLib.lensFlareVertexTexture.fragmentShader));c.attachShader(J.program,ca(&quot;vertex&quot;,THREE.ShaderLib.lensFlareVertexTexture.vertexShader))}c.linkProgram(J.program);J.attributes={};J.uniforms={};J.attributes.vertex=c.getAttribLocation(J.program,&quot;position&quot;);J.attributes.uv=c.getAttribLocation(J.program,&quot;UV&quot;);J.uniforms.renderType=c.getUniformLocation(J.program,&quot;renderType&quot;);J.uniforms.map=c.getUniformLocation(J.program,&quot;map&quot;);J.uniforms.occlusionMap=c.getUniformLocation(J.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_255

><td class="source">&quot;occlusionMap&quot;);J.uniforms.opacity=c.getUniformLocation(J.program,&quot;opacity&quot;);J.uniforms.scale=c.getUniformLocation(J.program,&quot;scale&quot;);J.uniforms.rotation=c.getUniformLocation(J.program,&quot;rotation&quot;);J.uniforms.screenPosition=c.getUniformLocation(J.program,&quot;screenPosition&quot;);var pb=!1;_sprite={};_sprite.vertices=new Float32Array(16);_sprite.faces=new Uint16Array(6);b=0;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;_sprite.vertices[b++]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_256

><td class="source">-1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=-1;_sprite.vertices[b++]=1;_sprite.vertices[b++]=0;_sprite.vertices[b++]=1;b=0;_sprite.faces[b++]=0;_sprite.faces[b++]=1;_sprite.faces[b++]=2;_sprite.faces[b++]=0;_sprite.faces[b++]=2;_sprite.faces[b++]=3;_sprite.vertexBuffer=c.createBuffer();_sprite.elementBuffer=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,_sprite.vertexBuffer);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_257

><td class="source">c.bufferData(c.ARRAY_BUFFER,_sprite.vertices,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,_sprite.elementBuffer);c.bufferData(c.ELEMENT_ARRAY_BUFFER,_sprite.faces,c.STATIC_DRAW);_sprite.program=c.createProgram();c.attachShader(_sprite.program,ca(&quot;fragment&quot;,THREE.ShaderLib.sprite.fragmentShader));c.attachShader(_sprite.program,ca(&quot;vertex&quot;,THREE.ShaderLib.sprite.vertexShader));c.linkProgram(_sprite.program);_sprite.attributes={};_sprite.uniforms={};_sprite.attributes.position=c.getAttribLocation(_sprite.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_258

><td class="source">&quot;position&quot;);_sprite.attributes.uv=c.getAttribLocation(_sprite.program,&quot;uv&quot;);_sprite.uniforms.uvOffset=c.getUniformLocation(_sprite.program,&quot;uvOffset&quot;);_sprite.uniforms.uvScale=c.getUniformLocation(_sprite.program,&quot;uvScale&quot;);_sprite.uniforms.rotation=c.getUniformLocation(_sprite.program,&quot;rotation&quot;);_sprite.uniforms.scale=c.getUniformLocation(_sprite.program,&quot;scale&quot;);_sprite.uniforms.alignment=c.getUniformLocation(_sprite.program,&quot;alignment&quot;);_sprite.uniforms.map=c.getUniformLocation(_sprite.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_259

><td class="source">&quot;map&quot;);_sprite.uniforms.opacity=c.getUniformLocation(_sprite.program,&quot;opacity&quot;);_sprite.uniforms.useScreenCoordinates=c.getUniformLocation(_sprite.program,&quot;useScreenCoordinates&quot;);_sprite.uniforms.affectedByDistance=c.getUniformLocation(_sprite.program,&quot;affectedByDistance&quot;);_sprite.uniforms.screenPosition=c.getUniformLocation(_sprite.program,&quot;screenPosition&quot;);_sprite.uniforms.modelViewMatrix=c.getUniformLocation(_sprite.program,&quot;modelViewMatrix&quot;);_sprite.uniforms.projectionMatrix=c.getUniformLocation(_sprite.program,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_260

><td class="source">&quot;projectionMatrix&quot;);var ob=!1;this.setSize=function(f,p){ga.width=f;ga.height=p;this.setViewport(0,0,ga.width,ga.height)};this.setViewport=function(f,p,j,k){va=f;qa=p;za=j;Aa=k;c.viewport(va,qa,za,Aa)};this.setScissor=function(f,p,j,k){c.scissor(f,p,j,k)};this.enableScissorTest=function(f){f?c.enable(c.SCISSOR_TEST):c.disable(c.SCISSOR_TEST)};this.enableDepthBufferWrite=function(f){Y=f;c.depthMask(f)};this.setClearColorHex=function(f,p){var j=new THREE.Color(f);c.clearColor(j.r,j.g,j.b,p)};this.setClearColor=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_261

><td class="source">function(f,p){c.clearColor(f.r,f.g,f.b,p)};this.clear=function(){c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT|c.STENCIL_BUFFER_BIT)};this.setStencilShadowDarkness=function(f){S.darkness=f};this.getContext=function(){return c};this.initMaterial=function(f,p,j,k){var m,x,y;if(f instanceof THREE.MeshDepthMaterial)y=&quot;depth&quot;;else if(f instanceof THREE.ShadowVolumeDynamicMaterial)y=&quot;shadowVolumeDynamic&quot;;else if(f instanceof THREE.MeshNormalMaterial)y=&quot;normal&quot;;else if(f instanceof THREE.MeshBasicMaterial)y=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_262

><td class="source">&quot;basic&quot;;else if(f instanceof THREE.MeshLambertMaterial)y=&quot;lambert&quot;;else if(f instanceof THREE.MeshPhongMaterial)y=&quot;phong&quot;;else if(f instanceof THREE.LineBasicMaterial)y=&quot;basic&quot;;else f instanceof THREE.ParticleBasicMaterial&amp;&amp;(y=&quot;particle_basic&quot;);if(y){var u=THREE.ShaderLib[y];f.uniforms=THREE.UniformsUtils.clone(u.uniforms);f.vertexShader=u.vertexShader;f.fragmentShader=u.fragmentShader}var A,t,w;A=w=u=0;for(t=p.length;A&lt;t;A++){x=p[A];x instanceof THREE.DirectionalLight&amp;&amp;w++;x instanceof THREE.PointLight&amp;&amp;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_263

><td class="source">u++}if(u+w&lt;=4)p=w;else{p=Math.ceil(4*w/(u+w));u=4-p}x={directional:p,point:u};w=50;if(k!==undefined&amp;&amp;k instanceof THREE.SkinnedMesh)w=k.bones.length;var z;a:{A=f.fragmentShader;t=f.vertexShader;u=f.uniforms;p=f.attributes;j={map:!!f.map,envMap:!!f.envMap,lightMap:!!f.lightMap,vertexColors:f.vertexColors,fog:j,sizeAttenuation:f.sizeAttenuation,skinning:f.skinning,morphTargets:f.morphTargets,maxMorphTargets:this.maxMorphTargets,maxDirLights:x.directional,maxPointLights:x.point,maxBones:w};var D;x=[];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_264

><td class="source">if(y)x.push(y);else{x.push(A);x.push(t)}for(D in j){x.push(D);x.push(j[D])}y=x.join();D=0;for(x=xa.length;D&lt;x;D++)if(xa[D].code==y){z=xa[D].program;break a}D=c.createProgram();prefix_fragment=[&quot;#ifdef GL_ES\nprecision highp float;\n#endif&quot;,&quot;#define MAX_DIR_LIGHTS &quot;+j.maxDirLights,&quot;#define MAX_POINT_LIGHTS &quot;+j.maxPointLights,j.fog?&quot;#define USE_FOG&quot;:&quot;&quot;,j.fog instanceof THREE.FogExp2?&quot;#define FOG_EXP2&quot;:&quot;&quot;,j.map?&quot;#define USE_MAP&quot;:&quot;&quot;,j.envMap?&quot;#define USE_ENVMAP&quot;:&quot;&quot;,j.lightMap?&quot;#define USE_LIGHTMAP&quot;:&quot;&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_265

><td class="source">j.vertexColors?&quot;#define USE_COLOR&quot;:&quot;&quot;,&quot;uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n&quot;].join(&quot;\n&quot;);prefix_vertex=[c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&gt;0?&quot;#define VERTEX_TEXTURES&quot;:&quot;&quot;,&quot;#define MAX_DIR_LIGHTS &quot;+j.maxDirLights,&quot;#define MAX_POINT_LIGHTS &quot;+j.maxPointLights,&quot;#define MAX_BONES &quot;+j.maxBones,j.map?&quot;#define USE_MAP&quot;:&quot;&quot;,j.envMap?&quot;#define USE_ENVMAP&quot;:&quot;&quot;,j.lightMap?&quot;#define USE_LIGHTMAP&quot;:&quot;&quot;,j.vertexColors?&quot;#define USE_COLOR&quot;:&quot;&quot;,j.skinning?&quot;#define USE_SKINNING&quot;:&quot;&quot;,j.morphTargets?<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_266

><td class="source">&quot;#define USE_MORPHTARGETS&quot;:&quot;&quot;,j.sizeAttenuation?&quot;#define USE_SIZEATTENUATION&quot;:&quot;&quot;,&quot;uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n&quot;].join(&quot;\n&quot;);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_267

><td class="source">c.attachShader(D,ca(&quot;fragment&quot;,prefix_fragment+A));c.attachShader(D,ca(&quot;vertex&quot;,prefix_vertex+t));c.linkProgram(D);c.getProgramParameter(D,c.LINK_STATUS)||console.error(&quot;Could not initialise shader\nVALIDATE_STATUS: &quot;+c.getProgramParameter(D,c.VALIDATE_STATUS)+&quot;, gl error [&quot;+c.getError()+&quot;]&quot;);D.uniforms={};D.attributes={};var B;A=[&quot;viewMatrix&quot;,&quot;modelViewMatrix&quot;,&quot;projectionMatrix&quot;,&quot;normalMatrix&quot;,&quot;objectMatrix&quot;,&quot;cameraPosition&quot;,&quot;cameraInverseMatrix&quot;,&quot;boneGlobalMatrices&quot;,&quot;morphTargetInfluences&quot;];for(B in u)A.push(B);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_268

><td class="source">B=A;u=0;for(A=B.length;u&lt;A;u++){t=B[u];D.uniforms[t]=c.getUniformLocation(D,t)}A=[&quot;position&quot;,&quot;normal&quot;,&quot;uv&quot;,&quot;uv2&quot;,&quot;tangent&quot;,&quot;color&quot;,&quot;skinVertexA&quot;,&quot;skinVertexB&quot;,&quot;skinIndex&quot;,&quot;skinWeight&quot;];for(B=0;B&lt;j.maxMorphTargets;B++)A.push(&quot;morphTarget&quot;+B);for(z in p)A.push(z);z=A;B=0;for(p=z.length;B&lt;p;B++){j=z[B];D.attributes[j]=c.getAttribLocation(D,j)}xa.push({program:D,code:y});z=D}f.program=z;z=f.program.attributes;c.enableVertexAttribArray(z.position);z.color&gt;=0&amp;&amp;c.enableVertexAttribArray(z.color);z.normal&gt;=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_269

><td class="source">0&amp;&amp;c.enableVertexAttribArray(z.normal);z.tangent&gt;=0&amp;&amp;c.enableVertexAttribArray(z.tangent);if(f.skinning&amp;&amp;z.skinVertexA&gt;=0&amp;&amp;z.skinVertexB&gt;=0&amp;&amp;z.skinIndex&gt;=0&amp;&amp;z.skinWeight&gt;=0){c.enableVertexAttribArray(z.skinVertexA);c.enableVertexAttribArray(z.skinVertexB);c.enableVertexAttribArray(z.skinIndex);c.enableVertexAttribArray(z.skinWeight)}for(m in f.attributes)z[m]&gt;=0&amp;&amp;c.enableVertexAttribArray(z[m]);if(f.morphTargets){f.numSupportedMorphTargets=0;if(z.morphTarget0&gt;=0){c.enableVertexAttribArray(z.morphTarget0);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_270

><td class="source">f.numSupportedMorphTargets++}if(z.morphTarget1&gt;=0){c.enableVertexAttribArray(z.morphTarget1);f.numSupportedMorphTargets++}if(z.morphTarget2&gt;=0){c.enableVertexAttribArray(z.morphTarget2);f.numSupportedMorphTargets++}if(z.morphTarget3&gt;=0){c.enableVertexAttribArray(z.morphTarget3);f.numSupportedMorphTargets++}if(z.morphTarget4&gt;=0){c.enableVertexAttribArray(z.morphTarget4);f.numSupportedMorphTargets++}if(z.morphTarget5&gt;=0){c.enableVertexAttribArray(z.morphTarget5);f.numSupportedMorphTargets++}if(z.morphTarget6&gt;=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_271

><td class="source">0){c.enableVertexAttribArray(z.morphTarget6);f.numSupportedMorphTargets++}if(z.morphTarget7&gt;=0){c.enableVertexAttribArray(z.morphTarget7);f.numSupportedMorphTargets++}k.__webglMorphTargetInfluences=new Float32Array(this.maxMorphTargets);f=0;for(m=this.maxMorphTargets;f&lt;m;f++)k.__webglMorphTargetInfluences[f]=0}};this.render=function(f,p,j,k){var m,x,y,u,A,t,w,z,D=f.lights,B=f.fog;R.data.vertices=0;R.data.faces=0;R.data.drawCalls=0;p.matrixAutoUpdate&amp;&amp;p.update(undefined,!0);f.update(undefined,!1,p);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_272

><td class="source">p.matrixWorldInverse.flattenToArray(Xa);p.projectionMatrix.flattenToArray(Ta);Pa.multiply(p.projectionMatrix,p.matrixWorldInverse);q(Pa);this.initWebGLObjects(f);Ia(j);(this.autoClear||k)&amp;&amp;this.clear();A=f.__webglObjects.length;for(k=0;k&lt;A;k++){m=f.__webglObjects[k];w=m.object;if(w.visible)if(!(w instanceof THREE.Mesh)||r(w)){w.matrixWorld.flattenToArray(w._objectMatrixArray);V(w,p);F(m);m.render=!0;if(this.sortObjects){Ua.copy(w.position);Pa.multiplyVector3(Ua);m.z=Ua.z}}else m.render=!1;else m.render=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_273

><td class="source">!1}this.sortObjects&amp;&amp;f.__webglObjects.sort(H);t=f.__webglObjectsImmediate.length;for(k=0;k&lt;t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){w.matrixAutoUpdate&amp;&amp;w.matrixWorld.flattenToArray(w._objectMatrixArray);V(w,p);E(m)}}pa(THREE.NormalBlending);for(k=0;k&lt;A;k++){m=f.__webglObjects[k];if(m.render){w=m.object;z=m.buffer;y=m.opaque;o(w);for(m=0;m&lt;y.count;m++){u=y.list[m];n(u.depthTest);g(p,D,B,u,z,w)}}}for(k=0;k&lt;t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){y=m.opaque;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_274

><td class="source">o(w);for(m=0;m&lt;y.count;m++){u=y.list[m];n(u.depthTest);x=e(p,D,B,u,w);w.render(function(O){h(O,x,u.shading)})}}}for(k=0;k&lt;A;k++){m=f.__webglObjects[k];if(m.render){w=m.object;z=m.buffer;y=m.transparent;o(w);for(m=0;m&lt;y.count;m++){u=y.list[m];pa(u.blending);n(u.depthTest);g(p,D,B,u,z,w)}}}for(k=0;k&lt;t;k++){m=f.__webglObjectsImmediate[k];w=m.object;if(w.visible){y=m.transparent;o(w);for(m=0;m&lt;y.count;m++){u=y.list[m];pa(u.blending);n(u.depthTest);x=e(p,D,B,u,w);w.render(function(O){h(O,x,u.shading)})}}}f.__webglSprites.length&amp;&amp;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_275

><td class="source">M(f,p);stencil&amp;&amp;f.__webglShadowVolumes.length&amp;&amp;f.lights.length&amp;&amp;I(f);f.__webglLensFlares.length&amp;&amp;N(f,p);if(j&amp;&amp;j.minFilter!==THREE.NearestFilter&amp;&amp;j.minFilter!==THREE.LinearFilter){c.bindTexture(c.TEXTURE_2D,j.__webglTexture);c.generateMipmap(c.TEXTURE_2D);c.bindTexture(c.TEXTURE_2D,null)}};this.initWebGLObjects=function(f){if(!f.__webglObjects){f.__webglObjects=[];f.__webglObjectsImmediate=[];f.__webglShadowVolumes=[];f.__webglLensFlares=[];f.__webglSprites=[]}for(;f.__objectsAdded.length;){var p=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_276

><td class="source">f.__objectsAdded[0],j=f,k=void 0,m=void 0,x=void 0;if(p._modelViewMatrix==undefined){p._modelViewMatrix=new THREE.Matrix4;p._normalMatrixArray=new Float32Array(9);p._modelViewMatrixArray=new Float32Array(16);p._objectMatrixArray=new Float32Array(16);p.matrixWorld.flattenToArray(p._objectMatrixArray)}if(p instanceof THREE.Mesh){m=p.geometry;m.geometryGroups==undefined&amp;&amp;ra(m);for(k in m.geometryGroups){x=m.geometryGroups[k];if(!x.__webglVertexBuffer){var y=x;y.__webglVertexBuffer=c.createBuffer();y.__webglNormalBuffer=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_277

><td class="source">c.createBuffer();y.__webglTangentBuffer=c.createBuffer();y.__webglColorBuffer=c.createBuffer();y.__webglUVBuffer=c.createBuffer();y.__webglUV2Buffer=c.createBuffer();y.__webglSkinVertexABuffer=c.createBuffer();y.__webglSkinVertexBBuffer=c.createBuffer();y.__webglSkinIndicesBuffer=c.createBuffer();y.__webglSkinWeightsBuffer=c.createBuffer();y.__webglFaceBuffer=c.createBuffer();y.__webglLineBuffer=c.createBuffer();if(y.numMorphTargets){var u=void 0,A=void 0;y.__webglMorphTargetsBuffers=[];u=0;for(A=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_278

><td class="source">y.numMorphTargets;u&lt;A;u++)y.__webglMorphTargetsBuffers.push(c.createBuffer())}y=x;u=p;var t=void 0,w=void 0,z=void 0;z=void 0;var D=void 0,B=void 0,O=void 0,W=O=A=0;w=void 0;z=void 0;var P=void 0;t=void 0;w=void 0;D=u.geometry;P=D.faces;B=y.faces;t=0;for(w=B.length;t&lt;w;t++){z=B[t];z=P[z];if(z instanceof THREE.Face3){A+=3;O+=1;W+=3}else if(z instanceof THREE.Face4){A+=4;O+=2;W+=4}}t=y;w=u;P=void 0;B=void 0;var X=void 0,Ga=void 0;X=void 0;z=[];P=0;for(B=w.materials.length;P&lt;B;P++){X=w.materials[P];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_279

><td class="source">if(X instanceof THREE.MeshFaceMaterial){X=0;for(l=t.materials.length;X&lt;l;X++)(Ga=t.materials[X])&amp;&amp;z.push(Ga)}else(Ga=X)&amp;&amp;z.push(Ga)}t=z;a:{w=void 0;P=void 0;B=t.length;for(w=0;w&lt;B;w++){P=t[w];if(P.map||P.lightMap||P instanceof THREE.MeshShaderMaterial){w=!0;break a}}w=!1}a:{P=void 0;B=void 0;z=t.length;for(P=0;P&lt;z;P++){B=t[P];if(!(B instanceof THREE.MeshBasicMaterial&amp;&amp;!B.envMap||B instanceof THREE.MeshDepthMaterial)){P=B&amp;&amp;B.shading!=undefined&amp;&amp;B.shading==THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_280

><td class="source">break a}}P=!1}a:{B=void 0;z=void 0;X=t.length;for(B=0;B&lt;X;B++){z=t[B];if(z.vertexColors){z=z.vertexColors;break a}}z=!1}y.__vertexArray=new Float32Array(A*3);if(P)y.__normalArray=new Float32Array(A*3);if(D.hasTangents)y.__tangentArray=new Float32Array(A*4);if(z)y.__colorArray=new Float32Array(A*3);if(w){if(D.faceUvs.length&gt;0||D.faceVertexUvs.length&gt;0)y.__uvArray=new Float32Array(A*2);if(D.faceUvs.length&gt;1||D.faceVertexUvs.length&gt;1)y.__uv2Array=new Float32Array(A*2)}if(u.geometry.skinWeights.length&amp;&amp;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_281

><td class="source">u.geometry.skinIndices.length){y.__skinVertexAArray=new Float32Array(A*4);y.__skinVertexBArray=new Float32Array(A*4);y.__skinIndexArray=new Float32Array(A*4);y.__skinWeightArray=new Float32Array(A*4)}y.__faceArray=new Uint16Array(O*3+(u.geometry.edgeFaces?u.geometry.edgeFaces.length*6:0));y.__lineArray=new Uint16Array(W*2);if(y.numMorphTargets){y.__morphTargetsArrays=[];D=0;for(B=y.numMorphTargets;D&lt;B;D++)y.__morphTargetsArrays.push(new Float32Array(A*3))}y.__needsSmoothNormals=P==THREE.SmoothShading;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_282

><td class="source">y.__uvType=w;y.__vertexColorType=z;y.__normalType=P;y.__webglFaceCount=O*3+(u.geometry.edgeFaces?u.geometry.edgeFaces.length*6:0);y.__webglLineCount=W*2;D=0;for(B=t.length;D&lt;B;D++)if(t[D].attributes){y.__webglCustomAttributes={};for(a in t[D].attributes){w=t[D].attributes[a];if(!w.__webglInitialized||w.createUniqueBuffers){w.__webglInitialized=!0;O=1;if(w.type===&quot;v2&quot;)O=2;else if(w.type===&quot;v3&quot;)O=3;else if(w.type===&quot;v4&quot;)O=4;else w.type===&quot;c&quot;&amp;&amp;(O=3);w.size=O;w.needsUpdate=!0;w.array=new Float32Array(A*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_283

><td class="source">O);w.buffer=c.createBuffer();w.buffer.belongsToAttribute=a}y.__webglCustomAttributes[a]=w}}m.__dirtyVertices=!0;m.__dirtyMorphTargets=!0;m.__dirtyElements=!0;m.__dirtyUvs=!0;m.__dirtyNormals=!0;m.__dirtyTangents=!0;m.__dirtyColors=!0}p instanceof THREE.ShadowVolume?da(j.__webglShadowVolumes,x,p):da(j.__webglObjects,x,p)}}else if(p instanceof THREE.LensFlare)da(j.__webglLensFlares,undefined,p);else if(p instanceof THREE.Ribbon){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_284

><td class="source">k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__webglVertexCount=x;m.__dirtyVertices=!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(p instanceof THREE.Line){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__webglLineCount=x;m.__dirtyVertices=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_285

><td class="source">!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(p instanceof THREE.ParticleSystem){m=p.geometry;if(!m.__webglVertexBuffer){k=m;k.__webglVertexBuffer=c.createBuffer();k.__webglColorBuffer=c.createBuffer();k=m;x=k.vertices.length;k.__vertexArray=new Float32Array(x*3);k.__colorArray=new Float32Array(x*3);k.__sortArray=[];k.__webglParticleCount=x;m.__dirtyVertices=!0;m.__dirtyColors=!0}da(j.__webglObjects,m,p)}else if(THREE.MarchingCubes!==undefined&amp;&amp;p instanceof THREE.MarchingCubes)j.__webglObjectsImmediate.push({object:p,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_286

><td class="source">opaque:{list:[],count:0},transparent:{list:[],count:0}});else p instanceof THREE.Sprite&amp;&amp;j.__webglSprites.push(p);f.__objectsAdded.splice(0,1)}for(;f.__objectsRemoved.length;){p=f.__objectsRemoved[0];j=f;m=void 0;k=void 0;if(p instanceof THREE.Mesh)for(m=j.__webglObjects.length-1;m&gt;=0;m--){k=j.__webglObjects[m].object;if(p==k){j.__webglObjects.splice(m,1);break}}else if(p instanceof THREE.Sprite)for(m=j.__webglSprites.length-1;m&gt;=0;m--){k=j.__webglSprites[m];if(p==k){j.__webglSprites.splice(m,1);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_287

><td class="source">break}}f.__objectsRemoved.splice(0,1)}p=0;for(j=f.__webglObjects.length;p&lt;j;p++)L(f.__webglObjects[p].object,f);p=0;for(j=f.__webglShadowVolumes.length;p&lt;j;p++)L(f.__webglShadowVolumes[p].object,f);p=0;for(j=f.__webglLensFlares.length;p&lt;j;p++)L(f.__webglLensFlares[p].object,f)};this.setFaceCulling=function(f,p){if(f){!p||p==&quot;ccw&quot;?c.frontFace(c.CCW):c.frontFace(c.CW);if(f==&quot;back&quot;)c.cullFace(c.BACK);else f==&quot;front&quot;?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK);c.enable(c.CULL_FACE)}else c.disable(c.CULL_FACE)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_288

><td class="source">this.supportsVertexTextures=function(){return c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)&gt;0}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_289

><td class="source">THREE.WebGLRenderTarget=function(b,d,e){this.width=b;this.height=d;e=e||{};this.wrapS=e.wrapS!==undefined?e.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=e.wrapT!==undefined?e.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=e.magFilter!==undefined?e.magFilter:THREE.LinearFilter;this.minFilter=e.minFilter!==undefined?e.minFilter:THREE.LinearMipMapLinearFilter;this.format=e.format!==undefined?e.format:THREE.RGBAFormat;this.type=e.type!==undefined?e.type:THREE.UnsignedByteType;this.depthBuffer=e.depthBuffer!==<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_290

><td class="source">undefined?e.depthBuffer:!0;this.stencilBuffer=e.stencilBuffer!==undefined?e.stencilBuffer:!0};<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/webgl-globe/source/detail?spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;r=167cd00544424b26d90f76d56ea22d53aa02bb1a">167cd0054442</a>
 by Doug Fritz &lt;dougfr...@google.com&gt;
 on May 5, 2011
 &nbsp; <a href="/p/webgl-globe/source/diff?spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a&r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;format=side&amp;path=/globe/Three/ThreeWebGL.js&amp;old_path=/globe/Three/ThreeWebGL.js&amp;old=">Diff</a>
 </div>
 <pre>data arts</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/webgl-globe/source/detail?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a';
 var publish_url = '/p/webgl-globe/source/detail?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/.hgignore');
 changed_urls.push('/p/webgl-globe/source/browse/.hgignore?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/LICENSE');
 changed_urls.push('/p/webgl-globe/source/browse/LICENSE?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/README.md');
 changed_urls.push('/p/webgl-globe/source/browse/README.md?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/embed.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/embed.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/index.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/index.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe-search/search.json');
 changed_urls.push('/p/webgl-globe/source/browse/globe-search/search.json?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/Detector.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/Detector.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/RequestAnimationFrame.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/RequestAnimationFrame.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/ThreeExtras.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/ThreeExtras.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/Three/ThreeWebGL.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 var selected_path = '/globe/Three/ThreeWebGL.js';
 
 
 changed_paths.push('/globe/Tween.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Tween.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/ce.png');
 changed_urls.push('/p/webgl-globe/source/browse/globe/ce.png?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/globe.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/globe.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/index.html');
 changed_urls.push('/p/webgl-globe/source/browse/globe/index.html?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/loading.gif');
 changed_urls.push('/p/webgl-globe/source/browse/globe/loading.gif?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/population909500.json');
 changed_urls.push('/p/webgl-globe/source/browse/globe/population909500.json?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 changed_paths.push('/globe/world.jpg');
 changed_urls.push('/p/webgl-globe/source/browse/globe/world.jpg?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/webgl-globe/source/browse/.hgignore?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/.hgignore</option>
 
 <option value="/p/webgl-globe/source/browse/LICENSE?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/LICENSE</option>
 
 <option value="/p/webgl-globe/source/browse/README.md?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/README.md</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/embed.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/embed.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/index.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/index.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe-search/search.json?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe-search/search.json</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/Detector.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Three/Detector.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/RequestAnimationFrame.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >...e/Three/RequestAnimationFrame.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/ThreeExtras.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Three/ThreeExtras.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 selected="selected"
 >/globe/Three/ThreeWebGL.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Tween.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/Tween.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/ce.png?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/ce.png</option>
 
 <option value="/p/webgl-globe/source/browse/globe/globe.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/globe.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/index.html?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/index.html</option>
 
 <option value="/p/webgl-globe/source/browse/globe/loading.gif?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/loading.gif</option>
 
 <option value="/p/webgl-globe/source/browse/globe/population909500.json?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/population909500.json</option>
 
 <option value="/p/webgl-globe/source/browse/globe/world.jpg?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
 >/globe/world.jpg</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/webgl-globe/source/list?path=/globe/Three/ThreeWebGL.js&r=167cd00544424b26d90f76d56ea22d53aa02bb1a">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 142027 bytes,
 290 lines</div>
 
 <div><a href="//webgl-globe.googlecode.com/hg-history/167cd00544424b26d90f76d56ea22d53aa02bb1a/globe/Three/ThreeWebGL.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn167cd00544424b26d90f76d56ea22d53aa02bb1a': '/globe/Three/ThreeWebGL.js'}
 codereviews = CR_controller.setup(
 {"assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"projectName":"webgl-globe","token":"JY5uTODgdeTTx0s25wd1QBP63nw:1356944928798","profileUrl":"/u/103961560919112817044/","loggedInUserEmail":"emouaddib@gmail.com","relativeBaseUrl":"","projectHomeUrl":"/p/webgl-globe","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344"}, '', 'svn167cd00544424b26d90f76d56ea22d53aa02bb1a', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16229512607128645344/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

