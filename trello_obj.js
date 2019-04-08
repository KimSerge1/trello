var Trello={
    hidden_nav:(elem)=>{
        var enter_task=document.querySelector('.enter-task');
        if(elem.className=='add-task-button' && elem.nodeName=='BUTTON'){
            enter_task.style.display='block';
        }
        if(elem.className=='hidden-task' && elem.nodeName=='BUTTON'){
            enter_task.style.display='none';
            document.querySelector('#textarea_to_dush').value='';
        }
    },
    create_elem:(el)=>{
        if(el.className=='add-task' && el.nodeName=='BUTTON'){
            var textarea_to_dush=document.querySelector('#textarea_to_dush').value;
            if(textarea_to_dush){
                var first_section=document.querySelector('.first-section');
                var element=document.createElement('div')
                element.classList.add('task');
                element.draggable='true';
                element.ondragstart=()=>{
                    event.dataTransfer.setData('text/plain',null)
                };
                element.innerHTML='<p class="task">'+textarea_to_dush+'</p><button class="del">Удалить</button>';
                first_section.appendChild(element);
                document.querySelector('#textarea_to_dush').value='';
            }
            else{
                var temp=document.getElementById('textarea_to_dush');
                temp.placeholder="Сначала опишите задачу";
                setTimeout(()=>{temp.placeholder=''},1500);
            }
        }
    },
    del_complete:(el)=>{
        if(el.className=='add-task del-complete' && el.nodeName=='BUTTON'){
            var del_all=document.querySelectorAll('.third-section .task');
            for(var i=0;i<del_all.length;i++){
                del_all[i].parentElement.removeChild(del_all[i]);
            }
        }
    },
    to_finish:(el)=>{
        if(el.classList=='add-task to-finish' && el.nodeName=='BUTTON'){
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
    },
    del_elem:(el)=>{
        if(el.className=='task' && (el.nodeName=='DIV'|| el.nodeName=='P')){
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
    },
    drag:(event,div)=>{
        var el=event.target;
        if(el.parentElement.className=='first-section'){
            div=el;
            return div;
        }
        if(el.parentElement.className=='second-section'){
            div=el;
            return div;
        }
    },
    drop:(event,div)=>{
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
}