---
title: Streamlining releases
date: 2018-11-02T18:48:51.000Z
categories:
  - Programming
featuredImage:
  src: robert-metz-p4cxvs9ptww-unsplash.jpg
  description: Girl letting go a latern
---

## The old release workflow
Last week I was busy streamlining the [Singularity](https://github.com/Barsonax/Singularity) repository. One of the things I did was streamlining releasing a new version. Whenever I had to make a new release I had to do the following steps:
1. Bump the *version* in *appveyor.yml*, commit and push it
2. Create a new tag and push it
3. Check if the nuget package was really published and I didn't broke something related to packaging
4. Write some release notes and make a new github release with the tag we just created

This was not only costing me more time but also more prone to errors. The version information is stored on 2 places for instance which means I have to update them separately. This can be done better.

## Gitversion to the rescue

Bumping the version in step 1 is made completely obsolete with [gitversion](https://github.com/GitTools/GitVersion). I simply do not need a version variable anymore. Its all defined in the git repository itself now. I can now simply call *gitversion* while in a git repository and it returns me with version information.

Gitversion will look at the latest tag and use that as a base. At of the time of writing 0.4.0 is the latest tag in the Singularity repository so it will take this as the base version.

Then it will look at the configuration and the git history to figure out the next version. For instance my *gitversion.yml* is as follows:
```yml
mode: ContinuousDeployment
branches:
  hotfix:
    tag: alpha
```

The actual config that gitversion uses is much more complicated as it has alot of [default values](https://gitversion.readthedocs.io/en/latest/configuration/#branch-configuration) setup for you. For now we are just interested in how gitversion increments the version. So given a base version of 0.4.0 (due to the tag I mentioned earlier):
- A commit on develop will be build with 0.5.0 as version
- A feature branch will inherit *minor* from the develop branch and thus will also have 0.5.0 as version
- A hotfix branch will be build with 0.4.1 as version

This is because of the *increment* value. The develop branch has *Minor* so the minor version will be increased. Hotfix branches have *Patch* and thus the patch version will be increased.

So depending on your preferred workflow you might have to configure *gitversion* a bit.

### Unique versions
Since iam using *mode: ContinuousDeployment* it will append a number to the version which is the amount of commits since the last tag. This ensures that every version in the CI build is unique and that nuget won't complain that iam pushing the same version.

Its worth noting here that I rebase my branches before merging them in develop. If you do not do this it is possible there will be situations where it will append the same value to the versions.

### Prerelease versions
However gitversion does more than that. If the current commit is not tagged it will append a suffix to the version. The value of this suffix is given by the *tag* value of the *branch* in the *gitversion.yml*. This means I can easily keep deploying to nuget on every PR that goes to develop as it just marks it as a prerelease package. This also makes step 3 obsolete since I will know before I make a release if something package related is broken.

### Automating gitversion
Ofcourse manually calling *gitversion* everytime is not what I want. I want the CI server to do this for me. So I made this [build script](https://github.com/Barsonax/Singularity/blob/f257aff12cc28d7646dd46391f02f6fa41f4d674/Build.ps1) that feeds the version information that *gitversion* returns into *dotnet build* and *dotnet pack*.

Do note that on *appveyor* there is by default a older version of *gitversion* installed which seems to handle *gitversion.yml* differently. This is why I install *gitversion* myself using *chocolatey* in this [script](https://github.com/Barsonax/Singularity/blob/f257aff12cc28d7646dd46391f02f6fa41f4d674/InstallChocolateyPackages.ps1) and then use the full path to the *gitversion.exe* in the build script to call it. This ensures that iam using the correct version.

## Release notes
Still whenever I make a new release I should write release notes to let ppl know what has changed. I usually tend to skip this part though since iam a bit lazy...
However with [GitHubReleaseNotes](https://github.com/StefH/GitHubReleaseNotes) this is now super easy to do. Just install it with:
```
choco install GitHubReleaseNotes
```
Then cd to your repository folder and run it:
```
GitHubReleaseNotes.exe --output ReleaseNotes.md
```
It will gather all the PR's and use those to create release notes for each tag. Ofcourse this does mean your PR's need to have understandable names for the release notes to be of any value.

### Automating GithubReleaseNotes?
Currently it just outputs a *ReleaseNotes.md* file from which I can then copy the text to a github release. This works pretty fast already but it would be even better if it would do this automatically for me when I push a tag. Unfortunally I have not yet found a way to do this.

## The new release workflow
So my 4 step workflow is now changed to:
1. Create a new tag and push it
2. Run `GitHubReleaseNotes.exe --output ReleaseNotes.md` and copy the release notes to a new githubrelease

On top of this simplified workflow I can now easily provide prerelease packages instead of just stable releases.
