class Calender {
  constructor(input) {
    this.now = new Date();
    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.year = this.now.getFullYear();

    this.input = input;
    this.divCnt = null;
    this.divHeader = null;
    this.divTable = null;
    this.divDateText = null;
    this.divButtons = null;
    init(){
      this.divCnt = document.createElement("div");
        this.divCnt.classList.add("calendar");


        this.divButtons = document.createElement("div");
        this.divButtons.className = "calendar-prev-next";


        this.divDateText = document.createElement("div");
        this.divDateText.className = "date-name";


        this.divHeader = document.createElement("div");
        this.divHeader.classList.add("calendar-header");

        this.divHeader.appendChild(this.divButtons);
        this.divHeader.appendChild(this.divDateText);
        this.divCnt.appendChild(this.divHeader);

        this.divTable = document.createElement("div");
        this.divTable.className = "calendar-table-cnt";
        this.divCnt.appendChild(this.divTable);
    };
};
    }

  }
}
