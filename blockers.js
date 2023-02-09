
const defineCss = () => {
    return `<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: felx;
        justify-content: clearInterval;
        align-items: clearInterval;
    }
    img {
        width: auto;
        max-height: 600px;
        
        
    }
    .conntent{
        // display: flex;
        // justify-content: center;
        // align-item: center;
        position: absolute;
        margin: 0;
        top: 10%;
        left: 33%;

    }
    </styles>`


}

const defineHTML = () => {
    return `<div class='conntent'>
    
    <img src="https://i.imgflip.com/3yaec7.jpg" alt="Jake peralta">
   
    </div>`
}

const forbiddenUrls = ["https://www.instagram.com/", "www.instagram.com"];
const set = new Set(forbiddenUrls);

if(set.has(window.location.hostname)) {
    //replace htm and css
    document.head.innerHTML = defineCss();
    document.body.innerHTML = defineHTML();
}