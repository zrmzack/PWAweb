var dbPromise;

const HappySharing_DB_NAME = 'HappySharing';
const HappySharing_STORE_NAME = 'store_HappySharing';

/**
 * it inits the database
 */
function initDatabase() {

    dbPromise = idb.openDb(HappySharing_DB_NAME, 1, function (upgradeDb) {
        if (!upgradeDb.objectStoreNames.contains(HappySharing_STORE_NAME)) {
            var facebookDB = upgradeDb.createObjectStore(HappySharing_STORE_NAME, {keyPath: 'id', autoIncrement: true});
            facebookDB.createIndex('username', 'username', {unique: false, multiEntry: true});
            facebookDB.createIndex('story', 'story', {unique: false, multiEntry: true});
        }
    });
    retrivestore()
}

/**
 * it saves the forecasts for a city in localStorage
 * @param city
 * @param forecastObject
 */
function getdata() {
    if (dbPromise) {
        dbPromise.then(async db => {
            var tx = db.transaction(HappySharing_STORE_NAME, 'readwrite');
            var store = tx.objectStore(HappySharing_STORE_NAME);
            var username = document.getElementById("username").value;
            var story = document.getElementById("story").value;
            var image1 = document.getElementById("img1_url").value;
            var image2 = document.getElementById("img2_url").value;
            var image3 = document.getElementById("img3_url").value;
            var image4 = document.getElementById("img4_url").value;

            await store.add({
                username: username,
                story: story,
                date: new Date().toLocaleString(),
                image1: image1,
                image2: image2,
                image3: image3,
                image4: image4,
            });

            return tx.complete;
        }).then(function () {
            console.log('added item to the store! ');
            showdata()
        }).catch(function (error) {
            console.log("wrong")
        });
    }
    // showdata()
}

function retrivestore() {
    if (dbPromise) {
        dbPromise.then
        (function (db) {
            var tx = db.transaction(HappySharing_STORE_NAME, 'readonly');
            var store = tx.objectStore(HappySharing_STORE_NAME);
            return store.openCursor();
        }).then
        (function logItems(cursor) {
            if (!cursor) {
                return;
            }
            console.log('Cursored at:', cursor.key);
            for (var field in cursor.value) {
                if (field != "id") {
                    if (field == "username") {
                        const row = document.createElement('div');
                        document.getElementById('result').appendChild(row);
                        row.innerHTML = "Username:" + cursor.value[field] + "</div>"
                        console.log(cursor.value[field]);
                    }
                     else if (field == "date") {
                        const row = document.createElement('div');
                        document.getElementById('result').appendChild(row);
                        row.innerHTML = "date:" + cursor.value[field] + "</div>"
                        console.log(cursor.value[field]);
                    }
                    else if (field == "story") {
                        const row = document.createElement('div');
                        document.getElementById('result').appendChild(row);
                        row.innerHTML = "story:" + cursor.value[field] + "</div>"
                        console.log(cursor.value[field]);
                    }else {
                        const row = document.createElement('div');
                        document.getElementById('result').appendChild(row);
                        row.innerHTML = cursor.value[field] + "</div>"
                        console.log(cursor.value[field]);
                    }
                }

            }
            return cursor.continue().then(logItems);
        }).then
        (function () {
            console.log('Done cursoring');
        });
    }
}


function showdata() {
    const video = document.getElementById('video');
    video.srcObject=null
    document.getElementById("story").value="";
    document.getElementById("img1_url").value="";
    document.getElementById("img2_url").value="";
    document.getElementById("img3_url").value="";
    document.getElementById("img4_url").value="";
}