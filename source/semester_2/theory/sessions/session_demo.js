<!-- AJAX Post -->
function invalidateSessionButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
    });
}

function getSessionJava() {

    var url = "api/get_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer)
    });
}

function setSessionJava() {

    var url = "api/set_session_servlet";

    var sessionKey = $("#sessionKey").val();
    var sessionValue = $("#sessionValue").val();

    var dataToServer = {sessionKey : sessionKey, sessionValue : sessionValue};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $("#sessionKey").val("");
        $("#sessionValue").val("");
    });
}
button = $('#getSessionJava');
button.on("click", getSessionJava);

button = $('#setSessionJava');
button.on("click", setSessionJava);


button = $('#invalidateSession');
button.on("click", invalidateSessionButton);



