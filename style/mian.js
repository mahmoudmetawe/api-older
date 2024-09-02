function getposts(userId) {
    let request = new XMLHttpRequest();
    request.open('get', 'https://jsonplaceholder.typicode.com/posts?userId='+ userId)
    request.responseType = "json";
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response
            document.getElementById("posts").innerHTML = ""
            for (post of posts) {
                let content = `
                <div id="post">
                    <h5>${post.title}</h5>
                    <h6>${post.body}</h6>
                </div>
                `
                document.getElementById("posts").innerHTML += content;
            }
        } else {
            alert("erorr in link");
        }
    }

}


function getusers() {
    let request = new XMLHttpRequest();
    request.open('get', 'https://jsonplaceholder.typicode.com/users')
    request.responseType = "json";
    request.send()
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            document.getElementById('users').innerHTML = "";
            for (user of users) {
                let content = `
                    <button type="submit" class="selected" onclick="clicked(${user.id} , this)">
                        <span>${user.name}</span>
                        <h6>${user.email}</h6>
                    </button>
                `;
                document.getElementById('users').innerHTML += content ;
            }
        } else {
            alert("erorr in link");
        }
    }

}

getposts(1);
getusers();
/* عاوزين نبص عليها تاني علشان منجحتش معانا 
وفكرتها مهمة جدا اننا نضيف كلاس و نحزفه ودا مهم بعد كده
*/
function clicked(id , ele) {
    getposts(id);
    let selectedElement = document.getElementsByClassName('selected');
    for(element of selectedElement){
        element.classList.remove('selected')
    }
    ele.classList.add("selected")
}
