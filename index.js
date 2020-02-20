const inputTitle = document.querySelector("#inputTitle"),
    inputText = document.querySelector("#inputText"),
    gridRadios = document.getElementsByName("gridRadios");

const text_task = document.querySelector(".container-fluid");
let btn_sub = document.querySelectorAll(".btn-primary")[4];
btn_sub.addEventListener("click", fn_print);

//     const  create_task = (x, y) => x * y;



function fn_print() {
    event.preventDefault();
    let now = new Date();
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',

    };

    let time_item = new Intl.DateTimeFormat('ru', options).format(now);
    let newNode_title = inputTitle.value;
    let newNode_text = inputText.value;
    let newNode_gridRadios = gridRadios.taget.value;

    switch (newNode_gridRadios) {
        case 3:
            alert('Маловато');
            break;
        case 4:
            alert('В точку!');
            break;
        case 5:
            alert('Перебор');
            break;
        default:
            alert("Нет таких значений");
    }

    text_task.insertAdjacentHTML('beforeend', '<div class="row justify-content-center"><div class="col-10"> <h3 class="my-2">ToDo</h3> <ul class="list-group flex-wrap justify-content-between" > <li class="list-group-item d-flex w-100 mb-2"> <div class="w-100 mr-2"> <div class="d-flex w-100 justify-content-between"> <h5 class="mb-1">' + newNode_title + '</h5> <div> <small class="mr-2">' + newNode_gridRadios + '</small> <small>' + time_item + '</small></div></div><p class="mb-1 w-100">' + newNode_text + '</p> </div> <div class="dropdown m-2 dropleft"> <button class="btn btn-secondary h-100" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-ellipsis-v" aria-hidden="true"></i></button> <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">    <button type="button" class="btn btn-success w-100">Complete</button> <button type="button" class="btn btn-info w-100 my-2">Edit</button> <button type="button" class="btn btn-danger w-100">Delete</button> </div> </div> </li> </ul> <hr> <h3 class="my-2">Comleted</h3><ul class="list-group flex-wrap justify-content-between" > </ul></div></div>');
    console.log(gridRadios, newNode_gridRadios)
        // let newNode = document.importNode(inputTitle , true); 
        // div.appendChild(newNode); 

}