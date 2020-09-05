



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "yUO1YmNlRHyjqZX__n-B5VKXlUE:1356944922692";
 
 
 var CS_env = {"domainName":null,"projectName":"webgl-globe","relativeBaseUrl":"","loggedInUserEmail":"emouaddib@gmail.com","assetHostPath":"http://www.gstatic.com/codesite/ph","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344","projectHomeUrl":"/p/webgl-globe","profileUrl":"/u/103961560919112817044/","token":"yUO1YmNlRHyjqZX__n-B5VKXlUE:1356944922692"};
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
 
 
 <title>ThreeExtras.js - 
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
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fwebgl-globe%2Fsource%2Fbrowse%2Fglobe%2FThree%2FThreeExtras.js%3Fr%3D167cd00544424b26d90f76d56ea22d53aa02bb1a" 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/webgl-globe/source/browse/globe/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">globe</a><span class="sp">/&nbsp;</span><a href="/p/webgl-globe/source/browse/globe/Three/?r=167cd00544424b26d90f76d56ea22d53aa02bb1a">Three</a><span class="sp">/&nbsp;</span>ThreeExtras.js</span>
 
 

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
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_1

><td class="source">// ThreeExtras.js r40 - http://github.com/mrdoob/three.js<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_2

><td class="source">THREE.AnimationHandler=function(){var a=[],c={},b={};b.update=function(f){for(var d=0;d&lt;a.length;d++)a[d].update(f)};b.addToUpdate=function(f){a.indexOf(f)===-1&amp;&amp;a.push(f)};b.removeFromUpdate=function(f){f=a.indexOf(f);f!==-1&amp;&amp;a.splice(f,1)};b.add=function(f){c[f.name]!==undefined&amp;&amp;console.log(&quot;THREE.AnimationHandler.add: Warning! &quot;+f.name+&quot; already exists in library. Overwriting.&quot;);c[f.name]=f;if(f.initialized!==!0){for(var d=0;d&lt;f.hierarchy.length;d++){for(var g=0;g&lt;f.hierarchy[d].keys.length;g++){if(f.hierarchy[d].keys[g].time&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_3

><td class="source">0)f.hierarchy[d].keys[g].time=0;if(f.hierarchy[d].keys[g].rot!==undefined&amp;&amp;!(f.hierarchy[d].keys[g].rot instanceof THREE.Quaternion)){var h=f.hierarchy[d].keys[g].rot;f.hierarchy[d].keys[g].rot=new THREE.Quaternion(h[0],h[1],h[2],h[3])}}if(f.hierarchy[d].keys[0].morphTargets!==undefined){h={};for(g=0;g&lt;f.hierarchy[d].keys.length;g++)for(var j=0;j&lt;f.hierarchy[d].keys[g].morphTargets.length;j++){var l=f.hierarchy[d].keys[g].morphTargets[j];h[l]=-1}f.hierarchy[d].usedMorphTargets=h;for(g=0;g&lt;f.hierarchy[d].keys.length;g++){var k=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_4

><td class="source">{};for(l in h){for(j=0;j&lt;f.hierarchy[d].keys[g].morphTargets.length;j++)if(f.hierarchy[d].keys[g].morphTargets[j]===l){k[l]=f.hierarchy[d].keys[g].morphTargetsInfluences[j];break}j===f.hierarchy[d].keys[g].morphTargets.length&amp;&amp;(k[l]=0)}f.hierarchy[d].keys[g].morphTargetsInfluences=k}}for(g=1;g&lt;f.hierarchy[d].keys.length;g++)if(f.hierarchy[d].keys[g].time===f.hierarchy[d].keys[g-1].time){f.hierarchy[d].keys.splice(g,1);g--}for(g=1;g&lt;f.hierarchy[d].keys.length;g++)f.hierarchy[d].keys[g].index=g}g=parseInt(f.length*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_5

><td class="source">f.fps,10);f.JIT={};f.JIT.hierarchy=[];for(d=0;d&lt;f.hierarchy.length;d++)f.JIT.hierarchy.push(Array(g));f.initialized=!0}};b.get=function(f){if(typeof f===&quot;string&quot;)if(c[f])return c[f];else{console.log(&quot;THREE.AnimationHandler.get: Couldn&#39;t find animation &quot;+f);return null}};b.parse=function(f){var d=[];if(f instanceof THREE.SkinnedMesh)for(var g=0;g&lt;f.bones.length;g++)d.push(f.bones[g]);else e(f,d);return d};var e=function(f,d){d.push(f);for(var g=0;g&lt;f.children.length;g++)e(f.children[g],d)};b.LINEAR=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_6

><td class="source">0;b.CATMULLROM=1;b.CATMULLROM_FORWARD=2;return b}();THREE.Animation=function(a,c,b,e){this.root=a;this.data=THREE.AnimationHandler.get(c);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.isPaused=!0;this.loop=!0;this.interpolationType=b!==undefined?b:THREE.AnimationHandler.LINEAR;this.JITCompile=e!==undefined?e:!0;this.points=[];this.target=new THREE.Vector3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_7

><td class="source">THREE.Animation.prototype.play=function(a,c){if(!this.isPlaying){this.isPlaying=!0;this.loop=a!==undefined?a:!0;this.currentTime=c!==undefined?c:0;var b,e=this.hierarchy.length,f;for(b=0;b&lt;e;b++){f=this.hierarchy[b];if(this.interpolationType!==THREE.AnimationHandler.CATMULLROM_FORWARD)f.useQuaternion=!0;f.matrixAutoUpdate=!0;if(f.animationCache===undefined){f.animationCache={};f.animationCache.prevKey={pos:0,rot:0,scl:0};f.animationCache.nextKey={pos:0,rot:0,scl:0};f.animationCache.originalMatrix=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_8

><td class="source">f instanceof THREE.Bone?f.skinMatrix:f.matrix}var d=f.animationCache.prevKey;f=f.animationCache.nextKey;d.pos=this.data.hierarchy[b].keys[0];d.rot=this.data.hierarchy[b].keys[0];d.scl=this.data.hierarchy[b].keys[0];f.pos=this.getNextKeyWith(&quot;pos&quot;,b,1);f.rot=this.getNextKeyWith(&quot;rot&quot;,b,1);f.scl=this.getNextKeyWith(&quot;scl&quot;,b,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_9

><td class="source">THREE.Animation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_10

><td class="source">THREE.Animation.prototype.stop=function(){this.isPlaying=!1;this.isPaused=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a&lt;this.hierarchy.length;a++)if(this.hierarchy[a].animationCache!==undefined){if(this.hierarchy[a]instanceof THREE.Bone)this.hierarchy[a].skinMatrix=this.hierarchy[a].animationCache.originalMatrix;else this.hierarchy[a].matrix=this.hierarchy[a].animationCache.originalMatrix;delete this.hierarchy[a].animationCache}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_11

><td class="source">THREE.Animation.prototype.update=function(a){if(this.isPlaying){var c=[&quot;pos&quot;,&quot;rot&quot;,&quot;scl&quot;],b,e,f,d,g,h,j,l,k=this.data.JIT.hierarchy,m,p;this.currentTime+=a*this.timeScale;p=this.currentTime;m=this.currentTime%=this.data.length;l=parseInt(Math.min(m*this.data.fps,this.data.length*this.data.fps),10);for(var n=0,v=this.hierarchy.length;n&lt;v;n++){a=this.hierarchy[n];j=a.animationCache;if(this.JITCompile&amp;&amp;k[n][l]!==undefined)if(a instanceof THREE.Bone){a.skinMatrix=k[n][l];a.matrixAutoUpdate=!1;a.matrixWorldNeedsUpdate=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_12

><td class="source">!1}else{a.matrix=k[n][l];a.matrixAutoUpdate=!1;a.matrixWorldNeedsUpdate=!0}else{if(this.JITCompile)if(a instanceof THREE.Bone)a.skinMatrix=a.animationCache.originalMatrix;else a.matrix=a.animationCache.originalMatrix;for(var A=0;A&lt;3;A++){b=c[A];g=j.prevKey[b];h=j.nextKey[b];if(h.time&lt;=p){if(m&lt;p)if(this.loop){g=this.data.hierarchy[n].keys[0];for(h=this.getNextKeyWith(b,n,1);h.time&lt;m;){g=h;h=this.getNextKeyWith(b,n,h.index+1)}}else{this.stop();return}else{do{g=h;h=this.getNextKeyWith(b,n,h.index+1)}while(h.time&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_13

><td class="source">m)}j.prevKey[b]=g;j.nextKey[b]=h}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;e=(m-g.time)/(h.time-g.time);f=g[b];d=h[b];if(e&lt;0||e&gt;1){console.log(&quot;THREE.Animation.update: Warning! Scale out of bounds:&quot;+e+&quot; on bone &quot;+n);e=e&lt;0?0:1}if(b===&quot;pos&quot;){b=a.position;if(this.interpolationType===THREE.AnimationHandler.LINEAR){b.x=f[0]+(d[0]-f[0])*e;b.y=f[1]+(d[1]-f[1])*e;b.z=f[2]+(d[2]-f[2])*e}else if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){this.points[0]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_14

><td class="source">this.getPrevKeyWith(&quot;pos&quot;,n,g.index-1).pos;this.points[1]=f;this.points[2]=d;this.points[3]=this.getNextKeyWith(&quot;pos&quot;,n,h.index+1).pos;e=e*0.33+0.33;f=this.interpolateCatmullRom(this.points,e);b.x=f[0];b.y=f[1];b.z=f[2];if(this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){e=this.interpolateCatmullRom(this.points,e*1.01);this.target.set(e[0],e[1],e[2]);this.target.subSelf(b);this.target.y=0;this.target.normalize();e=Math.atan2(this.target.x,this.target.z);a.rotation.set(0,e,0)}}}else if(b===<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_15

><td class="source">&quot;rot&quot;)THREE.Quaternion.slerp(f,d,a.quaternion,e);else if(b===&quot;scl&quot;){b=a.scale;b.x=f[0]+(d[0]-f[0])*e;b.y=f[1]+(d[1]-f[1])*e;b.z=f[2]+(d[2]-f[2])*e}}}}if(this.JITCompile&amp;&amp;k[0][l]===undefined){this.hierarchy[0].update(undefined,!0);for(n=0;n&lt;this.hierarchy.length;n++)k[n][l]=this.hierarchy[n]instanceof THREE.Bone?this.hierarchy[n].skinMatrix.clone():this.hierarchy[n].matrix.clone()}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_16

><td class="source">THREE.Animation.prototype.interpolateCatmullRom=function(a,c){var b=[],e=[],f,d,g,h,j,l;f=(a.length-1)*c;d=Math.floor(f);f-=d;b[0]=d==0?d:d-1;b[1]=d;b[2]=d&gt;a.length-2?d:d+1;b[3]=d&gt;a.length-3?d:d+2;d=a[b[0]];h=a[b[1]];j=a[b[2]];l=a[b[3]];b=f*f;g=f*b;e[0]=this.interpolate(d[0],h[0],j[0],l[0],f,b,g);e[1]=this.interpolate(d[1],h[1],j[1],l[1],f,b,g);e[2]=this.interpolate(d[2],h[2],j[2],l[2],f,b,g);return e};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_17

><td class="source">THREE.Animation.prototype.interpolate=function(a,c,b,e,f,d,g){a=(b-a)*0.5;e=(e-c)*0.5;return(2*(c-b)+a+e)*g+(-3*(c-b)-2*a-e)*d+a*f+c};THREE.Animation.prototype.getNextKeyWith=function(a,c,b){var e=this.data.hierarchy[c].keys;if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)b=b&lt;e.length-1?b:e.length-1;else b%=e.length;for(;b&lt;e.length;b++)if(e[b][a]!==undefined)return e[b];return this.data.hierarchy[c].keys[0]};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_18

><td class="source">THREE.Animation.prototype.getPrevKeyWith=function(a,c,b){var e=this.data.hierarchy[c].keys;for(b=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?b&gt;0?b:0:b&gt;=0?b:b+e.length;b&gt;=0;b--)if(e[b][a]!==undefined)return e[b];return this.data.hierarchy[c].keys[e.length-1]};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_19

><td class="source">THREE.ColorUtils={adjustHSV:function(a,c,b,e){var f=THREE.ColorUtils.__hsv;THREE.ColorUtils.rgbToHsv(a,f);f.h=THREE.ColorUtils.clamp(f.h+c,0,1);f.s=THREE.ColorUtils.clamp(f.s+b,0,1);f.v=THREE.ColorUtils.clamp(f.v+e,0,1);a.setHSV(f.h,f.s,f.v)},rgbToHsv:function(a,c){var b=a.r,e=a.g,f=a.b,d=Math.max(Math.max(b,e),f),g=Math.min(Math.min(b,e),f);if(g==d)g=b=0;else{var h=d-g;g=h/d;b=b==d?(e-f)/h:e==d?2+(f-b)/h:4+(b-e)/h;b/=6;b&lt;0&amp;&amp;(b+=1);b&gt;1&amp;&amp;(b-=1)}c===undefined&amp;&amp;(c={h:0,s:0,v:0});c.h=b;c.s=g;c.v=d;return c},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_20

><td class="source">clamp:function(a,c,b){return a&lt;c?c:a&gt;b?b:a}};THREE.ColorUtils.__hsv={h:0,s:0,v:0};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_21

><td class="source">var GeometryUtils={merge:function(a,c){var b=c instanceof THREE.Mesh,e=a.vertices.length,f=b?c.geometry:c,d=a.vertices,g=f.vertices,h=a.faces,j=f.faces,l=a.faceVertexUvs[0];f=f.faceVertexUvs[0];b&amp;&amp;c.matrixAutoUpdate&amp;&amp;c.updateMatrix();for(var k=0,m=g.length;k&lt;m;k++){var p=new THREE.Vertex(g[k].position.clone());b&amp;&amp;c.matrix.multiplyVector3(p.position);d.push(p)}k=0;for(m=j.length;k&lt;m;k++){g=j[k];var n,v,A=g.vertexNormals;p=g.vertexColors;if(g instanceof THREE.Face3)n=new THREE.Face3(g.a+e,g.b+e,g.c+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_22

><td class="source">e);else g instanceof THREE.Face4&amp;&amp;(n=new THREE.Face4(g.a+e,g.b+e,g.c+e,g.d+e));n.normal.copy(g.normal);b=0;for(d=A.length;b&lt;d;b++){v=A[b];n.vertexNormals.push(v.clone())}n.color.copy(g.color);b=0;for(d=p.length;b&lt;d;b++){v=p[b];n.vertexColors.push(v.clone())}n.materials=g.materials.slice();n.centroid.copy(g.centroid);h.push(n)}k=0;for(m=f.length;k&lt;m;k++){e=f[k];h=[];b=0;for(d=e.length;b&lt;d;b++)h.push(new THREE.UV(e[b].u,e[b].v));l.push(h)}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_23

><td class="source">THREE.ImageUtils={loadTexture:function(a,c,b){var e=new Image,f=new THREE.Texture(e,c);e.onload=function(){f.needsUpdate=!0;b&amp;&amp;b(this)};e.src=a;return f},loadTextureCube:function(a,c,b){var e,f=[],d=new THREE.Texture(f,c);c=f.loadCount=0;for(e=a.length;c&lt;e;++c){f[c]=new Image;f[c].onload=function(){f.loadCount+=1;if(f.loadCount==6)d.needsUpdate=!0;b&amp;&amp;b(this)};f[c].src=a[c]}return d}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_24

><td class="source">THREE.SceneUtils={addMesh:function(a,c,b,e,f,d,g,h,j,l){c=new THREE.Mesh(c,l);c.scale.x=c.scale.y=c.scale.z=b;c.position.x=e;c.position.y=f;c.position.z=d;c.rotation.x=g;c.rotation.y=h;c.rotation.z=j;a.addObject(c);return c},addPanoramaCubeWebGL:function(a,c,b){var e=THREE.ShaderUtils.lib.cube;e.uniforms.tCube.texture=b;b=new THREE.MeshShaderMaterial({fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:e.uniforms});c=new THREE.Mesh(new THREE.Cube(c,c,c,1,1,1,null,!0),b);a.addObject(c);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_25

><td class="source">return c},addPanoramaCube:function(a,c,b){var e=[];e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[0])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[1])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[2])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[3])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[4])}));e.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(b[5])}));c=new THREE.Mesh(new THREE.Cube(c,c,c,1,1,e,!0),<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_26

><td class="source">new THREE.MeshFaceMaterial);a.addObject(c);return c},addPanoramaCubePlanes:function(a,c,b){var e=c/2;c=new THREE.Plane(c,c);var f=Math.PI,d=Math.PI/2;THREE.SceneUtils.addMesh(a,c,1,0,0,-e,0,0,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[5])}));THREE.SceneUtils.addMesh(a,c,1,-e,0,0,0,d,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[0])}));THREE.SceneUtils.addMesh(a,c,1,e,0,0,0,-d,0,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[1])}));THREE.SceneUtils.addMesh(a,c,1,0,e,0,d,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_27

><td class="source">0,f,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[2])}));THREE.SceneUtils.addMesh(a,c,1,0,-e,0,-d,0,f,new THREE.MeshBasicMaterial({map:new THREE.Texture(b[3])}))},showHierarchy:function(a,c){THREE.SceneUtils.traverseHierarchy(a,function(b){b.visible=c})},traverseHierarchy:function(a,c){var b,e,f=a.children.length;for(e=0;e&lt;f;e++){b=a.children[e];c(b);THREE.SceneUtils.traverseHierarchy(b,c)}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_28

><td class="source">THREE.ShaderUtils={lib:{fresnel:{uniforms:{mRefractionRatio:{type:&quot;f&quot;,value:1.02},mFresnelBias:{type:&quot;f&quot;,value:0.1},mFresnelPower:{type:&quot;f&quot;,value:2},mFresnelScale:{type:&quot;f&quot;,value:1},tCube:{type:&quot;t&quot;,value:1,texture:null}},fragmentShader:&quot;uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_29

><td class="source">vertexShader:&quot;uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_30

><td class="source">normal:{uniforms:{enableAO:{type:&quot;i&quot;,value:0},enableDiffuse:{type:&quot;i&quot;,value:0},enableSpecular:{type:&quot;i&quot;,value:0},tDiffuse:{type:&quot;t&quot;,value:0,texture:null},tNormal:{type:&quot;t&quot;,value:2,texture:null},tSpecular:{type:&quot;t&quot;,value:3,texture:null},tAO:{type:&quot;t&quot;,value:4,texture:null},uNormalScale:{type:&quot;f&quot;,value:1},tDisplacement:{type:&quot;t&quot;,value:5,texture:null},uDisplacementBias:{type:&quot;f&quot;,value:-0.5},uDisplacementScale:{type:&quot;f&quot;,value:2.5},uPointLightPos:{type:&quot;v3&quot;,value:new THREE.Vector3},uPointLightColor:{type:&quot;c&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_31

><td class="source">value:new THREE.Color(15658734)},uDirLightPos:{type:&quot;v3&quot;,value:new THREE.Vector3},uDirLightColor:{type:&quot;c&quot;,value:new THREE.Color(15658734)},uAmbientLightColor:{type:&quot;c&quot;,value:new THREE.Color(328965)},uDiffuseColor:{type:&quot;c&quot;,value:new THREE.Color(15658734)},uSpecularColor:{type:&quot;c&quot;,value:new THREE.Color(1118481)},uAmbientColor:{type:&quot;c&quot;,value:new THREE.Color(328965)},uShininess:{type:&quot;f&quot;,value:30}},fragmentShader:&quot;uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 specularTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf &gt;= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight * pointDiffuseWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf &gt;= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight * dirDiffuseWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_32

><td class="source">vertexShader:&quot;attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_33

><td class="source">cube:{uniforms:{tCube:{type:&quot;t&quot;,value:1,texture:null}},vertexShader:&quot;varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;,fragmentShader:&quot;uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}&quot;},convolution:{uniforms:{tDiffuse:{type:&quot;t&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_34

><td class="source">value:0,texture:null},uImageIncrement:{type:&quot;v2&quot;,value:new THREE.Vector2(0.001953125,0)},cKernel:{type:&quot;fv1&quot;,value:[]}},vertexShader:&quot;varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;,fragmentShader:&quot;varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i&lt;KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_35

><td class="source">film:{uniforms:{tDiffuse:{type:&quot;t&quot;,value:0,texture:null},time:{type:&quot;f&quot;,value:0},nIntensity:{type:&quot;f&quot;,value:0.5},sIntensity:{type:&quot;f&quot;,value:0.05},sCount:{type:&quot;f&quot;,value:4096},grayscale:{type:&quot;i&quot;,value:1}},vertexShader:&quot;varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;,fragmentShader:&quot;varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}&quot;},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_36

><td class="source">screen:{uniforms:{tDiffuse:{type:&quot;t&quot;,value:0,texture:null},opacity:{type:&quot;f&quot;,value:1}},vertexShader:&quot;varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;,fragmentShader:&quot;varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}&quot;},basic:{uniforms:{},vertexShader:&quot;void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_37

><td class="source">fragmentShader:&quot;void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}&quot;}},buildKernel:function(a){var c,b,e,f,d=2*Math.ceil(a*3)+1;d&gt;25&amp;&amp;(d=25);f=(d-1)*0.5;b=Array(d);for(c=e=0;c&lt;d;++c){b[c]=Math.exp(-((c-f)*(c-f))/(2*a*a));e+=b[c]}for(c=0;c&lt;d;++c)b[c]/=e;return b}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_38

><td class="source">THREE.QuakeCamera=function(a){function c(b,e){return function(){e.apply(b,arguments)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.movementSpeed=1;this.lookSpeed=0.0050;this.noFly=!1;this.lookVertical=!0;this.autoForward=!1;this.activeLook=!0;this.heightSpeed=!1;this.heightCoef=1;this.heightMin=0;this.constrainVertical=!1;this.verticalMin=0;this.verticalMax=3.14;this.domElement=document;this.lastUpdate=(new Date).getTime();this.tdiff=0;if(a){if(a.movementSpeed!==undefined)this.movementSpeed=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_39

><td class="source">a.movementSpeed;if(a.lookSpeed!==undefined)this.lookSpeed=a.lookSpeed;if(a.noFly!==undefined)this.noFly=a.noFly;if(a.lookVertical!==undefined)this.lookVertical=a.lookVertical;if(a.autoForward!==undefined)this.autoForward=a.autoForward;if(a.activeLook!==undefined)this.activeLook=a.activeLook;if(a.heightSpeed!==undefined)this.heightSpeed=a.heightSpeed;if(a.heightCoef!==undefined)this.heightCoef=a.heightCoef;if(a.heightMin!==undefined)this.heightMin=a.heightMin;if(a.heightMax!==undefined)this.heightMax=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_40

><td class="source">a.heightMax;if(a.constrainVertical!==undefined)this.constrainVertical=a.constrainVertical;if(a.verticalMin!==undefined)this.verticalMin=a.verticalMin;if(a.verticalMax!==undefined)this.verticalMax=a.verticalMax;if(a.domElement!==undefined)this.domElement=a.domElement}this.theta=this.phi=this.lon=this.lat=this.mouseY=this.mouseX=this.autoSpeedFactor=0;this.moveForward=!1;this.moveBackward=!1;this.moveLeft=!1;this.moveRight=!1;this.freeze=!1;this.mouseDragOn=!1;this.windowHalfX=window.innerWidth/2;this.windowHalfY=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_41

><td class="source">window.innerHeight/2;this.onMouseDown=function(b){b.preventDefault();b.stopPropagation();if(this.activeLook)switch(b.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}this.mouseDragOn=!0};this.onMouseUp=function(b){b.preventDefault();b.stopPropagation();if(this.activeLook)switch(b.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.mouseDragOn=!1};this.onMouseMove=function(b){this.mouseX=b.clientX-this.windowHalfX;this.mouseY=b.clientY-this.windowHalfY};this.onKeyDown=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_42

><td class="source">function(b){switch(b.keyCode){case 38:case 87:this.moveForward=!0;break;case 37:case 65:this.moveLeft=!0;break;case 40:case 83:this.moveBackward=!0;break;case 39:case 68:this.moveRight=!0;break;case 81:this.freeze=!this.freeze}};this.onKeyUp=function(b){switch(b.keyCode){case 38:case 87:this.moveForward=!1;break;case 37:case 65:this.moveLeft=!1;break;case 40:case 83:this.moveBackward=!1;break;case 39:case 68:this.moveRight=!1}};this.update=function(){var b=(new Date).getTime();this.tdiff=(b-this.lastUpdate)/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_43

><td class="source">1E3;this.lastUpdate=b;if(!this.freeze){this.autoSpeedFactor=this.heightSpeed?this.tdiff*((this.position.y&lt;this.heightMin?this.heightMin:this.position.y&gt;this.heightMax?this.heightMax:this.position.y)-this.heightMin)*this.heightCoef:0;var e=this.tdiff*this.movementSpeed;(this.moveForward||this.autoForward&amp;&amp;!this.moveBackward)&amp;&amp;this.translateZ(-(e+this.autoSpeedFactor));this.moveBackward&amp;&amp;this.translateZ(e);this.moveLeft&amp;&amp;this.translateX(-e);this.moveRight&amp;&amp;this.translateX(e);e=this.tdiff*this.lookSpeed;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_44

><td class="source">this.activeLook||(e=0);this.lon+=this.mouseX*e;this.lookVertical&amp;&amp;(this.lat-=this.mouseY*e);this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=(90-this.lat)*Math.PI/180;this.theta=this.lon*Math.PI/180;b=this.target.position;var f=this.position;b.x=f.x+100*Math.sin(this.phi)*Math.cos(this.theta);b.y=f.y+100*Math.cos(this.phi);b.z=f.z+100*Math.sin(this.phi)*Math.sin(this.theta)}this.lon+=this.mouseX*e;this.lookVertical&amp;&amp;(this.lat-=this.mouseY*e);this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_45

><td class="source">(90-this.lat)*Math.PI/180;this.theta=this.lon*Math.PI/180;if(this.constrainVertical)this.phi=(this.phi-0)*(this.verticalMax-this.verticalMin)/3.14+this.verticalMin;b=this.target.position;f=this.position;b.x=f.x+100*Math.sin(this.phi)*Math.cos(this.theta);b.y=f.y+100*Math.cos(this.phi);b.z=f.z+100*Math.sin(this.phi)*Math.sin(this.theta);this.supr.update.call(this)};this.domElement.addEventListener(&quot;contextmenu&quot;,function(b){b.preventDefault()},!1);this.domElement.addEventListener(&quot;mousemove&quot;,c(this,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_46

><td class="source">this.onMouseMove),!1);this.domElement.addEventListener(&quot;mousedown&quot;,c(this,this.onMouseDown),!1);this.domElement.addEventListener(&quot;mouseup&quot;,c(this,this.onMouseUp),!1);this.domElement.addEventListener(&quot;keydown&quot;,c(this,this.onKeyDown),!1);this.domElement.addEventListener(&quot;keyup&quot;,c(this,this.onKeyUp),!1)};THREE.QuakeCamera.prototype=new THREE.Camera;THREE.QuakeCamera.prototype.constructor=THREE.QuakeCamera;THREE.QuakeCamera.prototype.supr=THREE.Camera.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_47

><td class="source">THREE.QuakeCamera.prototype.translate=function(a,c){this.matrix.rotateAxis(c);if(this.noFly)c.y=0;this.position.addSelf(c.multiplyScalar(a));this.target.position.addSelf(c.multiplyScalar(a))};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_48

><td class="source">THREE.PathCamera=function(a){function c(l,k,m,p){var n={name:m,fps:0.6,length:p,hierarchy:[]},v,A=k.getControlPointsArray(),w=k.getLength(),u=A.length,y=0;v=u-1;k={parent:-1,keys:[]};k.keys[0]={time:0,pos:A[0],rot:[0,0,0,1],scl:[1,1,1]};k.keys[v]={time:p,pos:A[v],rot:[0,0,0,1],scl:[1,1,1]};for(v=1;v&lt;u-1;v++){y=p*w.chunks[v]/w.total;k.keys[v]={time:y,pos:A[v]}}n.hierarchy[0]=k;THREE.AnimationHandler.add(n);return new THREE.Animation(l,m,THREE.AnimationHandler.CATMULLROM_FORWARD,!1)}function b(l,k){var m,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_49

><td class="source">p,n=new THREE.Geometry;for(m=0;m&lt;l.points.length*k;m++){p=m/(l.points.length*k);p=l.getPoint(p);n.vertices[m]=new THREE.Vertex(new THREE.Vector3(p.x,p.y,p.z))}return n}function e(l,k){var m=b(k,10),p=b(k,10),n=new THREE.LineBasicMaterial({color:16711680,linewidth:3});lineObj=new THREE.Line(m,n);particleObj=new THREE.ParticleSystem(p,new THREE.ParticleBasicMaterial({color:16755200,size:3}));lineObj.scale.set(1,1,1);l.addChild(lineObj);particleObj.scale.set(1,1,1);l.addChild(particleObj);p=new THREE.Sphere(1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_50

><td class="source">16,8);n=new THREE.MeshBasicMaterial({color:65280});for(i=0;i&lt;k.points.length;i++){m=new THREE.Mesh(p,n);m.position.copy(k.points[i]);m.updateMatrix();l.addChild(m)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.id=&quot;PathCamera&quot;+THREE.PathCameraIdCounter++;this.duration=1E4;this.waypoints=[];this.useConstantSpeed=!0;this.resamplingCoef=50;this.debugPath=new THREE.Object3D;this.debugDummy=new THREE.Object3D;this.animationParent=new THREE.Object3D;this.lookSpeed=0.0050;this.lookVertical=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_51

><td class="source">!0;this.lookHorizontal=!0;this.verticalAngleMap={srcRange:[0,6.28],dstRange:[0,6.28]};this.horizontalAngleMap={srcRange:[0,6.28],dstRange:[0,6.28]};this.domElement=document;if(a){if(a.duration!==undefined)this.duration=a.duration*1E3;if(a.waypoints!==undefined)this.waypoints=a.waypoints;if(a.useConstantSpeed!==undefined)this.useConstantSpeed=a.useConstantSpeed;if(a.resamplingCoef!==undefined)this.resamplingCoef=a.resamplingCoef;if(a.createDebugPath!==undefined)this.createDebugPath=a.createDebugPath;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_52

><td class="source">if(a.createDebugDummy!==undefined)this.createDebugDummy=a.createDebugDummy;if(a.lookSpeed!==undefined)this.lookSpeed=a.lookSpeed;if(a.lookVertical!==undefined)this.lookVertical=a.lookVertical;if(a.lookHorizontal!==undefined)this.lookHorizontal=a.lookHorizontal;if(a.verticalAngleMap!==undefined)this.verticalAngleMap=a.verticalAngleMap;if(a.horizontalAngleMap!==undefined)this.horizontalAngleMap=a.horizontalAngleMap;if(a.domElement!==undefined)this.domElement=a.domElement}this.theta=this.phi=this.lon=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_53

><td class="source">this.lat=this.mouseY=this.mouseX=0;this.windowHalfX=window.innerWidth/2;this.windowHalfY=window.innerHeight/2;var f=Math.PI*2,d=Math.PI/180;this.update=function(l,k,m){var p,n;this.lookHorizontal&amp;&amp;(this.lon+=this.mouseX*this.lookSpeed);this.lookVertical&amp;&amp;(this.lat-=this.mouseY*this.lookSpeed);this.lon=Math.max(0,Math.min(360,this.lon));this.lat=Math.max(-85,Math.min(85,this.lat));this.phi=(90-this.lat)*d;this.theta=this.lon*d;p=this.phi%f;this.phi=p&gt;=0?p:p+f;p=this.verticalAngleMap.srcRange;n=this.verticalAngleMap.dstRange;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_54

><td class="source">this.phi=(this.phi-p[0])*(n[1]-n[0])/(p[1]-p[0])+n[0];p=this.horizontalAngleMap.srcRange;n=this.horizontalAngleMap.dstRange;this.theta=(this.theta-p[0])*(n[1]-n[0])/(p[1]-p[0])+n[0];p=this.target.position;p.x=100*Math.sin(this.phi)*Math.cos(this.theta);p.y=100*Math.cos(this.phi);p.z=100*Math.sin(this.phi)*Math.sin(this.theta);this.supr.update.call(this,l,k,m)};this.onMouseMove=function(l){this.mouseX=l.clientX-this.windowHalfX;this.mouseY=l.clientY-this.windowHalfY};this.spline=new THREE.Spline;this.spline.initFromArray(this.waypoints);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_55

><td class="source">this.useConstantSpeed&amp;&amp;this.spline.reparametrizeByArcLength(this.resamplingCoef);if(this.createDebugDummy){a=new THREE.MeshLambertMaterial({color:30719});var g=new THREE.MeshLambertMaterial({color:65280}),h=new THREE.Cube(10,10,20),j=new THREE.Cube(2,2,10);this.animationParent=new THREE.Mesh(h,a);a=new THREE.Mesh(j,g);a.position.set(0,10,0);this.animation=c(this.animationParent,this.spline,this.id,this.duration);this.animationParent.addChild(this);this.animationParent.addChild(this.target);this.animationParent.addChild(a)}else{this.animation=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_56

><td class="source">c(this.animationParent,this.spline,this.id,this.duration);this.animationParent.addChild(this.target);this.animationParent.addChild(this)}this.createDebugPath&amp;&amp;e(this.debugPath,this.spline);this.domElement.addEventListener(&quot;mousemove&quot;,function(l,k){return function(){k.apply(l,arguments)}}(this,this.onMouseMove),!1)};THREE.PathCamera.prototype=new THREE.Camera;THREE.PathCamera.prototype.constructor=THREE.PathCamera;THREE.PathCamera.prototype.supr=THREE.Camera.prototype;THREE.PathCameraIdCounter=0;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_57

><td class="source">THREE.FlyCamera=function(a){function c(b,e){return function(){e.apply(b,arguments)}}THREE.Camera.call(this,a.fov,a.aspect,a.near,a.far,a.target);this.tmpQuaternion=new THREE.Quaternion;this.movementSpeed=1;this.rollSpeed=0.0050;this.dragToLook=!1;this.autoForward=!1;this.domElement=document;if(a){if(a.movementSpeed!==undefined)this.movementSpeed=a.movementSpeed;if(a.rollSpeed!==undefined)this.rollSpeed=a.rollSpeed;if(a.dragToLook!==undefined)this.dragToLook=a.dragToLook;if(a.autoForward!==undefined)this.autoForward=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_58

><td class="source">a.autoForward;if(a.domElement!==undefined)this.domElement=a.domElement}this.useTarget=!1;this.useQuaternion=!0;this.mouseStatus=0;this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0};this.moveVector=new THREE.Vector3(0,0,0);this.rotationVector=new THREE.Vector3(0,0,0);this.lastUpdate=-1;this.tdiff=0;this.handleEvent=function(b){if(typeof this[b.type]==&quot;function&quot;)this[b.type](b)};this.keydown=function(b){if(!b.altKey){switch(b.keyCode){case 16:this.movementSpeedMultiplier=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_59

><td class="source">0.1;break;case 87:this.moveState.forward=1;break;case 83:this.moveState.back=1;break;case 65:this.moveState.left=1;break;case 68:this.moveState.right=1;break;case 82:this.moveState.up=1;break;case 70:this.moveState.down=1;break;case 38:this.moveState.pitchUp=1;break;case 40:this.moveState.pitchDown=1;break;case 37:this.moveState.yawLeft=1;break;case 39:this.moveState.yawRight=1;break;case 81:this.moveState.rollLeft=1;break;case 69:this.moveState.rollRight=1}this.updateMovementVector();this.updateRotationVector()}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_60

><td class="source">this.keyup=function(b){switch(b.keyCode){case 16:this.movementSpeedMultiplier=1;break;case 87:this.moveState.forward=0;break;case 83:this.moveState.back=0;break;case 65:this.moveState.left=0;break;case 68:this.moveState.right=0;break;case 82:this.moveState.up=0;break;case 70:this.moveState.down=0;break;case 38:this.moveState.pitchUp=0;break;case 40:this.moveState.pitchDown=0;break;case 37:this.moveState.yawLeft=0;break;case 39:this.moveState.yawRight=0;break;case 81:this.moveState.rollLeft=0;break;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_61

><td class="source">case 69:this.moveState.rollRight=0}this.updateMovementVector();this.updateRotationVector()};this.mousedown=function(b){b.preventDefault();b.stopPropagation();if(this.dragToLook)this.mouseStatus++;else switch(b.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0}};this.mousemove=function(b){if(!this.dragToLook||this.mouseStatus&gt;0){var e=this.getContainerDimensions(),f=e.size[0]/2,d=e.size[1]/2;this.moveState.yawLeft=-(b.clientX-e.offset[0]-f)/f;this.moveState.pitchDown=(b.clientY-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_62

><td class="source">e.offset[1]-d)/d;this.updateRotationVector()}};this.mouseup=function(b){b.preventDefault();b.stopPropagation();if(this.dragToLook){this.mouseStatus--;this.moveState.yawLeft=this.moveState.pitchDown=0}else switch(b.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1}this.updateRotationVector()};this.update=function(){var b=(new Date).getTime();if(this.lastUpdate==-1)this.lastUpdate=b;this.tdiff=(b-this.lastUpdate)/1E3;this.lastUpdate=b;b=this.tdiff*this.movementSpeed;var e=this.tdiff*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_63

><td class="source">this.rollSpeed;this.translateX(this.moveVector.x*b);this.translateY(this.moveVector.y*b);this.translateZ(this.moveVector.z*b);this.tmpQuaternion.set(this.rotationVector.x*e,this.rotationVector.y*e,this.rotationVector.z*e,1).normalize();this.quaternion.multiplySelf(this.tmpQuaternion);this.matrix.setPosition(this.position);this.matrix.setRotationFromQuaternion(this.quaternion);this.matrixWorldNeedsUpdate=!0;this.supr.update.call(this)};this.updateMovementVector=function(){var b=this.moveState.forward||<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_64

><td class="source">this.autoForward&amp;&amp;!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right;this.moveVector.y=-this.moveState.down+this.moveState.up;this.moveVector.z=-b+this.moveState.back};this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp;this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft;this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft};this.getContainerDimensions=function(){return this.domElement!=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_65

><td class="source">document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}};this.domElement.addEventListener(&quot;mousemove&quot;,c(this,this.mousemove),!1);this.domElement.addEventListener(&quot;mousedown&quot;,c(this,this.mousedown),!1);this.domElement.addEventListener(&quot;mouseup&quot;,c(this,this.mouseup),!1);window.addEventListener(&quot;keydown&quot;,c(this,this.keydown),!1);window.addEventListener(&quot;keyup&quot;,c(this,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_66

><td class="source">this.keyup),!1);this.updateMovementVector();this.updateRotationVector()};THREE.FlyCamera.prototype=new THREE.Camera;THREE.FlyCamera.prototype.constructor=THREE.FlyCamera;THREE.FlyCamera.prototype.supr=THREE.Camera.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_67

><td class="source">THREE.RollCamera=function(a,c,b,e){THREE.Camera.call(this,a,c,b,e);this.mouseLook=!0;this.autoForward=!1;this.rollSpeed=this.movementSpeed=this.lookSpeed=1;this.constrainVertical=[-0.9,0.9];this.domElement=document;this.useTarget=!1;this.matrixAutoUpdate=!1;this.forward=new THREE.Vector3(0,0,1);this.roll=0;this.lastUpdate=-1;this.delta=0;var f=new THREE.Vector3,d=new THREE.Vector3,g=new THREE.Vector3,h=new THREE.Matrix4,j=!1,l=1,k=0,m=0,p=0,n=0,v=0,A=window.innerWidth/2,w=window.innerHeight/2;this.update=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_68

><td class="source">function(){var u=(new Date).getTime();if(this.lastUpdate==-1)this.lastUpdate=u;this.delta=(u-this.lastUpdate)/1E3;this.lastUpdate=u;if(this.mouseLook){u=this.delta*this.lookSpeed;this.rotateHorizontally(u*n);this.rotateVertically(u*v)}u=this.delta*this.movementSpeed;this.translateZ(u*(k&gt;0||this.autoForward&amp;&amp;!(k&lt;0)?1:k));this.translateX(u*m);this.translateY(u*p);j&amp;&amp;(this.roll+=this.rollSpeed*this.delta*l);if(this.forward.y&gt;this.constrainVertical[1]){this.forward.y=this.constrainVertical[1];this.forward.normalize()}else if(this.forward.y&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_69

><td class="source">this.constrainVertical[0]){this.forward.y=this.constrainVertical[0];this.forward.normalize()}g.copy(this.forward);d.set(0,1,0);f.cross(d,g).normalize();d.cross(g,f).normalize();this.matrix.n11=f.x;this.matrix.n12=d.x;this.matrix.n13=g.x;this.matrix.n21=f.y;this.matrix.n22=d.y;this.matrix.n23=g.y;this.matrix.n31=f.z;this.matrix.n32=d.z;this.matrix.n33=g.z;h.identity();h.n11=Math.cos(this.roll);h.n12=-Math.sin(this.roll);h.n21=Math.sin(this.roll);h.n22=Math.cos(this.roll);this.matrix.multiplySelf(h);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_70

><td class="source">this.matrixWorldNeedsUpdate=!0;this.matrix.n14=this.position.x;this.matrix.n24=this.position.y;this.matrix.n34=this.position.z;this.supr.update.call(this)};this.translateX=function(u){this.position.x+=this.matrix.n11*u;this.position.y+=this.matrix.n21*u;this.position.z+=this.matrix.n31*u};this.translateY=function(u){this.position.x+=this.matrix.n12*u;this.position.y+=this.matrix.n22*u;this.position.z+=this.matrix.n32*u};this.translateZ=function(u){this.position.x-=this.matrix.n13*u;this.position.y-=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_71

><td class="source">this.matrix.n23*u;this.position.z-=this.matrix.n33*u};this.rotateHorizontally=function(u){f.set(this.matrix.n11,this.matrix.n21,this.matrix.n31);f.multiplyScalar(u);this.forward.subSelf(f);this.forward.normalize()};this.rotateVertically=function(u){d.set(this.matrix.n12,this.matrix.n22,this.matrix.n32);d.multiplyScalar(u);this.forward.addSelf(d);this.forward.normalize()};this.domElement.addEventListener(&quot;contextmenu&quot;,function(u){u.preventDefault()},!1);this.domElement.addEventListener(&quot;mousemove&quot;,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_72

><td class="source">function(u){n=(u.clientX-A)/window.innerWidth;v=(u.clientY-w)/window.innerHeight},!1);this.domElement.addEventListener(&quot;mousedown&quot;,function(u){u.preventDefault();u.stopPropagation();switch(u.button){case 0:k=1;break;case 2:k=-1}},!1);this.domElement.addEventListener(&quot;mouseup&quot;,function(u){u.preventDefault();u.stopPropagation();switch(u.button){case 0:k=0;break;case 2:k=0}},!1);this.domElement.addEventListener(&quot;keydown&quot;,function(u){switch(u.keyCode){case 38:case 87:k=1;break;case 37:case 65:m=-1;break;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_73

><td class="source">case 40:case 83:k=-1;break;case 39:case 68:m=1;break;case 81:j=!0;l=1;break;case 69:j=!0;l=-1;break;case 82:p=1;break;case 70:p=-1}},!1);this.domElement.addEventListener(&quot;keyup&quot;,function(u){switch(u.keyCode){case 38:case 87:k=0;break;case 37:case 65:m=0;break;case 40:case 83:k=0;break;case 39:case 68:m=0;break;case 81:j=!1;break;case 69:j=!1;break;case 82:p=0;break;case 70:p=0}},!1)};THREE.RollCamera.prototype=new THREE.Camera;THREE.RollCamera.prototype.constructor=THREE.RollCamera;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_74

><td class="source">THREE.RollCamera.prototype.supr=THREE.Camera.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_75

><td class="source">THREE.Cube=function(a,c,b,e,f,d,g,h,j){function l(w,u,y,o,z,B,I,K){var J,G,D=e||1,L=f||1,R=z/2,O=B/2,S=k.vertices.length;if(w==&quot;x&quot;&amp;&amp;u==&quot;y&quot;||w==&quot;y&quot;&amp;&amp;u==&quot;x&quot;)J=&quot;z&quot;;else if(w==&quot;x&quot;&amp;&amp;u==&quot;z&quot;||w==&quot;z&quot;&amp;&amp;u==&quot;x&quot;){J=&quot;y&quot;;L=d||1}else if(w==&quot;z&quot;&amp;&amp;u==&quot;y&quot;||w==&quot;y&quot;&amp;&amp;u==&quot;z&quot;){J=&quot;x&quot;;D=d||1}var P=D+1,F=L+1;z/=D;var M=B/L;for(G=0;G&lt;F;G++)for(B=0;B&lt;P;B++){var Q=new THREE.Vector3;Q[w]=(B*z-R)*y;Q[u]=(G*M-O)*o;Q[J]=I;k.vertices.push(new THREE.Vertex(Q))}for(G=0;G&lt;L;G++)for(B=0;B&lt;D;B++){k.faces.push(new THREE.Face4(B+P*G+S,B+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_76

><td class="source">P*(G+1)+S,B+1+P*(G+1)+S,B+1+P*G+S,null,null,K));k.faceVertexUvs[0].push([new THREE.UV(B/D,G/L),new THREE.UV(B/D,(G+1)/L),new THREE.UV((B+1)/D,(G+1)/L),new THREE.UV((B+1)/D,G/L)])}}THREE.Geometry.call(this);var k=this,m=a/2,p=c/2,n=b/2;h=h?-1:1;if(g!==undefined)if(g instanceof Array)this.materials=g;else{this.materials=[];for(var v=0;v&lt;6;v++)this.materials.push([g])}else this.materials=[];this.sides={px:!0,nx:!0,py:!0,ny:!0,pz:!0,nz:!0};if(j!=undefined)for(var A in j)this.sides[A]!=undefined&amp;&amp;(this.sides[A]=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_77

><td class="source">j[A]);this.sides.px&amp;&amp;l(&quot;z&quot;,&quot;y&quot;,1*h,-1,b,c,-m,this.materials[0]);this.sides.nx&amp;&amp;l(&quot;z&quot;,&quot;y&quot;,-1*h,-1,b,c,m,this.materials[1]);this.sides.py&amp;&amp;l(&quot;x&quot;,&quot;z&quot;,1*h,1,a,b,p,this.materials[2]);this.sides.ny&amp;&amp;l(&quot;x&quot;,&quot;z&quot;,1*h,-1,a,b,-p,this.materials[3]);this.sides.pz&amp;&amp;l(&quot;x&quot;,&quot;y&quot;,1*h,-1,a,c,n,this.materials[4]);this.sides.nz&amp;&amp;l(&quot;x&quot;,&quot;y&quot;,-1*h,-1,a,c,-n,this.materials[5]);(function(){for(var w=[],u=[],y=0,o=k.vertices.length;y&lt;o;y++){for(var z=k.vertices[y],B=!1,I=0,K=w.length;I&lt;K;I++){var J=w[I];if(z.position.x==J.position.x&amp;&amp;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_78

><td class="source">z.position.y==J.position.y&amp;&amp;z.position.z==J.position.z){u[y]=I;B=!0;break}}if(!B){u[y]=w.length;w.push(new THREE.Vertex(z.position.clone()))}}y=0;for(o=k.faces.length;y&lt;o;y++){z=k.faces[y];z.a=u[z.a];z.b=u[z.b];z.c=u[z.c];z.d=u[z.d]}k.vertices=w})();this.computeCentroids();this.computeFaceNormals()};THREE.Cube.prototype=new THREE.Geometry;THREE.Cube.prototype.constructor=THREE.Cube;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_79

><td class="source">THREE.Cylinder=function(a,c,b,e,f,d){function g(p,n,v){h.vertices.push(new THREE.Vertex(new THREE.Vector3(p,n,v)))}THREE.Geometry.call(this);var h=this,j,l=Math.PI*2,k=e/2;for(j=0;j&lt;a;j++)g(Math.sin(l*j/a)*c,Math.cos(l*j/a)*c,-k);for(j=0;j&lt;a;j++)g(Math.sin(l*j/a)*b,Math.cos(l*j/a)*b,k);for(j=0;j&lt;a;j++)h.faces.push(new THREE.Face4(j,j+a,a+(j+1)%a,(j+1)%a));if(b&gt;0){g(0,0,-k-(d||0));for(j=a;j&lt;a+a/2;j++)h.faces.push(new THREE.Face4(2*a,(2*j-2*a)%a,(2*j-2*a+1)%a,(2*j-2*a+2)%a))}if(c&gt;0){g(0,0,k+(f||0));<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_80

><td class="source">for(j=a+a/2;j&lt;2*a;j++)h.faces.push(new THREE.Face4(2*a+1,(2*j-2*a+2)%a+a,(2*j-2*a+1)%a+a,(2*j-2*a)%a+a))}j=0;for(a=this.faces.length;j&lt;a;j++){c=[];b=this.faces[j];f=this.vertices[b.a];d=this.vertices[b.b];k=this.vertices[b.c];var m=this.vertices[b.d];c.push(new THREE.UV(0.5+Math.atan2(f.position.x,f.position.y)/l,0.5+f.position.z/e));c.push(new THREE.UV(0.5+Math.atan2(d.position.x,d.position.y)/l,0.5+d.position.z/e));c.push(new THREE.UV(0.5+Math.atan2(k.position.x,k.position.y)/l,0.5+k.position.z/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_81

><td class="source">e));b instanceof THREE.Face4&amp;&amp;c.push(new THREE.UV(0.5+Math.atan2(m.position.x,m.position.y)/l,0.5+m.position.z/e));this.faceVertexUvs[0].push(c)}this.computeCentroids();this.computeFaceNormals()};THREE.Cylinder.prototype=new THREE.Geometry;THREE.Cylinder.prototype.constructor=THREE.Cylinder;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_82

><td class="source">THREE.Icosahedron=function(a){function c(m,p,n){var v=Math.sqrt(m*m+p*p+n*n);return f.vertices.push(new THREE.Vertex(new THREE.Vector3(m/v,p/v,n/v)))-1}function b(m,p,n,v){v.faces.push(new THREE.Face3(m,p,n))}function e(m,p){var n=f.vertices[m].position,v=f.vertices[p].position;return c((n.x+v.x)/2,(n.y+v.y)/2,(n.z+v.z)/2)}var f=this,d=new THREE.Geometry,g;this.subdivisions=a||0;THREE.Geometry.call(this);a=(1+Math.sqrt(5))/2;c(-1,a,0);c(1,a,0);c(-1,-a,0);c(1,-a,0);c(0,-1,a);c(0,1,a);c(0,-1,-a);c(0,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_83

><td class="source">1,-a);c(a,0,-1);c(a,0,1);c(-a,0,-1);c(-a,0,1);b(0,11,5,d);b(0,5,1,d);b(0,1,7,d);b(0,7,10,d);b(0,10,11,d);b(1,5,9,d);b(5,11,4,d);b(11,10,2,d);b(10,7,6,d);b(7,1,8,d);b(3,9,4,d);b(3,4,2,d);b(3,2,6,d);b(3,6,8,d);b(3,8,9,d);b(4,9,5,d);b(2,4,11,d);b(6,2,10,d);b(8,6,7,d);b(9,8,1,d);for(a=0;a&lt;this.subdivisions;a++){g=new THREE.Geometry;for(var h in d.faces){var j=e(d.faces[h].a,d.faces[h].b),l=e(d.faces[h].b,d.faces[h].c),k=e(d.faces[h].c,d.faces[h].a);b(d.faces[h].a,j,k,g);b(d.faces[h].b,l,j,g);b(d.faces[h].c,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_84

><td class="source">k,l,g);b(j,l,k,g)}d.faces=g.faces}f.faces=d.faces;delete d;delete g;this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Icosahedron.prototype=new THREE.Geometry;THREE.Icosahedron.prototype.constructor=THREE.Icosahedron;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_85

><td class="source">THREE.Lathe=function(a,c,b){THREE.Geometry.call(this);this.steps=c||12;this.angle=b||2*Math.PI;c=this.angle/this.steps;b=[];for(var e=[],f=[],d=[],g=(new THREE.Matrix4).setRotationZ(c),h=0;h&lt;a.length;h++){this.vertices.push(new THREE.Vertex(a[h]));b[h]=a[h].clone();e[h]=this.vertices.length-1}for(var j=0;j&lt;=this.angle+0.0010;j+=c){for(h=0;h&lt;b.length;h++)if(j&lt;this.angle){b[h]=g.multiplyVector3(b[h].clone());this.vertices.push(new THREE.Vertex(b[h]));f[h]=this.vertices.length-1}else f=d;j==0&amp;&amp;(d=e);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_86

><td class="source">for(h=0;h&lt;e.length-1;h++){this.faces.push(new THREE.Face4(f[h],f[h+1],e[h+1],e[h]));this.faceVertexUvs[0].push([new THREE.UV(1-j/this.angle,h/a.length),new THREE.UV(1-j/this.angle,(h+1)/a.length),new THREE.UV(1-(j-c)/this.angle,(h+1)/a.length),new THREE.UV(1-(j-c)/this.angle,h/a.length)])}e=f;f=[]}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Lathe.prototype=new THREE.Geometry;THREE.Lathe.prototype.constructor=THREE.Lathe;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_87

><td class="source">THREE.Plane=function(a,c,b,e){THREE.Geometry.call(this);var f,d=a/2,g=c/2;b=b||1;e=e||1;var h=b+1,j=e+1;a/=b;var l=c/e;for(f=0;f&lt;j;f++)for(c=0;c&lt;h;c++)this.vertices.push(new THREE.Vertex(new THREE.Vector3(c*a-d,-(f*l-g),0)));for(f=0;f&lt;e;f++)for(c=0;c&lt;b;c++){this.faces.push(new THREE.Face4(c+h*f,c+h*(f+1),c+1+h*(f+1),c+1+h*f));this.faceVertexUvs[0].push([new THREE.UV(c/b,f/e),new THREE.UV(c/b,(f+1)/e),new THREE.UV((c+1)/b,(f+1)/e),new THREE.UV((c+1)/b,f/e)])}this.computeCentroids();this.computeFaceNormals()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_88

><td class="source">THREE.Plane.prototype=new THREE.Geometry;THREE.Plane.prototype.constructor=THREE.Plane;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_89

><td class="source">THREE.Sphere=function(a,c,b){THREE.Geometry.call(this);var e,f=Math.PI,d=Math.max(3,c||8),g=Math.max(2,b||6);c=[];for(b=0;b&lt;g+1;b++){e=b/g;var h=a*Math.cos(e*f),j=a*Math.sin(e*f),l=[],k=0;for(e=0;e&lt;d;e++){var m=2*e/d,p=j*Math.sin(m*f);m=j*Math.cos(m*f);(b==0||b==g)&amp;&amp;e&gt;0||(k=this.vertices.push(new THREE.Vertex(new THREE.Vector3(m,h,p)))-1);l.push(k)}c.push(l)}var n,v,A;f=c.length;for(b=0;b&lt;f;b++){d=c[b].length;if(b&gt;0)for(e=0;e&lt;d;e++){l=e==d-1;g=c[b][l?0:e+1];h=c[b][l?d-1:e];j=c[b-1][l?d-1:e];l=c[b-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_90

><td class="source">1][l?0:e+1];p=b/(f-1);n=(b-1)/(f-1);v=(e+1)/d;m=e/d;k=new THREE.UV(1-v,p);p=new THREE.UV(1-m,p);m=new THREE.UV(1-m,n);var w=new THREE.UV(1-v,n);if(b&lt;c.length-1){n=this.vertices[g].position.clone();v=this.vertices[h].position.clone();A=this.vertices[j].position.clone();n.normalize();v.normalize();A.normalize();this.faces.push(new THREE.Face3(g,h,j,[new THREE.Vector3(n.x,n.y,n.z),new THREE.Vector3(v.x,v.y,v.z),new THREE.Vector3(A.x,A.y,A.z)]));this.faceVertexUvs[0].push([k,p,m])}if(b&gt;1){n=this.vertices[g].position.clone();<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_91

><td class="source">v=this.vertices[j].position.clone();A=this.vertices[l].position.clone();n.normalize();v.normalize();A.normalize();this.faces.push(new THREE.Face3(g,j,l,[new THREE.Vector3(n.x,n.y,n.z),new THREE.Vector3(v.x,v.y,v.z),new THREE.Vector3(A.x,A.y,A.z)]));this.faceVertexUvs[0].push([k,m,w])}}}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals();this.boundingSphere={radius:a}};THREE.Sphere.prototype=new THREE.Geometry;THREE.Sphere.prototype.constructor=THREE.Sphere;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_92

><td class="source">THREE.Torus=function(a,c,b,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=c||40;this.segmentsR=b||8;this.segmentsT=e||6;a=[];for(c=0;c&lt;=this.segmentsR;++c)for(b=0;b&lt;=this.segmentsT;++b){e=b/this.segmentsT*2*Math.PI;var f=c/this.segmentsR*2*Math.PI;this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius+this.tube*Math.cos(f))*Math.cos(e),(this.radius+this.tube*Math.cos(f))*Math.sin(e),this.tube*Math.sin(f))));a.push([b/this.segmentsT,1-c/this.segmentsR])}for(c=1;c&lt;=this.segmentsR;++c)for(b=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_93

><td class="source">1;b&lt;=this.segmentsT;++b){e=(this.segmentsT+1)*c+b;f=(this.segmentsT+1)*c+b-1;var d=(this.segmentsT+1)*(c-1)+b-1,g=(this.segmentsT+1)*(c-1)+b;this.faces.push(new THREE.Face4(e,f,d,g));this.faceVertexUvs[0].push([new THREE.UV(a[e][0],a[e][1]),new THREE.UV(a[f][0],a[f][1]),new THREE.UV(a[d][0],a[d][1]),new THREE.UV(a[g][0],a[g][1])])}delete a;this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.Torus.prototype=new THREE.Geometry;THREE.Torus.prototype.constructor=THREE.Torus;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_94

><td class="source">THREE.TorusKnot=function(a,c,b,e,f,d,g){function h(m,p,n,v,A,w){p=n/v*m;n=Math.cos(p);return new THREE.Vector3(A*(2+n)*0.5*Math.cos(m),A*(2+n)*Math.sin(m)*0.5,w*A*Math.sin(p)*0.5)}THREE.Geometry.call(this);this.radius=a||200;this.tube=c||40;this.segmentsR=b||64;this.segmentsT=e||8;this.p=f||2;this.q=d||3;this.heightScale=g||1;this.grid=Array(this.segmentsR);b=new THREE.Vector3;e=new THREE.Vector3;d=new THREE.Vector3;for(a=0;a&lt;this.segmentsR;++a){this.grid[a]=Array(this.segmentsT);for(c=0;c&lt;this.segmentsT;++c){var j=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_95

><td class="source">a/this.segmentsR*2*this.p*Math.PI;g=c/this.segmentsT*2*Math.PI;f=h(j,g,this.q,this.p,this.radius,this.heightScale);j=h(j+0.01,g,this.q,this.p,this.radius,this.heightScale);b.x=j.x-f.x;b.y=j.y-f.y;b.z=j.z-f.z;e.x=j.x+f.x;e.y=j.y+f.y;e.z=j.z+f.z;d.cross(b,e);e.cross(d,b);d.normalize();e.normalize();j=-this.tube*Math.cos(g);g=this.tube*Math.sin(g);f.x+=j*e.x+g*d.x;f.y+=j*e.y+g*d.y;f.z+=j*e.z+g*d.z;this.grid[a][c]=this.vertices.push(new THREE.Vertex(new THREE.Vector3(f.x,f.y,f.z)))-1}}for(a=0;a&lt;this.segmentsR;++a)for(c=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_96

><td class="source">0;c&lt;this.segmentsT;++c){e=(a+1)%this.segmentsR;d=(c+1)%this.segmentsT;f=this.grid[a][c];b=this.grid[e][c];e=this.grid[e][d];d=this.grid[a][d];g=new THREE.UV(a/this.segmentsR,c/this.segmentsT);j=new THREE.UV((a+1)/this.segmentsR,c/this.segmentsT);var l=new THREE.UV((a+1)/this.segmentsR,(c+1)/this.segmentsT),k=new THREE.UV(a/this.segmentsR,(c+1)/this.segmentsT);this.faces.push(new THREE.Face4(f,b,e,d));this.faceVertexUvs[0].push([g,j,l,k])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_97

><td class="source">THREE.TorusKnot.prototype=new THREE.Geometry;THREE.TorusKnot.prototype.constructor=THREE.TorusKnot;THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_98

><td class="source">THREE.Loader.prototype={addStatusElement:function(){var a=document.createElement(&quot;div&quot;);a.style.position=&quot;absolute&quot;;a.style.right=&quot;0px&quot;;a.style.top=&quot;0px&quot;;a.style.fontSize=&quot;0.8em&quot;;a.style.textAlign=&quot;left&quot;;a.style.background=&quot;rgba(0,0,0,0.25)&quot;;a.style.color=&quot;#fff&quot;;a.style.width=&quot;120px&quot;;a.style.padding=&quot;0.5em 0.5em 0.5em 0.5em&quot;;a.style.zIndex=1E3;a.innerHTML=&quot;Loading ...&quot;;return a},updateProgress:function(a){var c=&quot;Loaded &quot;;c+=a.total?(100*a.loaded/a.total).toFixed(0)+&quot;%&quot;:(a.loaded/1E3).toFixed(2)+&quot; KB&quot;;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_99

><td class="source">this.statusDomElement.innerHTML=c},extractUrlbase:function(a){a=a.split(&quot;/&quot;);a.pop();return a.join(&quot;/&quot;)},init_materials:function(a,c,b){a.materials=[];for(var e=0;e&lt;c.length;++e)a.materials[e]=[THREE.Loader.prototype.createMaterial(c[e],b)]},createMaterial:function(a,c){function b(h){h=Math.log(h)/Math.LN2;return Math.floor(h)==h}function e(h,j){var l=new Image;l.onload=function(){if(!b(this.width)||!b(this.height)){var k=Math.pow(2,Math.round(Math.log(this.width)/Math.LN2)),m=Math.pow(2,Math.round(Math.log(this.height)/<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_100

><td class="source">Math.LN2));h.image.width=k;h.image.height=m;h.image.getContext(&quot;2d&quot;).drawImage(this,0,0,k,m)}else h.image=this;h.needsUpdate=!0};l.src=j}var f,d,g;f=&quot;MeshLambertMaterial&quot;;d={color:15658734,opacity:1,map:null,lightMap:null,wireframe:a.wireframe};if(a.shading)if(a.shading==&quot;Phong&quot;)f=&quot;MeshPhongMaterial&quot;;else a.shading==&quot;Basic&quot;&amp;&amp;(f=&quot;MeshBasicMaterial&quot;);if(a.blending)if(a.blending==&quot;Additive&quot;)d.blending=THREE.AdditiveBlending;else if(a.blending==&quot;Subtractive&quot;)d.blending=THREE.SubtractiveBlending;else if(a.blending==<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_101

><td class="source">&quot;Multiply&quot;)d.blending=THREE.MultiplyBlending;if(a.transparent!==undefined||a.opacity&lt;1)d.transparent=a.transparent;if(a.depthTest!==undefined)d.depthTest=a.depthTest;if(a.vertexColors!==undefined)if(a.vertexColors==&quot;face&quot;)d.vertexColors=THREE.FaceColors;else if(a.vertexColors)d.vertexColors=THREE.VertexColors;if(a.mapDiffuse&amp;&amp;c){g=document.createElement(&quot;canvas&quot;);d.map=new THREE.Texture(g);d.map.sourceFile=a.mapDiffuse;e(d.map,c+&quot;/&quot;+a.mapDiffuse)}else if(a.colorDiffuse){g=(a.colorDiffuse[0]*255&lt;&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_102

><td class="source">16)+(a.colorDiffuse[1]*255&lt;&lt;8)+a.colorDiffuse[2]*255;d.color=g;d.opacity=a.transparency}else if(a.DbgColor)d.color=a.DbgColor;if(a.mapLightmap&amp;&amp;c){g=document.createElement(&quot;canvas&quot;);d.lightMap=new THREE.Texture(g);d.lightMap.sourceFile=a.mapLightmap;e(d.lightMap,c+&quot;/&quot;+a.mapLightmap)}return new THREE[f](d)}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a)};THREE.JSONLoader.prototype=new THREE.Loader;THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.supr=THREE.Loader.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_103

><td class="source">THREE.JSONLoader.prototype.load=function(a){var c=this,b=a.model,e=a.callback,f=a.texture_path?a.texture_path:this.extractUrlbase(b);a=new Worker(b);a.onmessage=function(d){c.createModel(d.data,e,f);c.onLoadComplete()};this.onLoadStart();a.postMessage((new Date).getTime())};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_104

><td class="source">THREE.JSONLoader.prototype.createModel=function(a,c,b){var e=new THREE.Geometry,f=a.scale!==undefined?a.scale:1;this.init_materials(e,a.materials,b);(function(d){if(a.version===undefined||a.version!=2)console.error(&quot;Deprecated file format.&quot;);else{var g,h,j,l,k,m,p,n,v,A,w,u,y,o,z=a.faces;m=a.vertices;var B=a.normals,I=a.colors,K=0;for(g=0;g&lt;a.uvs.length;g++)a.uvs[g].length&amp;&amp;K++;for(g=0;g&lt;K;g++){e.faceUvs[g]=[];e.faceVertexUvs[g]=[]}l=0;for(k=m.length;l&lt;k;){p=new THREE.Vertex;p.position.x=m[l++]/d;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_105

><td class="source">p.position.y=m[l++]/d;p.position.z=m[l++]/d;e.vertices.push(p)}l=0;for(k=z.length;l&lt;k;){d=z[l++];m=d&amp;1;j=d&amp;2;g=d&amp;4;h=d&amp;8;n=d&amp;16;p=d&amp;32;A=d&amp;64;d&amp;=128;if(m){w=new THREE.Face4;w.a=z[l++];w.b=z[l++];w.c=z[l++];w.d=z[l++];m=4}else{w=new THREE.Face3;w.a=z[l++];w.b=z[l++];w.c=z[l++];m=3}if(j){j=z[l++];w.materials=e.materials[j]}j=e.faces.length;if(g)for(g=0;g&lt;K;g++){u=a.uvs[g];v=z[l++];o=u[v*2];v=u[v*2+1];e.faceUvs[g][j]=new THREE.UV(o,v)}if(h)for(g=0;g&lt;K;g++){u=a.uvs[g];y=[];for(h=0;h&lt;m;h++){v=z[l++];o=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_106

><td class="source">u[v*2];v=u[v*2+1];y[h]=new THREE.UV(o,v)}e.faceVertexUvs[g][j]=y}if(n){n=z[l++]*3;h=new THREE.Vector3;h.x=B[n++];h.y=B[n++];h.z=B[n];w.normal=h}if(p)for(g=0;g&lt;m;g++){n=z[l++]*3;h=new THREE.Vector3;h.x=B[n++];h.y=B[n++];h.z=B[n];w.vertexNormals.push(h)}if(A){p=z[l++];p=new THREE.Color(I[p]);w.color=p}if(d)for(g=0;g&lt;m;g++){p=z[l++];p=new THREE.Color(I[p]);w.vertexColors.push(p)}e.faces.push(w)}}})(f);(function(){var d,g,h,j;if(a.skinWeights){d=0;for(g=a.skinWeights.length;d&lt;g;d+=2){h=a.skinWeights[d];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_107

><td class="source">j=a.skinWeights[d+1];e.skinWeights.push(new THREE.Vector4(h,j,0,0))}}if(a.skinIndices){d=0;for(g=a.skinIndices.length;d&lt;g;d+=2){h=a.skinIndices[d];j=a.skinIndices[d+1];e.skinIndices.push(new THREE.Vector4(h,j,0,0))}}e.bones=a.bones;e.animation=a.animation})();(function(d){if(a.morphTargets!==undefined){var g,h,j,l,k,m,p,n,v;g=0;for(h=a.morphTargets.length;g&lt;h;g++){e.morphTargets[g]={};e.morphTargets[g].name=a.morphTargets[g].name;e.morphTargets[g].vertices=[];n=e.morphTargets[g].vertices;v=a.morphTargets[g].vertices;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_108

><td class="source">j=0;for(l=v.length;j&lt;l;j+=3){k=v[j]/d;m=v[j+1]/d;p=v[j+2]/d;n.push(new THREE.Vertex(new THREE.Vector3(k,m,p)))}}}if(a.morphColors!==undefined){g=0;for(h=a.morphColors.length;g&lt;h;g++){e.morphColors[g]={};e.morphColors[g].name=a.morphColors[g].name;e.morphColors[g].colors=[];l=e.morphColors[g].colors;k=a.morphColors[g].colors;d=0;for(j=k.length;d&lt;j;d+=3){m=new THREE.Color(16755200);m.setRGB(k[d],k[d+1],k[d+2]);l.push(m)}}}})(f);(function(){if(a.edges!==undefined){var d,g,h;for(d=0;d&lt;a.edges.length;d+=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_109

><td class="source">2){g=a.edges[d];h=a.edges[d+1];e.edges.push(new THREE.Edge(e.vertices[g],e.vertices[h],g,h))}}})();e.computeCentroids();e.computeFaceNormals();e.computeEdgeFaces();c(e)};THREE.BinaryLoader=function(a){THREE.Loader.call(this,a)};THREE.BinaryLoader.prototype=new THREE.Loader;THREE.BinaryLoader.prototype.constructor=THREE.BinaryLoader;THREE.BinaryLoader.prototype.supr=THREE.Loader.prototype;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_110

><td class="source">THREE.BinaryLoader.prototype={load:function(a){var c=a.model,b=a.callback,e=a.texture_path?a.texture_path:THREE.Loader.prototype.extractUrlbase(c),f=a.bin_path?a.bin_path:THREE.Loader.prototype.extractUrlbase(c);a=(new Date).getTime();c=new Worker(c);var d=this.showProgress?THREE.Loader.prototype.updateProgress:null;c.onmessage=function(g){THREE.BinaryLoader.prototype.loadAjaxBuffers(g.data.buffers,g.data.materials,b,f,e,d)};c.onerror=function(g){alert(&quot;worker.onerror: &quot;+g.message+&quot;\n&quot;+g.data);g.preventDefault()};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_111

><td class="source">c.postMessage(a)},loadAjaxBuffers:function(a,c,b,e,f,d){var g=new XMLHttpRequest,h=e+&quot;/&quot;+a,j=0;g.onreadystatechange=function(){if(g.readyState==4)g.status==200||g.status==0?THREE.BinaryLoader.prototype.createBinModel(g.responseText,b,f,c):alert(&quot;Couldn&#39;t load [&quot;+h+&quot;] [&quot;+g.status+&quot;]&quot;);else if(g.readyState==3){if(d){j==0&amp;&amp;(j=g.getResponseHeader(&quot;Content-Length&quot;));d({total:j,loaded:g.responseText.length})}}else g.readyState==2&amp;&amp;(j=g.getResponseHeader(&quot;Content-Length&quot;))};g.open(&quot;GET&quot;,h,!0);g.overrideMimeType(&quot;text/plain; charset=x-user-defined&quot;);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_112

><td class="source">g.setRequestHeader(&quot;Content-Type&quot;,&quot;text/plain&quot;);g.send(null)},createBinModel:function(a,c,b,e){var f=function(d){function g(t,x){var C=k(t,x),E=k(t,x+1),H=k(t,x+2),T=k(t,x+3),V=(T&lt;&lt;1&amp;255|H&gt;&gt;7)-127;C|=(H&amp;127)&lt;&lt;16|E&lt;&lt;8;if(C==0&amp;&amp;V==-127)return 0;return(1-2*(T&gt;&gt;7))*(1+C*Math.pow(2,-23))*Math.pow(2,V)}function h(t,x){var C=k(t,x),E=k(t,x+1),H=k(t,x+2);return(k(t,x+3)&lt;&lt;24)+(H&lt;&lt;16)+(E&lt;&lt;8)+C}function j(t,x){var C=k(t,x);return(k(t,x+1)&lt;&lt;8)+C}function l(t,x){var C=k(t,x);return C&gt;127?C-256:C}function k(t,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_113

><td class="source">x){return t.charCodeAt(x)&amp;255}function m(t){var x,C,E;x=h(a,t);C=h(a,t+I);E=h(a,t+K);t=j(a,t+J);THREE.BinaryLoader.prototype.f3(u,x,C,E,t)}function p(t){var x,C,E,H,T,V;x=h(a,t);C=h(a,t+I);E=h(a,t+K);H=j(a,t+J);T=h(a,t+G);V=h(a,t+D);t=h(a,t+L);THREE.BinaryLoader.prototype.f3n(u,z,x,C,E,H,T,V,t)}function n(t){var x,C,E,H;x=h(a,t);C=h(a,t+R);E=h(a,t+O);H=h(a,t+S);t=j(a,t+P);THREE.BinaryLoader.prototype.f4(u,x,C,E,H,t)}function v(t){var x,C,E,H,T,V,ca,da;x=h(a,t);C=h(a,t+R);E=h(a,t+O);H=h(a,t+S);T=j(a,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_114

><td class="source">t+P);V=h(a,t+F);ca=h(a,t+M);da=h(a,t+Q);t=h(a,t+U);THREE.BinaryLoader.prototype.f4n(u,z,x,C,E,H,T,V,ca,da,t)}function A(t){var x,C;x=h(a,t);C=h(a,t+N);t=h(a,t+W);THREE.BinaryLoader.prototype.uv3(u.faceVertexUvs[0],B[x*2],B[x*2+1],B[C*2],B[C*2+1],B[t*2],B[t*2+1])}function w(t){var x,C,E;x=h(a,t);C=h(a,t+ea);E=h(a,t+fa);t=h(a,t+ga);THREE.BinaryLoader.prototype.uv4(u.faceVertexUvs[0],B[x*2],B[x*2+1],B[C*2],B[C*2+1],B[E*2],B[E*2+1],B[t*2],B[t*2+1])}var u=this,y=0,o,z=[],B=[],I,K,J,G,D,L,R,O,S,P,F,M,Q,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_115

><td class="source">U,N,W,ea,fa,ga,Y,Z,$,aa,ba,X;THREE.Geometry.call(this);THREE.Loader.prototype.init_materials(u,e,d);o={signature:a.substr(y,8),header_bytes:k(a,y+8),vertex_coordinate_bytes:k(a,y+9),normal_coordinate_bytes:k(a,y+10),uv_coordinate_bytes:k(a,y+11),vertex_index_bytes:k(a,y+12),normal_index_bytes:k(a,y+13),uv_index_bytes:k(a,y+14),material_index_bytes:k(a,y+15),nvertices:h(a,y+16),nnormals:h(a,y+16+4),nuvs:h(a,y+16+8),ntri_flat:h(a,y+16+12),ntri_smooth:h(a,y+16+16),ntri_flat_uv:h(a,y+16+20),ntri_smooth_uv:h(a,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_116

><td class="source">y+16+24),nquad_flat:h(a,y+16+28),nquad_smooth:h(a,y+16+32),nquad_flat_uv:h(a,y+16+36),nquad_smooth_uv:h(a,y+16+40)};y+=o.header_bytes;I=o.vertex_index_bytes;K=o.vertex_index_bytes*2;J=o.vertex_index_bytes*3;G=o.vertex_index_bytes*3+o.material_index_bytes;D=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes;L=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*2;R=o.vertex_index_bytes;O=o.vertex_index_bytes*2;S=o.vertex_index_bytes*3;P=o.vertex_index_bytes*4;F=o.vertex_index_bytes*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_117

><td class="source">4+o.material_index_bytes;M=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes;Q=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*2;U=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*3;N=o.uv_index_bytes;W=o.uv_index_bytes*2;ea=o.uv_index_bytes;fa=o.uv_index_bytes*2;ga=o.uv_index_bytes*3;d=o.vertex_index_bytes*3+o.material_index_bytes;X=o.vertex_index_bytes*4+o.material_index_bytes;Y=o.ntri_flat*d;Z=o.ntri_smooth*(d+o.normal_index_bytes*3);$=o.ntri_flat_uv*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_118

><td class="source">(d+o.uv_index_bytes*3);aa=o.ntri_smooth_uv*(d+o.normal_index_bytes*3+o.uv_index_bytes*3);ba=o.nquad_flat*X;d=o.nquad_smooth*(X+o.normal_index_bytes*4);X=o.nquad_flat_uv*(X+o.uv_index_bytes*4);y+=function(t){for(var x,C,E,H=o.vertex_coordinate_bytes*3,T=t+o.nvertices*H;t&lt;T;t+=H){x=g(a,t);C=g(a,t+o.vertex_coordinate_bytes);E=g(a,t+o.vertex_coordinate_bytes*2);THREE.BinaryLoader.prototype.v(u,x,C,E)}return o.nvertices*H}(y);y+=function(t){for(var x,C,E,H=o.normal_coordinate_bytes*3,T=t+o.nnormals*H;t&lt;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_119

><td class="source">T;t+=H){x=l(a,t);C=l(a,t+o.normal_coordinate_bytes);E=l(a,t+o.normal_coordinate_bytes*2);z.push(x/127,C/127,E/127)}return o.nnormals*H}(y);y+=function(t){for(var x,C,E=o.uv_coordinate_bytes*2,H=t+o.nuvs*E;t&lt;H;t+=E){x=g(a,t);C=g(a,t+o.uv_coordinate_bytes);B.push(x,C)}return o.nuvs*E}(y);Y=y+Y;Z=Y+Z;$=Z+$;aa=$+aa;ba=aa+ba;d=ba+d;X=d+X;(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes,E=C+o.uv_index_bytes*3,H=t+o.ntri_flat_uv*E;for(x=t;x&lt;H;x+=E){m(x);A(x+C)}return H-t})(Z);(function(t){var x,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_120

><td class="source">C=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*3,E=C+o.uv_index_bytes*3,H=t+o.ntri_smooth_uv*E;for(x=t;x&lt;H;x+=E){p(x);A(x+C)}return H-t})($);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes,E=C+o.uv_index_bytes*4,H=t+o.nquad_flat_uv*E;for(x=t;x&lt;H;x+=E){n(x);w(x+C)}return H-t})(d);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*4,E=C+o.uv_index_bytes*4,H=t+o.nquad_smooth_uv*E;for(x=t;x&lt;H;x+=E){v(x);w(x+C)}return H-t})(X);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_121

><td class="source">(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes,E=t+o.ntri_flat*C;for(x=t;x&lt;E;x+=C)m(x);return E-t})(y);(function(t){var x,C=o.vertex_index_bytes*3+o.material_index_bytes+o.normal_index_bytes*3,E=t+o.ntri_smooth*C;for(x=t;x&lt;E;x+=C)p(x);return E-t})(Y);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes,E=t+o.nquad_flat*C;for(x=t;x&lt;E;x+=C)n(x);return E-t})(aa);(function(t){var x,C=o.vertex_index_bytes*4+o.material_index_bytes+o.normal_index_bytes*4,E=t+o.nquad_smooth*<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_122

><td class="source">C;for(x=t;x&lt;E;x+=C)v(x);return E-t})(ba);this.computeCentroids();this.computeFaceNormals()};f.prototype=new THREE.Geometry;f.prototype.constructor=f;c(new f(b))},v:function(a,c,b,e){a.vertices.push(new THREE.Vertex(new THREE.Vector3(c,b,e)))},f3:function(a,c,b,e,f){a.faces.push(new THREE.Face3(c,b,e,null,null,a.materials[f]))},f4:function(a,c,b,e,f,d){a.faces.push(new THREE.Face4(c,b,e,f,null,null,a.materials[d]))},f3n:function(a,c,b,e,f,d,g,h,j){d=a.materials[d];var l=c[h*3],k=c[h*3+1];h=c[h*3+2];<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_123

><td class="source">var m=c[j*3],p=c[j*3+1];j=c[j*3+2];a.faces.push(new THREE.Face3(b,e,f,[new THREE.Vector3(c[g*3],c[g*3+1],c[g*3+2]),new THREE.Vector3(l,k,h),new THREE.Vector3(m,p,j)],null,d))},f4n:function(a,c,b,e,f,d,g,h,j,l,k){g=a.materials[g];var m=c[j*3],p=c[j*3+1];j=c[j*3+2];var n=c[l*3],v=c[l*3+1];l=c[l*3+2];var A=c[k*3],w=c[k*3+1];k=c[k*3+2];a.faces.push(new THREE.Face4(b,e,f,d,[new THREE.Vector3(c[h*3],c[h*3+1],c[h*3+2]),new THREE.Vector3(m,p,j),new THREE.Vector3(n,v,l),new THREE.Vector3(A,w,k)],null,g))},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_124

><td class="source">uv3:function(a,c,b,e,f,d,g){var h=[];h.push(new THREE.UV(c,b));h.push(new THREE.UV(e,f));h.push(new THREE.UV(d,g));a.push(h)},uv4:function(a,c,b,e,f,d,g,h,j){var l=[];l.push(new THREE.UV(c,b));l.push(new THREE.UV(e,f));l.push(new THREE.UV(d,g));l.push(new THREE.UV(h,j));a.push(l)}};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_125

><td class="source">THREE.SceneLoader.prototype={load:function(a,c){var b=this,e=new Worker(a);e.postMessage(0);var f=THREE.Loader.prototype.extractUrlbase(a);e.onmessage=function(d){function g(N,W){return W==&quot;relativeToHTML&quot;?N:f+&quot;/&quot;+N}function h(){for(n in D.objects)if(!F.objects[n]){y=D.objects[n];if(y.geometry!==undefined){if(I=F.geometries[y.geometry]){G=[];for(U=0;U&lt;y.materials.length;U++)G[U]=F.materials[y.materials[U]];o=y.position;r=y.rotation;q=y.quaternion;s=y.scale;q=0;G.length==0&amp;&amp;(G[0]=new THREE.MeshFaceMaterial);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_126

><td class="source">G.length&gt;1&amp;&amp;(G=[new THREE.MeshFaceMaterial]);object=new THREE.Mesh(I,G);object.name=n;object.position.set(o[0],o[1],o[2]);if(q){object.quaternion.set(q[0],q[1],q[2],q[3]);object.useQuaternion=!0}else object.rotation.set(r[0],r[1],r[2]);object.scale.set(s[0],s[1],s[2]);object.visible=y.visible;F.scene.addObject(object);F.objects[n]=object;if(y.meshCollider){var N=THREE.CollisionUtils.MeshColliderWBox(object);F.scene.collisions.colliders.push(N)}if(y.castsShadow){N=new THREE.ShadowVolume(I);F.scene.addChild(N);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_127

><td class="source">N.position=object.position;N.rotation=object.rotation;N.scale=object.scale}y.trigger&amp;&amp;y.trigger.toLowerCase()!=&quot;none&quot;&amp;&amp;(F.triggers[object.name]={type:y.trigger,object:y})}}else{o=y.position;r=y.rotation;q=y.quaternion;s=y.scale;q=0;object=new THREE.Object3D;object.name=n;object.position.set(o[0],o[1],o[2]);if(q){object.quaternion.set(q[0],q[1],q[2],q[3]);object.useQuaternion=!0}else object.rotation.set(r[0],r[1],r[2]);object.scale.set(s[0],s[1],s[2]);object.visible=y.visible!==undefined?y.visible:<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_128

><td class="source">!1;F.scene.addObject(object);F.objects[n]=object;F.empties[n]=object}}}function j(N){return function(W){F.geometries[N]=W;h();R-=1;b.onLoadComplete();k()}}function l(N){return function(W){F.geometries[N]=W}}function k(){b.callbackProgress({totalModels:S,totalTextures:P,loadedModels:S-R,loadedTextures:P-O},F);b.onLoadProgress();R==0&amp;&amp;O==0&amp;&amp;c(F)}var m,p,n,v,A,w,u,y,o,z,B,I,K,J,G,D,L,R,O,S,P,F;D=d.data;d=new THREE.BinaryLoader;L=new THREE.JSONLoader;O=R=0;F={scene:new THREE.Scene,geometries:{},materials:{},<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_129

><td class="source">textures:{},objects:{},cameras:{},lights:{},fogs:{},triggers:{},empties:{}};var M=!1;for(n in D.objects){y=D.objects[n];if(y.meshCollider){M=!0;break}}if(M)F.scene.collisions=new THREE.CollisionSystem;if(D.transform){M=D.transform.position;z=D.transform.rotation;var Q=D.transform.scale;M&amp;&amp;F.scene.position.set(M[0],M[1],M[2]);z&amp;&amp;F.scene.rotation.set(z[0],z[1],z[2]);Q&amp;&amp;F.scene.scale.set(Q[0],Q[1],Q[2]);(M||z||Q)&amp;&amp;F.scene.updateMatrix()}M=function(){O-=1;k();b.onLoadComplete()};for(A in D.cameras){z=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_130

><td class="source">D.cameras[A];if(z.type==&quot;perspective&quot;)K=new THREE.Camera(z.fov,z.aspect,z.near,z.far);else if(z.type==&quot;ortho&quot;){K=new THREE.Camera;K.projectionMatrix=THREE.Matrix4.makeOrtho(z.left,z.right,z.top,z.bottom,z.near,z.far)}o=z.position;z=z.target;K.position.set(o[0],o[1],o[2]);K.target.position.set(z[0],z[1],z[2]);F.cameras[A]=K}for(v in D.lights){A=D.lights[v];K=A.color!==undefined?A.color:16777215;z=A.intensity!==undefined?A.intensity:1;if(A.type==&quot;directional&quot;){o=A.direction;light=new THREE.DirectionalLight(K,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_131

><td class="source">z);light.position.set(o[0],o[1],o[2]);light.position.normalize()}else if(A.type==&quot;point&quot;){o=A.position;light=new THREE.PointLight(K,z);light.position.set(o[0],o[1],o[2])}F.scene.addLight(light);F.lights[v]=light}for(w in D.fogs){v=D.fogs[w];if(v.type==&quot;linear&quot;)J=new THREE.Fog(0,v.near,v.far);else v.type==&quot;exp2&quot;&amp;&amp;(J=new THREE.FogExp2(0,v.density));z=v.color;J.color.setRGB(z[0],z[1],z[2]);F.fogs[w]=J}if(F.cameras&amp;&amp;D.defaults.camera)F.currentCamera=F.cameras[D.defaults.camera];if(F.fogs&amp;&amp;D.defaults.fog)F.scene.fog=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_132

><td class="source">F.fogs[D.defaults.fog];z=D.defaults.bgcolor;F.bgColor=new THREE.Color;F.bgColor.setRGB(z[0],z[1],z[2]);F.bgColorAlpha=D.defaults.bgalpha;for(m in D.geometries){w=D.geometries[m];if(w.type==&quot;bin_mesh&quot;||w.type==&quot;ascii_mesh&quot;){R+=1;b.onLoadStart()}}S=R;for(m in D.geometries){w=D.geometries[m];if(w.type==&quot;cube&quot;){I=new THREE.Cube(w.width,w.height,w.depth,w.segmentsWidth,w.segmentsHeight,w.segmentsDepth,null,w.flipped,w.sides);F.geometries[m]=I}else if(w.type==&quot;plane&quot;){I=new THREE.Plane(w.width,w.height,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_133

><td class="source">w.segmentsWidth,w.segmentsHeight);F.geometries[m]=I}else if(w.type==&quot;sphere&quot;){I=new THREE.Sphere(w.radius,w.segmentsWidth,w.segmentsHeight);F.geometries[m]=I}else if(w.type==&quot;cylinder&quot;){I=new THREE.Cylinder(w.numSegs,w.topRad,w.botRad,w.height,w.topOffset,w.botOffset);F.geometries[m]=I}else if(w.type==&quot;torus&quot;){I=new THREE.Torus(w.radius,w.tube,w.segmentsR,w.segmentsT);F.geometries[m]=I}else if(w.type==&quot;icosahedron&quot;){I=new THREE.Icosahedron(w.subdivisions);F.geometries[m]=I}else if(w.type==&quot;bin_mesh&quot;)d.load({model:g(w.url,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_134

><td class="source">D.urlBaseType),callback:j(m)});else if(w.type==&quot;ascii_mesh&quot;)L.load({model:g(w.url,D.urlBaseType),callback:j(m)});else if(w.type==&quot;embedded_mesh&quot;)(w=D.embeds[w.id])&amp;&amp;L.createModel(w,l(m),&quot;&quot;)}for(u in D.textures){m=D.textures[u];if(m.url instanceof Array){O+=m.url.length;for(d=0;d&lt;m.url.length;d++)b.onLoadStart()}else{O+=1;b.onLoadStart()}}P=O;for(u in D.textures){m=D.textures[u];if(m.mapping!=undefined&amp;&amp;THREE[m.mapping]!=undefined)m.mapping=new THREE[m.mapping];if(m.url instanceof Array){d=[];for(var U=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_135

><td class="source">0;U&lt;m.url.length;U++)d[U]=g(m.url[U],D.urlBaseType);d=THREE.ImageUtils.loadTextureCube(d,m.mapping,M)}else{d=THREE.ImageUtils.loadTexture(g(m.url,D.urlBaseType),m.mapping,M);if(THREE[m.minFilter]!=undefined)d.minFilter=THREE[m.minFilter];if(THREE[m.magFilter]!=undefined)d.magFilter=THREE[m.magFilter]}F.textures[u]=d}for(p in D.materials){u=D.materials[p];for(B in u.parameters)if(B==&quot;envMap&quot;||B==&quot;map&quot;||B==&quot;lightMap&quot;)u.parameters[B]=F.textures[u.parameters[B]];else if(B==&quot;shading&quot;)u.parameters[B]=u.parameters[B]==<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_136

><td class="source">&quot;flat&quot;?THREE.FlatShading:THREE.SmoothShading;else if(B==&quot;blending&quot;)u.parameters[B]=THREE[u.parameters[B]]?THREE[u.parameters[B]]:THREE.NormalBlending;else if(B==&quot;combine&quot;)u.parameters[B]=u.parameters[B]==&quot;MixOperation&quot;?THREE.MixOperation:THREE.MultiplyOperation;else if(B==&quot;vertexColors&quot;)if(u.parameters[B]==&quot;face&quot;)u.parameters[B]=THREE.FaceColors;else if(u.parameters[B])u.parameters[B]=THREE.VertexColors;if(u.parameters.opacity!==undefined&amp;&amp;u.parameters.opacity&lt;1)u.parameters.transparent=!0;u=new THREE[u.type](u.parameters);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_137

><td class="source">F.materials[p]=u}h();b.callbackSync(F)}}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_138

><td class="source">THREE.MarchingCubes=function(a,c){THREE.Object3D.call(this);this.materials=c instanceof Array?c:[c];this.init=function(b){this.isolation=80;this.size=b;this.size2=this.size*this.size;this.size3=this.size2*this.size;this.halfsize=this.size/2;this.delta=2/this.size;this.yd=this.size;this.zd=this.size2;this.field=new Float32Array(this.size3);this.normal_cache=new Float32Array(this.size3*3);this.vlist=new Float32Array(36);this.nlist=new Float32Array(36);this.firstDraw=!0;this.maxCount=4096;this.count=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_139

><td class="source">0;this.hasPos=!1;this.hasNormal=!1;this.positionArray=new Float32Array(this.maxCount*3);this.normalArray=new Float32Array(this.maxCount*3)};this.lerp=function(b,e,f){return b+(e-b)*f};this.VIntX=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h+g*this.delta;e[d+1]=j;e[d+2]=l;f[d]=this.lerp(k[b],k[b+3],g);f[d+1]=this.lerp(k[b+1],k[b+4],g);f[d+2]=this.lerp(k[b+2],k[b+5],g)};this.VIntY=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h;e[d+1]=j+g*this.delta;e[d+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_140

><td class="source">2]=l;e=b+this.yd*3;f[d]=this.lerp(k[b],k[e],g);f[d+1]=this.lerp(k[b+1],k[e+1],g);f[d+2]=this.lerp(k[b+2],k[e+2],g)};this.VIntZ=function(b,e,f,d,g,h,j,l,k,m){g=(g-k)/(m-k);k=this.normal_cache;e[d]=h;e[d+1]=j;e[d+2]=l+g*this.delta;e=b+this.zd*3;f[d]=this.lerp(k[b],k[e],g);f[d+1]=this.lerp(k[b+1],k[e+1],g);f[d+2]=this.lerp(k[b+2],k[e+2],g)};this.compNorm=function(b){var e=b*3;if(this.normal_cache[e]==0){this.normal_cache[e]=this.field[b-1]-this.field[b+1];this.normal_cache[e+1]=this.field[b-this.yd]-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_141

><td class="source">this.field[b+this.yd];this.normal_cache[e+2]=this.field[b-this.zd]-this.field[b+this.zd]}};this.polygonize=function(b,e,f,d,g,h){var j=d+1,l=d+this.yd,k=d+this.zd,m=j+this.yd,p=j+this.zd,n=d+this.yd+this.zd,v=j+this.yd+this.zd,A=0,w=this.field[d],u=this.field[j],y=this.field[l],o=this.field[m],z=this.field[k],B=this.field[p],I=this.field[n],K=this.field[v];w&lt;g&amp;&amp;(A|=1);u&lt;g&amp;&amp;(A|=2);y&lt;g&amp;&amp;(A|=8);o&lt;g&amp;&amp;(A|=4);z&lt;g&amp;&amp;(A|=16);B&lt;g&amp;&amp;(A|=32);I&lt;g&amp;&amp;(A|=128);K&lt;g&amp;&amp;(A|=64);var J=THREE.edgeTable[A];if(J==0)return 0;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_142

><td class="source">var G=this.delta,D=b+G,L=e+G;G=f+G;if(J&amp;1){this.compNorm(d);this.compNorm(j);this.VIntX(d*3,this.vlist,this.nlist,0,g,b,e,f,w,u)}if(J&amp;2){this.compNorm(j);this.compNorm(m);this.VIntY(j*3,this.vlist,this.nlist,3,g,D,e,f,u,o)}if(J&amp;4){this.compNorm(l);this.compNorm(m);this.VIntX(l*3,this.vlist,this.nlist,6,g,b,L,f,y,o)}if(J&amp;8){this.compNorm(d);this.compNorm(l);this.VIntY(d*3,this.vlist,this.nlist,9,g,b,e,f,w,y)}if(J&amp;16){this.compNorm(k);this.compNorm(p);this.VIntX(k*3,this.vlist,this.nlist,12,g,b,e,G,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_143

><td class="source">z,B)}if(J&amp;32){this.compNorm(p);this.compNorm(v);this.VIntY(p*3,this.vlist,this.nlist,15,g,D,e,G,B,K)}if(J&amp;64){this.compNorm(n);this.compNorm(v);this.VIntX(n*3,this.vlist,this.nlist,18,g,b,L,G,I,K)}if(J&amp;128){this.compNorm(k);this.compNorm(n);this.VIntY(k*3,this.vlist,this.nlist,21,g,b,e,G,z,I)}if(J&amp;256){this.compNorm(d);this.compNorm(k);this.VIntZ(d*3,this.vlist,this.nlist,24,g,b,e,f,w,z)}if(J&amp;512){this.compNorm(j);this.compNorm(p);this.VIntZ(j*3,this.vlist,this.nlist,27,g,D,e,f,u,B)}if(J&amp;1024){this.compNorm(m);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_144

><td class="source">this.compNorm(v);this.VIntZ(m*3,this.vlist,this.nlist,30,g,D,L,f,o,K)}if(J&amp;2048){this.compNorm(l);this.compNorm(n);this.VIntZ(l*3,this.vlist,this.nlist,33,g,b,L,f,y,I)}A&lt;&lt;=4;for(g=d=0;THREE.triTable[A+g]!=-1;){b=A+g;e=b+1;f=b+2;this.posnormtriv(this.vlist,this.nlist,3*THREE.triTable[b],3*THREE.triTable[e],3*THREE.triTable[f],h);g+=3;d++}return d};this.posnormtriv=function(b,e,f,d,g,h){var j=this.count*3;this.positionArray[j]=b[f];this.positionArray[j+1]=b[f+1];this.positionArray[j+2]=b[f+2];this.positionArray[j+<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_145

><td class="source">3]=b[d];this.positionArray[j+4]=b[d+1];this.positionArray[j+5]=b[d+2];this.positionArray[j+6]=b[g];this.positionArray[j+7]=b[g+1];this.positionArray[j+8]=b[g+2];this.normalArray[j]=e[f];this.normalArray[j+1]=e[f+1];this.normalArray[j+2]=e[f+2];this.normalArray[j+3]=e[d];this.normalArray[j+4]=e[d+1];this.normalArray[j+5]=e[d+2];this.normalArray[j+6]=e[g];this.normalArray[j+7]=e[g+1];this.normalArray[j+8]=e[g+2];this.hasPos=!0;this.hasNormal=!0;this.count+=3;this.count&gt;=this.maxCount-3&amp;&amp;h(this)};this.begin=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_146

><td class="source">function(){this.count=0;this.hasPos=!1;this.hasNormal=!1};this.end=function(b){if(this.count!=0){for(var e=this.count*3;e&lt;this.positionArray.length;e++)this.positionArray[e]=0;b(this)}};this.addBall=function(b,e,f,d,g){var h=this.size*Math.sqrt(d/g),j=f*this.size,l=e*this.size,k=b*this.size,m=Math.floor(j-h);m&lt;1&amp;&amp;(m=1);j=Math.floor(j+h);j&gt;this.size-1&amp;&amp;(j=this.size-1);var p=Math.floor(l-h);p&lt;1&amp;&amp;(p=1);l=Math.floor(l+h);l&gt;this.size-1&amp;&amp;(l=this.size-1);var n=Math.floor(k-h);n&lt;1&amp;&amp;(n=1);h=Math.floor(k+h);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_147

><td class="source">h&gt;this.size-1&amp;&amp;(h=this.size-1);for(var v,A,w,u,y,o;m&lt;j;m++){k=this.size2*m;A=m/this.size-f;y=A*A;for(A=p;A&lt;l;A++){w=k+this.size*A;v=A/this.size-e;o=v*v;for(v=n;v&lt;h;v++){u=v/this.size-b;u=d/(1.0E-6+u*u+o+y)-g;u&gt;0&amp;&amp;(this.field[w+v]+=u)}}}};this.addPlaneX=function(b,e){var f,d,g,h,j,l=this.size,k=this.yd,m=this.zd,p=this.field,n=l*Math.sqrt(b/e);n&gt;l&amp;&amp;(n=l);for(f=0;f&lt;n;f++){d=f/l;d*=d;h=b/(1.0E-4+d)-e;if(h&gt;0)for(d=0;d&lt;l;d++){j=f+d*k;for(g=0;g&lt;l;g++)p[m*g+j]+=h}}};this.addPlaneY=function(b,e){var f,d,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_148

><td class="source">g,h,j,l,k=this.size,m=this.yd,p=this.zd,n=this.field,v=k*Math.sqrt(b/e);v&gt;k&amp;&amp;(v=k);for(d=0;d&lt;v;d++){f=d/k;f*=f;h=b/(1.0E-4+f)-e;if(h&gt;0){j=d*m;for(f=0;f&lt;k;f++){l=j+f;for(g=0;g&lt;k;g++)n[p*g+l]+=h}}}};this.addPlaneZ=function(b,e){var f,d,g,h,j,l;size=this.size;yd=this.yd;zd=this.zd;field=this.field;dist=size*Math.sqrt(b/e);dist&gt;size&amp;&amp;(dist=size);for(g=0;g&lt;dist;g++){f=g/size;f*=f;h=b/(1.0E-4+f)-e;if(h&gt;0){j=zd*g;for(d=0;d&lt;size;d++){l=j+d*yd;for(f=0;f&lt;size;f++)field[l+f]+=h}}}};this.reset=function(){var b;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_149

><td class="source">for(b=0;b&lt;this.size3;b++){this.normal_cache[b*3]=0;this.field[b]=0}};this.render=function(b){this.begin();var e,f,d,g,h,j,l,k,m,p=this.size-2;for(g=1;g&lt;p;g++){m=this.size2*g;l=(g-this.halfsize)/this.halfsize;for(d=1;d&lt;p;d++){k=m+this.size*d;j=(d-this.halfsize)/this.halfsize;for(f=1;f&lt;p;f++){h=(f-this.halfsize)/this.halfsize;e=k+f;this.polygonize(h,j,l,e,this.isolation,b)}}}this.end(b)};this.generateGeometry=function(){var b=0,e=new THREE.Geometry,f=[];this.render(function(d){var g,h,j,l,k,m,p,n;for(g=<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_150

><td class="source">0;g&lt;d.count;g++){p=g*3;k=p+1;n=p+2;h=d.positionArray[p];j=d.positionArray[k];l=d.positionArray[n];m=new THREE.Vector3(h,j,l);h=d.normalArray[p];j=d.normalArray[k];l=d.normalArray[n];p=new THREE.Vector3(h,j,l);p.normalize();k=new THREE.Vertex(m);e.vertices.push(k);f.push(p)}nfaces=d.count/3;for(g=0;g&lt;nfaces;g++){p=(b+g)*3;k=p+1;n=p+2;m=f[p];h=f[k];j=f[n];p=new THREE.Face3(p,k,n,[m,h,j]);e.faces.push(p)}b+=nfaces;d.count=0});return e};this.init(a)};THREE.MarchingCubes.prototype=new THREE.Object3D;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_151

><td class="source">THREE.MarchingCubes.prototype.constructor=THREE.MarchingCubes;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_152

><td class="source">THREE.edgeTable=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_153

><td class="source">1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_154

><td class="source">419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_155

><td class="source">THREE.triTable=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_156

><td class="source">-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_157

><td class="source">-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_158

><td class="source">-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_159

><td class="source">8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_160

><td class="source">-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_161

><td class="source">5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_162

><td class="source">-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_163

><td class="source">10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_164

><td class="source">6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_165

><td class="source">8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_166

><td class="source">2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_167

><td class="source">-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_168

><td class="source">-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_169

><td class="source">-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_170

><td class="source">1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_171

><td class="source">-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_172

><td class="source">2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_173

><td class="source">4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_174

><td class="source">-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_175

><td class="source">2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_176

><td class="source">THREE.Trident=function(a){function c(d){return new THREE.Mesh(new THREE.Cylinder(30,0.1,a.length/20,a.length/5),new THREE.MeshBasicMaterial({color:d}))}function b(d,g){var h=new THREE.Geometry;h.vertices=[new THREE.Vertex,new THREE.Vertex(d)];return new THREE.Line(h,new THREE.LineBasicMaterial({color:g}))}THREE.Object3D.call(this);var e=Math.PI/2,f;a=a||THREE.Trident.defaultParams;if(a!==THREE.Trident.defaultParams)for(f in THREE.Trident.defaultParams)a.hasOwnProperty(f)||(a[f]=THREE.Trident.defaultParams[f]);<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_177

><td class="source">this.scale=new THREE.Vector3(a.scale,a.scale,a.scale);this.addChild(b(new THREE.Vector3(a.length,0,0),a.xAxisColor));this.addChild(b(new THREE.Vector3(0,a.length,0),a.yAxisColor));this.addChild(b(new THREE.Vector3(0,0,a.length),a.zAxisColor));if(a.showArrows){f=c(a.xAxisColor);f.rotation.y=-e;f.position.x=a.length;this.addChild(f);f=c(a.yAxisColor);f.rotation.x=e;f.position.y=a.length;this.addChild(f);f=c(a.zAxisColor);f.rotation.y=Math.PI;f.position.z=a.length;this.addChild(f)}};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_178

><td class="source">THREE.Trident.prototype=new THREE.Object3D;THREE.Trident.prototype.constructor=THREE.Trident;THREE.Trident.defaultParams={xAxisColor:16711680,yAxisColor:65280,zAxisColor:255,showArrows:!0,length:100,scale:1};THREE.PlaneCollider=function(a,c){this.point=a;this.normal=c};THREE.SphereCollider=function(a,c){this.center=a;this.radius=c;this.radiusSq=c*c};THREE.BoxCollider=function(a,c){this.min=a;this.max=c;this.dynamic=!0;this.normal=new THREE.Vector3};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_179

><td class="source">THREE.MeshCollider=function(a,c,b,e){this.vertices=a;this.faces=c;this.normals=b;this.box=e;this.numFaces=this.faces.length;this.normal=new THREE.Vector3};THREE.CollisionSystem=function(){this.collisionNormal=new THREE.Vector3;this.colliders=[];this.hits=[]};THREE.Collisions=new THREE.CollisionSystem;THREE.CollisionSystem.prototype.merge=function(a){this.colliders=this.colliders.concat(a.colliders);this.hits=this.hits.concat(a.hits)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_180

><td class="source">THREE.CollisionSystem.prototype.rayCastAll=function(a){a.direction.normalize();this.hits.length=0;var c,b,e,f,d=0;c=0;for(b=this.colliders.length;c&lt;b;c++){f=this.colliders[c];e=this.rayCast(a,f);if(e&lt;Number.MAX_VALUE){f.distance=e;e&gt;d?this.hits.push(f):this.hits.unshift(f);d=e}}return this.hits};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_181

><td class="source">THREE.CollisionSystem.prototype.rayCastNearest=function(a){var c=this.rayCastAll(a);if(c.length==0)return null;for(var b=0;c[b]instanceof THREE.MeshCollider;){var e=this.rayMesh(a,c[b]);if(e&lt;Number.MAX_VALUE){c[b].distance=e;break}b++}if(b&gt;c.length)return null;return c[b]};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_182

><td class="source">THREE.CollisionSystem.prototype.rayCast=function(a,c){if(c instanceof THREE.PlaneCollider)return this.rayPlane(a,c);else if(c instanceof THREE.SphereCollider)return this.raySphere(a,c);else if(c instanceof THREE.BoxCollider)return this.rayBox(a,c);else if(c instanceof THREE.MeshCollider&amp;&amp;c.box)return this.rayBox(a,c.box)};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_183

><td class="source">THREE.CollisionSystem.prototype.rayMesh=function(a,c){for(var b=this.makeRayLocal(a,c.mesh),e=Number.MAX_VALUE,f=0;f&lt;c.numFaces/3;f++){var d=f*3;d=this.rayTriangle(b,c.vertices[c.faces[d+0]],c.vertices[c.faces[d+1]],c.vertices[c.faces[d+2]],e,this.collisionNormal);if(d&lt;e){e=d;c.normal.copy(this.collisionNormal);c.normal.normalize()}}return e};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_184

><td class="source">THREE.CollisionSystem.prototype.rayTriangle=function(a,c,b,e,f,d){var g=THREE.CollisionSystem.__v1,h=THREE.CollisionSystem.__v2;d.set(0,0,0);g.sub(b,c);h.sub(e,b);d.cross(g,h);h=d.dot(a.direction);if(!(h&lt;0))return Number.MAX_VALUE;g=d.dot(c)-d.dot(a.origin);if(!(g&lt;=0))return Number.MAX_VALUE;if(!(g&gt;=h*f))return Number.MAX_VALUE;g/=h;h=THREE.CollisionSystem.__v3;h.copy(a.direction);h.multiplyScalar(g);h.addSelf(a.origin);if(Math.abs(d.x)&gt;Math.abs(d.y))if(Math.abs(d.x)&gt;Math.abs(d.z)){a=h.y-c.y;d=b.y-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_185

><td class="source">c.y;f=e.y-c.y;h=h.z-c.z;b=b.z-c.z;e=e.z-c.z}else{a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.y-c.y;b=b.y-c.y;e=e.y-c.y}else if(Math.abs(d.y)&gt;Math.abs(d.z)){a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.z-c.z;b=b.z-c.z;e=e.z-c.z}else{a=h.x-c.x;d=b.x-c.x;f=e.x-c.x;h=h.y-c.y;b=b.y-c.y;e=e.y-c.y}c=d*e-b*f;if(c==0)return Number.MAX_VALUE;c=1/c;e=(a*e-h*f)*c;if(!(e&gt;=0))return Number.MAX_VALUE;c*=d*h-b*a;if(!(c&gt;=0))return Number.MAX_VALUE;if(!(1-e-c&gt;=0))return Number.MAX_VALUE;return g};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_186

><td class="source">THREE.CollisionSystem.prototype.makeRayLocal=function(a,c){var b=THREE.CollisionSystem.__m;THREE.Matrix4.makeInvert(c.matrixWorld,b);var e=THREE.CollisionSystem.__r;e.origin.copy(a.origin);e.direction.copy(a.direction);b.multiplyVector3(e.origin);b.rotateAxis(e.direction);e.direction.normalize();return e};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_187

><td class="source">THREE.CollisionSystem.prototype.rayBox=function(a,c){var b;if(c.dynamic&amp;&amp;c.mesh&amp;&amp;c.mesh.matrixWorld)b=this.makeRayLocal(a,c.mesh);else{b=THREE.CollisionSystem.__r;b.origin.copy(a.origin);b.direction.copy(a.direction)}var e=0,f=0,d=0,g=0,h=0,j=0,l=!0;if(b.origin.x&lt;c.min.x){e=c.min.x-b.origin.x;e/=b.direction.x;l=!1;g=-1}else if(b.origin.x&gt;c.max.x){e=c.max.x-b.origin.x;e/=b.direction.x;l=!1;g=1}if(b.origin.y&lt;c.min.y){f=c.min.y-b.origin.y;f/=b.direction.y;l=!1;h=-1}else if(b.origin.y&gt;c.max.y){f=c.max.y-<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_188

><td class="source">b.origin.y;f/=b.direction.y;l=!1;h=1}if(b.origin.z&lt;c.min.z){d=c.min.z-b.origin.z;d/=b.direction.z;l=!1;j=-1}else if(b.origin.z&gt;c.max.z){d=c.max.z-b.origin.z;d/=b.direction.z;l=!1;j=1}if(l)return-1;l=0;if(f&gt;e){l=1;e=f}if(d&gt;e){l=2;e=d}switch(l){case 0:h=b.origin.y+b.direction.y*e;if(h&lt;c.min.y||h&gt;c.max.y)return Number.MAX_VALUE;b=b.origin.z+b.direction.z*e;if(b&lt;c.min.z||b&gt;c.max.z)return Number.MAX_VALUE;c.normal.set(g,0,0);break;case 1:g=b.origin.x+b.direction.x*e;if(g&lt;c.min.x||g&gt;c.max.x)return Number.MAX_VALUE;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_189

><td class="source">b=b.origin.z+b.direction.z*e;if(b&lt;c.min.z||b&gt;c.max.z)return Number.MAX_VALUE;c.normal.set(0,h,0);break;case 2:g=b.origin.x+b.direction.x*e;if(g&lt;c.min.x||g&gt;c.max.x)return Number.MAX_VALUE;h=b.origin.y+b.direction.y*e;if(h&lt;c.min.y||h&gt;c.max.y)return Number.MAX_VALUE;c.normal.set(0,0,j)}return e};THREE.CollisionSystem.prototype.rayPlane=function(a,c){var b=a.direction.dot(c.normal),e=c.point.dot(c.normal);if(b&lt;0)b=(e-a.origin.dot(c.normal))/b;else return Number.MAX_VALUE;return b&gt;0?b:Number.MAX_VALUE};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_190

><td class="source">THREE.CollisionSystem.prototype.raySphere=function(a,c){var b=c.center.clone().subSelf(a.origin);if(b.lengthSq&lt;c.radiusSq)return-1;var e=b.dot(a.direction.clone());if(e&lt;=0)return Number.MAX_VALUE;b=c.radiusSq-(b.lengthSq()-e*e);if(b&gt;=0)return Math.abs(e)-Math.sqrt(b);return Number.MAX_VALUE};THREE.CollisionSystem.__v1=new THREE.Vector3;THREE.CollisionSystem.__v2=new THREE.Vector3;THREE.CollisionSystem.__v3=new THREE.Vector3;THREE.CollisionSystem.__nr=new THREE.Vector3;THREE.CollisionSystem.__m=new THREE.Matrix4;<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_191

><td class="source">THREE.CollisionSystem.__r=new THREE.Ray;THREE.CollisionUtils={};THREE.CollisionUtils.MeshOBB=function(a){a.geometry.computeBoundingBox();var c=a.geometry.boundingBox,b=new THREE.Vector3(c.x[0],c.y[0],c.z[0]);c=new THREE.Vector3(c.x[1],c.y[1],c.z[1]);b=new THREE.BoxCollider(b,c);b.mesh=a;return b};THREE.CollisionUtils.MeshAABB=function(a){var c=THREE.CollisionUtils.MeshOBB(a);c.min.addSelf(a.position);c.max.addSelf(a.position);c.dynamic=!1;return c};<br></td></tr
><tr
id=sl_svn167cd00544424b26d90f76d56ea22d53aa02bb1a_192

><td class="source">THREE.CollisionUtils.MeshColliderWBox=function(a){for(var c=a.geometry.vertices,b=c.length,e=a.geometry.faces,f=e.length,d=[],g=[],h=[],j=0;j&lt;b;j++)d.push(new THREE.Vector3(c[j].position.x,c[j].position.y,c[j].position.z));for(j=0;j&lt;f;j++){g.push(e[j].a,e[j].b,e[j].c);h.push(new THREE.Vector3(e[j].normal.x,e[j].normal.y,e[j].normal.z))}c=new THREE.MeshCollider(d,g,h,THREE.CollisionUtils.MeshOBB(a));c.mesh=a;return c};<br></td></tr
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
 &nbsp; <a href="/p/webgl-globe/source/diff?spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a&r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;format=side&amp;path=/globe/Three/ThreeExtras.js&amp;old_path=/globe/Three/ThreeExtras.js&amp;old=">Diff</a>
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
 
 var selected_path = '/globe/Three/ThreeExtras.js';
 
 
 changed_paths.push('/globe/Three/ThreeWebGL.js');
 changed_urls.push('/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r\x3d167cd00544424b26d90f76d56ea22d53aa02bb1a\x26spec\x3dsvn167cd00544424b26d90f76d56ea22d53aa02bb1a');
 
 
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
 selected="selected"
 >/globe/Three/ThreeExtras.js</option>
 
 <option value="/p/webgl-globe/source/browse/globe/Three/ThreeWebGL.js?r=167cd00544424b26d90f76d56ea22d53aa02bb1a&amp;spec=svn167cd00544424b26d90f76d56ea22d53aa02bb1a"
 
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
 
 <a href="/p/webgl-globe/source/list?path=/globe/Three/ThreeExtras.js&r=167cd00544424b26d90f76d56ea22d53aa02bb1a">All revisions of this file</a>
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
 
 <div>Size: 95201 bytes,
 192 lines</div>
 
 <div><a href="//webgl-globe.googlecode.com/hg-history/167cd00544424b26d90f76d56ea22d53aa02bb1a/globe/Three/ThreeExtras.js">View raw file</a></div>
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
 var paths = {'svn167cd00544424b26d90f76d56ea22d53aa02bb1a': '/globe/Three/ThreeExtras.js'}
 codereviews = CR_controller.setup(
 {"domainName":null,"projectName":"webgl-globe","relativeBaseUrl":"","loggedInUserEmail":"emouaddib@gmail.com","assetHostPath":"http://www.gstatic.com/codesite/ph","assetVersionPath":"http://www.gstatic.com/codesite/ph/16229512607128645344","projectHomeUrl":"/p/webgl-globe","profileUrl":"/u/103961560919112817044/","token":"yUO1YmNlRHyjqZX__n-B5VKXlUE:1356944922692"}, '', 'svn167cd00544424b26d90f76d56ea22d53aa02bb1a', paths,
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

