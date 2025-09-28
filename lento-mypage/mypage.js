 const monthYear = document.getElementById("monthYear");
    const calendarTable = document.getElementById("calendarTable").getElementsByTagName("tbody")[0];
    const timePanel = document.getElementById("timePanel");

    let currentDate = new Date();
    let selectedDate = null;

    function renderCalendar() {
      calendarTable.innerHTML = "";
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      monthYear.textContent = currentDate.toLocaleString("default", { month: "long" }) + " " + year;

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      let row = document.createElement("tr");

      for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
      }

      for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
          calendarTable.appendChild(row);
          row = document.createElement("tr");
        }

        const cell = document.createElement("td");
        cell.textContent = day;

        // 비활성화 예시 (일요일 unavailable)
        if (new Date(year, month, day).getDay() === 0) {
          cell.classList.add("unavailable");
        } else {
          cell.addEventListener("click", () => selectDate(year, month, day, cell));
        }

        row.appendChild(cell);
      }
      calendarTable.appendChild(row);
    }

    function selectDate(year, month, day, cell) {
      // 이전 선택 초기화
      document.querySelectorAll("td").forEach(td => td.classList.remove("selected"));

      cell.classList.add("selected");
      selectedDate = new Date(year, month, day);

      showTimeSlots();
    }

    function showTimeSlots() {
      timePanel.innerHTML = "";
      const title = document.createElement("h3");
      title.textContent = `Available Times on ${selectedDate.toDateString()}`;
      timePanel.appendChild(title);

      const times = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "06:00 PM"];
      times.forEach(t => {
        const slot = document.createElement("div");
        slot.className = "time-slot";
        slot.textContent = t;
        slot.onclick = () => alert(`You booked ${t} on ${selectedDate.toDateString()}`);
        timePanel.appendChild(slot);
      });
    }

    function changeMonth(offset) {
      currentDate.setMonth(currentDate.getMonth() + offset);
      renderCalendar();
    }

    renderCalendar();