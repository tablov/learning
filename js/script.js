document.addEventListener('click', function(event){
    if ((!flag) || (event.target.tagName.toLowerCase() != 'td')) return;
    if (counter) {
        if (!event.target.classList.contains('white_king') && !event.target.classList.contains('black_king')) return;
        event.target.classList.add('startpoint');
        document.body.classList.add('mouseup');
    } else {
        if (!check_path(document.querySelector('.startpoint'), event.target) || event.target.classList.contains('white_king') || event.target.classList.contains('black_king')) {
            alert('Сюда ходить нельзя!');
            return;
        }
        event.target.classList.add('endpoint');
        flag = false;
        setTimeout(function(){
            if (document.querySelector('.startpoint').classList.contains('white_king')) {
                document.querySelector('.startpoint').classList.remove('white_king');
                document.querySelector('.endpoint').classList.add('white_king');
            } else {
                document.querySelector('.startpoint').classList.remove('black_king');
                document.querySelector('.endpoint').classList.add('black_king');
            }
            document.querySelector('.mouseup').classList.remove('mouseup');
            document.querySelector('.startpoint').classList.remove('startpoint');
            document.querySelector('.endpoint').classList.remove('endpoint');
            flag = true;
        }, 500);
    }
    counter = !counter;
})
let counter = true;
let flag = true;
let coords = [['a','b','c','d','e','f','g','h'], [1, 2, 3, 4, 5, 6, 7, 8]];
function check_path(a, b) {
    let pathes = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    let begin_idx1 = coords[0].findIndex(item => item == a.id[0]);
    let begin_idx2 = a.id[1];
    let end_idx1 = coords[0].findIndex(item => item == b.id[0]);
    let end_idx2 = b.id[1]
    for (path of pathes) {
        if ((path[0] == begin_idx1 - end_idx1) && (path[1] == begin_idx2 - end_idx2)) {
            return true;
        }
    }
    return false;
}