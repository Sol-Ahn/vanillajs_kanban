
export default function modal (btn, toDoData) {
    if (btn === 'addBtn') {
        return `
        <div class="modal-window">
        <button class="closeBtn">X</button>
        <form>
            <div>
                <label for="title">제목</label>
                <input id="title" type="text">
            </div>
            <div>
                <label for="finishedDate">완료일</label>
                <input id="finishedDate" type="date">
            </div>
            <div class="select-row">
                <span>
                    <label for="priority">우선순위</label>
                    <select id="priority" name="priority">
                        <option disabled selected value="">선택</option>
                        <option value="1">높음</option>
                        <option value="2">중간</option>
                        <option value="3">낮음</option>
                    </select>
                </span>
                <span>
                    <label for="stage">상태</label>
                    <select id="stage" name="stage">
                        <option disabled selected value="">선택</option>
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </span>
            </div>
            <div>
                <label for="contents"></label>
                <textarea id="contents" placeholder="내용을 입력하세요." rows="10"></textarea>
            </div>
            <div class="btn-row">
                <button class="submitBtn" type="submit" data-id="submit">작성 완료</button>
            </div>
        </form>
    </div>
        `;
    } else if (btn === 'updateBtn') {
        return `
        <div class="modal-window">
        <button class="closeBtn">X</button>
        <form>
            <div>
                <label for="title">제목</label>
                <input id="title" type="text" value=${toDoData.title}>
            </div>
            <div>
                <label for="finishedDate">완료일</label>
                <input id="finishedDate" type="date" value=${toDoData.finishedDate}>
            </div>
            <div class="select-row">
                <span>
                    <label for="priority">우선순위</label>
                    <select id="priority" name="priority" onselect=${toDoData.priority}>
                        <option disabled value="" >선택</option>
                        <option value="1">높음</option>
                        <option value="2">중간</option>
                        <option value="3">낮음</option>
                    </select>
                </span>
                <span>
                    <label for="stage">상태</label>
                    <select id="stage" name="stage" onselect=${toDoData.stage}>
                        <option disabled value="">선택</option>
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </span>
            </div>
            <div>
                <label for="contents"></label>
                <textarea id="contents" placeholder="내용을 입력하세요." rows="10"></textarea>
            </div>
            <div class="btn-row">
                <button class="submitBtn" type="submit">작성 완료</button>
            </div>
        </form>
    </div>      
    `;
    }
};