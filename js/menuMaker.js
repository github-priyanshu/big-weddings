var menuItem=[
	[`home`,"Home"],
	[`add_a_photo`,"Photography"],
	[`face`,"Make Ups"],
	[`styler`,"Dress Designs"],
	[`where_to_vote`,"Venue Designs"],
	[`back_hand`,"Mehndi"],
	[`settings_suggest`,"Other Services"],
],
menuBox=op(".menuBox");

menuBox.style.height=menuItem.length*50+"px";
//

var html="";
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
});

menuBox.insertAdjacentHTML("afterbegin",html);

function menuToggle(){
	menuBox.classList.toggle("active");
	setTimeout(()=>{
		opp(".menuToShow").forEach((val)=>{

			val.classList.toggle('active');
		})
	},250)
}