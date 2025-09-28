 // 2초 뒤 자동으로 모달 열기
    window.onload = function() {
      setTimeout(() => {
        document.getElementById("privacyModal").style.display = "flex";
      }, 100);
    }

    // 닫기 버튼
    document.getElementById("closeModal").onclick = function() {
      document.getElementById("privacyModal").style.display = "none";
    }

    // I Understand 버튼
    document.getElementById("understandBtn").onclick = function() {
      document.getElementById("privacyModal").style.display = "none";
    }

    // 바깥 클릭 시 닫기
    window.onclick = function(event) {
      if (event.target == document.getElementById("privacyModal")) {
        document.getElementById("privacyModal").style.display = "none";
      }
    }