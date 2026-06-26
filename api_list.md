# DevTinder APIs

## authRouter
- POST /signup: To singup new user
- POST /login: To login the user present in database
- POST /logout: To logout the user present in database
- POST /forgot-password: To send the email to get the link of reset password token
- POST /reset-password: To reset the forgooten password using the token

## profileRouter
- GET /profile/view: To get which user is logged in
- PATCH /profile/edit: To edit the profile of logged in user
- PATCH /profile/editPassword: To edit the password, but here old password should be known

## connectionRequestRouter
- POST /request/send/:status/:userId: To send the interested or ingonre request to other users present in database
- POST /request/review/:status/:requestId: To accept or reject the request, the request in db should be interested and the requestId is that objects id

## userRouter
- GET /user/requests/received: To fetch the all pending requests of logged in user which are interested request not all
- GET /user/connections: To fetch all accepted connections to teh logged in user
- GET /user/feed - Gets you the profiles of other users on platform


Status: ignored, interested, accepeted, rejected