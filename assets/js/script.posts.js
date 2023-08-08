function savePost () {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    console.log(title, category, resume, author, date, )

    cleanFields()
}

function cleanFields () {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}  