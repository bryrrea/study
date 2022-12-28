# GIT AND GITHUB  

## 1. Versioning  
Versioning is important for creating code, scripts, school or university assignments, and even for writing books or texts. Everyone has used some form of versioning without even realizing it. You have probably used versioning if you have done reports in college, for example, since you must have saved (in the cloud or locally) several versions before you had a final version. This is called "Local Version Control System". The problem with this kind of versioning is that it will probably work for small projects, but it can be a complicating factor if you are working on a large project or if your project involves many people.  
The first time versioning became a real subject was in 1972, when Marc Rochkind developed the Source Code Control System (or SCCS). However, the software had its public release only in 1976. Since then, a lot changed when we talk about Version Control Systems. In 1982, RCS (or Revision Control System) was released and took over the market. In 1986, CVS (or Concurrent Versions System) was released as a front-end to RCS. This software was dominant until 2004, when Apache released SVN (or Subversion). Today, Git is the software that is used more often.  

### 1.1. Benefits of versioning  
- History control: Versioning a project is like "controlling the history of your project". This means that you can analyze each step of the project and even undo a step or get an earlier version of it.
- Teamwork: Many people can work on the same project at the same time without version conflicts.
- Marking and recovery stable versions: You can mark a stable edition to recover it whenever you want.
- Branching: the project can be sectioned into different topics that can be worked on in parallel without one interfering with the other.
- Security: basically, each software or VCS has a way to control and prevent the intrusion of malicious agents, and each developer has a unique hash-key to access the project.
- Traceability: almost all VCS can help you know the location, state, and quality of a file.
- Organization: some VCS software allows you to control the origin of the whole project through a front-end design.
- Reliability: since you can work with remote repositories (cloud), losing your files is really unlikely, and you can create new projects without affecting others.  

## 2. Version Control System types  
There are three classes of Version Control System:  
- Local: discussed earlier.
- Centralized: the developer needs to have a constant connection to a single server (central repository) to commit changes to the project. This server has all the version control files (versions) on and from each client. This is the class of software like SCCS, RCS and CVS.
- Distributed: the developer clones a repository with files and history, minimizing the potential of losing everything if something bad happened to the server. These systems handle very well having multiple remote repositories, since collaboration is optimized in different ways. This is in the class of software like Mercurial and Git.  

![Types of VCS](./images/tipos.jpg)  

## 3. Git  
Now that I know something about the history and what is VCS, it's time to talk about Git, a distributed open source VCS. Git was created by Linus Torvalds (creator of Linux) in 2005. Linus hated using CVS and SVN in Linux kernel project, and started using BitKeeper (a private VCS). At first, BitKeeper allowed free use of the tool. However, moments later, they tried to difficult access for Linux developers by charging to use the tool. Linus broke off the relationship with BitMover and started to create his own VCS (Git).  

### 3.1. SHA1 Encryption  
SHA1 is an encryption algorithm, i.e. it is responsible for encrypting files. The main purpose of using this algorithm is to ensure that the target file is encrypted in order to guarantee a unique and secure identification. Encrypting the file with the SHA1 algorithm will generate a 40 character code that will serve as a **unique identifier** of the file. For example:   

```bash
echo "Hello World" | openssl sha1
(stdin)= b6b33b33738b3ec36a8a825fc1f278cf913c91d3
```  

By running the first line of the above code in the terminal, a 40 character code was generated that is the unique identifier for the text "Hello World". Now, see what happens to the encrypted code when we add a comma between "Hello" and "World".  

```bash
echo "Hello, World" | openssl sha1
(stdin)= 7b4758d4baa20873585b9597c7cb9ace2d690ab8
```  

See above that the 40-digit code has changed, because there has been a change in the original text. Now, see what happens when we change the word "World" to "world".  

```bash
echo "Hello, World" | openssl sha1
(stdin)= 7b4758d4baa20873585b9597c7cb9ace2d690ab8
```  

The 40-digit code has been changed again, because we had a new change in our initial text. Now, see what happens when we run the first text again.  

```bash
echo "Hello World" | openssl sha1
(stdin)= b6b33b33738b3ec36a8a825fc1f278cf913c91d3
```  

As you can see, the same encryption code was generated as in the first case, which proves that the identification key is **unique and non-transferable**!  

### 3.2. GIT internal objects  
In short, GIT works with three internal objects: **blob**, **tree** and **commit**.  

- blob: the object responsible for storing the GIT metadata of the file or string. The main elements in a blob are the file type, the size, the string characters, and finally, the file or text that will be stored in that object.
- tree: GIT object responsible for storing blobs and pointing to them. The trees assemble the entire storage structure of the files, consisting of the type (tree), the characters **\0**, the stored objects (blob) and their location, the SHA1 codes, and the file stored in that structure. The trees are recursive objects, that is, they can store and point to other trees (like the directory system of an Operating System, for example). Remember that the SHA1 code of a tree changes every time the blob or tree object it contains changes.
- commit: GIT object that puts everything together in one place. A commit consists of trees, a relative, the author, a message, and a **timestamp** that serves to set a date and time for the creation of that object and its contents, creating a history of changes made to that object. This is extremely useful, as it literally gives us the power to "go back in time", that is, to go back on a specific commit to retrieve it.  

Figure 2 shows that a commit points to a tree, which in turn points to one or more blobs. Any change to a blob generates a new hash, as well as changing the hash of both (the tree and the commit), creating a temporal history of changes.  

FIGURE 2: Internal GIT objects  

![](https://git-scm.com/book/en/v2/images/data-model-3.png)  

Source: CHACON, STRAUB, 2022  

## 4. Stages and commits  
Figure 3 shows the stages that occur before the commit of a GIT repository.  

FIGURE 3 - Commits stages  

![](https://miro.medium.com/max/3000/1*mZV9QPpu6tPC2MaoDUs_Zw.png)  

Source: MAHARJAN, 2019  

You use the **`git status`** command to check the status of a file or repository. In short, there are five stages in GIT: Untracked, Unmodified, Modified, Staged, and Committed.  

- Untracked --> This stage means that GIT has not "saved" the file yet. This is usually the initial stage of a newly created file. In order for GIT to "record" the change, you use the **`git add`** command to add the change to the **staged** queue.
- Staged --> This stage means that the changes are ready for **commit**. The file can be removed from this stage by using the **`git rm --cached <filename>`** command.
- Committed --> This stage means that the file has been **committed**, that is, the changes made to the file are already in the repository. To perform a commit, one uses the command **`git commit -m "A short message summarizing the *commit"`**, where the **flag** "-m" represents the commit message.
- Modified --> This status means that changes have been made to the file or repository. In order to change the changes to **Staged**, you need to use the **`git add`** command.  

## 5. GitHub  
GitHub acts as a remote server that stores GIT repositories. Care must be taken, because what is done inside GitHub is not saved in the local repository (computer), which can cause conflicts.  
The command used to synchronize the local repository with the remote server is **`git push`**. It is interesting to note that GIT and GitHub work with **branches**, i.e. "branches" that store specific changes to files in their development timeline.  
The main branch is called **master**, and all other branches created must be synchronized with the master at some point. This action is called **merge**, and it is not uncommon to have merge conflict on large projects. On smaller projects, meanwhile, the most common merge conflict is when a change is saved directly to GitHub **before** being saved to the local GIT repository. These conflicts are usually resolved by using the **`git pull`** command to "pull" what is in the remote repository into the local repository.  
Note that the difference between the **`git pull`** and **`git clone`** commands is evident, since the former is about synchronizing only the **differences** between the remote and local repositories, while the latter is about making an identical copy of **all** the remote repository to the developer's computer.  

## **Sources**  
- CHACON, S.; STRAUB, B. **Pro Git**, 2nd ed. Apress, 2022. Available at: [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2).  
- MAHARJAN, Y. **An Intro: Git and GitHub for Starters**. Available at: [Medium](https://blog.lftechnology.com/an-intro-git-and-github-for-starters-1525a1d8c40).
