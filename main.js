// time 


let dateTime = new Date();
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
let sec = dateTime.getSeconds();
let min = dateTime.getMinutes();
let hr = dateTime.getHours();
let date = dateTime.getDate();
if (sec < 10) sec = '0' + sec;
if (min < 10) min = '0' + min;
if (hr < 10) hr = '0' + hr;
if (date < 10) date = '0' + date;
const loginDetail = document.querySelector('.date-time');
loginDetail.innerHTML = `${days[dateTime.getDay()]} 
${months[dateTime.getMonth()]} 
${date} ${dateTime.getFullYear()} 
${hr}:${min}:${sec}`;





// input
function scroll(){
    var element = document.body;
    window.scrollTo(0,element.offsetHeight);
}
let i = 0;
const input = document.getElementsByClassName(`input`);
const inputBox = document.getElementById("inputBox");

document.body.addEventListener('click', function () {
    inputBox.focus();
    console.log('Focusing!!!!!');
});
let handleSubmit = document.getElementById("handleSubmit");
handleSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputBox.value);
    console.log('SUCCESS');
    content(inputBox.value);
    inputBox.value = "";
    console.log("submit");
});


const content = (val) => {
    let showHere = document.getElementById("showHere");
    // let showMe = "";
    let showMe;

    // make if else ladder and add 
    // div as per you choice
    if(val == "help"){
        showMe = `<dl class='text'>
        <dt><span class="underline">about</span></dt><dd>-stop stalking me</dd>
        <dt><span class="underline">edu</span></dt><dd>-my acadamic info</dd>
        <dt><span class="underline">skills</span></dt><dd>-i'm pretty good at some things</dd>
        <dt><span class="underline">projects</span></dt><dd>-yeah, i have done some cool stuffs</dd>
        <dt><span class="underline">contact</span></dt><dd>-bring on the spam</dd>
        <dt><span class="underline">all</span></dt><dd>-everything about me</dd>
        <dt><span class="underline">website</span></dt><dd>-how i built this</dd>
        <dt><span class="underline">exit</span></dt><dd>-clear the terminal</dd></dl>`;
        append(val, showMe, showHere);
    }
    else if(val == 'about'){
        showMe = `<div class='text'>hey there! thanks for taking such a keen interest in me. 
        hopefully you're not gonna spam or stalk me... okay, i guess if you must stalk me, just 
        give me a fair warning so that i can look presentable when you arrive at my door.<br><br>
        right, so, where to begin? well, my parents met in... nah, just kidding. as you probably 
        know, my name is <span class="underline">harsha varthan</span>. i'm currently a sophomore 
        year <span class="underline">metallurgical and materials</span> engineering undergraduate 
        at <span class="underline">nit trichy</span>. i was born and brought up in a beautiful 
        fishing village located in the southeast of tamil nadu, india.<br><br>
        i'm an enthusiastic programmer with interests in frontend <span class="underline">
        web development</span> and <span class="underline">algorithmic programming</span>. i'm 
        also pretty into football. i play for my department football team. i cofounded the 
        <span class="underline">resolve food group</span>, where we develop a value chain of 
        underutilized wild edible fruit while providing a stable means of livelihood for the tribal 
        fruit collectors, thereby increasing the availability of a wide array of locally produced 
        nutritious fruit to every person. we won the <span class="underline">hult prize</span> 
        nit trichy on-campus event and we will be representing nit trichy in the world regionals.<br><br>
        nowadays i'm developing a method to download food..:D just kidding! please feel free to get in 
        touch with me. use <span class="underline">contact</span> command to know my contact details,
        if you would like to check out my cv, simply type <span class="underline">cv</span>.<br><br> 
        have a good day!</div>`;
        append(val, showMe, showHere);
    }
    else if (val == "edu"){
        showMe =`<dl class="text">
        <dt><span class="underline">national institute of technology, tiruchirapalli</span></dt>
        <dt><span class="duration">2019-present</span></dt>
        <dd>bachelor of technology</dd>
        <dd>major in metallurgical and materials engineering</dd>
        <dd>8.0 cgpa</dd>
        <dt><span class="underline">velammal bodhi campus, madurai</span></dt>
        <dt><span class="duration">2016-18</span></dt>
        <dd>higher secondary certificate</dd>
        <dd>81.8%</dd>
        <dt><span class="underline">kendriya vidyalaya cmfri, mandapam</span></dt>
        <dt><span class="duration">2006-16</span></dt>
        <dd>secondary school certificate</dd>
        <dd>89.3%</dd></dl></div>`;
        append(val, showMe, showHere);
    }
    else if(val == 'skills'){
        showMe = `<dl class="text">
        <dt><span class="underline">programming language</span></dt>
        <dd>-python</dd>
        <dd>-javascript</dd>
        <dd>-c++</dd>
        <dt><span class="underline">web development</span></dt>
        <dd>-html</dd>
        <dd>-css</dd>
        <dd>-noje.js</dd>
        <dd>-vue</dd>
        <dt><span class="underline">tools</span></dt>
        <dd>-git</dd>
        <dd>-vs code</dd>
        <dd>-mysql</dd></dl>`;
        append(val, showMe, showHere);
    }
    else if(val == 'projects'){
        showMe = `<div class="text">will upload soon!<br>don't forget to fork 
        me on <span><a href="https://github.com/rpharshavarthan" target='_blank' class="underline">github</a>
        </span></div>`;
        append(val, showMe, showHere);
    }
    else if(val == 'contact'){
        showMe = `<div class="text">
        <div><span class="underline">incorrect usage</span></div>
        <div><span class="">usage</span>: contact method</div>
        <div><span>description: contact me through any of these methods</span></div>
        <table>
          <tr>
            <td>-ln</td>
            <td class="td">linkedin</td>
          </tr>
          <tr>
            <td>-m</td>
            <td class="td">mail</td>
          </tr>
        </table></div>`;
        append(val, showMe, showHere);
    }
    else if(val == 'contact -lin'){
        showMe = `<div class="text"><span>redirecting you to 
        <a href="https://www.linkedin.com/in/harsha-varthan-3714aa1aa/" 
        target="_blank" class="underline linkedin">linkedin</a></span></div>`;
        append(val, showMe, showHere);
        window.open("https://www.linkedin.com/in/harsha-varthan-3714aa1aa/", "_blank");
    }
    else if(val == 'contact -m'){
        showMe = `<div class="text"><span>drafting mail to 
        <a href="mailto:rpharshavarthan@gmail.com" 
        class="underline mail">rpharshavarthan@gmail.com</a></span></div>`;
        append(val, showMe, showHere);
        window.open("mailto:rpharshavarthan@gmail.com", "_blank");
    }
    else if(val == 'love'){
        showMe = ``;
        append(val, showMe, showHere);
    }
    else if(val == 'website'){
        showMe = `<div class="text">i built this website from scratch using vanilla js with no extra
        libraries and some inspiration form windows shell.<br><br>
        the source code of this site can be found on <span class="underline"><a href="https://github.com/rpharshavarthan"
        class='underline github' target='_blank'>github</a></span>. feel free to use this website for 
        inspiration, or go ahead and copy some code. happy coding :)</div>`;
        append(val, showMe, showHere);
    }
    else if(val == 'all'){
        showMe = `<div class="text">
        <div><span class="underline highlight">&#8603; about</span></div><br>
        <div>hey there! thanks for taking such a keen interest in me. 
          hopefully you're not gonna spam or stalk me... okay, i guess if you must stalk me, just 
          give me a fair warning so that i can look presentable when you arrive at my door.<br><br>
          right, so, where to begin? well, my parents met in... nah, just kidding. as you probably 
          know, my name is <span class="underline">harsha varthan</span>. i'm currently a sophomore 
          year <span class="underline">metallurgical and materials</span> engineering undergraduate 
          at <span class="underline">nit trichy</span>. i was born and brought up in a beautiful 
          fishing village located in the southeast of tamil nadu, india.<br><br>
          i'm an enthusiastic programmer with interests in frontend <span class="underline">
          web development</span> and <span class="underline">algorithmic programming</span>. i'm 
          also pretty into football. i play for my department football team. i cofounded the 
          <span class="underline">resolve food group</span>, where we develop a value chain of 
          underutilized wild edible fruit while providing a stable means of livelihood for the tribal 
          fruit collectors, thereby increasing the availability of a wide array of locally produced 
          nutritious fruit to every person. we won the <span class="underline">hult prize</span> 
          nit trichy on-campus event and we will be representing nit trichy in the world regionals.<br><br>
          nowadays i'm developing a method to download food..:D just kidding! please feel free to get in 
          touch with me. use <span class="underline">contact</span> command to know my contact details,
          if you would like to check out my cv, simply type <span class="underline">cv</span>.<br><br> 
          have a good day!
        </div><br>
        <div><span class="underline highlight">&#8603; education</span></div><br>
        <div>
          <dl>
            <dt><span class="underline">national institute of technology, tiruchirapalli</span></dt>
            <dt><span class="duration">2019-present</span></dt>
            <dd>bachelor of technology</dd>
            <dd>major in metallurgical and materials engineering</dd>
            <dd>8.0 cgpa</dd>
            <dt><span class="underline">velammal bodhi campus, madurai</span></dt>
            <dt><span class="duration">2016-18</span></dt>
            <dd>higher secondary certificate</dd>
            <dd>81.8%</dd>
            <dt><span class="underline">kendriya vidyalaya cmfri, mandapam</span></dt>
            <dt><span class="duration">2006-16</span></dt>
            <dd>secondary school certificate</dd>
            <dd>89.3%</dd>
          </dl>
        </div><br>
        <div><span class="underline highlight">&#8603; skills</span></div><br>
        <div>
          <dl>
            <dt><span class="underline">programming language</span></dt>
            <dd>-python</dd>
            <dd>-javascript</dd>
            <dd>-c++</dd>
            <dt><span class="underline">web development</span></dt>
            <dd>-html</dd>
            <dd>-css</dd>
            <dd>-noje.js</dd>
            <dd>-vue</dd>
            <dt><span class="underline">tools</span></dt>
            <dd>-git</dd>
            <dd>-vs code</dd>
            <dd>-mysql</dd>
          </dl>
        </div><br>
        <div><span class="underline highlight">&#8603; projects</span></div><br>
        <div>will upload soon!<br>don't forget to fork 
          me on <span><a href="https://github.com/rpharshavarthan" target="_blank" class="underline">github</a></span>
        </div><br>
        <div><span class="underline highlight">&#8603; contact</span></div><br>
        <div>
          <div><span>
            <a href="https://www.linkedin.com/in/harsha-varthan-3714aa1aa/" 
            target="_blank" class="underline">linkedin</a></span>
          </div>
          <div><span>
            <a href="mailto:rpharshavarthan@gmail.com" 
            class="underline">mail</a></span>
          </div>
        </div><br>
        <div><span class="underline highlight">&#8603; website</span></div><br>
        <div>
          <div>i built this website from scratch using vanilla js with no extra
            libraries and some inspiration form windows shell.<br><br>
            the source code of this site can be found on <span class="underline"><a href="https://github.com/rpharshavarthan"
            class='underline github' target='_blank'>github</a></span>. feel free to use this website for 
            inspiration, or go ahead and copy some code. happy coding :)
          </div>
        </div>
    </div>`;
    append(val, showMe, showHere);
    }
    else if(val == 'exit'){
        showHere.innerHTML = '';
    }
    else{
        showMe = `<div class="text">
        <span class="incorrect">command not found: ${val}</span></div>`;
        append(val, showMe, showHere);
    }
};

function append(val, showMe, showHere){
    let previousCommand = `
    <span class="name">guest@rpharshavarthan.io &gt; <span class='command'>${val}</span></span>`;
    let div =`
    <div>${previousCommand}</div>
    <div class="line-break"><br></div>
    ${showMe}
    <div class="line-break"><br></div>`;
    showHere.innerHTML += div;
    scroll();
}

/*
function output(val) {
    if (val == 'help') {
        showPreviousDir(val);
        let div = document.createElement("div");
        let br1 = document.createElement("br");
        document.body.appendChild(br1);
        let br2 = document.createElement("br");
        let span$1 = document.createElement("span");
        let span$2 = document.createElement("span");
        let node$1 = document.createTextNode("command list:");
        let node$2 = document.createTextNode("about, education, skills, projects, contact, help, exit.");
        span$1.appendChild(node$1);
        span$2.appendChild(node$2);
        div.appendChild(span$1);
        div.appendChild(br2);
        div.appendChild(span$2);
        div.className = 'text';
        document.body.appendChild(div);
        showNewDir();
        <dt><span class="underline">love</span></dt><dd>-my biggest mistake</dd>
        <span class='text'><span class='highlight'>command list</span>:<br>
        &emsp;<span class='highlight'>about</span><br>&emsp;&emsp;-stop stalking me<br>
        &emsp;<span class='highlight'>edu</span><br>&emsp;&emsp;-yeah, i had been to college<br>
        &emsp;<span class='highlight'>skills</span><br>&emsp;&emsp;-i'm pretty good at some things<br>
        &emsp;<span class='highlight'>projects</span><br>&emsp;&emsp;-yeah, i have done some cool stuffs<br>
        &emsp;<span class='highlight'>contact</span><br>&emsp;&emsp;-bring on the spam<br>
        &emsp;<span class='highlight'>all</span><br>&emsp;&emsp;-everything about me<br>
        &emsp;<span class='highlight'>exit</span><br>&emsp;&emsp;-clear the terminal</span>`
    }
}

function showPreviousDir(val) {
    const dir = document.querySelector('.dir');
    let br = document.createElement("br");
    dir.style.display = 'none';
    // dir.remove();
    let div = document.createElement("div");
    let span$1 = document.createElement("span");
    span$1.className = 'name';
    let node$1 = document.createTextNode("guest@rpharshavarthan.io > ");
    span$1.appendChild(node$1);
    let span$2 = document.createElement("span");
    span$2.className = 'command';
    let node$2 = document.createTextNode(val);
    span$2.appendChild(node$2);
    div.appendChild(span$1);
    div.appendChild(span$2);
    // div.className = 'static-input';
    document.body.appendChild(div);
}

function showNewDir() {
    let div = document.createElement("div");
    div.className = 'dir';
    let br = document.createElement("br");
    let span = document.createElement("span");
    span.className = 'name';
    let node = document.createTextNode("guest@rpharshavarthan.io > ");
    span.appendChild(node);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.className = 'input';
    input.setAttribute('autocomplete', 'new-password');
    input.autofocus = true;
    div.appendChild(br);
    div.appendChild(span);
    div.appendChild(input);
    document.body.appendChild(div);
    input.focus();
}
else if(val == 'cont'){
        showMe = `<div class="text">
        Long long back.
        There lived a handsome chunk.
        It's me.
        And a girl.
        Were became friends through Facebook.
        Both started to talk in mob.
        He with his flirting talent got her no.
        They started exchanging what they like and what they don't.
        One fine he did a great mistake.
        By sending a proposal message.
        set her a heart emoji and deleted it.
        And then she asked what he send.
        He told her i love you.
        The she didn't believed.
        She asked fr voice message.
        And call.
        He never thought of problems he is going to see in future.
        She told him she needs time to think.
        Asked an week for her reply.
        But she continued to talk with him in call.
        And he made her to accept next day itself.
        On that day itself his dad noted his change in behaviour.
        And found what wrong he's doing.
        And checked his mob.
        Aftr that he managed to tell her that his phone was not with him.
        And he chatted with her in fb itself.
        At that time he caught three times by parents because of the app lock fails.
        Even he did video call and chatted with her.
        There came valentine's week.
        She gifted him keychain roses teddy.
        On each day.
        Chocolates also.
        He gave her chocolate and.
        Not hugs and kisses on valentine's week.
        Then on farewell.
        Both hugged and kissed.
        Aftr that they didn't see much.
        And he also don't get mob and went to depression.
        Aftr 3 months he told his friend and asked her to forget him.
        She got angry and wanted to speak with him.
        But he refused to speak and chatted in fb.
        She scolded him badly.
        And he didn't reply anything.
        Aftr a month he tried to talk with her.
        She created a fake id for him and talked with him In fb.
        He tried to make her understand his side of problems.
        She was still angry with him.
        Days passed he joined in clg still chatted with her.
        And again he did a mistake of proposing her.
        And then he also did a tricky thing to make her to accept him.
        Wanna know how he did?
        He told her he got a proposal frm a girl frm his hometown.
        To believe that proposal.
        He himself chatted with his friend no. To him and took a screenshot and send it to her.
        Then she accepted his proposal.
        And he told her he did a trick.
        She also searched for that no. In truecaller.
        B4 accepting.
        Aftr that they chatted less.
        The year passed.
        In 2020 both mutually breaked up their relationship.
        Aftr a months they chatted.
        Not regularly.
        Once in a month.
        Then.
        One fine day he noticed her dp and status were disppeared.
        He confirmed that she blocked him in whatsapp.
        Then in instagram he asked her.
        She told no reason.
        He asked her block in instagram too.
        She again tried to start a conversation asking about old things
        He refused to tell her anything.
        He replied "you are going to block me here too y shud i give you answers".
        The she blocked him everywhere.</div>`;
        append(val, showMe, showHere);
    }
*/