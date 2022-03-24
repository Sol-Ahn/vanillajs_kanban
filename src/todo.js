const cardBtn = document.querySelector('.card-btn');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');

export default function todo(data) {
    return `
            <div class='card' data-id=${data.id}> 
                <p class="card-title">제목: ${data.title}</p> 
                <p>생성일: ${data.createdDate}</p> 
                <p>완료일: ${data.finishedDate}</p> 
                <p class="card-contents">${data.contents}</p> 
                <p class="card-btn"> 
                    <button class="updateBtn" type="button" data-id=${data.id}>수정</button> 
                    <button class="deleteBtn" type="button" data-id=${data.id}>삭제</button>
                </p>
                <span class="card-priority">${data.priority ? data.priority.text : '미선택'}</span>
            </div>
        `;


}










