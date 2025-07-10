chrome.action.onClicked.addListener(async (tab) => {
    console.log("Action clicked, current tab:", tab);
    if (!tab.url) return;

    try {
        console.log("send : ", tab.url);
        const response = await fetch("http://localhost:8080", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: tab.url })
        });

        console.log("Sent URL:", tab.url, "Response status:", response.status);
    } catch (err) {
        console.error("Failed to send URL:", err);
    }
});