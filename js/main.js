require(['load-json','modernizr'], function(read,modernizr) {

define('listjs', ['list'], function(List) {
    window.List = List;
    return List;
});
});