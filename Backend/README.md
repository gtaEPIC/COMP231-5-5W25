# Deskify
Group 5 project. <br>
Deskify will be a web based ticket management system for IT support teams. <br>
It will allow users to create tickets for issues they are having with their computer and IT support teams to manage 
these tickets and resolve them.

## ⚠️ DATABASE SETUP ⚠️
The database library is mongoose. <br>
You will need to create a `.env` file in the root directory. <br>
Inside this file you should have the following variables: <br>
```
ATLASDB=<your atlas db connection string>
```
If you do not include this, your program will not work. <br>
**Do not surround with `"`, just use the text and make sure the password is correct.** <br>

## Branch Protection
The `main` branch is protected from being pushed to. <br>
All changes must be made with a branch and a pull request. <br>
**ALL PULL REQUESTS** must be reviewed by at least **3** other members of the team before being merged into `main`. <br>
When a pull request is ready for review, please add all other contributors to request a review. <br>
You can also enable Auto-Merge to automatically merge it when approved. <br>

### Pull request blocking
There is a github bot that will prevent pull requests from being merged if something is wrong. <br>
An example is leaking secrets. <br>

### I accidentally committed to main
If you accidentally commit to main, make a new branch from your current main. <br>
Push this branch to github. <br>
Then, reset your local main to the remote main. <br>
You can then create a pull request to merge your branch into main (If you're ready) <br>

## Issues
Our [Agile issue tracking](https://github.com/users/gtaEPIC/projects/4) it being handled with Github / Github Projects. <br>
Each issue is being tracked with the [Github Projects](https://github.com/users/gtaEPIC/projects/4) page. <br>
You can also see all the issues on the [Issues Page](https://github.com/gtaEPIC/COMP231-5-5W25/issues)

### Missing issues / new problems
If you find any issues that are not listed, please [create a new issue](https://github.com/gtaEPIC/COMP231-5-5W25/issues/new). <br>
It's possible I missed something, or you may have found a problem in the project.<br>

