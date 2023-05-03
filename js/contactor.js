class contactorBx{
	constructor(){
		var html=`
			<div class="contactorBx flex c">
			  <div class="contact">
			    <a href="tel:+91 8033030003" class="flex"><span class="material-symbols-outlined" fs="1em" style="display: block; margin-right: 5px;">call</span>Call Now</a>
			  </div>

			  <div class="lineMargin" m="5px" w="70%" h="2px" bg="#fff" style="border-radius: 50px;"></div>

			  <div class="social flex">
			    <div class="ico flex">
			      <a target="__blank" class="flex" href="https://facebook.com/bigweddings"><ion-icon name="logo-facebook"></ion-icon></a>
			    </div>
			    <div class="ico flex">
			      <a target="__blank" class="flex" href="https://youtube.com/bigweddings"><ion-icon name="logo-youtube"></ion-icon></a>
			    </div>
			    <div class="ico flex">
			      <a target="__blank" class="flex" href="https://instagram.com/bigweddings"><ion-icon name="logo-instagram"></ion-icon></a>
			    </div>
			  </div>

			</div>`
		document.body.insertAdjacentHTML("beforeend",html);
		this.bx=op(".contactorBx");

		this.applyScrollEffect()
	}

	applyScrollEffect(){
		window.onscroll=(e)=>{
			if(window.scrollY>window.innerHeight && (document.body.offsetHeight - window.scrollY) > window.innerHeight){
				this.show();
			}else{
				this.hide();
			}
		}
	}

	show(){
		this.bx.classList.add("active");
	}
	hide(){
		this.bx.classList.remove("active");
	}
}

var contactor=new contactorBx();
// contactor.show();