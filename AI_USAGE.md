# AI usage log
## Week 1
- Tool(s): None
- What I asked for: -
- What I kept, changed or rejected, and why: -
- One thing the AI got wrong and how I fixed it: -

## Week 2
- Tool(s): None
- What I asked for:-
- What I kept, changed or rejected, and why:-
- One thing the AI got wrong and how I fixed it:-

## Week 3
- Tool(s): Claude
- What I asked for: Guidance on how to implement my personal feature (search menu by name)
- What I kept, changed or rejected, and why: AI gave me the search box code. I kept the idea of calculating the filtered items directly in the render (derived list) instead of storing the filtered list in a new `useState`
- One thing the AI got wrong and how I fixed it: AI's suggests to delete my `items.length === 0` check which handles empty menus. I fixed it by keeping my original empty state check and add a second check for when the search query returns 0 results.