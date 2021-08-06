# POA

# CI/CD

We use github actions.

## Section A

0. Project setup

- Add eslint + prettier + styling config for linting warnings and autofix on save

1. Single post component
   - takes title and body as props
   - been spending some time on [Angle.co](http://angle.co) recently and like their styling, will copy for the posts
   - add a palette of greys (copied from another lib)
   - add container styles for max width
2. Modify post
   - update post component with author name prop
   - create comment component which takes body and author name as props
   - But how to pass that data down from the home component? Don't want to have to pass comments through post component. Don't want to wrap components. Don't want to make multiple request. Fairly sure apollo can handle this so I could call a hook in the comment comment given the comment id. React Context would also work but I can't remember the pattern
   - given the time will use prop drilling
3. Select input for limit
   - can be as simple form and select element with an onchange callback
   - will update a GQL variable
   - would like to make this it's own component with a hook to update global limit state. A bit rusty on this though so given the time will just have it in the home component
4. Pagination controls
   - first need to get data from BE for current state
   - then can update the state with buttons
   - again, would like to have this in it's own component with a hook for updating global state but am rusty on the details so given the time will have it live inside the home component
   - took some time to remember 'classnames' library as way to combine class names for things like active states

## Section B

- I would store pagination state (limit, page) in the URL as query params - user could share page with others and also navigate back to the same state they previously had
- To persist across sessions I would persist pagination state in local storage. Local storage would be updated on pagination change and on init of the home page component the GQL variables could be retrieved from local storage
- I would probably use a hook for getting and setting local storage

# Log

- finished post component at 1:10
- finished comment at 2:10
- finished select at 2:30
- finished pagination at 3:20
- finished loading spinner at 3:26
- finished section B at 3:31
