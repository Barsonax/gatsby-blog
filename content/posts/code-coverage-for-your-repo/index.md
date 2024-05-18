---
title: Code coverage for your repo
date: 2018-11-07T18:48:51.000Z
tags: [Tests]
featuredImage:
  src: stephen-dawson-qwtcej5clys-unsplash.jpg
  description: Screen showing metrics
---

## Which unit tests am I missing?
This was the question I was facing when writing unit tests for [Singularity](https://github.com/Barsonax/Singularity). Since *Singularity* is a dependency injection container I had to make sure everything works like its supposed to. This automatically means I need to test alot of cases to make sure every one of those cases are not broken before releasing a new version.

So the solution was to write unit tests to test everything the API can do. One of the problems after writing a bunch of unit tests is that you start to lose track of which cases are tested and which are not. There are tools that can help you in getting insights in what code is still missing tests.

## Covering your tests

### Opencover
[Opencover](https://github.com/OpenCover/opencover) is a tool that can analyse what code your unit tests are covering. It doesn't just analyses if a certain method is being called but it will also see if everything inside the method is being used in a test.

Iam using [chocolatey](https://chocolatey.org/) to install tools like opencover in this article so you might have to install *chocolatey* first for local testing. [Appveyor](https://www.appveyor.com/) has *chocolatey* preinstalled already so you don't have to install it yourself. If you are using a different CI that does not have *chocolatey* you might be interested in the [installation instructions](https://chocolatey.org/install).
In order to use opencover we first have to install opencover:
```posh
# installs opencover
choco install opencover.portable
```

Then we can use this powershell script to generate a report
```posh
param (
  [Parameter(Mandatory=$true)]
  [string]$coverageFolder,
  [Parameter(Mandatory=$true)]
  [string]$coverageFilename,
  [Parameter(Mandatory=$true)]
  [string]$buildOutputFolder
)

# This will make sure the CI will fail if the something in this script fails (such as the unit tests).
$ErrorActionPreference = 'Stop'

# Using the full path since appveyor already has a different version installed.
$opencover_console = 'C:\ProgramData\chocolatey\bin\OpenCover.Console.exe'

# Clears the coverage output folder if it already exist
Remove-Item $coverageFolder -Recurse -ErrorAction Ignore
If (!(test-path $coverageFolder )) {
    New-Item -ItemType Directory -Force -Path $coverageFolder | Out-Null
}

$testdlls = (Get-ChildItem -Path $buildOutputFolder -Filter '*Test.dll*').FullName # Grab all test dll's in the buildoutput folder
$filter = '+[Singularity*]* -[Singularity*.Test]*' # This will determine what will be included in the results
$dotnetexe = 'C:\Program Files\dotnet\dotnet.exe'
$targetArgs = ' vstest ' + $testdlls

# the coverage xml file be put in here.
$output = $coverageFolder + $coverageFilename
&$opencover_console -register:user -target:$dotnetexe -targetargs:$targetArgs -filter:$filter -output:$output -oldStyle -returntargetcode -hideskipped:Filter
```

What this script does is make opencover run all the unit tests that are in the dll's of the buildoutput folder. Its also possible to directly target a csproj file but this makes it harder to run the tests for multiple test projects. This is why I output all my dll's to the same folder as it makes using opencover alot easier.

The *$filter* determines what assemblies will be included in the coverage results. Since I want everything in *Singularity* to be included I put in *+[Singularity\*]\**. However I don't want the unit tests themselves to be included so I put in *-[Singularity\*.Test]\**. For more info on filters I suggest you to read the [documentation](https://github.com/OpenCover/opencover/wiki/Usage#understanding-filters).

After analysing every test opencover will output these results to a xml file. However this xml file is not easy to read for human which brings us to our next tool.

### Codecov
[Codecov](https://codecov.io/) is a site that can visualize the code coverage results. All you need is to send the xml opencover generates to codegov and it will use it to visualize your code coverage which will look like this:

![Code cov sunburst](./codecov_sunburst.jpg)

So lets push the xml file opencover generated to codecov. First we have to install codecov:
```posh
# Installs codecov
choco install codecov
```

Then you can use this script to publish the generated report to codecov:
```posh
 param (
  [Parameter(Mandatory=$true)]
  [string]$codegovtoken,
  [Parameter(Mandatory=$true)]
  [string]$coverageFile
 )

codecov -f $coverageFile -t $codegovtoken
```

To publish you do need a codecov token which I have stored in my appveyor.yml. It goes without saying you want to keep the token private so either don't publish it online or encrypt it like I did. Appveyor makes encrypting tokens like this really easy with the [secure variable](https://www.appveyor.com/docs/how-to/secure-files/). The encrypted value will look like this in your *appveyor.yml*:
```yml
environment:
  codegov_token:
    secure: HdCtITC0uUqTr/C3OSs4M1Ao79R8UULQtiRUqSrGuQpmqrZXPfNGz+s0uibvyz49
```

In order to get your codecov token you need to register and add your repository. You can then see your token if you open the repository in codecov and go to settings.

Out of the box codecov will analyse your repository as a whole but you can tell codecov what to analyse and even split your repository up in different projects using a *codegov.yml* file in the root of your repository:
```yml
coverage:
  status:
    patch: off # Normally codecov will reject any commits that reduce the code coverage
    project:
      default: false # Turn of the default as we will be telling codecov where the projects are below
      Singularity:
        target: 90%
        paths: "Singularity/"
      Singularity.Duality:
        target: 60%
        paths: "Duality/Source/Code/Singularity.Duality/"
```

Here I set a much lower target for *Singularity.Duality* as its much harder to test everything due to dependencies.

### Putting it all together
In order to use the scripts we created I have a CI script that calls them all in order:
```posh
# this is where your coverage xml will be located
$coverageFolder = '.\coverage\'
$coverageFilename = 'test.coverage.xml'
$coverageFileFullname = $coverageFolder + $coverageFilename

# this is where I put my dll's
$buildOutputFolder = $PSScriptRoot + '\BuildOutput\'

.\InstallChocolateyPackages.ps1
.\Build.ps1
.\RunOpenCover.ps1 -coverageFolder:$coverageFolder -coverageFilename:$coverageFilename -buildOutputFolder:$buildOutputFolder
.\PublishCoverage.ps1 -codegovtoken:$env:codegov_token -coverageFile:$coverageFileFullname
```
Note the *$env:codegov_token* which will grab our codecov token from the *appveyor.yml*.

Then in order to use this CI script on *appveyor* put this in your *appveyor.yml*:
```yml
build_script:
- ps: Invoke-Expression .\CI_script.ps1
```

Depending on which CI you use this may vary but the general idea will be the same.

## Wrapping up
With the above scripts integrated in the [Singularity repository](https://github.com/Barsonax/Singularity) every commit I push will be analysed. I no longer have to search manually for code that is not tested.

However there are some things to be kept in mind. Code coverage is not everything. It just tells you if some code is being used in a test or not. Whether that test is a good test or a bad test is up to you. 100% code coverage alone won't make your tests or code themselves any better.
