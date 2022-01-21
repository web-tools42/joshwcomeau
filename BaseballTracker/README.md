Baseball Tracker
================

For a recent job interview, I was tasked with creating a mobile interface to the Major League Baseball API. I chose to use Rails and Angular.js.

The app needed to fetch the games for a given day, and display the home/away teams, the score, and the outcome - A surprising amount of games get rescheduled or canceled - probably weather related, but I'm not a baseball fan so who knows. Maybe there are occasional shortages of baseballs?

The list needed to be sortable by date; both with next/previous buttons, and by entering a specific date.Additionally, since we're in Toronto, any game featuring the Blue Jays needed to be pulled to the top of the list. Finally, on games that there are no games, a message needed to be displayed to inform the user.

**Time of execution: 1 hour 20 minutes.**
Were this to be a real app, I'd polish a lot of things. It's calling out for a datepicker, for one!

