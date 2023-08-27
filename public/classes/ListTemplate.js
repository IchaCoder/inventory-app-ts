export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
const docThree = {
    uid: 40,
    resourceName: "Agrippa",
    data: "Agripp"
};
const docFour = {
    uid: 40,
    resourceName: "Gauis",
    data: { age: "4", name: "Emma" }
};
const getName = (data) => {
    console.log(data);
};
getName({ uid: 4, resourceName: "emma", data: { age: "4" } });
// console.table(docFour.data);
// console.table(docThree);
