import { API_URL } from "../urls.js";
console.log(API_URL)

async function sliderFetch() {
    let res = await fetch(API_URL + 'slider');
    let data = await res.json();
    data.map(slide => {
        const el = document.createElement("slider-component")
        el.setAttribute("src", slide.img_uri)
        el.setAttribute("text", slide.title)
        el.setAttribute("href", slide.link)
        document.getElementById("carousel-inner").appendChild(el)
    })
    let slides = document.getElementsByClassName("carousel-item")
    slides[0].classList.add("active")
}

sliderFetch();

async function sideHeaderArticleFetch() {
    let res = await fetch(API_URL + 'header-articles')
    let data = await res.json()

    data.map(article => {
        const el = document.createElement("side-article")

        el.setAttribute("src", article.img_uri)
        el.setAttribute("text", article.title)
        el.setAttribute("category", article.category)
        el.setAttribute("href", article.link)

        document.getElementById("header-articles").appendChild(el)
    })

}

sideHeaderArticleFetch()

async function ArticleComponentFetch() {
    let res = await fetch(API_URL + 'news')
    let data = await res.json()

    data.map(article => {
        const el = document.createElement("article-component")

        el.setAttribute("src", article.img_uri)
        el.setAttribute("text", article.title)
        el.setAttribute("category", article.category)
        el.setAttribute("href", article.link)
        el.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mt-4')

        document.getElementById("news").appendChild(el)
    })

}
ArticleComponentFetch()

async function msotReadFetch() {
    let res = await fetch(API_URL + 'most-read')
    let data = await res.json()

    for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
            const el = document.createElement("most-read-card")

            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("text", data[i].title)
            el.setAttribute("except", data[i].paragraph)
            el.setAttribute("href", data[i].link)
            el.setAttribute("datetime", moment(parseInt(data[i].date)).format('dddd') + " " + moment(parseInt(data[i].date)).format('LL'))


            document.getElementById("most-read").appendChild(el)
        }
        else {
            const el = document.createElement("big-most-read-card")

            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("text", data[i].title)
            el.setAttribute("href", data[i].link)
            el.setAttribute("datetime", moment(parseInt(data[i].date)).format('dddd') + " " + moment(parseInt(data[i].date)).format('LL'))


            document.getElementById("most-read").appendChild(el)
        }
    }

}
msotReadFetch()

async function opinionArticleFetch() {
    let res = await fetch(API_URL + "opinion-articles");
    let data = await res.json();
    data.map(article => {
        const el = document.createElement("opinion-article-card")
        el.setAttribute('src', article.user_uri)
        el.setAttribute('href', article.link)
        el.setAttribute('text', article.title)
        el.setAttribute('name', article.user_name)
        el.classList.add("col-lg-3", "col-md-4", "col-sm-6")

        document.getElementById("opinion-articles").appendChild(el)
    })
}
opinionArticleFetch()

async function videosFetch() {
    let res = await fetch(API_URL + "videos");
    let data = await res.json();
    data.map(article => {
        const el = document.createElement("swiper-slide")
        el.setAttribute('src', article.img_uri)
        el.setAttribute('href', article.link)
        el.setAttribute('text', article.title)

        el.classList.add("swiper-slide")


        document.getElementById("swiper-wrapper").appendChild(el)
    })
}
videosFetch()

async function LastNewsFetch() {
    let res = await fetch(API_URL + 'latest-news')
    let data = await res.json()

    const container1 = document.createElement("div");
    container1.classList.add("col-md-6");
    container1.setAttribute("id", "container1");

    const container2 = document.createElement("div");
    container2.classList.add("row");
    container2.setAttribute("id", "container2");

    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            const el = document.createElement("latest-news-1")

            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("text", data[i].title)
            el.setAttribute("paragragh", data[i].paragraph)
            el.setAttribute("href", data[i].link)
            el.classList.add("col-md-6")


            document.getElementById("latest-news").appendChild(el)
            document.getElementById("latest-news").appendChild(container1)

        }

        else if (i == 1) {
            const el = document.createElement("latest-news-2")

            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("text", data[i].title)
            el.setAttribute("paragragh", data[i].paragraph)
            el.setAttribute("href", data[i].link)


            document.getElementById("container1").appendChild(el)


        }
        else {

            const el = document.createElement("latest-news-3")

            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("text", data[i].title)
            el.setAttribute("paragragh", data[i].paragraph)
            el.setAttribute("href", data[i].link)
            el.setAttribute("category", data[i].category)
            el.classList.add( "col-sm-6", "mt-4")


            document.getElementById("container1").appendChild(container2)
            document.getElementById("container2").appendChild(el)
        }

    }

}
LastNewsFetch()
