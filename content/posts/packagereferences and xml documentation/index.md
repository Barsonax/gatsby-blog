---
title: PackageReferences and xml documentation
date: 2020-04-20T11:00:00Z
description: Missing files with PackageReferences
tags: [.NET, Nuget]
featuredImage:
  description: lost in the desert
  src: finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg
---

## PackageReferences

PackageReference is the new way of referencing nuget packages in .NET projects. Compared to the old system its much cleaner as everything is now in the csproj file and you don't have to reference transitive dependencies. However its behavior is quite different. In the old system when you build a project you would find files like the xml documentation in your build output. With PackageReferences this is no longer the case though.

This change in behavior can cause problems. For instance in the open source game engine [Duality](https://www.duality2d.net/) the object inspector will show you the xml documentation of a class:

![Duality Help Advisor](dualityhelpadvisor.jpg)

In order to do this it needs the xml documentation file to be present next to the dll file. Another example where you need the xml documentation file is [Swagger](https://swagger.io/).

## MSBuild scripts to the rescue
Luckily we can solve this issue with a little msbuild script. With the following script we can get the paths to the xml files like so:
```
  <Target Name="Foo" BeforeTargets="Build">
    <ItemGroup>
      <DocumentationFiles Include="%(Reference.RelativeDir)%(Reference.Filename).xml" />
    </ItemGroup>

    <Copy SourceFiles="@(DocumentationFiles)" DestinationFolder="$(OutputPath)" Condition="Exists('%(RootDir)%(Directory)%(Filename)%(Extension)')" />
  </Target>
```
You can copy this script in your csproj or add it to a [Directory.Build.props](https://docs.microsoft.com/en-us/visualstudio/msbuild/customize-your-build?view=vs-2019#directorybuildprops-and-directorybuildtargets) file so you can share it with multiple csprojs.

Lets break the script down:
```
<DocumentationFiles Include="%(Reference.RelativeDir)%(Reference.Filename).xml" />
```
We use %(Reference.RelativeDir) and %(Reference.Filename) to get the paths to all references, this includes any transitive dependencies and it does not depend on a hardcoded targetframework. We don't use the extension of the reference because we want to look for .xml files instead of .dll files. This means that if the reference points to a .dll file and in the same folder there is a .xml file with the same name as the dll file the path should match. For more information about these properties you can read this [article](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-well-known-item-metadata?view=vs-2019).

The next step is to use this list of paths to copy the files:
```
<Copy SourceFiles="@(DocumentationFiles)" DestinationFolder="$(OutputPath)" Condition="Exists('%(RootDir)%(Directory)%(Filename)%(Extension)')" />
```
We input the list of paths to a copy task to copy the xml files. Because not all files might exist, for instance when a package does not have xml documentation, we have to add a `Condition` that checks if the file exist.

And thats it. Now you will see .xml files in your build output next to the .dll files. If you need other files to be copied as well you can change the extension or use `;` to include multiple extensions. For instance if we want to copy .pdb files as well we can do this:
```
<ReferenceFiles Include="%(Reference.RelativeDir)%(Reference.Filename).xml;%(Reference.RelativeDir)%(Reference.Filename).pdb" />
```
