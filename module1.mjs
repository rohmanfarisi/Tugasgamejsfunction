class Tbl {
    constructor (init) {
        this.init = init
    }

    createHeader (data) {
        let open = `<thead><tr>`;
        let close = `</tr></thead>`;
        data.forEach( (d) => {
            open += `<th>${d}</th>`;
        });
        return open + close
    };

    createBody (data) {
        let open = `<tbody>`;
        let close = `</tbody>`;
        data.forEach( (d) => {
            open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
        </tr>
        `;
        });
        return open + close
    };

    render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
    }


}


const tabel = new Tbl({
    columns: ["NO", "Nama", "No. HP"],
    data: [
        [1, "Rohman Farisi", '085711050652'],
        [2, "Agus Salim", '087771288344'],
        [3, "Silvia Tita", '0877752417724']
    ]
  });

  const app =  document.getElementById(`app`);
  tabel.render(app);





