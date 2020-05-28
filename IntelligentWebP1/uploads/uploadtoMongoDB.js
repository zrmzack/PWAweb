function win_run() {
    var cmd = new ActiveXObject("WScript.Shell");

    cmd.run("cmd.exe /c"+'mongoimport -db HappySharing -collection data -file usersStoriesAndRatings.json')
    cmd = null;
}
