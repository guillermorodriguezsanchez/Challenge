# Challenge

Design a template/prototype architecture in which the same application would be 
able to work when the ERP database is not available. In other words, the REST API 
should be able to access the same data locally. This solution should work for any 
service, so middleware must not depend on the structure of the data being 
exchanged.
The purpose of the challenge is not to make the app work offline but to find a 
generic way (reusable in other apps) to have the data updated for offline use (the 
data update is either manually requested by the user from the app or can be done 
automatically from a background task of the app).
