# How to Make Changes on GitHub (With Direct Access)

## Introduction

As a collaborator with direct access to the [ALUMNI-MEET](https://github.com/vikash721/ALUMNI-MEET.git) repository, you can make changes directly to the repository. This guide provides instructions for initializing a repository, making changes, committing them, and ensuring your modifications are smoothly integrated.

## Initial Setup

### 1. Initialize a Git Repository

If you're starting with a new project or directory, follow these steps:

- **Navigate to Your Project Directory**

    ```bash
    cd path/to/your/project
    ```

- **Initialize a Git Repository**

    ```bash
    git init
    ```

- **Add the Remote Repository**

    ```bash
    git remote add origin https://github.com/vikash721/ALUMNI-MEET.git
    ```

    This links your local repository to the remote repository on GitHub.

## Making Changes on GitHub

### 1. Cloning the Repository

If you haven’t cloned the repository yet:

- **Clone the Repository**

    ```bash
    git clone https://github.com/vikash721/ALUMNI-MEET.git
    ```

- **Navigate to the Cloned Directory**

    ```bash
    cd ALUMNI-MEET
    ```

### 2. Creating a New Branch

Before making changes, create a new branch:

- **Create and Switch to a New Branch**

    ```bash
    git checkout -b your-branch-name
    ```

### 3. Making Changes

Edit the files using your preferred code editor. Save your changes after editing.

### 4. Staging and Committing Changes

Once changes are made:

- **Stage Your Changes**

    ```bash
    git add .
    ```

    Alternatively, stage specific files:

    ```bash
    git add file1 file2
    ```

- **Commit Your Changes with a Descriptive Message**

    ```bash
    git commit -m "Describe the changes made"
    ```

### 5. Pulling the Latest Changes

Ensure your branch is up-to-date with the main branch:

- **Switch to the Main Branch**

    ```bash
    git checkout main
    ```

- **Pull the Latest Changes**

    ```bash
    git pull origin main
    ```

- **Switch Back to Your Branch and Merge the Latest Changes**

    ```bash
    git checkout your-branch-name
    git merge main
    ```

### 6. Pushing Changes to GitHub

Push your branch and changes:

- **Push Your Branch**

    ```bash
    git push origin your-branch-name
    ```

### 7. Creating a Pull Request

To merge your changes into the main branch:

- **Go to the Repository**

    [ALUMNI-MEET](https://github.com/vikash721/ALUMNI-MEET.git)

- **Click on the Pull Requests Tab**

- **Click the New Pull Request Button**

- **Select Your Branch and Compare It with the Main Branch**

- **Add a Descriptive Title and Comment about the Changes**

- **Click Create Pull Request**

### 8. Reviewing and Merging Pull Requests

If you have permissions to review and merge:

- **Go to the Pull Requests Tab in the Repository**

- **Click on the Pull Request You Want to Review**

- **Review the Changes and Comments**

- **Click Merge Pull Request to Integrate the Changes into the Main Branch**

- **Confirm the Merge**

## Summary

With direct access to the `ALUMNI-MEET` repository, you can efficiently create branches, commit changes, and push directly to the repository. Using branches for changes and pull requests for merging ensures a clean project history and facilitates smooth collaboration. Initializing a repository and adding a remote link are essential steps if starting a new project or syncing with an existing repository.
