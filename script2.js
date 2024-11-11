const variantNumber = 7;

        function createTable() {
            const table = document.getElementById("myTable");
            let counter = 1;
            for (let i = 0; i < 6; i++) {
                const row = table.insertRow();
                for (let j = 0; j < 6; j++) {
                    const cell = row.insertCell();
                    cell.textContent = counter;
                    cell.dataset.number = counter;
                    counter++;
                    
                    cell.addEventListener("mouseover", function() {
                        if (parseInt(this.dataset.number) === variantNumber) {
                            this.style.backgroundColor = getRandomColor();
                        }
                    });

                    cell.addEventListener("click", function() {
                        if (parseInt(this.dataset.number) === variantNumber) {
                            this.style.backgroundColor = document.getElementById("colorPicker").value;
                        }
                    });

                    cell.addEventListener("dblclick", function() {
                        if (parseInt(this.dataset.number) === variantNumber) {
                            changeRowColors(this.parentNode.rowIndex);
                        }
                    });
                }
            }
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeRowColors(startRow) {
            const table = document.getElementById("myTable");
            for (let i = startRow; i < table.rows.length; i += 2) {
                Array.from(table.rows[i].cells).forEach(cell => {
                    cell.style.backgroundColor = getRandomColor();
                });
            }
        }

        createTable();