$(function(){
    $('.inner').on('mouseover',function(e){
        let point = {};
        let a = Math.abs(this.getBoundingClientRect().left - e.clientX);
        let b = Math.abs(this.getBoundingClientRect().right - e.clientX);
        if (a > b) {
            point.x = -1;
        } else {
            point.x = 1;
        }
        a = Math.abs(this.getBoundingClientRect().top - e.clientY);
        b = Math.abs(this.getBoundingClientRect().bottom - e.clientY);
        if (a > b) {
            point.y = -1;
        } else {
            point.y = 1;
        }
        $(this).css('left', this.getBoundingClientRect().left + (10 * point.x) + 'px');
        $(this).css('top', this.getBoundingClientRect().top + (10 * point.y) + 'px');
    });
})