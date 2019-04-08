document.onclick=function(event){
    var el=event.target;
    Trello.hidden_nav(el);
    Trello.create_elem(el);
    Trello.del_elem(el);
    Trello.del_complete(el);
    Trello.to_finish(el);
}
var div;
document.addEventListener('dragstart',function(event){
    div=Trello.drag(event,div);   
},false);

document.addEventListener('dragenter',function(event){
    event.preventDefault();
    Trello.drop(event,div);
},false);