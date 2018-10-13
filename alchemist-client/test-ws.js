
function WebSocketTest()
{
    if ("WebSocket" in window)
    {

        var ws = new WebSocket("ws://localhost:12345/1/2");

        ws.onopen = function()
        {
            alert("ws open");
        };

        ws.onmessage = function (evt)
        {
        };

        ws.onclose = function()
        {
            alert("ws close");
        };
    }

    else
    {
        alert("WebSocket not supported");
    }
}