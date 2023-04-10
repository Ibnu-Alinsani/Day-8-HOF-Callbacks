// Template class for object
class TestimoniClient {
    #comment;
    #image;
    #rating

    constructor(comment, rating, image) {
        this.#comment = comment;
        this.#image = image;
        this.#rating = rating;
    }

    get comment() {
        return this.#comment;
    }
    get image() {
        return this.#image;
    }

    get rating() {
        return this.#rating
    }

    get forHTML() {
        return  `<div class="card">
                    <img src="${this.image}" alt="">
                    <em>"${this.comment}"</em>
                    <div class="name">
                        <b>- ${this.name}</b>
                        <b>
                            ${this.rating}
                            <i class="fa-sharp fa-solid fa-star"></i>
                        </b>
                    </div>        
                </div>`
    }
}

// Class inheritance for person name
class Client extends TestimoniClient {
    #name;

    constructor(name, comment, rating,image){
        super(comment, rating,image)
        this.#name = name;
    }

    get name() {
        return this.#name
    }
}

// Class inheritance for company name
class Company extends TestimoniClient {
    #company

    constructor(company, comment, rating, image) {
        super(comment, rating, image)
        this.#company = company;
    }

    get name() {
        return this.#company + ' Corp.'
    }
}

// List object client who gave testimony
const jake = new Client('Jake Muller', 'This a good thing to have work with him, i am not alone again', 5, 'https://www.evilresource.com/images/data/full/re6/jake-muller.png')

const helena = new Client('Helena Harper', 'His work is so good,  my web now have interesting UI. Handsome like Leon', 5,'https://www.evilresource.com/images/data/full/re6/helena-harper.png?b40bb506')

const krauser = new Client('Jack Krauser', 'My knife nah i mean my web is look so good, it\'s sharp and good to slash user heart', 4, 'https://cdn.vox-cdn.com/thumbor/X8UoF6LEiwMTzVhxZxh0cgmK-0A=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24534020/jack_krauser_re_darkside_chronicles.jpg')

const umbrella = new Company('Umbrella', 'With this website we will control the world, ehmm. Thanks your work doing awesome, great job', 4, 'https://i.pinimg.com/originals/23/d8/ec/23d8ec34996d8cb5749d40bc8322b464.jpg')

const datas = [jake, helena, krauser, umbrella] // Array for list client
let addTestimonial = ''


// for show testimony client before filtered
for(let i = 0; i < datas.length; i++) {
    addTestimonial += datas[i].forHTML;
}
document.getElementById('card-wrapping').innerHTML = '';

document.getElementById('card-wrapping').innerHTML += addTestimonial
