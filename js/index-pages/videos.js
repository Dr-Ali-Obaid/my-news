const videos = `

    <a href="" class="article-link">
        <div class="slide-image">
            <img src="" alt="">
            <i class="fa-solid fa-play"></i>
        </div>
        <div class="slide-text">
            <h5 class="article-title"></h5>
        </div>
    </a>

`
class Videos extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = videos;

        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("text");
       
    }
}
window.customElements.define("swiper-slide", Videos)