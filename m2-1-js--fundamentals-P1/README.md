# JavaScript Fundamentals - Part 1

Today we will be learning the fundamentals of JavaScript!

## Setup

In order to easily evaluate your answers, you will need a `node` environment. We could use the browser, as I did during the lecture, but it would be easier to manage if there was a way to do this in VS Code. There is! 🤯

You can toggle the terminal window in VS Code with the following keyboard shortcut:

- `[ctrl + j]` on Windows
- `[cmd + j]` on Mac

This will open an instance of the terminal (Mac) or the PowerShell (Win).

There are 2 ways to evaluate your JS using Node:

### Type JS directly into the Node Env.

- Type `node` in the terminal, and hit `enter`.

This will turn that terminal into a Node environment for you to play with.

You can type JavaScript in the same way I did while using the web browser console.

#### Exit the Node Environment

To exit/quit Node and get back to the terminal, do `[ctrl + c]` twice.

### Use Node to execute files

You can also run the exercise file directly in the terminal. To do this, you will need to type the following command at the terminal/PowerShell prompt:

```js
node <PATH TO FILE>
```

The _easiest_ way to do this is to type `node`, hit [space] and then drag the file you want to evaluate from the VS Code sidbar into the terminal. This will place the path into the command line.

Alternatively, if you know how to navigate the file structure in the terminal, you open the folder tha contains the exercise and you type `node <FILE_NAME>`.

#### Navigating folders in the terminal...

- Type `ls` to see the contents of the folder you are currently in.
- Type `cd <FOLDER NAME>` to go into that folder.
- Repeat the process until you reach the folder you are looking for.

- Type `cd ..` to go back up a level

##### TIP!

Once you start typing the folder name, you can hit `[tab]` to autocomplete the name. If there is more than one, it will present you with selectable options.
