//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();

    const oldState = vscode.getState() || { messages: [] };

    let messages = oldState.messages;

    document.getElementById('send-btn').addEventListener('click', () => {
        sendMessage();
    });

    function sendMessage() {
        messages.push("Hello from the webview");
        updateMessageList();
        const message = {
            type: 'message',
            value: 'Hello from the webview'
        };
        vscode.postMessage(message);
    }

    function updateMessageList() {
        const ul = document.getElementById('message-list');
        ul.innerHTML = '';
        messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            ul.appendChild(li);
        });
    }

    // Handle messages sent from the extension to the webview
    window.addEventListener('message', event => {
        const message = event.data; // The json data that the extension sent
        switch (message.type) {

        }
    });


}());


