var elemAry=[]
var scrollPanel=opp(".scrollPanel");
log(scrollPanel);

scrollPanel.forEach(val=>{
	resetScroller(val);
	var doing=true,
	defaultScroll=val.scrollLeft;
	var n=0;
	val.onscroll=(e)=>{
		var x=setTimeout(()=>{
			doing=true;
			resetScroller(val);
		},250);

		if(doing){
			clearTimeout(x);
			var sign=Math.sign(defaultScroll - val.scrollLeft);
			if(sign)
				changeActive(sign,val);
		}

		doing=false;
	}
})
function resetScroller(elem){
	doing=false;
	setTimeout(()=>{doing=true},250);
	elem.scrollTo(elem.offsetWidth/2,0);	
}

function changeActive(sign,val){
	val.classList.add("thisisscrolled");
	
	var main=op(".thisisscrolled .scr.scrMain"),
	left=op(".thisisscrolled .scr.scrLeft"),
	right=op(".thisisscrolled .scr.scrRight");

	val.classList.remove("thisisscrolled");


	if(sign<0){
		main.style.left='-66%';
		right.style.left='10%';
		left.style.left='-100%';

		main.classList.remove('scrMain');
		main.classList.add('scrLeft');

		right.classList.remove("scrRight");
		right.classList.add("scrMain");

		left.classList.remove("scrLeft");
		left.classList.add("noshow");
	}else{
		main.style.left='86%';
		right.style.left='100%';
		left.style.left='10%';

		main.classList.remove('scrMain');
		main.classList.add('scrRight');

		right.classList.remove("scrRight");
		right.classList.add("noshow");

		left.classList.remove("scrLeft");
		left.classList.add("scrMain");
	}
}