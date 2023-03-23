document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#pick-color-btn');
    btn.addEventListener('click', async function () {
        let tab = await chrome.tabs.query({ active: true, currentWindow: true })
        console.log(tab[0].id);
        console.log(chrome.tabs)
        try {
            

            chrome.scripting
                .executeScript({
                  target : {tabId : tab[0].id , allFrames : true},
                  files : [ "content_script/script.js" ],
                })
                .then(() => console.log("script injected in all frames"));

        } catch (error) {
            console.log(error)
        }

        console.log('clicked');
    });
});
