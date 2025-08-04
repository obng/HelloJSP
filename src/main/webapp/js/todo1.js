const students = [];
students.push({name: "홍길동", score: "90"});

let showList = () => {
    students.forEach((elem) => {
        let list = `<tr><th>${elem.name}</th><th>${elem.score}</th></tr>`;
        document.querySelector("#tlist").innerHTML += list;
    });
}

document.querySelector("#addList").addEventListener('click', function() {
    let name = document.querySelector("#std_name").value;
    let score = document.querySelector("#std_score").value;

    if (name == '' || score == '') {
        window.alert("값을 입력하세요");
        return;
    }

    document.querySelector("#tlist").innerHTML = '';

    students.push({name: name, score: score});
    showList();

    document.querySelector("#std_name").value = '';
    document.querySelector("#std_score").value = '';
})

