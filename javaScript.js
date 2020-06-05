let album = ['<img src="/img/big-dog10.png" alt="">',
             '<img src="/img/dog32.jpg" alt="photo dog">',
             '<img src="/img/dog33.jpg" alt="photo dog">',
             '<img src="/img/dog34.jpg" alt="photo dog">',
             '<img src="/img/dog35.jpg" alt="photo dog">'
];
let index = 0;
document.getElementById('slide_image').innerHTML = album[0];
function onclickLeft() {
    index--;
    if (index < 0) {
        index = album.length-1;
    }
     document.getElementById('slide_image').innerHTML = album[index];
}
function onclickRight() {
    index++;
    if (index > album.length-1) {
        index = 0;
    }
     document.getElementById('slide_image').innerHTML = album[index];
}
onclickLeft();
onclickRight();