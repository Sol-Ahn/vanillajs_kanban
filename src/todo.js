export default function todo(data) {
    return `
            <div class='card' data-id=${data ? data.id : ""}> 
                <p class="card-title">제목: ${data ? data.title: ""}</p> 
                <p>생성일: ${data ? data.createdDate : ""}</p> 
                <p>완료일: ${data ? data.finishedDate : ""}</p> 
                <p class="card-contents">${data ? data.contents : ""}</p> 
                <p class="card-btn"> 
                    <button class="updateBtn" type="button" data-id=${data ? data.id : ""}>수정</button> 
                    <button class="deleteBtn" type="button" data-id=${data ? data.id: ""}>삭제</button>
                </p>
                <span class="card-priority">${data ? data.priority : '미선택'}</span>
            </div>
        `;


}










