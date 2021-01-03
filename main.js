const share_button = document.getElementById("button");

const title = document.title;
const url = document.URL;

share_button.addEventListener('click', ()=> {
    if (navigator.share) {
        navigator.share({
            title,
            url
        }).then(()=>{
            console.log('Thanks for sharing!');
        })
        .catch(console.error);

    } else {
        console.log('share does not exist');
    }
}
)