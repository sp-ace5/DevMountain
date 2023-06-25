/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
gitDefinition = 'Git is used for version control. Unlike github, git is the actually system behind github that allows you to push or pull from repositories stored on the internet such as github. '
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
gitHubDefinition = 'Git is used for version control. In simple terms, it allows you to store snapshots of your project that can be used to restore or have multiple people working on one project.'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
gitInitDefinition = 'This commands allows you to create an empty git repository. It places a .git folder in the project source folder.'
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
gitCloneDefinition = 'This command clones the remote repository to your local working machine.'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
gitStatusDefinition = 'This command tells you the current state of the repository, in other words, what files are different from your local to remote repository that could be committed'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
gitAddDefinition = 'This command adds new or changed files that are ready to be pushed. These files can be viewed using "git status".'
gitAddCode = 'git add .'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
gitCommitDefinition = 'This command finalizes the changes (and saves to local) that will be pushed to the repository to be saved. These files comes from the git add command.'
gitCommitCode ="git commit -m 'initial commit'"
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
gitPushDefinition = 'Finally, this command will push your local repository to the remote one saving it to the "cloud". Normally Github is used for remote but there are alternatives. '