var footHtml=`
<div class="lineMargin" m="20px"></div>
<div class="footer flex c w100p">
  <div class="knowUs">
    <h2>About <b>Big Weddings</b></h2>
    <div class="lineMargin" m='10px'></div>
    <p>Over the years, Big Weddings has expanded its services beyond Ranchi and has now become a national-level service provider. Big Weddings has set up branches in various cities across the country and has
been catering to couples from different cultural backgrounds. Despite the expansion, we perfectly
manage to maintain local flair and provide clients with an authentic experience of the local culture
wherever they go.
<br>
<br>
One of the unique selling points of Big Weddings is the ability to personalize the services according to
the client's requirements. We take time to understand the client's preferences, budget, and cultural
background to create a bespoke experience that is tailored to the needs.
<br>
<br>
If you're planning a wedding and want an authentic local experience with a touch of elegance and
sophistication across the country, Big Weddings might just be the perfect choice for you.</p>
  </div>
  <div class="downSec flex w100p">

    <div class="contact">
      <h2>Contact Us <span class="material-symbols-outlined">contact_support</span></h2>

      <div class="contactMain">
        <a target="__blank" href="tel:${phone[0]}" class="conItem flex">
          <span class="material-symbols-outlined">call</span>
          <span>${phone[0]}</span>
        </a>
        <a target="__blank" href="tel:${phone[1]}" class="conItem flex">
          <span class="material-symbols-outlined">call</span>
          <span>${phone[1]}</span>
        </a>
        <a target="__blank" href="mailto:${email}" class="conItem flex">
          <span class="material-symbols-outlined">mail</span>
          <span>${email}</span>
        </a>
      </div>

    </div>

    <div class="follow">
      <h2>Follow Us <span class="material-symbols-outlined">link</span></h2>

      <div class="followMain">
        <a target="__blank" href="${social.facebook}" class="followItem flex ">
          <ion-icon name="logo-facebook"></ion-icon>
          facebook
        </a>
        <a target="__blank" href="${social.twitter}" class="followItem flex ">
          <ion-icon name="logo-twitter"></ion-icon>
          twitter
        </a>
        <a target="__blank" href="${social.linkedin}" class="followItem flex ">
          <ion-icon name="logo-linkedin"></ion-icon>
          linkedin
        </a>
        <a target="__blank" href="${social.pinterest}" class="followItem flex ">
          <ion-icon name="logo-pinterest"></ion-icon>
          pinterest
        </a>
        <a target="__blank" href="${social.instagram}" class="followItem flex ">
          <ion-icon name="logo-instagram"></ion-icon>
          instagram
        </a>
        <a target="__blank" href="${social.youtube}" class="followItem flex ">
          <ion-icon name="logo-youtube"></ion-icon>
          youtube
        </a>
      </div>

    </div>

  </div>
</div>`;
document.body.insertAdjacentHTML("beforeend",footHtml);