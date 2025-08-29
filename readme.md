## Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementById
- Selects an element by its **id**.
- Returns only **one element** (or `null` if not found).
- Example:
  ```js
  const title = document.getElementById("main-title");



### getElementsByClassName

- Selects all elements with the given class name.

- Returns an HTMLCollection (like an array but not exactly).

- It is live, meaning if new elements with that class are added later, the collection updates automatically.
- Example:
  ```js
  const items = document.getElementsByClassName("card");

## querySelector

- Selects the first element that matches a CSS selector.
- Example:
  ```js
  const firstCard = document.querySelector(".card.active");


### querySelectorAll

- Selects all elements that match a CSS selector.

- Returns a NodeList (static, does not update automatically).
- Example:
  ```js
  const allCards = document.querySelectorAll(".card");


# Q2: How to Create and Insert a New Element into the DOM

In JavaScript, you can create and insert a new element into the DOM in a few simple steps.

---

## Step 1: Create the element
Use the method `document.createElement()` to create a new HTML element.

```js
const newDiv = document.createElement("div");


Step 2: Insert into the DOM

Finally, attach the element to an existing parent node using methods like:

appendChild() → Adds as the last child.

prepend() → Adds as the first child.

append() → Similar to appendChild but can add multiple nodes or text.

insertBefore() → Inserts before a specific node.


## Q3: What is Event Bubbling and How Does it Work?

## 📌 Definition
Event Bubbling is a concept in the DOM (Document Object Model) where an event starts from the **target element** (the element that was actually clicked or interacted with) and then **bubbles up** through its ancestors (parent, grandparent, all the way up to `document`).

In other words, when you click on a child element, the event is first handled by that child, then its parent, then the parent of the parent, and so on.

---

## 📌 How It Works
1. Suppose you have a `div` inside another `div`.
2. When you click the inner `div`, the event fires on that element **first**.
3. After that, the same event moves upward (bubbles) to the parent element.
4. Then it continues to bubble up until it reaches the `document`.

## Q4: What is Event Delegation in JavaScript? Why is it Useful?

## 📌 Definition
Event Delegation is a **JavaScript pattern** that allows you to handle events for **multiple child elements** by adding a single event listener to their **common parent**.  
Instead of attaching event listeners to each element individually, the parent element "listens" for events that bubble up from its children.

---

## 📌 How It Works
- Events in JavaScript **bubble up** (child → parent → document).
- You attach **one listener** to a parent element.
- Inside that listener, you check which child triggered the event (using `event.target`).
- Then you execute the appropriate logic.


## Q5: What is the difference between preventDefault() and stopPropagation() methods?

## 📌 1. preventDefault()
- The `preventDefault()` method **prevents the default action of an element** from happening.
- It **does not stop** the event from bubbling up the DOM tree.
- Example: Preventing a link from redirecting or stopping a form from submitting.


## 📌 2. stopPropagation()

The stopPropagation() method prevents the event from bubbling (or trickling) up the DOM tree.

The default behavior of the element will still happen, but the event won’t move to parent elements.