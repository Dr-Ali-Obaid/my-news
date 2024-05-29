const lastNews1 = `
<a href="" class="article-link">
    <img src="" class="mt-5" alt="">
    <div class="card-text mt3">
        <span class="article-category"> </span>
        <h5 class="article-title"> </h5>
        <p> </p>
    </div>
</a>
`
const lastNews2 = `

<a href="" class="article-link">
    <div class="row">
        <div class="col-sm-6">
            <img src="" alt="">
        </div>
        <div class="col-sm-6">
            <div class="card-text">
                <span class="article-category"> </span>
                <h5 class="article-title"> </h5>
            </div>
        </div>
    </div>
</a>
</div>
`
const lastNews3 = `

    
        <a href="" class="article-link">
            <img src="" alt="">
            <div class="card-text mt3">
                <span class="article-category"></span>
                <h5 class="article-title"> </h5>
                <p> </p>
            </div>
        </a>
    


`
class LastNews1 extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = lastNews1;

        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("text");
        this.querySelector("span").innerText = this.getAttribute("category");

    }
}
window.customElements.define("latest-news-1", LastNews1)

class LastNews2 extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = lastNews2;

        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("text");
        this.querySelector("span").innerText = this.getAttribute("category");

    }
}
window.customElements.define("latest-news-2", LastNews2)

class LastNews3 extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = lastNews3;

        this.querySelector("a").setAttribute("href", this.getAttribute("href"));
        this.querySelector("img").setAttribute("src", this.getAttribute("src"));
        this.querySelector("h5").innerText = this.getAttribute("text");
        this.querySelector("span").innerText = this.getAttribute("category");
        this.querySelector("p").innerText = this.getAttribute("pragragh");

    }
}
window.customElements.define("latest-news-3", LastNews3)