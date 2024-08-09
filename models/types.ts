export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  nei?: InputMaybe<Scalars['ID']>;
  startsWith?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  contains?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nei?: InputMaybe<Scalars['Boolean']>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Scalars['Boolean']>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nei?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nei?: InputMaybe<Scalars['Int']>;
  startsWith?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  contains?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  not?: InputMaybe<LongFilterInput>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  nei?: InputMaybe<Scalars['Long']>;
  startsWith?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  contains?: InputMaybe<Scalars['Long']>;
  notContains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nei?: InputMaybe<Scalars['Float']>;
  startsWith?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  contains?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  not?: InputMaybe<DateFilterInput>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nei?: InputMaybe<Scalars['Date']>;
  startsWith?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  contains?: InputMaybe<Scalars['Date']>;
  notContains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  nei?: InputMaybe<Scalars['DateTime']>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  contains?: InputMaybe<Scalars['DateTime']>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  nei?: InputMaybe<Scalars['JSON']>;
  startsWith?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  contains?: InputMaybe<Scalars['JSON']>;
  notContains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  mime?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  path?: InputMaybe<Scalars['String']>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  name: Scalars['String'];
  pathId: Scalars['Int'];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['ID']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export enum Enum_Achievement_Category {
  Obecny = 'Obecny',
  DnD = 'DnD'
}

export type AchievementFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<StringFilterInput>;
  guild?: InputMaybe<StringFilterInput>;
  achievemt_chatters?: InputMaybe<AchievemtChatterFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AchievementFiltersInput>>>;
  not?: InputMaybe<AchievementFiltersInput>;
};

export type AchievementInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Enum_Achievement_Category>;
  guild?: InputMaybe<Scalars['String']>;
  achievemt_chatters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Achievement = {
  __typename?: 'Achievement';
  name: Scalars['String'];
  description: Scalars['String'];
  category?: Maybe<Enum_Achievement_Category>;
  guild: Scalars['String'];
  achievemt_chatters?: Maybe<AchievemtChatterRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AchievementAchievemt_ChattersArgs = {
  filters?: InputMaybe<AchievemtChatterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type AchievementEntity = {
  __typename?: 'AchievementEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Achievement>;
};

export type AchievementEntityResponse = {
  __typename?: 'AchievementEntityResponse';
  data?: Maybe<AchievementEntity>;
};

export type AchievementEntityResponseCollection = {
  __typename?: 'AchievementEntityResponseCollection';
  data: Array<AchievementEntity>;
  meta: ResponseCollectionMeta;
};

export type AchievemtChatterFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  achievement?: InputMaybe<AchievementFiltersInput>;
  chatter?: InputMaybe<ChatterFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AchievemtChatterFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AchievemtChatterFiltersInput>>>;
  not?: InputMaybe<AchievemtChatterFiltersInput>;
};

export type AchievemtChatterInput = {
  achievement?: InputMaybe<Scalars['ID']>;
  chatter?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AchievemtChatter = {
  __typename?: 'AchievemtChatter';
  achievement?: Maybe<AchievementEntityResponse>;
  chatter?: Maybe<ChatterEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type AchievemtChatterEntity = {
  __typename?: 'AchievemtChatterEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AchievemtChatter>;
};

export type AchievemtChatterEntityResponse = {
  __typename?: 'AchievemtChatterEntityResponse';
  data?: Maybe<AchievemtChatterEntity>;
};

export type AchievemtChatterEntityResponseCollection = {
  __typename?: 'AchievemtChatterEntityResponseCollection';
  data: Array<AchievemtChatterEntity>;
  meta: ResponseCollectionMeta;
};

export type AchievemtChatterRelationResponseCollection = {
  __typename?: 'AchievemtChatterRelationResponseCollection';
  data: Array<AchievemtChatterEntity>;
};

export type BirthdayFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  dateOfBirth?: InputMaybe<DateFilterInput>;
  guild?: InputMaybe<GuildFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BirthdayFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<BirthdayFiltersInput>>>;
  not?: InputMaybe<BirthdayFiltersInput>;
};

export type BirthdayInput = {
  name?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  guild?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Birthday = {
  __typename?: 'Birthday';
  name: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['Date']>;
  guild?: Maybe<GuildEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type BirthdayEntity = {
  __typename?: 'BirthdayEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Birthday>;
};

export type BirthdayEntityResponse = {
  __typename?: 'BirthdayEntityResponse';
  data?: Maybe<BirthdayEntity>;
};

export type BirthdayEntityResponseCollection = {
  __typename?: 'BirthdayEntityResponseCollection';
  data: Array<BirthdayEntity>;
  meta: ResponseCollectionMeta;
};

export type BirthdayRelationResponseCollection = {
  __typename?: 'BirthdayRelationResponseCollection';
  data: Array<BirthdayEntity>;
};

export type ChatterFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  user_id?: InputMaybe<StringFilterInput>;
  numOfMessages?: InputMaybe<LongFilterInput>;
  guild?: InputMaybe<StringFilterInput>;
  achievemt_chatters?: InputMaybe<AchievemtChatterFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChatterFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ChatterFiltersInput>>>;
  not?: InputMaybe<ChatterFiltersInput>;
};

export type ChatterInput = {
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  numOfMessages?: InputMaybe<Scalars['Long']>;
  guild?: InputMaybe<Scalars['String']>;
  achievemt_chatters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Chatter = {
  __typename?: 'Chatter';
  name: Scalars['String'];
  user_id: Scalars['String'];
  numOfMessages: Scalars['Long'];
  guild: Scalars['String'];
  achievemt_chatters?: Maybe<AchievemtChatterRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ChatterAchievemt_ChattersArgs = {
  filters?: InputMaybe<AchievemtChatterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type ChatterEntity = {
  __typename?: 'ChatterEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Chatter>;
};

export type ChatterEntityResponse = {
  __typename?: 'ChatterEntityResponse';
  data?: Maybe<ChatterEntity>;
};

export type ChatterEntityResponseCollection = {
  __typename?: 'ChatterEntityResponseCollection';
  data: Array<ChatterEntity>;
  meta: ResponseCollectionMeta;
};

export type GuildFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  guild_id?: InputMaybe<StringFilterInput>;
  guild_name?: InputMaybe<StringFilterInput>;
  birthdays?: InputMaybe<BirthdayFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GuildFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<GuildFiltersInput>>>;
  not?: InputMaybe<GuildFiltersInput>;
};

export type GuildInput = {
  guild_id?: InputMaybe<Scalars['String']>;
  guild_name?: InputMaybe<Scalars['String']>;
  birthdays?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Guild = {
  __typename?: 'Guild';
  guild_id: Scalars['String'];
  guild_name: Scalars['String'];
  birthdays?: Maybe<BirthdayRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GuildBirthdaysArgs = {
  filters?: InputMaybe<BirthdayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type GuildEntity = {
  __typename?: 'GuildEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Guild>;
};

export type GuildEntityResponse = {
  __typename?: 'GuildEntityResponse';
  data?: Maybe<GuildEntity>;
};

export type GuildEntityResponseCollection = {
  __typename?: 'GuildEntityResponseCollection';
  data: Array<GuildEntity>;
  meta: ResponseCollectionMeta;
};

export type QuoteFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  quote?: InputMaybe<StringFilterInput>;
  guild_id?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  not?: InputMaybe<QuoteFiltersInput>;
};

export type QuoteInput = {
  quote?: InputMaybe<Scalars['String']>;
  guild_id?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Quote = {
  __typename?: 'Quote';
  quote?: Maybe<Scalars['String']>;
  guild_id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type QuoteEntity = {
  __typename?: 'QuoteEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Quote>;
};

export type QuoteEntityResponse = {
  __typename?: 'QuoteEntityResponse';
  data?: Maybe<QuoteEntity>;
};

export type QuoteEntityResponseCollection = {
  __typename?: 'QuoteEntityResponseCollection';
  data: Array<QuoteEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Test_State {
  Undefined = 'undefined',
  Nk = 'NK',
  PostNk = 'POST_NK',
  Sk = 'SK',
  PostSk = 'POST_SK',
  Grf = 'GRF',
  PostGrf = 'POST_GRF'
}

export type TestFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  decks?: InputMaybe<JsonFilterInput>;
  starts?: InputMaybe<DateTimeFilterInput>;
  ends?: InputMaybe<DateTimeFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TestFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<TestFiltersInput>>>;
  not?: InputMaybe<TestFiltersInput>;
};

export type TestInput = {
  decks?: InputMaybe<Scalars['JSON']>;
  starts?: InputMaybe<Scalars['DateTime']>;
  ends?: InputMaybe<Scalars['DateTime']>;
  state?: InputMaybe<Enum_Test_State>;
};

export type Test = {
  __typename?: 'Test';
  decks?: Maybe<Scalars['JSON']>;
  starts?: Maybe<Scalars['DateTime']>;
  ends?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Enum_Test_State>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TestEntity = {
  __typename?: 'TestEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Test>;
};

export type TestEntityResponse = {
  __typename?: 'TestEntityResponse';
  data?: Maybe<TestEntity>;
};

export type TestEntityResponseCollection = {
  __typename?: 'TestEntityResponseCollection';
  data: Array<TestEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Text_Type {
  Rank = 'Rank',
  Leaderboard = 'Leaderboard',
  Birthday = 'Birthday'
}

export type TextFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  text?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TextFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<TextFiltersInput>>>;
  not?: InputMaybe<TextFiltersInput>;
};

export type TextInput = {
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Text_Type>;
};

export type Text = {
  __typename?: 'Text';
  text: Scalars['String'];
  type?: Maybe<Enum_Text_Type>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TextEntity = {
  __typename?: 'TextEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Text>;
};

export type TextEntityResponse = {
  __typename?: 'TextEntityResponse';
  data?: Maybe<TextEntity>;
};

export type TextEntityResponseCollection = {
  __typename?: 'TextEntityResponseCollection';
  data: Array<TextEntity>;
  meta: ResponseCollectionMeta;
};

export type GenericMorph = UploadFile | UploadFolder | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Achievement | AchievemtChatter | Birthday | Chatter | Guild | Quote | Test | Text;

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  achievement?: Maybe<AchievementEntityResponse>;
  achievements?: Maybe<AchievementEntityResponseCollection>;
  achievemtChatter?: Maybe<AchievemtChatterEntityResponse>;
  achievemtChatters?: Maybe<AchievemtChatterEntityResponseCollection>;
  birthday?: Maybe<BirthdayEntityResponse>;
  birthdays?: Maybe<BirthdayEntityResponseCollection>;
  chatter?: Maybe<ChatterEntityResponse>;
  chatters?: Maybe<ChatterEntityResponseCollection>;
  guild?: Maybe<GuildEntityResponse>;
  guilds?: Maybe<GuildEntityResponseCollection>;
  quote?: Maybe<QuoteEntityResponse>;
  quotes?: Maybe<QuoteEntityResponseCollection>;
  test?: Maybe<TestEntityResponse>;
  tests?: Maybe<TestEntityResponseCollection>;
  text?: Maybe<TextEntityResponse>;
  texts?: Maybe<TextEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAchievementArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAchievementsArgs = {
  filters?: InputMaybe<AchievementFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAchievemtChatterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAchievemtChattersArgs = {
  filters?: InputMaybe<AchievemtChatterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryBirthdayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBirthdaysArgs = {
  filters?: InputMaybe<BirthdayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryChatterArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryChattersArgs = {
  filters?: InputMaybe<ChatterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGuildArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGuildsArgs = {
  filters?: InputMaybe<GuildFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryQuoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTestArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTestsArgs = {
  filters?: InputMaybe<TestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTextArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTextsArgs = {
  filters?: InputMaybe<TextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createAchievement?: Maybe<AchievementEntityResponse>;
  updateAchievement?: Maybe<AchievementEntityResponse>;
  deleteAchievement?: Maybe<AchievementEntityResponse>;
  createAchievemtChatter?: Maybe<AchievemtChatterEntityResponse>;
  updateAchievemtChatter?: Maybe<AchievemtChatterEntityResponse>;
  deleteAchievemtChatter?: Maybe<AchievemtChatterEntityResponse>;
  createBirthday?: Maybe<BirthdayEntityResponse>;
  updateBirthday?: Maybe<BirthdayEntityResponse>;
  deleteBirthday?: Maybe<BirthdayEntityResponse>;
  createChatter?: Maybe<ChatterEntityResponse>;
  updateChatter?: Maybe<ChatterEntityResponse>;
  deleteChatter?: Maybe<ChatterEntityResponse>;
  createGuild?: Maybe<GuildEntityResponse>;
  updateGuild?: Maybe<GuildEntityResponse>;
  deleteGuild?: Maybe<GuildEntityResponse>;
  createQuote?: Maybe<QuoteEntityResponse>;
  updateQuote?: Maybe<QuoteEntityResponse>;
  deleteQuote?: Maybe<QuoteEntityResponse>;
  createTest?: Maybe<TestEntityResponse>;
  updateTest?: Maybe<TestEntityResponse>;
  deleteTest?: Maybe<TestEntityResponse>;
  createText?: Maybe<TextEntityResponse>;
  updateText?: Maybe<TextEntityResponse>;
  deleteText?: Maybe<TextEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID'];
  data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID'];
  data: UploadFolderInput;
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAchievementArgs = {
  data: AchievementInput;
};


export type MutationUpdateAchievementArgs = {
  id: Scalars['ID'];
  data: AchievementInput;
};


export type MutationDeleteAchievementArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAchievemtChatterArgs = {
  data: AchievemtChatterInput;
};


export type MutationUpdateAchievemtChatterArgs = {
  id: Scalars['ID'];
  data: AchievemtChatterInput;
};


export type MutationDeleteAchievemtChatterArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBirthdayArgs = {
  data: BirthdayInput;
};


export type MutationUpdateBirthdayArgs = {
  id: Scalars['ID'];
  data: BirthdayInput;
};


export type MutationDeleteBirthdayArgs = {
  id: Scalars['ID'];
};


export type MutationCreateChatterArgs = {
  data: ChatterInput;
};


export type MutationUpdateChatterArgs = {
  id: Scalars['ID'];
  data: ChatterInput;
};


export type MutationDeleteChatterArgs = {
  id: Scalars['ID'];
};


export type MutationCreateGuildArgs = {
  data: GuildInput;
};


export type MutationUpdateGuildArgs = {
  id: Scalars['ID'];
  data: GuildInput;
};


export type MutationDeleteGuildArgs = {
  id: Scalars['ID'];
};


export type MutationCreateQuoteArgs = {
  data: QuoteInput;
};


export type MutationUpdateQuoteArgs = {
  id: Scalars['ID'];
  data: QuoteInput;
};


export type MutationDeleteQuoteArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTestArgs = {
  data: TestInput;
};


export type MutationUpdateTestArgs = {
  id: Scalars['ID'];
  data: TestInput;
};


export type MutationDeleteTestArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTextArgs = {
  data: TextInput;
};


export type MutationUpdateTextArgs = {
  id: Scalars['ID'];
  data: TextInput;
};


export type MutationDeleteTextArgs = {
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
