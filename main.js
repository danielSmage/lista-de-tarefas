function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if(text.length === 0) {
        alert("Insira uma tarefa!");
        return;
    }


    var ListItem = document.createElement("li");
    ListItem.className = ("list-item");

    const textElement = document.createTextNode(text);
    ListItem.appendChild(textElement);
    list.appendChild(ListItem);
}