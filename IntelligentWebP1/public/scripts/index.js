function sendAjaxQuery(url, data) {
    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (dataR) {
            // no need to JSON parse the result, as we are using
            // dataType:json, so JQuery knows it and unpacks the
            // object for us before returning it

            var ret = dataR;

            var username = ret['user_name'];

            // document.getElementById('results_username').innerHTML = username;
            // const row1 = document.createElement('div');
            // document.getElementById('results_username').appendChild(row1);
            // row1.innerHTML = username + "</div>"

            var story = ret['stories'];
            // document.getElementById('results_story').innerHTML ="story:"+ story;
            // const row2 = document.createElement('div');
            // document.getElementById('results_story').appendChild(row2);
            // row2.innerHTML ="story:"+ story + "</div>"

            var date = ret['date'];
            // document.getElementById('results_date').innerHTML = "date:"+date;
            // const row3= document.createElement('div');
            // document.getElementById('results_date').appendChild(row3);
            // row3.innerHTML ="date:"+ date + "</div>"

            var image1 = ret['image1'];
            // document.getElementById('results_img1').innerHTML = image1;
            // const row4 = document.createElement('div');
            // document.getElementById('results_img1').appendChild(row4);
            // row4.innerHTML =image1 + "</div>"
            var image2 = ret['image2'];
            // const row5 = document.createElement('div');
            // document.getElementById('results_img2').appendChild(row5);
            // row5.innerHTML =image2 + "</div>"
            var image3 = ret['image3'];
            // const row6 = document.createElement('div');
            // document.getElementById('results_img3').appendChild(row6);
            // row6.innerHTML =image3 + "</div>"

            var image4 = ret['image4'];
            // const row7 = document.createElement('div');
            // document.getElementById('results_img4').appendChild(row6);
            // row6.innerHTML =image4 + "</div>"
            const row = document.createElement('div');
            document.getElementById('result').appendChild(row)
                row.innerHTML = '<h2>'+username+'<h2>' + '<br>' +'<h3>'+ date +'<h3>'+ '<br>' + story + '<br>' + image1 + '<br>' + image2 + '<br>' + image3 + '<br>'+ image4 + '<br>'+ '</hr>';




        },
        error: function (xhr, status, error) {
            alert('Error: worong' + error.message);
        }
    });
}

function onSubmit(url) {
    var formArray = $("form").serializeArray();
    var data = {};
    for (index in formArray) {
        data[formArray[index].name] = formArray[index].value;
    }
    // const data = JSON.stringify($(this).serializeArray());
    sendAjaxQuery(url, data);
    event.preventDefault();
}

