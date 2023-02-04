# Challenge

We used NodeJS to develop the Backend and ReactJS to build the Frontend of the application. The challenge was to create a generic architecture that would allow the REST API to access data locally when the ERP database is not available. The solution should be reusable for other services and the middleware should be independent of the data structure being exchanged. The goal was not to make the app work offline but to find a way to update the data for offline use, either through manual user request or automatic background task within the app
