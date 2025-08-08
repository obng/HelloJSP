<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Insert title here</title>
    <link href="css/styles.css" rel="stylesheet" />
</head>
<body>
    <header>
        <div class="col-sm-2">검색</div>
        <select class="form-control" id="search"></select>
    </header>
    <main>
        <div id="show">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>센터ID</th>
                        <th>센터명</th>
                        <th>전화번호</th>
                    </tr>
                </thead>
                <tbody id="list"></tbody>
            </table>
        </div>
    </main>

    <script>
        let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=1506RJG0YGkwTPWkrhYL%2BHcH10LA1GMh1qP7pZ%2FFMIlIOhYHGVjG8JcxwpAfpsoyNUECJyqoeo9A8rEOyNJvpQ%3D%3D`;

        document.querySelector('#search').addEventListener('change', (e) => {
            let sido = e.target.value;
            searchCenterList(sido);
        })

        // 검색 목록 생성 -> 지역 확인해 을 배열에 넣기
        fetch(url)
            .then(resolve => resolve.json())
            .then(result => {
                const search = document.getElementById('search');
                result.data.reduce((acc, elem) => {
                    if (acc.indexOf(elem.sido) == -1 ) {
                        acc.push(elem.sido); // ['서울특별시', '제주자치도']
                    }
                    return acc; // 다음 순번의 acc값으로 활용
                }, [])
                    .forEach(elem => {
                         // <option value="서울특별시">
                        let opt = document.createElement('option');
                        opt.value = elem;
                        opt.innerHTML = elem;
                        search.appendChild(opt);
                    })
                ;


            })
            .catch(err => console.error(err))

        function searchCenterList(sido) {

            fetch(url)
                .then(resolve => resolve.json())
                .then(result => {
                    document.querySelector('#list').innerHTML = ' ';
                    result.data.forEach(elem => {
                        console.log(elem)
                        if (elem.sido == sido) {
                            let tr = document.createElement('tr');
                            tr.addEventListener('click', function (e) {
                                window.open('daumapi.jsp?lat=' + elem.lat + '&lng=' + elem.lng);
                            });
                            ['id', 'centerName', 'phoneNumber'].forEach(prop => {
                                let td = document.createElement('td');
                                td.innerText = elem[prop];
                                tr.appendChild(td);
                            })
                            document.getElementById('list').appendChild(tr);
                        }
                    })
                })
                .catch(err => console.error(err))

        }


    </script>
</body>
</html>
