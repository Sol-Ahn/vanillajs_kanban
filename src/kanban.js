// DOM selectors
const ul = document.querySelector('ul');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const form = document.querySelector('form');

import toDoView from "./todo";
import modalView from './modal';

export default class Kanban {
    constructor(storage) {
        this.storage = storage;
    }

    // 칸반보드 렌더링
    render() {
        const toDoList = this.storage.read();
        if (toDoList) {
            for (let i = 0; i < toDoList.length; i++) {
                const li = document.createElement('li');
                li.innerHTML = toDoView(toDoList[i]);
                ul.appendChild(li);
            }
        }
    }

    // 모달
    show(id = null) {
        modal.classList.remove('hidden');
        overlay.classList.remove("hidden");

        if (id) {
            const data = this.storage.read().find((todo) => todo.id === id);
            const modalWindow = modalView(data);
            overlay.insertAdjacentHTML("afterend", modalWindow);
            return;
        }
        const modalWindow = modalView();
        overlay.insertAdjacentHTML("afterend", modalWindow);
    }

    hide() {
        const modalWindow = document.querySelector('.modal-window');
        modal.removeChild(modalWindow);
        modal.classList.add('hidden');
    }

    inputValue() {
        const title = document.querySelector('#title');
        const finishedDate = document.querySelector('#finishedDate');
        const priority = document.querySelector('#priority');
        const stage = document.querySelector("#stage");
        const contents = document.querySelector("#contents");

        const inputTitle = title.value;
        const inputFinishedDate = finishedDate.value;
        const inputPriorityText = priority.options[priority.selectedIndex].text;
        const inputPriorityValue = priority.options[priority.selectedIndex].value;
        const inputStage = stage.options[stage.selectedIndex].text;
        const inputContents = contents.value;


        // 유효성 검증
        // let regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
        //
        // if (regExp.test(inputTitle) === true) {
        //     alert("제목에는 특수문자를 사용할 수 없습니다!");
        //     return;
        // }
        //
        // if (inputTitle.length > 30) {
        //     alert("제목은 30자를 초과할 수 없습니다!");
        //     return;
        // }
        //
        // if (regExp.test(inputContents) === true) {
        //     alert("내용에는 특수문자를 사용할 수 없습니다!");
        //     return;
        // }
        //
        // if (inputContents.length > 150) {
        //     alert("내용은 150자를 초과할 수 없습니다!");
        //     return;
        // }
        //
        // if (inputPriorityText === "선택") {
        //     alert("우선순위를 선택해주세요.");
        //     return;
        // }
        //
        // if (inputStage === "선택") {
        //     alert("상태를 선택해주세요.");
        //     return;
        // }

        let today = new Date();
        const year = today.getFullYear();
        const month = (`0${(today.getMonth() + 1)}`).slice(-2);
        const date = (`0${today.getDate()}`).slice(-2);

        today = `${year}-${month}-${date}`;

        return {
            title       : inputTitle,
            createdDate : today,
            finishedDate: inputFinishedDate,
            priority    : {text: inputPriorityText, value: inputPriorityValue},
            stage       : inputStage,
            contents    : inputContents
        };
    }

    // 투두 카드 추가
    addToDo() {
        const toDo = this.inputValue();

        if (toDo) {
            const newToDo = document.createElement('li');
            newToDo.innerHTML = toDoView(toDo);
            ul.appendChild(newToDo);
        }
        return toDo;
    }

    // 투두 카드 수정
    updateToDo(id) {
        let updatedEl = document.querySelector(`[data-id="${id}"]`).parentNode;
        const updatedData = this.inputValue();
        updatedEl.innerHTML = toDoView(updatedData);

        return updatedData;
    }

    // 투두 카드 삭제
    deleteToDo(id) {
        let deleteEl = document.querySelector(`[data-id="${id}"]`).parentNode;
        if (deleteEl) {
            ul.removeChild(deleteEl);
        }
    }

    // 칸반보드 정렬
    sortToDo(selectedValue) {
        const toDoList = this.storage.read();
        if (selectedValue === 'highest') {
            toDoList.sort((a, b) => a.priority.value - b.priority.value);
        }

        if (selectedValue === 'lowest') {
            toDoList.sort((a, b) => b.priority.value - a.priority.value);
        }

        ul.innerHTML = "";
        for (let i = 0; i < toDoList.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = toDoView(toDoList[i]);
            ul.appendChild(li);
        }

    }

}