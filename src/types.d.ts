export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GatsbyImageData: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AvifOptions = {
  readonly lossless?: InputMaybe<Scalars['Boolean']['input']>;
  readonly quality?: InputMaybe<Scalars['Int']['input']>;
  readonly speed?: InputMaybe<Scalars['Int']['input']>;
};

export type Author = {
  readonly __typename?: 'Author';
  readonly name: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type AuthorFieldSelector = {
  readonly name?: InputMaybe<FieldSelectorEnum>;
  readonly url?: InputMaybe<FieldSelectorEnum>;
};

export type AuthorFilterInput = {
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly url?: InputMaybe<StringQueryOperatorInput>;
};

export type AuthorSortInput = {
  readonly name?: InputMaybe<SortOrderEnum>;
  readonly url?: InputMaybe<SortOrderEnum>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width?: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly ne?: InputMaybe<Scalars['Boolean']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type DateQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Date']['input']>;
  readonly gt?: InputMaybe<Scalars['Date']['input']>;
  readonly gte?: InputMaybe<Scalars['Date']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Date']['input']>;
  readonly lte?: InputMaybe<Scalars['Date']['input']>;
  readonly ne?: InputMaybe<Scalars['Date']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  readonly __typename?: 'Directory';
  readonly absolutePath: Scalars['String']['output'];
  readonly accessTime: Scalars['Date']['output'];
  readonly atime: Scalars['Date']['output'];
  readonly atimeMs: Scalars['Float']['output'];
  readonly base: Scalars['String']['output'];
  readonly birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']['output']>;
  readonly changeTime: Scalars['Date']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date']['output'];
  readonly ctimeMs: Scalars['Float']['output'];
  readonly dev: Scalars['Int']['output'];
  readonly dir: Scalars['String']['output'];
  readonly ext: Scalars['String']['output'];
  readonly extension: Scalars['String']['output'];
  readonly gid: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly ino: Scalars['Float']['output'];
  readonly internal: Internal;
  readonly mode: Scalars['Int']['output'];
  readonly modifiedTime: Scalars['Date']['output'];
  readonly mtime: Scalars['Date']['output'];
  readonly mtimeMs: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
  readonly nlink: Scalars['Int']['output'];
  readonly parent?: Maybe<Node>;
  readonly prettySize: Scalars['String']['output'];
  readonly rdev: Scalars['Int']['output'];
  readonly relativeDirectory: Scalars['String']['output'];
  readonly relativePath: Scalars['String']['output'];
  readonly root: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly sourceInstanceName: Scalars['String']['output'];
  readonly uid: Scalars['Int']['output'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  readonly __typename?: 'DirectoryConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  readonly __typename?: 'DirectoryEdge';
  readonly next?: Maybe<Directory>;
  readonly node: Directory;
  readonly previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  readonly absolutePath?: InputMaybe<FieldSelectorEnum>;
  readonly accessTime?: InputMaybe<FieldSelectorEnum>;
  readonly atime?: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly base?: InputMaybe<FieldSelectorEnum>;
  readonly birthTime?: InputMaybe<FieldSelectorEnum>;
  readonly birthtime?: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly changeTime?: InputMaybe<FieldSelectorEnum>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly ctime?: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly dev?: InputMaybe<FieldSelectorEnum>;
  readonly dir?: InputMaybe<FieldSelectorEnum>;
  readonly ext?: InputMaybe<FieldSelectorEnum>;
  readonly extension?: InputMaybe<FieldSelectorEnum>;
  readonly gid?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly ino?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly mode?: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime?: InputMaybe<FieldSelectorEnum>;
  readonly mtime?: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly name?: InputMaybe<FieldSelectorEnum>;
  readonly nlink?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly prettySize?: InputMaybe<FieldSelectorEnum>;
  readonly rdev?: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  readonly relativePath?: InputMaybe<FieldSelectorEnum>;
  readonly root?: InputMaybe<FieldSelectorEnum>;
  readonly size?: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  readonly uid?: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  readonly __typename?: 'DirectoryGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
  readonly absolutePath?: InputMaybe<SortOrderEnum>;
  readonly accessTime?: InputMaybe<SortOrderEnum>;
  readonly atime?: InputMaybe<SortOrderEnum>;
  readonly atimeMs?: InputMaybe<SortOrderEnum>;
  readonly base?: InputMaybe<SortOrderEnum>;
  readonly birthTime?: InputMaybe<SortOrderEnum>;
  readonly birthtime?: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs?: InputMaybe<SortOrderEnum>;
  readonly changeTime?: InputMaybe<SortOrderEnum>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly ctime?: InputMaybe<SortOrderEnum>;
  readonly ctimeMs?: InputMaybe<SortOrderEnum>;
  readonly dev?: InputMaybe<SortOrderEnum>;
  readonly dir?: InputMaybe<SortOrderEnum>;
  readonly ext?: InputMaybe<SortOrderEnum>;
  readonly extension?: InputMaybe<SortOrderEnum>;
  readonly gid?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly ino?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly mode?: InputMaybe<SortOrderEnum>;
  readonly modifiedTime?: InputMaybe<SortOrderEnum>;
  readonly mtime?: InputMaybe<SortOrderEnum>;
  readonly mtimeMs?: InputMaybe<SortOrderEnum>;
  readonly name?: InputMaybe<SortOrderEnum>;
  readonly nlink?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly prettySize?: InputMaybe<SortOrderEnum>;
  readonly rdev?: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory?: InputMaybe<SortOrderEnum>;
  readonly relativePath?: InputMaybe<SortOrderEnum>;
  readonly root?: InputMaybe<SortOrderEnum>;
  readonly size?: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName?: InputMaybe<SortOrderEnum>;
  readonly uid?: InputMaybe<SortOrderEnum>;
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String']['input'];
  readonly opacity?: InputMaybe<Scalars['Int']['input']>;
  readonly shadow: Scalars['String']['input'];
};

export type FeaturedImage = {
  readonly __typename?: 'FeaturedImage';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly src?: Maybe<File>;
};

export type FeaturedImageFieldSelector = {
  readonly description?: InputMaybe<FieldSelectorEnum>;
  readonly src?: InputMaybe<FileFieldSelector>;
};

export type FeaturedImageFilterInput = {
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<FileFilterInput>;
};

export type FeaturedImageSortInput = {
  readonly description?: InputMaybe<SortOrderEnum>;
  readonly src?: InputMaybe<FileSortInput>;
};

export enum FieldSelectorEnum {
  Select = 'SELECT'
}

export type File = Node & {
  readonly __typename?: 'File';
  readonly absolutePath: Scalars['String']['output'];
  readonly accessTime: Scalars['Date']['output'];
  readonly atime: Scalars['Date']['output'];
  readonly atimeMs: Scalars['Float']['output'];
  readonly base: Scalars['String']['output'];
  readonly birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']['output']>;
  readonly blksize?: Maybe<Scalars['Int']['output']>;
  readonly blocks?: Maybe<Scalars['Int']['output']>;
  readonly changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark?: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp?: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark?: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly ctime: Scalars['Date']['output'];
  readonly ctimeMs: Scalars['Float']['output'];
  readonly dev: Scalars['Int']['output'];
  readonly dir: Scalars['String']['output'];
  readonly ext: Scalars['String']['output'];
  readonly extension: Scalars['String']['output'];
  readonly gid: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly ino: Scalars['Float']['output'];
  readonly internal: Internal;
  readonly mode: Scalars['Int']['output'];
  readonly modifiedTime: Scalars['Date']['output'];
  readonly mtime: Scalars['Date']['output'];
  readonly mtimeMs: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
  readonly nlink: Scalars['Int']['output'];
  readonly parent?: Maybe<Node>;
  readonly prettySize: Scalars['String']['output'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']['output']>;
  readonly rdev: Scalars['Int']['output'];
  readonly relativeDirectory: Scalars['String']['output'];
  readonly relativePath: Scalars['String']['output'];
  readonly root: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly sourceInstanceName: Scalars['String']['output'];
  readonly uid: Scalars['Int']['output'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  readonly __typename?: 'FileConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  readonly __typename?: 'FileEdge';
  readonly next?: Maybe<File>;
  readonly node: File;
  readonly previous?: Maybe<File>;
};

export type FileFieldSelector = {
  readonly absolutePath?: InputMaybe<FieldSelectorEnum>;
  readonly accessTime?: InputMaybe<FieldSelectorEnum>;
  readonly atime?: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly base?: InputMaybe<FieldSelectorEnum>;
  readonly birthTime?: InputMaybe<FieldSelectorEnum>;
  readonly birthtime?: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly blksize?: InputMaybe<FieldSelectorEnum>;
  readonly blocks?: InputMaybe<FieldSelectorEnum>;
  readonly changeTime?: InputMaybe<FieldSelectorEnum>;
  readonly childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  readonly childMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  readonly childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFieldSelector>;
  readonly ctime?: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly dev?: InputMaybe<FieldSelectorEnum>;
  readonly dir?: InputMaybe<FieldSelectorEnum>;
  readonly ext?: InputMaybe<FieldSelectorEnum>;
  readonly extension?: InputMaybe<FieldSelectorEnum>;
  readonly gid?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly ino?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly mode?: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime?: InputMaybe<FieldSelectorEnum>;
  readonly mtime?: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs?: InputMaybe<FieldSelectorEnum>;
  readonly name?: InputMaybe<FieldSelectorEnum>;
  readonly nlink?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly prettySize?: InputMaybe<FieldSelectorEnum>;
  readonly publicURL?: InputMaybe<FieldSelectorEnum>;
  readonly rdev?: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  readonly relativePath?: InputMaybe<FieldSelectorEnum>;
  readonly root?: InputMaybe<FieldSelectorEnum>;
  readonly size?: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  readonly uid?: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  readonly absolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime?: InputMaybe<DateQueryOperatorInput>;
  readonly atime?: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly base?: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime?: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize?: InputMaybe<IntQueryOperatorInput>;
  readonly blocks?: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime?: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  readonly childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly ctime?: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly dev?: InputMaybe<IntQueryOperatorInput>;
  readonly dir?: InputMaybe<StringQueryOperatorInput>;
  readonly ext?: InputMaybe<StringQueryOperatorInput>;
  readonly extension?: InputMaybe<StringQueryOperatorInput>;
  readonly gid?: InputMaybe<IntQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly ino?: InputMaybe<FloatQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly mode?: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtime?: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nlink?: InputMaybe<IntQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly prettySize?: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL?: InputMaybe<StringQueryOperatorInput>;
  readonly rdev?: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath?: InputMaybe<StringQueryOperatorInput>;
  readonly root?: InputMaybe<StringQueryOperatorInput>;
  readonly size?: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  readonly uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  readonly __typename?: 'FileGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
  readonly absolutePath?: InputMaybe<SortOrderEnum>;
  readonly accessTime?: InputMaybe<SortOrderEnum>;
  readonly atime?: InputMaybe<SortOrderEnum>;
  readonly atimeMs?: InputMaybe<SortOrderEnum>;
  readonly base?: InputMaybe<SortOrderEnum>;
  readonly birthTime?: InputMaybe<SortOrderEnum>;
  readonly birthtime?: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs?: InputMaybe<SortOrderEnum>;
  readonly blksize?: InputMaybe<SortOrderEnum>;
  readonly blocks?: InputMaybe<SortOrderEnum>;
  readonly changeTime?: InputMaybe<SortOrderEnum>;
  readonly childImageSharp?: InputMaybe<ImageSharpSortInput>;
  readonly childMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  readonly childrenMarkdownRemark?: InputMaybe<MarkdownRemarkSortInput>;
  readonly ctime?: InputMaybe<SortOrderEnum>;
  readonly ctimeMs?: InputMaybe<SortOrderEnum>;
  readonly dev?: InputMaybe<SortOrderEnum>;
  readonly dir?: InputMaybe<SortOrderEnum>;
  readonly ext?: InputMaybe<SortOrderEnum>;
  readonly extension?: InputMaybe<SortOrderEnum>;
  readonly gid?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly ino?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly mode?: InputMaybe<SortOrderEnum>;
  readonly modifiedTime?: InputMaybe<SortOrderEnum>;
  readonly mtime?: InputMaybe<SortOrderEnum>;
  readonly mtimeMs?: InputMaybe<SortOrderEnum>;
  readonly name?: InputMaybe<SortOrderEnum>;
  readonly nlink?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly prettySize?: InputMaybe<SortOrderEnum>;
  readonly publicURL?: InputMaybe<SortOrderEnum>;
  readonly rdev?: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory?: InputMaybe<SortOrderEnum>;
  readonly relativePath?: InputMaybe<SortOrderEnum>;
  readonly root?: InputMaybe<SortOrderEnum>;
  readonly size?: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName?: InputMaybe<SortOrderEnum>;
  readonly uid?: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly ne?: InputMaybe<Scalars['Float']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
};

export type Frontmatter = {
  readonly __typename?: 'Frontmatter';
  readonly categories: ReadonlyArray<Scalars['String']['output']>;
  readonly date?: Maybe<Scalars['Date']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly draft?: Maybe<Scalars['Boolean']['output']>;
  readonly dropcap?: Maybe<Scalars['Boolean']['output']>;
  readonly featuredImage?: Maybe<FeaturedImage>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly title: Scalars['String']['output'];
};


export type FrontmatterDateArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FrontmatterFieldSelector = {
  readonly categories?: InputMaybe<FieldSelectorEnum>;
  readonly date?: InputMaybe<FieldSelectorEnum>;
  readonly description?: InputMaybe<FieldSelectorEnum>;
  readonly draft?: InputMaybe<FieldSelectorEnum>;
  readonly dropcap?: InputMaybe<FieldSelectorEnum>;
  readonly featuredImage?: InputMaybe<FeaturedImageFieldSelector>;
  readonly tags?: InputMaybe<FieldSelectorEnum>;
  readonly title?: InputMaybe<FieldSelectorEnum>;
};

export type FrontmatterFilterInput = {
  readonly categories?: InputMaybe<StringQueryOperatorInput>;
  readonly date?: InputMaybe<DateQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly draft?: InputMaybe<BooleanQueryOperatorInput>;
  readonly dropcap?: InputMaybe<BooleanQueryOperatorInput>;
  readonly featuredImage?: InputMaybe<FeaturedImageFilterInput>;
  readonly tags?: InputMaybe<StringQueryOperatorInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
};

export type FrontmatterSortInput = {
  readonly categories?: InputMaybe<SortOrderEnum>;
  readonly date?: InputMaybe<SortOrderEnum>;
  readonly description?: InputMaybe<SortOrderEnum>;
  readonly draft?: InputMaybe<SortOrderEnum>;
  readonly dropcap?: InputMaybe<SortOrderEnum>;
  readonly featuredImage?: InputMaybe<FeaturedImageSortInput>;
  readonly tags?: InputMaybe<SortOrderEnum>;
  readonly title?: InputMaybe<SortOrderEnum>;
};

export type GatsbyImageDataQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
  readonly ne?: InputMaybe<Scalars['GatsbyImageData']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  readonly __typename?: 'ImageSharp';
  readonly children: ReadonlyArray<Node>;
  readonly fixed?: Maybe<ImageSharpFixed>;
  readonly fluid?: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly original?: Maybe<ImageSharpOriginal>;
  readonly parent?: Maybe<Node>;
  readonly resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width?: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  maxWidth?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']['input']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64?: InputMaybe<Scalars['Boolean']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality?: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnection = {
  readonly __typename?: 'ImageSharpConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  readonly __typename?: 'ImageSharpEdge';
  readonly next?: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldSelector = {
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly resize?: InputMaybe<ImageSharpResizeFieldSelector>;
};

export type ImageSharpFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly original?: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  readonly __typename?: 'ImageSharpFixed';
  readonly aspectRatio?: Maybe<Scalars['Float']['output']>;
  readonly base64?: Maybe<Scalars['String']['output']>;
  readonly height: Scalars['Float']['output'];
  readonly originalName?: Maybe<Scalars['String']['output']>;
  readonly src: Scalars['String']['output'];
  readonly srcSet: Scalars['String']['output'];
  readonly srcSetWebp?: Maybe<Scalars['String']['output']>;
  readonly srcWebp?: Maybe<Scalars['String']['output']>;
  readonly tracedSVG?: Maybe<Scalars['String']['output']>;
  readonly width: Scalars['Float']['output'];
};

export type ImageSharpFixedFieldSelector = {
  readonly aspectRatio?: InputMaybe<FieldSelectorEnum>;
  readonly base64?: InputMaybe<FieldSelectorEnum>;
  readonly height?: InputMaybe<FieldSelectorEnum>;
  readonly originalName?: InputMaybe<FieldSelectorEnum>;
  readonly src?: InputMaybe<FieldSelectorEnum>;
  readonly srcSet?: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp?: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG?: InputMaybe<FieldSelectorEnum>;
  readonly width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFixedFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFixedSortInput = {
  readonly aspectRatio?: InputMaybe<SortOrderEnum>;
  readonly base64?: InputMaybe<SortOrderEnum>;
  readonly height?: InputMaybe<SortOrderEnum>;
  readonly originalName?: InputMaybe<SortOrderEnum>;
  readonly src?: InputMaybe<SortOrderEnum>;
  readonly srcSet?: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp?: InputMaybe<SortOrderEnum>;
  readonly srcWebp?: InputMaybe<SortOrderEnum>;
  readonly tracedSVG?: InputMaybe<SortOrderEnum>;
  readonly width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluid = {
  readonly __typename?: 'ImageSharpFluid';
  readonly aspectRatio: Scalars['Float']['output'];
  readonly base64?: Maybe<Scalars['String']['output']>;
  readonly originalImg?: Maybe<Scalars['String']['output']>;
  readonly originalName?: Maybe<Scalars['String']['output']>;
  readonly presentationHeight: Scalars['Int']['output'];
  readonly presentationWidth: Scalars['Int']['output'];
  readonly sizes: Scalars['String']['output'];
  readonly src: Scalars['String']['output'];
  readonly srcSet: Scalars['String']['output'];
  readonly srcSetWebp?: Maybe<Scalars['String']['output']>;
  readonly srcWebp?: Maybe<Scalars['String']['output']>;
  readonly tracedSVG?: Maybe<Scalars['String']['output']>;
};

export type ImageSharpFluidFieldSelector = {
  readonly aspectRatio?: InputMaybe<FieldSelectorEnum>;
  readonly base64?: InputMaybe<FieldSelectorEnum>;
  readonly originalImg?: InputMaybe<FieldSelectorEnum>;
  readonly originalName?: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight?: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth?: InputMaybe<FieldSelectorEnum>;
  readonly sizes?: InputMaybe<FieldSelectorEnum>;
  readonly src?: InputMaybe<FieldSelectorEnum>;
  readonly srcSet?: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp?: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly base64?: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg?: InputMaybe<StringQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  readonly sizes?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet?: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidSortInput = {
  readonly aspectRatio?: InputMaybe<SortOrderEnum>;
  readonly base64?: InputMaybe<SortOrderEnum>;
  readonly originalImg?: InputMaybe<SortOrderEnum>;
  readonly originalName?: InputMaybe<SortOrderEnum>;
  readonly presentationHeight?: InputMaybe<SortOrderEnum>;
  readonly presentationWidth?: InputMaybe<SortOrderEnum>;
  readonly sizes?: InputMaybe<SortOrderEnum>;
  readonly src?: InputMaybe<SortOrderEnum>;
  readonly srcSet?: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp?: InputMaybe<SortOrderEnum>;
  readonly srcWebp?: InputMaybe<SortOrderEnum>;
  readonly tracedSVG?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpGroupConnection = {
  readonly __typename?: 'ImageSharpGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpOriginal = {
  readonly __typename?: 'ImageSharpOriginal';
  readonly height?: Maybe<Scalars['Float']['output']>;
  readonly src?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Float']['output']>;
};

export type ImageSharpOriginalFieldSelector = {
  readonly height?: InputMaybe<FieldSelectorEnum>;
  readonly src?: InputMaybe<FieldSelectorEnum>;
  readonly width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFilterInput = {
  readonly height?: InputMaybe<FloatQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpOriginalSortInput = {
  readonly height?: InputMaybe<SortOrderEnum>;
  readonly src?: InputMaybe<SortOrderEnum>;
  readonly width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResize = {
  readonly __typename?: 'ImageSharpResize';
  readonly aspectRatio?: Maybe<Scalars['Float']['output']>;
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly originalName?: Maybe<Scalars['String']['output']>;
  readonly src?: Maybe<Scalars['String']['output']>;
  readonly tracedSVG?: Maybe<Scalars['String']['output']>;
  readonly width?: Maybe<Scalars['Int']['output']>;
};

export type ImageSharpResizeFieldSelector = {
  readonly aspectRatio?: InputMaybe<FieldSelectorEnum>;
  readonly height?: InputMaybe<FieldSelectorEnum>;
  readonly originalName?: InputMaybe<FieldSelectorEnum>;
  readonly src?: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG?: InputMaybe<FieldSelectorEnum>;
  readonly width?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFilterInput = {
  readonly aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  readonly height?: InputMaybe<IntQueryOperatorInput>;
  readonly originalName?: InputMaybe<StringQueryOperatorInput>;
  readonly src?: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  readonly width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpResizeSortInput = {
  readonly aspectRatio?: InputMaybe<SortOrderEnum>;
  readonly height?: InputMaybe<SortOrderEnum>;
  readonly originalName?: InputMaybe<SortOrderEnum>;
  readonly src?: InputMaybe<SortOrderEnum>;
  readonly tracedSVG?: InputMaybe<SortOrderEnum>;
  readonly width?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpSortInput = {
  readonly children?: InputMaybe<NodeSortInput>;
  readonly fixed?: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid?: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly original?: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly resize?: InputMaybe<ImageSharpResizeSortInput>;
};

export type IntQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly ne?: InputMaybe<Scalars['Int']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  readonly __typename?: 'Internal';
  readonly content?: Maybe<Scalars['String']['output']>;
  readonly contentDigest: Scalars['String']['output'];
  readonly contentFilePath?: Maybe<Scalars['String']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']['output']>;
  readonly mediaType?: Maybe<Scalars['String']['output']>;
  readonly owner: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  readonly content?: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest?: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath?: InputMaybe<FieldSelectorEnum>;
  readonly description?: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners?: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType?: InputMaybe<FieldSelectorEnum>;
  readonly mediaType?: InputMaybe<FieldSelectorEnum>;
  readonly owner?: InputMaybe<FieldSelectorEnum>;
  readonly type?: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  readonly content?: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest?: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType?: InputMaybe<StringQueryOperatorInput>;
  readonly owner?: InputMaybe<StringQueryOperatorInput>;
  readonly type?: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  readonly content?: InputMaybe<SortOrderEnum>;
  readonly contentDigest?: InputMaybe<SortOrderEnum>;
  readonly contentFilePath?: InputMaybe<SortOrderEnum>;
  readonly description?: InputMaybe<SortOrderEnum>;
  readonly fieldOwners?: InputMaybe<SortOrderEnum>;
  readonly ignoreType?: InputMaybe<SortOrderEnum>;
  readonly mediaType?: InputMaybe<SortOrderEnum>;
  readonly owner?: InputMaybe<SortOrderEnum>;
  readonly type?: InputMaybe<SortOrderEnum>;
};

export type JpgOptions = {
  readonly progressive?: InputMaybe<Scalars['Boolean']['input']>;
  readonly quality?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['JSON']['input']>;
  readonly glob?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly ne?: InputMaybe<Scalars['JSON']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly regex?: InputMaybe<Scalars['JSON']['input']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  readonly __typename?: 'MarkdownHeading';
  readonly depth?: Maybe<Scalars['Int']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly value?: Maybe<Scalars['String']['output']>;
};

export type MarkdownHeadingFieldSelector = {
  readonly depth?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly value?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownHeadingFilterInput = {
  readonly depth?: InputMaybe<IntQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  readonly elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownHeadingSortInput = {
  readonly depth?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly value?: InputMaybe<SortOrderEnum>;
};

export type MarkdownRemark = Node & {
  readonly __typename?: 'MarkdownRemark';
  readonly children: ReadonlyArray<Node>;
  readonly excerpt?: Maybe<Scalars['String']['output']>;
  readonly excerptAst?: Maybe<Scalars['JSON']['output']>;
  readonly fields: MarkdownRemarkFields;
  readonly fileAbsolutePath?: Maybe<Scalars['String']['output']>;
  readonly frontmatter: Frontmatter;
  readonly headings?: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html?: Maybe<Scalars['String']['output']>;
  readonly htmlAst?: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent?: Maybe<Node>;
  readonly rawMarkdownBody?: Maybe<Scalars['String']['output']>;
  readonly tableOfContents?: Maybe<Scalars['String']['output']>;
  readonly timeToRead?: Maybe<Scalars['Int']['output']>;
  readonly wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
  truncate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
  truncate?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  maxDepth?: InputMaybe<Scalars['Int']['input']>;
  pathToSlugField?: InputMaybe<Scalars['String']['input']>;
};

export type MarkdownRemarkConnection = {
  readonly __typename?: 'MarkdownRemarkConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkEdge = {
  readonly __typename?: 'MarkdownRemarkEdge';
  readonly next?: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldSelector = {
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly excerpt?: InputMaybe<FieldSelectorEnum>;
  readonly excerptAst?: InputMaybe<FieldSelectorEnum>;
  readonly fields?: InputMaybe<MarkdownRemarkFieldsFieldSelector>;
  readonly fileAbsolutePath?: InputMaybe<FieldSelectorEnum>;
  readonly frontmatter?: InputMaybe<FrontmatterFieldSelector>;
  readonly headings?: InputMaybe<MarkdownHeadingFieldSelector>;
  readonly html?: InputMaybe<FieldSelectorEnum>;
  readonly htmlAst?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly rawMarkdownBody?: InputMaybe<FieldSelectorEnum>;
  readonly tableOfContents?: InputMaybe<FieldSelectorEnum>;
  readonly timeToRead?: InputMaybe<FieldSelectorEnum>;
  readonly wordCount?: InputMaybe<MarkdownWordCountFieldSelector>;
};

export type MarkdownRemarkFields = {
  readonly __typename?: 'MarkdownRemarkFields';
  readonly layout: Scalars['String']['output'];
  readonly slug: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
};

export type MarkdownRemarkFieldsFieldSelector = {
  readonly layout?: InputMaybe<FieldSelectorEnum>;
  readonly slug?: InputMaybe<FieldSelectorEnum>;
  readonly title?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownRemarkFieldsFilterInput = {
  readonly layout?: InputMaybe<StringQueryOperatorInput>;
  readonly slug?: InputMaybe<StringQueryOperatorInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFieldsSortInput = {
  readonly layout?: InputMaybe<SortOrderEnum>;
  readonly slug?: InputMaybe<SortOrderEnum>;
  readonly title?: InputMaybe<SortOrderEnum>;
};

export type MarkdownRemarkFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly excerpt?: InputMaybe<StringQueryOperatorInput>;
  readonly excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  readonly fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  readonly fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  readonly frontmatter?: InputMaybe<FrontmatterFilterInput>;
  readonly headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  readonly html?: InputMaybe<StringQueryOperatorInput>;
  readonly htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  readonly timeToRead?: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  readonly elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  readonly __typename?: 'MarkdownRemarkGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  field: MarkdownRemarkFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector;
};

export type MarkdownRemarkSortInput = {
  readonly children?: InputMaybe<NodeSortInput>;
  readonly excerpt?: InputMaybe<SortOrderEnum>;
  readonly excerptAst?: InputMaybe<SortOrderEnum>;
  readonly fields?: InputMaybe<MarkdownRemarkFieldsSortInput>;
  readonly fileAbsolutePath?: InputMaybe<SortOrderEnum>;
  readonly frontmatter?: InputMaybe<FrontmatterSortInput>;
  readonly headings?: InputMaybe<MarkdownHeadingSortInput>;
  readonly html?: InputMaybe<SortOrderEnum>;
  readonly htmlAst?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly rawMarkdownBody?: InputMaybe<SortOrderEnum>;
  readonly tableOfContents?: InputMaybe<SortOrderEnum>;
  readonly timeToRead?: InputMaybe<SortOrderEnum>;
  readonly wordCount?: InputMaybe<MarkdownWordCountSortInput>;
};

export type MarkdownWordCount = {
  readonly __typename?: 'MarkdownWordCount';
  readonly paragraphs?: Maybe<Scalars['Int']['output']>;
  readonly sentences?: Maybe<Scalars['Int']['output']>;
  readonly words?: Maybe<Scalars['Int']['output']>;
};

export type MarkdownWordCountFieldSelector = {
  readonly paragraphs?: InputMaybe<FieldSelectorEnum>;
  readonly sentences?: InputMaybe<FieldSelectorEnum>;
  readonly words?: InputMaybe<FieldSelectorEnum>;
};

export type MarkdownWordCountFilterInput = {
  readonly paragraphs?: InputMaybe<IntQueryOperatorInput>;
  readonly sentences?: InputMaybe<IntQueryOperatorInput>;
  readonly words?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountSortInput = {
  readonly paragraphs?: InputMaybe<SortOrderEnum>;
  readonly sentences?: InputMaybe<SortOrderEnum>;
  readonly words?: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
export type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent?: Maybe<Node>;
};

export type NodeFieldSelector = {
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch?: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  readonly children?: InputMaybe<NodeSortInput>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly parent?: InputMaybe<NodeSortInput>;
};

export type PngOptions = {
  readonly compressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  readonly quality?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  readonly __typename?: 'PageInfo';
  readonly currentPage: Scalars['Int']['output'];
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  readonly itemCount: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly perPage?: Maybe<Scalars['Int']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};

export type Potrace = {
  readonly alphaMax?: InputMaybe<Scalars['Float']['input']>;
  readonly background?: InputMaybe<Scalars['String']['input']>;
  readonly blackOnWhite?: InputMaybe<Scalars['Boolean']['input']>;
  readonly color?: InputMaybe<Scalars['String']['input']>;
  readonly optCurve?: InputMaybe<Scalars['Boolean']['input']>;
  readonly optTolerance?: InputMaybe<Scalars['Float']['input']>;
  readonly threshold?: InputMaybe<Scalars['Int']['input']>;
  readonly turdSize?: InputMaybe<Scalars['Float']['input']>;
  readonly turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly directory?: Maybe<Directory>;
  readonly file?: Maybe<File>;
  readonly imageSharp?: Maybe<ImageSharp>;
  readonly markdownRemark?: Maybe<MarkdownRemark>;
  readonly site?: Maybe<Site>;
  readonly siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  readonly siteFunction?: Maybe<SiteFunction>;
  readonly sitePage?: Maybe<SitePage>;
  readonly sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<MarkdownRemarkSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fields?: InputMaybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<FrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  context?: InputMaybe<SitePageContextFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  readonly __typename?: 'Site';
  readonly buildTime?: Maybe<Scalars['Date']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen?: Maybe<Scalars['Boolean']['output']>;
  readonly host?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly jsxRuntime?: Maybe<Scalars['String']['output']>;
  readonly parent?: Maybe<Node>;
  readonly pathPrefix?: Maybe<Scalars['String']['output']>;
  readonly polyfill?: Maybe<Scalars['Boolean']['output']>;
  readonly port?: Maybe<Scalars['Int']['output']>;
  readonly siteMetadata: SiteMetadata;
  readonly trailingSlash?: Maybe<Scalars['String']['output']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  readonly __typename?: 'SiteBuildMetadata';
  readonly buildTime?: Maybe<Scalars['Date']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']['input']>;
  formatString?: InputMaybe<Scalars['String']['input']>;
  fromNow?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  readonly __typename?: 'SiteBuildMetadataConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  readonly __typename?: 'SiteBuildMetadataEdge';
  readonly next?: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  readonly buildTime?: InputMaybe<FieldSelectorEnum>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  readonly __typename?: 'SiteBuildMetadataGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  readonly buildTime?: InputMaybe<SortOrderEnum>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly parent?: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  readonly __typename?: 'SiteConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  readonly __typename?: 'SiteEdge';
  readonly next?: Maybe<Site>;
  readonly node: Site;
  readonly previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  readonly buildTime?: InputMaybe<FieldSelectorEnum>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen?: InputMaybe<FieldSelectorEnum>;
  readonly host?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix?: InputMaybe<FieldSelectorEnum>;
  readonly polyfill?: InputMaybe<FieldSelectorEnum>;
  readonly port?: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata?: InputMaybe<SiteMetadataFieldSelector>;
  readonly trailingSlash?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  readonly buildTime?: InputMaybe<DateQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  readonly host?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  readonly port?: InputMaybe<IntQueryOperatorInput>;
  readonly siteMetadata?: InputMaybe<SiteMetadataFilterInput>;
  readonly trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  readonly __typename?: 'SiteFunction';
  readonly absoluteCompiledFilePath: Scalars['String']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly matchPath?: Maybe<Scalars['String']['output']>;
  readonly originalAbsoluteFilePath: Scalars['String']['output'];
  readonly originalRelativeFilePath: Scalars['String']['output'];
  readonly parent?: Maybe<Node>;
  readonly pluginName: Scalars['String']['output'];
  readonly relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  readonly __typename?: 'SiteFunctionConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  readonly __typename?: 'SiteFunctionEdge';
  readonly next?: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly functionRoute?: InputMaybe<FieldSelectorEnum>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly matchPath?: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly pluginName?: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly functionRoute?: InputMaybe<StringQueryOperatorInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pluginName?: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  readonly __typename?: 'SiteFunctionGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly functionRoute?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly matchPath?: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly pluginName?: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  readonly __typename?: 'SiteGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteMetadata = {
  readonly __typename?: 'SiteMetadata';
  readonly author: Author;
  readonly description: Scalars['String']['output'];
  readonly keywords: Scalars['String']['output'];
  readonly siteUrl: Scalars['String']['output'];
  readonly social: Social;
  readonly title: Scalars['String']['output'];
};

export type SiteMetadataFieldSelector = {
  readonly author?: InputMaybe<AuthorFieldSelector>;
  readonly description?: InputMaybe<FieldSelectorEnum>;
  readonly keywords?: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl?: InputMaybe<FieldSelectorEnum>;
  readonly social?: InputMaybe<SocialFieldSelector>;
  readonly title?: InputMaybe<FieldSelectorEnum>;
};

export type SiteMetadataFilterInput = {
  readonly author?: InputMaybe<AuthorFilterInput>;
  readonly description?: InputMaybe<StringQueryOperatorInput>;
  readonly keywords?: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl?: InputMaybe<StringQueryOperatorInput>;
  readonly social?: InputMaybe<SocialFilterInput>;
  readonly title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteMetadataSortInput = {
  readonly author?: InputMaybe<AuthorSortInput>;
  readonly description?: InputMaybe<SortOrderEnum>;
  readonly keywords?: InputMaybe<SortOrderEnum>;
  readonly siteUrl?: InputMaybe<SortOrderEnum>;
  readonly social?: InputMaybe<SocialSortInput>;
  readonly title?: InputMaybe<SortOrderEnum>;
};

export type SitePage = Node & {
  readonly __typename?: 'SitePage';
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String']['output'];
  readonly componentChunkName: Scalars['String']['output'];
  readonly context: SitePageContext;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String']['output'];
  readonly matchPath?: Maybe<Scalars['String']['output']>;
  readonly pageContext?: Maybe<Scalars['JSON']['output']>;
  readonly parent?: Maybe<Node>;
  readonly path: Scalars['String']['output'];
  readonly pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  readonly __typename?: 'SitePageConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageContext = {
  readonly __typename?: 'SitePageContext';
  readonly category?: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly next?: Maybe<MarkdownRemark>;
  readonly previous?: Maybe<MarkdownRemark>;
  readonly slug?: Maybe<Scalars['String']['output']>;
};

export type SitePageContextFieldSelector = {
  readonly category?: InputMaybe<FieldSelectorEnum>;
  readonly next?: InputMaybe<MarkdownRemarkFieldSelector>;
  readonly previous?: InputMaybe<MarkdownRemarkFieldSelector>;
  readonly slug?: InputMaybe<FieldSelectorEnum>;
};

export type SitePageContextFilterInput = {
  readonly category?: InputMaybe<StringQueryOperatorInput>;
  readonly next?: InputMaybe<MarkdownRemarkFilterInput>;
  readonly previous?: InputMaybe<MarkdownRemarkFilterInput>;
  readonly slug?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageContextSortInput = {
  readonly category?: InputMaybe<SortOrderEnum>;
  readonly next?: InputMaybe<MarkdownRemarkSortInput>;
  readonly previous?: InputMaybe<MarkdownRemarkSortInput>;
  readonly slug?: InputMaybe<SortOrderEnum>;
};

export type SitePageEdge = {
  readonly __typename?: 'SitePageEdge';
  readonly next?: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly component?: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName?: InputMaybe<FieldSelectorEnum>;
  readonly context?: InputMaybe<SitePageContextFieldSelector>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName?: InputMaybe<FieldSelectorEnum>;
  readonly matchPath?: InputMaybe<FieldSelectorEnum>;
  readonly pageContext?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly path?: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator?: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly component?: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  readonly context?: InputMaybe<SitePageContextFilterInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath?: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext?: InputMaybe<JsonQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly path?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  readonly __typename?: 'SitePageGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
  readonly children?: InputMaybe<NodeSortInput>;
  readonly component?: InputMaybe<SortOrderEnum>;
  readonly componentChunkName?: InputMaybe<SortOrderEnum>;
  readonly context?: InputMaybe<SitePageContextSortInput>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly internalComponentName?: InputMaybe<SortOrderEnum>;
  readonly matchPath?: InputMaybe<SortOrderEnum>;
  readonly pageContext?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly path?: InputMaybe<SortOrderEnum>;
  readonly pluginCreator?: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  readonly __typename?: 'SitePlugin';
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly packageJson?: Maybe<Scalars['JSON']['output']>;
  readonly parent?: Maybe<Node>;
  readonly pluginFilepath?: Maybe<Scalars['String']['output']>;
  readonly pluginOptions?: Maybe<Scalars['JSON']['output']>;
  readonly resolve?: Maybe<Scalars['String']['output']>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly version?: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  readonly __typename?: 'SitePluginConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  readonly __typename?: 'SitePluginEdge';
  readonly next?: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  readonly browserAPIs?: InputMaybe<FieldSelectorEnum>;
  readonly children?: InputMaybe<NodeFieldSelector>;
  readonly id?: InputMaybe<FieldSelectorEnum>;
  readonly internal?: InputMaybe<InternalFieldSelector>;
  readonly name?: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  readonly packageJson?: InputMaybe<FieldSelectorEnum>;
  readonly parent?: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions?: InputMaybe<FieldSelectorEnum>;
  readonly resolve?: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  readonly version?: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  readonly browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly children?: InputMaybe<NodeFilterListInput>;
  readonly id?: InputMaybe<StringQueryOperatorInput>;
  readonly internal?: InputMaybe<InternalFilterInput>;
  readonly name?: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson?: InputMaybe<JsonQueryOperatorInput>;
  readonly parent?: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  readonly resolve?: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  readonly version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  readonly __typename?: 'SitePluginGroupConnection';
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue?: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max?: Maybe<Scalars['Float']['output']>;
  readonly min?: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum?: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
  readonly browserAPIs?: InputMaybe<SortOrderEnum>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly name?: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs?: InputMaybe<SortOrderEnum>;
  readonly packageJson?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly pluginFilepath?: InputMaybe<SortOrderEnum>;
  readonly pluginOptions?: InputMaybe<SortOrderEnum>;
  readonly resolve?: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs?: InputMaybe<SortOrderEnum>;
  readonly version?: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  readonly __typename?: 'SiteSiteMetadata';
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
};

export type SiteSortInput = {
  readonly buildTime?: InputMaybe<SortOrderEnum>;
  readonly children?: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen?: InputMaybe<SortOrderEnum>;
  readonly host?: InputMaybe<SortOrderEnum>;
  readonly id?: InputMaybe<SortOrderEnum>;
  readonly internal?: InputMaybe<InternalSortInput>;
  readonly jsxRuntime?: InputMaybe<SortOrderEnum>;
  readonly parent?: InputMaybe<NodeSortInput>;
  readonly pathPrefix?: InputMaybe<SortOrderEnum>;
  readonly polyfill?: InputMaybe<SortOrderEnum>;
  readonly port?: InputMaybe<SortOrderEnum>;
  readonly siteMetadata?: InputMaybe<SiteMetadataSortInput>;
  readonly trailingSlash?: InputMaybe<SortOrderEnum>;
};

export type Social = {
  readonly __typename?: 'Social';
  readonly github?: Maybe<Scalars['String']['output']>;
  readonly linkedin?: Maybe<Scalars['String']['output']>;
};

export type SocialFieldSelector = {
  readonly github?: InputMaybe<FieldSelectorEnum>;
  readonly linkedin?: InputMaybe<FieldSelectorEnum>;
};

export type SocialFilterInput = {
  readonly github?: InputMaybe<StringQueryOperatorInput>;
  readonly linkedin?: InputMaybe<StringQueryOperatorInput>;
};

export type SocialSortInput = {
  readonly github?: InputMaybe<SortOrderEnum>;
  readonly linkedin?: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly glob?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly ne?: InputMaybe<Scalars['String']['input']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly regex?: InputMaybe<Scalars['String']['input']>;
};

export type TransformOptions = {
  readonly cropFocus?: InputMaybe<ImageCropFocus>;
  readonly duotone?: InputMaybe<DuotoneGradient>;
  readonly fit?: InputMaybe<ImageFit>;
  readonly grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  readonly rotate?: InputMaybe<Scalars['Int']['input']>;
  readonly trim?: InputMaybe<Scalars['Float']['input']>;
};

export type WebPOptions = {
  readonly quality?: InputMaybe<Scalars['Int']['input']>;
};

export type GatsbyImageSharpFixedFragment = { readonly __typename?: 'ImageSharpFixed', readonly base64?: string | null, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { readonly __typename?: 'ImageSharpFixed', readonly tracedSVG?: string | null, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { readonly __typename?: 'ImageSharpFixed', readonly base64?: string | null, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { readonly __typename?: 'ImageSharpFixed', readonly tracedSVG?: string | null, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { readonly __typename?: 'ImageSharpFixed', readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { readonly __typename?: 'ImageSharpFixed', readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { readonly __typename?: 'ImageSharpFluid', readonly base64?: string | null, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { readonly __typename?: 'ImageSharpFluid', readonly maxHeight: number, readonly maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { readonly __typename?: 'ImageSharpFluid', readonly tracedSVG?: string | null, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { readonly __typename?: 'ImageSharpFluid', readonly base64?: string | null, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { readonly __typename?: 'ImageSharpFluid', readonly tracedSVG?: string | null, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null, readonly sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { readonly __typename?: 'ImageSharpFluid', readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { readonly __typename?: 'ImageSharpFluid', readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: string | null, readonly srcSetWebp?: string | null, readonly sizes: string };

export type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQueryQuery = { readonly __typename?: 'Query', readonly allSiteFunction: { readonly __typename?: 'SiteFunctionConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'SiteFunction', readonly functionRoute: string }> }, readonly allSitePage: { readonly __typename?: 'SitePageConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'SitePage', readonly path: string }> } };

export type BlogListerQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogListerQuery = { readonly __typename?: 'Query', readonly allMarkdownRemark: { readonly __typename?: 'MarkdownRemarkConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'MarkdownRemark', readonly excerpt?: string | null, readonly fields: { readonly __typename?: 'MarkdownRemarkFields', readonly slug: string }, readonly frontmatter: { readonly __typename?: 'Frontmatter', readonly title: string, readonly draft?: boolean | null, readonly date?: any | null, readonly categories: ReadonlyArray<string>, readonly description?: string | null, readonly featuredImage?: { readonly __typename?: 'FeaturedImage', readonly description?: string | null, readonly src?: { readonly __typename?: 'File', readonly childImageSharp?: { readonly __typename?: 'ImageSharp', readonly gatsbyImageData: any } | null } | null } | null } }> } };

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { readonly __typename?: 'Query', readonly site?: { readonly __typename?: 'Site', readonly siteMetadata: { readonly __typename?: 'SiteMetadata', readonly social: { readonly __typename?: 'Social', readonly github?: string | null, readonly linkedin?: string | null } } } | null };

export type MenuQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuQuery = { readonly __typename?: 'Query', readonly site?: { readonly __typename?: 'Site', readonly siteMetadata: { readonly __typename?: 'SiteMetadata', readonly title: string, readonly description: string } } | null };

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { readonly __typename?: 'Query', readonly allMarkdownRemark: { readonly __typename?: 'MarkdownRemarkConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'MarkdownRemark', readonly id: string, readonly fields: { readonly __typename?: 'MarkdownRemarkFields', readonly layout: string, readonly slug: string }, readonly frontmatter: { readonly __typename?: 'Frontmatter', readonly draft?: boolean | null } }> } };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { readonly __typename?: 'Query', readonly allMarkdownRemark: { readonly __typename?: 'MarkdownRemarkConnection', readonly nodes: ReadonlyArray<{ readonly __typename?: 'MarkdownRemark', readonly fields: { readonly __typename?: 'MarkdownRemarkFields', readonly layout: string, readonly slug: string } }> } };

export type IndexLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexLayoutQuery = { readonly __typename?: 'Query', readonly site?: { readonly __typename?: 'Site', readonly siteMetadata: { readonly __typename?: 'SiteMetadata', readonly title: string, readonly description: string, readonly keywords: string, readonly siteUrl: string } } | null, readonly file?: { readonly __typename?: 'File', readonly childImageSharp?: { readonly __typename?: 'ImageSharp', readonly original?: { readonly __typename?: 'ImageSharpOriginal', readonly src?: string | null } | null } | null } | null };

export type PostListerTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PostListerTemplateQuery = { readonly __typename?: 'Query', readonly sitePage?: { readonly __typename?: 'SitePage', readonly context: { readonly __typename?: 'SitePageContext', readonly category?: ReadonlyArray<string> | null } } | null };

export type PostTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type PostTemplateQuery = { readonly __typename?: 'Query', readonly site?: { readonly __typename?: 'Site', readonly siteMetadata: { readonly __typename?: 'SiteMetadata', readonly siteUrl: string } } | null, readonly markdownRemark?: { readonly __typename?: 'MarkdownRemark', readonly html?: string | null, readonly excerpt?: string | null, readonly frontmatter: { readonly __typename?: 'Frontmatter', readonly title: string, readonly description?: string | null, readonly date?: any | null, readonly featuredImage?: { readonly __typename?: 'FeaturedImage', readonly description?: string | null, readonly src?: { readonly __typename?: 'File', readonly childImageSharp?: { readonly __typename?: 'ImageSharp', readonly gatsbyImageData: any } | null } | null } | null } } | null, readonly sitePage?: { readonly __typename?: 'SitePage', readonly path: string, readonly context: { readonly __typename?: 'SitePageContext', readonly previous?: { readonly __typename?: 'MarkdownRemark', readonly excerpt?: string | null, readonly fields: { readonly __typename?: 'MarkdownRemarkFields', readonly slug: string }, readonly frontmatter: { readonly __typename?: 'Frontmatter', readonly title: string, readonly date?: any | null, readonly categories: ReadonlyArray<string>, readonly description?: string | null, readonly featuredImage?: { readonly __typename?: 'FeaturedImage', readonly description?: string | null, readonly src?: { readonly __typename?: 'File', readonly childImageSharp?: { readonly __typename?: 'ImageSharp', readonly gatsbyImageData: any } | null } | null } | null } } | null } } | null };
