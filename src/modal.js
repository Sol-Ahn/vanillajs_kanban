export default function modal(toDoData = null) {
    console.log("modal data", toDoData);
    return `
        <div class="modal-window">
        <button class="closeBtn">X</button>
        <div class="modal-form" data-id=${toDoData ? toDoData.id: ""}>
            <div>
                <label for="title">제목</label>
                <input id="title" type="text" value=${toDoData ? toDoData.title : ""}>
            </div>
            <div>
                <label for="finishedDate">완료일</label>
                <input id="finishedDate" type="date" value=${toDoData ? toDoData.finishedDate : ""}>
            </div>
            <div class="select-row">
                <span>
                    <label for="priority">우선순위</label>
                    <select id="priority" name="priority" onselect=${toDoData ? toDoData.priority : ""}>
                        <option value="" disabled selected>선택</option>
                        <option value="1">높음</option>
                        <option value="2">중간</option>
                        <option value="3">낮음</option>
                    </select>
                </span>
                <span>
                    <label for="stage">상태</label>
                    <select id="stage" name="stage" onselect=${toDoData ? toDoData.stage : ""}>
                        <option value="" disabled  selected>선택</option>
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </span>
            </div>
            <div>
                <label for="contents"></label>
                <textarea id="contents" placeholder="내용을 입력하세요." rows="10">${toDoData ? toDoData.contents : ""}</textarea>
            </div>
            <div class="btn-row">
                <button class=${toDoData ? "submitBtn-update" : "submitBtn-add"} type="button">작성 완료</button>
            </div>
        </div>
    </div>      
    `;
}


