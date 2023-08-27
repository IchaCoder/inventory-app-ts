import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
   constructor(private container: HTMLUListElement) {}

   render(item: HasFormatter, heading: string, pos: "start" | "end") {
      const li = document.createElement("li");

      const h4 = document.createElement("h4");
      h4.innerHTML = heading;
      li.append(h4);

      const p = document.createElement("p");
      p.innerText = item.format();
      li.append(p);

      if (pos === "start") {
         this.container.prepend(li);
      } else {
         this.container.append(li);
      }
   }
}

// GENERICS

interface Resource<T> {
   uid: number;
   resourceName: string;
   data: T;
}

const docThree: Resource<string> = {
   uid: 40,
   resourceName: "Agrippa",
   data: "Agripp"
};

const docFour: Resource<object> = {
   uid: 40,
   resourceName: "Gauis",
   data: { age: "4", name: "Emma" }
};

const getName = (data: Resource<object>) => {
   console.log(data);
};

getName({ uid: 4, resourceName: "emma", data: { age: "4" } });

// console.table(docFour.data);
// console.table(docThree);
