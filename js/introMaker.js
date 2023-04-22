document.body.insertAdjacentHTML('beforeend',`<div class="intro w100p flex c">
  <div class="bannerBox w100p flex">
    <div class="spanBx"></div>
    <div class="spanBx"></div>

    <img id="introBanner" src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/resort-in-jodhpur.jpg" alt="Intro Banner">

  </div>
</div>

<link rel="stylesheet" href="css/content.css">
<div class="lineMargin" m="30px"></div>
<div class="content flex">

	<div class="contentTxt">
	  <h1 col="#444"><span class="material-symbols-outlined">info</span> This is Content.</h1>
	  <div class="lineMargin" m="15px"></div>
	  <p col="#555" fs="1.1em">Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Voluptatibus, quod quas qui necessitatibus. Ratione cumque odio rem mollitia similique itaque magnam a adipisci eligendi ea repellat illum numquam, vel, cum tempora in sapiente at nulla. Totam ratione veritatis, magnam eum mollitia quae reprehenderit quos incidunt deleniti odio, explicabo sapiente ullam!</p>
	</div>

	<div class="contentImg flex">
		<img src="img/evui.png" alt="Content Description Image">
	</div>

</div>`);
resetFormat();

var introBanner=op("#introBanner");
log(introBanner)
introBanner.onload=loadIntro;
introBanner.onloadeddata=loadIntro;

function loadIntro(){
	op(".bannerBox").classList.add('active');
}
setTimeout(loadIntro,1000);