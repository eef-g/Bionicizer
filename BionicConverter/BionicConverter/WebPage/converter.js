
// javascript
function changeColor(color) {
    const name = document.getElementById('text');
    name.style.color = color;
}

function textInput(){
    var text = document.getElementById('inputField').value;
    document.getElementById('inputField').value = "";
    new_text = convertText(text);
    localStorage.setItem("text", new_text);
    window.location.href = "output_view.html";
}

function convertText(text){
    text_arr = text.split(" ");
    console.debug(text_arr);
    out = "";
    for(i = 0; i < text_arr.length; i++)
    {
        curr = text_arr[i]
        if(text_arr[i].includes("\n"))
        {
            curr_arr = curr.split("\n");
            curr = curr_arr.join("|");
        }

        if(curr.length == 1)
        {
            out += "<strong>" + curr + "</strong>" + " ";
        }
        else
        {

            first_half = curr.substr(0, curr.length / 2);
            second_half = curr.substr(curr.length / 2);
            out += "<strong>" + first_half + "</strong>" + second_half + " ";
            console.debug(out);
        }
    }
    out_arr = out.split("|");
    out = out_arr.join("<br>");
    return out;
}

function displayText(){
    console.debug(localStorage.getItem("text"));
    document.getElementById('outputText').innerHTML = localStorage.getItem("text");
}