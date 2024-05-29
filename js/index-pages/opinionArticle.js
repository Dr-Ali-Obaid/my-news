const opinionArticle = `

    <a href="">
        <div class="opinions-card">
            <h5></h5>
            <div class="user-info">
                  <img src="" alt="">
                  <span> </span>
            </div>
        </div>
    </a>

`
class OpinionArticle extends HTMLElement{
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = opinionArticle;

        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("text");
        this.querySelector("span").innerText = this.getAttribute("name");
    }
}
window.customElements.define("opinion-article-card", OpinionArticle)