import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Yoshi", "web work", 50);
docTwo = new Payment("Agrippa", "Teaching", 500);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
// console.log(docs);

// const invOne = new Invoice("mario", "Buying a shoe", 500);
// const invTwo = new Invoice("Luigi", "Buying a bag", 400);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// List template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul!);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
   e.preventDefault();
   let doc: HasFormatter;
   if (type.value === "invoice") {
      doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
   } else {
      doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
   }
   list.render(doc, type.value, "end");
});
