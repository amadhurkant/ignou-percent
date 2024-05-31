function results(a, b, c, d, e, f, g) {
    document.getElementById("entriesA").replaceChildren()
    document.getElementById("entriesE").replaceChildren()
    document.getElementById("entriesA").setAttribute("style", "")
    document.getElementById("entriesE").setAttribute("style", "")

    var br = document.createElement("br")
    var p1 = document.createElement("p")
    p1.innerHTML = "Total Marks (Adjusted): " + parseFloat(a).toFixed(2)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)
    
    var p1 = document.createElement("p")
    p1.innerHTML = "Total Marks to be given in assignments: " + parseFloat(b).toFixed(2)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)

    var p1 = document.createElement("p")
    p1.innerHTML = "Total Marks to be given in examination: " + parseInt(c)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)

    var p1 = document.createElement("p")
    p1.innerHTML = "Marks secured in examination: " + parseInt(d)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)

    var p1 = document.createElement("p")
    p1.innerHTML = "Marks secured in assignments (adjusted):  " + parseFloat(e).toFixed(2)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)

    var p1 = document.createElement("p")
    p1.innerHTML = "Total Marks secured: " + parseFloat(f).toFixed(2)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)

    var p1 = document.createElement("h3")
    p1.setAttribute("style", "color:green")
    p1.innerHTML = "Percentage: " + parseFloat(g).toFixed(2)
    document.getElementById("results").appendChild(p1)
    document.getElementById("results").appendChild(br)
}

let nAs = 0
let nEs = 0
function start() {
    nAs = parseInt(document.forms["fquest"]["nAsst"].value)
    nEs = parseInt(document.forms["fquest"]["nExe"].value)
    EntryBuild()
}

function EntryBuild() {
    document.getElementById("results").replaceChildren()
    document.getElementById("entriesA").replaceChildren()
    document.getElementById("entriesA").setAttribute("style", "margin: 0.2cm; border: 3px solid red; padding: 25px;")

    document.getElementById("entriesE").replaceChildren()
    document.getElementById("entriesE").setAttribute("style", "margin: 0.2cm; border: 3px solid red; padding: 25px")
    for (let i = 0; i < nAs; i++){
        var heading = document.createElement("h4");
        heading.innerHTML = "Enter Marks you got in assignment " + (i+1) + ": "; 
        document.getElementById("entriesA").appendChild(heading);

        var entryBox = document.createElement("input");
        entryBox.type="text";
        entryBox.id="asmt"+(i+1); 
        document.getElementById("entriesA").appendChild(entryBox);
    }

    for (let i = 0; i < nEs; i++){
        var heading = document.createElement("h4");
        heading.innerHTML = "Enter Marks you got in examination " + (i+1) + ": "; 
        document.getElementById("entriesE").appendChild(heading);

        var entryBox = document.createElement("input");
        entryBox.type="text";
        entryBox.id="exm"+(i+1);
        document.getElementById("entriesE").appendChild(entryBox);
    }
}

function calculate() {
    tam = 100*nAs
    var t_marksInAsmt = 0
    for (let i = 1; i < nAs+1; i++){
        var num = parseInt(document.getElementById("asmt"+(i)).value)
        if (num > 100) {
            alert("You got more than 100 marks in Assignment "+(i)+"!")
            throw new Error("Marks Limit Exceeded!")
        }
        t_marksInAsmt += num
    }

    tpm = 100*nEs
    var t_marksInExams = 0
    for (let i = 1; i < nEs+1; i++){
        var num1 = parseInt(document.getElementById("exm"+(i)).value)
        if (num1 > 100) {
            alert("You got more than 100 marks in Examination "+(i)+"!")
            throw new Error("Marks Limit Exceeded!")
        }
        t_marksInExams += num1
    }

    total = (tpm*100)/70
    asmt_total = (total - tpm)
    asmtRevalued = (asmt_total/tam)
    Reval_t_marksInAsmt = (t_marksInAsmt*asmtRevalued)
    total_get = (t_marksInExams)+Reval_t_marksInAsmt
    percentage = (total_get/total)*100

    results(total, asmt_total, tpm, t_marksInExams, Reval_t_marksInAsmt, total_get, percentage)
    
}
