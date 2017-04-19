## Cookie Monster App

<img src="https://media.giphy.com/media/E6pfGEOsrDidq/giphy.gif" width="400" title="cookie monster">

In this lab we will explore cookies and sessions in rails. First we'll play with manually setting cookies on the front-end. Then we'll explore how cookies are used to create "sessions" that keep track of user data on the server-side.

## Setup
Clone this repo, bundle, and run the server.

```bash
cd cookie_monster_app
bundle
rails s
```

> Note: This rails application does not use a database or turbolinks.

#### Challenges
To begin, visit `http://localhost:3000/desserts` in your browser, with the Chrome Console open.

1. Use the Chrome Console to manually set a cookie for the website to: `fav_color=blue`. When you refresh the page, a script running on the page will detect the color and apply it to the background of the page.
2. Manually add a second cookie (`can_access=yeah`) so that you can access the 3 `desserts#show` pages (`/desserts/1`, `/desserts/2`, `/desserts/3`).
  * The server is actually checking for this cookie in the HTTP Request Headers (see the `desserts#show` controller). Without this cookie, you will be blocked (redirected) from viewing all dessert pages!
3. When a user clicks "Save as Favorite" on a `desserts#show` page, store the dessert id in the user's session. (See `app/controllers/desserts_controller.rb`)
4. Modify the `desserts#show` view to indicate whether the dessert shown is the user's favorite dessert (See `app/controllers/desserts_controller.rb` and `app/views/desserts/show.html.erb`).
  * How would you compare the current_dessert to the user's favorite dessert? Can you use this comparison to create a "conditional view"?
5. Stretch: Can you DRY up the controller code by using a `before_action` to check whether the user is logged in?

> Pay special attention to the `Application > Cookies > http://localhost:3000` tab in your Chrome Developer Console. The Cookies-view allows you to view and delete cookies associated with the current domain.

#### Take Away
**What's the difference between a cookie and a session?**

By the end of this lab you should be able to explain how and why these cookies are present in your browser:

<img width="767" alt="screen shot 2017-03-09 at 9 38 36 am" src="https://cloud.githubusercontent.com/assets/1489337/23762877/5a71b454-04ac-11e7-8d35-04c77f478837.png">


#### Resources
* [Cookies, Sessions, & Flash Messages](http://www.theodinproject.com/ruby-on-rails/sessions-cookies-and-authentication)
* [Rails Guides: Securing Sessions](http://guides.rubyonrails.org/security.html)
* [Flash Messages](http://api.rubyonrails.org/classes/ActionDispatch/Flash.html)
