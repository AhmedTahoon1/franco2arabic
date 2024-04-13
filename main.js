let inLang = document.getElementById("inLang");
let outLang = document.getElementById("outLang");
let inText = document.getElementById("inputText");
let outText = document.getElementById("outputText");


inLang.addEventListener("change",_=>{outLang.innerHTML = inLang.value == "arabic" ? "الفرانكو" : "العربية";})

inText.addEventListener("keypress",e=>{
    if(e.key = "Enter"){
    outText.innerHTML = "";
    if(inLang.value == "arabic"){//To Franco
    /*
    let result = inText.value.slice(0,inText.value.length).split("").forEach(e=>{
        for (const [key, value] of Object.entries(chars)) {
            return e = e == key? value:"test";
        }
    })
    */
    
    
    let result = inText.value.split("").filter(e=>{
        console.log(chars[e]);
        return chars[e];
    })
    
    outText.innerHTML = result.join("")
    }
}
})


const chars = {
    "ء":'2',
    "ئ":'2',
    "ؤ":'2',
    "ع":'3',
    "ش":'4',
    "ذ":'4',
    "خ":'5',
    "ط":'6',
    "ح":'7',
    "خ":"7'",
    "ق":'8',
    "ص":'9',
    "ض":"9'",
    "أ":'a',
    "ا":'a',
    "آ":'a',
    "إ":'e',
    "ب":'b',
    "ت":'t',
    "ث":'th',
    "ج":'g',
    "د":'d',
    "ر":'r',
    "ز":'z',
    "س":'s',
    "ظ":'z',
    "غ":'gh',
    "ف":'f',
    "ك":'k',
    "ل":'l',
    "م":'m',
    "ن":'n',
    "ه":'h',
    "و":'',
    "ي":'y',
    "ى":'y',
    " ":' ',
    "\n":"\n"
}