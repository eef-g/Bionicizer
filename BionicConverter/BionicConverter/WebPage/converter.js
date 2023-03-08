
// javascript

function textInput(){
    var text = document.getElementById('inputField').value;
    document.getElementById('inputField').value = "";
    new_text = _convertText(text);
    localStorage.setItem("text", new_text);
    window.location.href = "output_view.html";
}


function _convertText(text){
    text_arr = text.split(" ");
    out = "";
    for(i = 0; i < text_arr.length; i++)
    {
        curr = text_arr[i];

        if(text_arr[i].includes("\n"))
        {
            curr_arr = curr.split("\n");

            for(j = 0; j < curr_arr.length; j++)
            {
                splice = _spliceText(curr_arr[j]);
                curr_arr[j] = "<strong>" + splice[0] + "</strong>" + splice[1] + " ";
            }
            out += curr_arr.join("<br>");
        }
        else
        {
            if(curr.length == 1)
            {
                out += "<strong>" + curr + "</strong>" + " ";
            }
            else
            {
                splice = _spliceText(curr);
                out += "<strong>" + splice[0] + "</strong>" + splice[1] + " ";
            }
        }
    }
    return out;
}


function _spliceText(text)
{
    firstHalf = "";
    secondHalf = "";
    if(text.length % 2 == 0)
    {
        firstHalf = text.substr(0, text.length / 2);
        secondHalf = text.substr(text.length / 2);
    }
    else
    {
        firstHalf = text.substr(0, (text.length / 2) + 1);
        secondHalf = text.substr((text.length / 2) + 1);
    }

    return [firstHalf, secondHalf];
}


function displayText(){
    document.getElementById('outputText').innerHTML = localStorage.getItem("text");
}

function keySubmission(evt){

    if( (evt.key == "Enter") && (evt.ctrlKey == true) )
    {
        textInput();
    }
}