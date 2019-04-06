var open_enter_for_taks=document.getElementsByClassName('enter-task');
window.onload=function on_click_add_task(){
    var button_add_task=document.getElementById('add-task');
    var hidden_enter=document.getElementById('hidden-enter');
    var button_to_add_task=document.getElementById('enter-task');
    var add_task_to_dash=document.getElementById('add-in-hidden-enter');

    button_add_task.onclick=function(){
        button_to_add_task.style.display="block";
    }
    hidden_enter.onclick=function(){
        button_to_add_task.style.display="none";
        document.getElementById('textarea_to_dush').value='';
    }
    add_task_to_dash.onclick=function(){
        var textarea_to_dush=document.getElementById('textarea_to_dush').value;
        var first_section=document.getElementById('first-section');
        if(textarea_to_dush!=''){
            var div=document.createElement('div');
            div.innerHTML='<div class="task" draggable=true><p class="task">'+textarea_to_dush+'</p><button class="del">Удалить</button></div>';
            first_section.appendChild(div.lastChild);
            document.getElementById('textarea_to_dush').value='';
        }else{
            var temp=document.getElementById('textarea_to_dush');
            temp.placeholder="Сначала опишите задачу";
            setTimeout(()=>{temp.placeholder=''},1500);
        }
    }
    document.onclick=function(event){
        var el=event.target;
        if(el.className=='task' && el.nodeName=='DIV'|| el.nodeName=='P'){
            if(el.className=='task' && el.nodeName=='P'){
                if(el.parentElement.querySelector('.del').style.display=='none'){
                    el.parentElement.querySelector('.del').style.display='block';
                }else{
                    el.parentElement.querySelector('.del').style.display='none';
                }
            }else if(el.className=='task' && el.nodeName=='DIV'){
                if(el.querySelector('.del').style.display=='none'){
                    el.querySelector('.del').style.display='block';
                }else{
                    el.querySelector('.del').style.display='none';
                }
            }
        }
        if(el.className=='del' && el.nodeName=='BUTTON'){
            el.parentElement.parentElement.removeChild(el.parentElement);
        }
    }
    var div;
    document.ondragstart=function(event){
        var el=event.target;
        if(el.parentElement.className=='first-section'){
            div=el;
        }
        if(el.parentElement.className=='second-section'){
            div=el;
        }
    }
    document.ondragenter=function(event){
        var el=event.target;
        if(el.className=='second-section'){
            var temp=document.createElement('div');
            temp=div;
            el.appendChild(temp);
        }
        if(el.className=='third-section'){
            var temp=document.createElement('div');
            temp=div;
            el.appendChild(temp);
        }
    }
    var del_complete=document.querySelector('.del-complete');
    del_complete.onclick=function(){
        var del_all=document.querySelectorAll('.third-section .task');
        for(var i=0;i<del_all.length;i++){
            del_all[i].parentElement.removeChild(del_all[i]);
        }
    }
    
    var to_finish=document.querySelector('.to-finish');
    to_finish.onclick=function(){
        var take_from_second_column=document.querySelectorAll('.second-section>.task');
        var second_section=document.querySelector('.third-section');
        if(take_from_second_column.length!=0){
            for(var i=0;i<take_from_second_column.length;i++){
                var temp=document.createElement('div');
                temp=take_from_second_column[i];
                second_section.appendChild(temp);
            }
        }
    }
}