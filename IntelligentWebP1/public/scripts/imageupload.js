function upload() {
    var input = document.getElementById("img1_file")
    if (typeof (FileReader) === 'undefined') {
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', Readfile, false);
    }
}

function Readfile() {
    var file = this.files[0]
    if (!/image\/\w+/.test(file.type)) {
        alert("plz upload correct image's type")
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        document.getElementById("img1_url").value = '<img src="' + this.result + '"alt=""/>'

    }
}

function upload2() {
    var input = document.getElementById("img2_file")
    if (typeof (FileReader) === 'undefined') {
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', Readfile1, false);
    }
}

function Readfile1() {
    var file = this.files[0]
    if (!/image\/\w+/.test(file.type)) {
        alert("plz upload correct image's type")
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        document.getElementById("img2_url").value = '<img src="' + this.result + '"alt=""/>'

    }
}

function upload3() {
    var input = document.getElementById("img3_file")
    if (typeof (FileReader) === 'undefined') {
        input.setAttribute('disabled', 'disabled');
    } else {
        input.addEventListener('change', Readfile2, false);
    }
}

function Readfile2() {
    var file = this.files[0]
    if (!/image\/\w+/.test(file.type)) {
        alert("plz upload correct image's type")
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        document.getElementById("img3_url").value = '<img src="' + this.result + '"alt=""/>'

    }
}


function showImg1() {
    // var img_file =  $("#img_file").val();
    var file = document.getElementById('img1_file').files[0];
    var re = new FileReader();
    re.readAsDataURL(file);
    re.onload = function (re) {
        $('#img_id1').attr("src", re.target.result);
    }
}

function showImg2() {
    // var img_file =  $("#img_file").val();
    var file = document.getElementById('img2_file').files[0];
    var re = new FileReader();
    re.readAsDataURL(file);
    re.onload = function (re) {
        $('#img_id2').attr("src", re.target.result);
    }
}

function showImg3() {
    // var img_file =  $("#img_file").val();
    var file = document.getElementById('img3_file').files[0];
    var re = new FileReader();
    re.readAsDataURL(file);
    re.onload = function (re) {
        $('#img_id3').attr("src", re.target.result);
    }
}


function reloadPage() {
    if(location.href.indexOf('#reloaded')==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
}
