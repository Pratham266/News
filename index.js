console.log('News')
//3ed1eccd71e34725aef97f4598b2fc3b
let source = 'in';
let apiKey = '3ed1eccd71e34725aef97f4598b2fc3b';
//grep the news container
let newsAccordion = document.getElementById('newsAccordion');

//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';

        articles.forEach(function (element,index) {
            // console.log(element,index)
            //console.log(articles["news"]);

            let news = `
                        <div class="card">
                        <div class="card-header" id="heading${index}">
                        <h5 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News (${index+1}) </b>${element["title"]}
                            </button>
                        </h5>
                        </div>
                    
                        <div id="collapse" class="collapse show" aria-labelledby="heading${index}" data-parent="newsAccordion">
                        <div class="card-body">
                        ${element["description"]}.<a href="${element["url"]}" target="_blank">Read More here</a>
                        </div>
                        </div>
                    </div>`

            newsHtml += news;

        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('some error occured')
    }
}
xhr.send();

