function validateForm() {
    const patterns = [
        { field: document.getElementById("name"), pattern: /^[А-ЯІЇЄҐа-яіїєґ]{2,} [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/ },
        { field: document.getElementById("variant"), pattern: /^\d{2}$/ },
        { field: document.getElementById("phone"), pattern: /^\d{10}$/ },
        { field: document.getElementById("faculty"), pattern: /^[А-ЯІЇЄҐа-яіїєґ]{4}$/ },
        { field: document.getElementById("address"), pattern: /^м\. [А-ЯІЇЄҐа-яіїєґ]+$/ }
    ];

    let isValid = true;

    patterns.forEach(({ field, pattern }) => {
        if (!pattern.test(field.value)) {
            field.classList.add("error");
            isValid = false;
        } else {
            field.classList.remove("error");
        }
    });

    if (isValid) {
        const userInfo = `ПІБ: ${patterns[0].field.value}\nВаріант: ${patterns[1].field.value}\nТелефон: ${patterns[2].field.value}\nФакультет: ${patterns[3].field.value}\nАдреса: ${patterns[4].field.value}`;
        alert(userInfo);
    } else {
        alert("Будь ласка, виправте помилки в полях, виділених червоним.");
    }
}