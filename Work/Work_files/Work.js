// Created by iWeb 3.0.4 local-build-20130703

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWPhotoFrame([IWCreateImage('Work_files/notebook_ul.png'),IWCreateImage('Work_files/notebook_top.png'),IWCreateImage('Work_files/notebook_ur.png'),IWCreateImage('Work_files/notebook_right.png'),IWCreateImage('Work_files/notebook_lr.png'),IWCreateImage('Work_files/notebook_bottom.png'),IWCreateImage('Work_files/notebook_ll.png'),IWCreateImage('Work_files/notebook_left.png')],null,0,1.000000,3.000000,2.000000,1.000000,3.000000,18.000000,16.000000,17.000000,19.000000,76.000000,123.000000,79.000000,122.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.suppoor.com/Site/Work/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Work_files/WorkMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');IMpreload('Work_files','shapeimage_1','0');fixupAllIEPNGBGs();fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
