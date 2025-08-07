<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {'packages':['corechart']});

        let countPerUser = [
            ['User', 'Count']
        ]

        // 비동기 처리
        fetch('chartData.do')
            .then(resolve => resolve.json())
            .then(result => {
                for (let prop in result) {
                    countPerUser.push([prop, result[prop]]);
                }
                console.log(countPerUser);
                google.charts.setOnLoadCallback(drawChart);
            })
            .catch(err => console.error(err))



        function drawChart() {


            var data = google.visualization.arrayToDataTable(countPerUser);
            var options = {
                title: '회원별 게시글 작성 현황'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
    </script>
</head>
<body>
<div id="piechart" style="width: 900px; height: 500px;"></div>
</body>
</html>

