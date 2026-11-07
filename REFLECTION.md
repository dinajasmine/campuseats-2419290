# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)? 
    = In plain DOM code (imperative) I write step by step how to change the page, like createElement and appendChild. In React (declarative) I just describe what the UI should look like for the current data, and React updates the page for me.

2. Why must a component name start with a capital letter?
    = React uses the capital letter to tell a component like <Header /> apart from a normal HTML tag like <header>. If it is lowercase, React treats it as an HTML tag and it won't work as my component.


3. What does a fragment <>...</> do, and why not just use a <div>?
    = A fragment lets me return many elements together without adding an extra element to the page. A <div> would add an extra box in the HTML that I don't need and can mess up the layout.


4. Name one benefit of splitting the UI into small components.
    = Small components are easier to read, fix and reuse. For example, I can use MenuItemCard many times for every menu item.
