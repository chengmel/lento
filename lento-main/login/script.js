document.addEventListener('DOMContentLoaded', () => {
    const userToggle = document.getElementById('user-toggle');
    const educatorPage = document.querySelector('.educator-page');
    const studentPage = document.querySelector('.student-page');
    const studentLabel = document.querySelector('.toggle-label.student');
    const teacherLabel = document.querySelector('.toggle-label.teacher');
    const container = document.querySelector('.container');

    // 초기 상태
    educatorPage.classList.add('active');
    studentPage.classList.remove('active');
    teacherLabel.style.color = '#0d4a3e';
    studentLabel.style.color = '#ccc';

    // 토글 이벤트
    userToggle.addEventListener('change', () => {
        if (userToggle.checked) {
            // 학생 페이지 활성화 + 좌우 반전
            educatorPage.classList.remove('active');
            studentPage.classList.add('active');
            studentLabel.style.color = '#e6b91e';
            teacherLabel.style.color = '#ccc';
            container.classList.add('flipped');
        } else {
            // 교사 페이지 활성화 + 반전 해제
            educatorPage.classList.add('active');
            studentPage.classList.remove('active');
            teacherLabel.style.color = '#0d4a3e';
            studentLabel.style.color = '#ccc';
            container.classList.remove('flipped');
        }
    });
});
