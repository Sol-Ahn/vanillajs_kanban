// DOM selectors
const ul = document.querySelector('ul');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const title = document.querySelector('#title');
const finishedDate = document.querySelector('#finishedDate');
const priority = document.querySelector('#priority');
const stage = document.querySelector("#stage");
const contents = document.querySelector("#contents");


// import modalView from './modal';
import toDoView from "./todo";

export default class Kanban {
    constructor(storage) {
        this.storage = storage;
    }

    // 칸반보드 렌더링
    render() {
        const toDoList = this.storage.read();
        for (let i = 0; i < toDoList.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = toDoView(toDoList[i]);
            ul.appendChild(li);
        }
    }

    // 모달 팝업
    show() {
        modal.classList.remove('hidden');
        overlay.classList.remove("hidden");
    }

    hide() {
        modal.classList.add('hidden');
    }

    // 투두 카드 추가
    addToDo() {
        const inputTitle = title.value;
        const inputFinishedDate = finishedDate.value;
        const inputPriority = priority.options[priority.selectedIndex].text;
        const inputStage = stage.options[stage.selectedIndex].text;
        const inputContents = contents.value;


        let regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

        if (regExp.test(inputTitle) === true) {
            alert("제목에는 특수문자를 사용할 수 없습니다!");
            return;
        }

        if (inputTitle.length > 30) {
            alert("제목은 30자를 초과할 수 없습니다!");
            return;
        }

        if (regExp.test(inputContents) === true) {
            alert("내용에는 특수문자를 사용할 수 없습니다!");
            return;
        }

        if (inputContents.length > 150) {
            alert("내용은 150자를 초과할 수 없습니다!");
            return;
        }

        if(inputPriority === "선택"){
            alert("우선순위를 선택해주세요.");
            return;
        }

        if(inputStage === "선택"){
            alert("상태를 선택해주세요.");
            return;
        }

        let today = new Date();
        const year = today.getFullYear();
        const month = (`0${(today.getMonth() + 1)}`).slice(-2);
        const date = (`0${today.getDate()}`).slice(-2);

        today = `${year}-${month}-${date}`;

        const toDo = {
            title       : inputTitle,
            createdDate : today,
            finishedDate: inputFinishedDate,
            priority    : inputPriority,
            stage       : inputStage,
            contents    : inputContents
        };

        const newToDo = document.createElement('li');
        newToDo.innerHTML = toDoView(toDo);
        ul.appendChild(newToDo);

        return toDo;
    }

    // 투두 카드 수정
    updateToDo() {
        console.log('update');

    }

    // 투두 카드 삭제
    deleteToDo(id) {
        let deleteEl = document.querySelector(`[data-id="${id}"]`).parentNode;
        if (deleteEl) {
            ul.removeChild(deleteEl);
        }
    }


    // 칸반보드 정렬
    // sort() {

    // }


}