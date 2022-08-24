$(function(){
    loadEvents();
});

let loadEvents = () => {
    $('.btn').on('click',(e)=>{
        redirection($(e.currentTarget));
    });
}

let redirection = btn => {
    window.open($(btn).attr('data-url'), '_blank');
}
