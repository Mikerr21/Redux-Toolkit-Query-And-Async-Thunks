#We created a JSON-Server to manage our database.
#First you have to know about Eager over fetching: At App Startup, the over-fetching occurs when a client retrieves more data than it actually needs.   
What if the client has a bandwidth constrained connection: We should implement lazy fetching(Make a single request that asks for a minimum amount of data)
Bonus : Over loading is a database optimization strategy where related data is loaded in advance ( in a single query) along the main data to minimize the number of database queries.
We are going to first look on how to manage data fetching with plain redux ( Async Thunks Functions), then Redux Toolkit Query(This is an add-on).

#1st Tip: Never make a request inside a reducer, because they should be 100% synchronous and only operate on their arguments - no outside variables! 
##Change in state when request starts, finishes, or fails. ->>>
#Adding state for data loading at main website screen: While we're fetching the data, Data fetched, and error while loading
#User loads loads app: we set isLoading to true, data set to empty array and error to null
#Response!: isLoading set to false, data is found! and error set to null
#Error occured in the request
isLoading set to false, data is empty array and error got message to 'Failed'

## The above will be implemented using async thunk function:
The Async Thunk Function automatically dispatches actions of type(pending) or (fulfilled) or(rejected)during data-loading.
See it's implementation.

## Fined-grained loading state: 
So when deleting an element from a list, we would like to have a snipper loading whilst deleting the element, but we do not know on which element the spinner should show up. Here comes local fine-grained local state, where we store our state for that inside of react component, not inside redux store anymore.

## Hooks used:useState,useEffect,useCallBack to memoize functions between renders.
useCallBack hook takes 2 arguments, callback function and array of dependencies, if any of the dependencies change, the memoized function is recreated, otherwise the cached version returned

## Don't forget there are 2 ways for data fetching in Redux Toolkit:Async Thunk Funtions or Redux Toolkit Query.
Meanwhile Redux Toolkit Query takes care of making requests, handling errors, handling loading state, caching data,refetching data-> makes handling loading data much easier

## Redux Toolkit Query : fetchBaseQuery is a function you can import from the library and use it to fetch data -> gives us pre-configured version of fetch

THE API needs to store the state related to data, request status, errors, Add reducerPath property with the name of the path where we store the data.
The API needs to know how and where to send requests; so add 'baseQuery'
Add 'endpoints', one for each kind of request you want to make. Reqs that read data are queries, write data are mutations. ->
we need to know if it's a query or a mutation (query = get request) - (mutation=changing smth(post,delete,put))

Export all of the automatically generated hooks.

There is an automatic data refetching using the "tag" system
Tags are a lot easier if you first understand how RTKQ tracks requests

Redux Toolkit Query tracks quests and tracks what data is being fetched and so on.
## TAG system is used to mark certain queries as being 'out of date' after specific mutations are executed.