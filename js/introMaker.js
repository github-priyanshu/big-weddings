var introBanner=op("#introBanner");
log(introBanner)
introBanner.onload=loadIntro;
introBanner.onloadeddata=loadIntro;

function loadIntro(){
	op(".bannerBox").classList.add('active');
}
setTimeout(loadIntro,1000);