# Food-Piper
A social media web-application specially designed for the food blogging community.

You a food blogger, how can you use Food-piper to your benefit?
Ans:-Food-piper provides you a platform to develop a strong network within the food blogging community by developing your social media presence.You a food blogger can easily
create an account and then post articles on your food blogging endevours. You can like,comment to the articles shared by other food bloggers and make friends with them as well
so that you can develop a more close contact.Your posts and friends on the website would help you develop a popularity among the other food-bloggers using the same website.

Features that Food-piper provides you:
  * To create an account and keep all your articles in an organised manner in the application.
  * To view articles written by other food-bloggers where you can like or comment.
  * You can make friends with other food bloggers and chat with them using our real-time chatting feature
  * You can receive a report on your posts and articles via our mailing engine to your registered email Id
  
For the geeks out there, the technology-stack which I have used to develop the project are:
  * It is basically a NodeJS application, acting as a social-media website which I have created following a MVC architecture and using ExpressJS framework.
  * The View part I have created with HTML,CSS,Javascript and SASS
  * The Controller part has been created using NodeJS
  * The Model is sitting upon a MongoDB database which our Node server interacts using Mongoose module.
  * The user authentication and session creation I have maintained using Passport.JS. I have created authentication feature using two different strategies:
           * local-strategy: I have created a local credential for session maintainence of the user after authentication locally from the registered user database and stored 
                             the encrypted sessional key in the cookies for user-session creation. The sessional information is also stored in the database using Mongo-store
           * local-google-oauth: I have used a third party google api to create authentication credentials and use it for session creation of the user.
  * I have maintained a chatting engine using Socket-IO.
  * I have maintained a mailing engine using third party gmail SMTP server as email-client .

Hope you like the application
