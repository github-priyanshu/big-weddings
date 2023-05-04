document.body.insertAdjacentHTML('afterbegin',`
  <div class="header flex c w100p">
  	<div class="topTxt w100p flex" style="background: linear-gradient(#000,#0000); position: absolute; top: 0;">
  		<div class="left" style="text-align: right;">Big Weddings</div>
  		<div class="lineMargin" m="var(--topTxHeadLineMargin)" bg="#fff" w="4px" h="var(--topTxHeHei)" style="border-radius: 5px"></div>
  		<div class="right">Wedding Planner</div>
  	</div>
    <div class="logoPan w100p flex">
      <div class="logo flex">
        <img src="img/logo.png" alt="Big Weddings Logo">
      </div>
    </div>

    <div class="menuBox" ></div>
  </div>

<div class="menuPan flex w100p">
  <div class="menuList flex">
  </div>
  <div class="seeMore flex c" onclick="menuToggle(this)">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>`)


var menuItem=[];

for(let val in menuData){
	menuItem.push([menuData[val].ico, val]);
}
menuBox=op(".menuBox");

menuBox.style.height=menuItem.length*53+4+"px";
//

var html="",htmlInMenu="";
menuItem.forEach(val=>{
	html+=`<div class="list flex">
		<div class="ico flex">
			<span class="menuToShow material-symbols-outlined">${val[0]}</span>
			<div class="dot menuToAnim"></div>
		</div>
		<div class="menuTxt">
			<p class="menuToShow">${val[1]}</p>
			<div class="bar menuToAnim" style="width: ${val[1].length}px;"></div>
		</div>
	</div>`;
	htmlInMenu+=`
    <div class="menuItem flex" style="min-width: max-content">
	    <span class="menuToShow material-symbols-outlined">${val[0]}</span>
      <span>${val[1]}</span>
    </div>
    <div class="lineMargin" style="min-width: 1px;" h="25px" bg="#fff8"></div>`
})
menuBox.insertAdjacentHTML("afterbegin",html);
op(".menuList").insertAdjacentHTML("afterbegin",htmlInMenu);
resetFormat();

function menuToggle(elem){
	try{
		var y=elem.getBoundingClientRect()
		y=y.y+y.height;
		menuBox.style.top=y+"px";
		menuBox.style.maxHeight=window.innerHeight - y+"px";
	}catch(e){}

	menuBox.classList.toggle("active");
	setTimeout(()=>{
		opp(".menuToShow").forEach((val)=>{

			val.classList.toggle('active');
		})
		if(menuBox.classList.contains('active')){
			document.body.addEventListener('click',autoCloseMenu);
			window.addEventListener('scroll',autoCloseMenu);
		}else{
			document.body.removeEventListener('click',autoCloseMenu);
			window.removeEventListener('scroll',autoCloseMenu);
		}
	},250);

}

function autoCloseMenu(e){
	log(e)
	log('came to auto clos')
	if(menuBox.classList.contains('active') && e.pageX!=0 ){
		menuToggle();
	}
}
autoScrollHeaderMenu();
function autoScrollHeaderMenu(){
	var headerMenuListBx=op(".menuPan .menuList");
	window.addEventListener('scroll',()=>{
		log('j')
		var percent=window.scrollY/(document.body.offsetHeight-window.innerHeight);
		headerMenuListBx.scrollTo(headerMenuListBx.scrollWidth*percent,0);
	})
}