# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListUsers*](#listusers)
  - [*GetDailyLog*](#getdailylog)
  - [*ListDailyLogs*](#listdailylogs)
  - [*GetHabit*](#gethabit)
  - [*ListHabits*](#listhabits)
  - [*GetHabitLog*](#gethabitlog)
  - [*ListHabitLogs*](#listhabitlogs)
  - [*GetStreak*](#getstreak)
  - [*ListStreaks*](#liststreaks)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateDailyLog*](#createdailylog)
  - [*UpdateDailyLog*](#updatedailylog)
  - [*DeleteDailyLog*](#deletedailylog)
  - [*CreateHabit*](#createhabit)
  - [*UpdateHabit*](#updatehabit)
  - [*DeleteHabit*](#deletehabit)
  - [*CreateHabitLog*](#createhabitlog)
  - [*UpdateHabitLog*](#updatehabitlog)
  - [*DeleteHabitLog*](#deletehabitlog)
  - [*CreateStreak*](#createstreak)
  - [*UpdateStreak*](#updatestreak)
  - [*DeleteStreak*](#deletestreak)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserData {
  user?: {
    username: string;
    email: string;
  };
}
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    username: string;
  })[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetDailyLog
You can execute the `GetDailyLog` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDailyLog(vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface GetDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
}
export const getDailyLogRef: GetDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDailyLog(dc: DataConnect, vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface GetDailyLogRef {
  ...
  (dc: DataConnect, vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
}
export const getDailyLogRef: GetDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDailyLogRef:
```typescript
const name = getDailyLogRef.operationName;
console.log(name);
```

### Variables
The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetDailyLog` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDailyLogData {
  dailyLog?: {
    date: DateString;
    shalatData: string;
  };
}
```
### Using `GetDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDailyLog, GetDailyLogVariables } from '@dataconnect/generated';

// The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`:
const getDailyLogVars: GetDailyLogVariables = {
  id: ..., 
};

// Call the `getDailyLog()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDailyLog(getDailyLogVars);
// Variables can be defined inline as well.
const { data } = await getDailyLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDailyLog(dataConnect, getDailyLogVars);

console.log(data.dailyLog);

// Or, you can use the `Promise` API.
getDailyLog(getDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog);
});
```

### Using `GetDailyLog`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDailyLogRef, GetDailyLogVariables } from '@dataconnect/generated';

// The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`:
const getDailyLogVars: GetDailyLogVariables = {
  id: ..., 
};

// Call the `getDailyLogRef()` function to get a reference to the query.
const ref = getDailyLogRef(getDailyLogVars);
// Variables can be defined inline as well.
const ref = getDailyLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDailyLogRef(dataConnect, getDailyLogVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.dailyLog);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog);
});
```

## ListDailyLogs
You can execute the `ListDailyLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDailyLogs(options?: ExecuteQueryOptions): QueryPromise<ListDailyLogsData, undefined>;

interface ListDailyLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDailyLogsData, undefined>;
}
export const listDailyLogsRef: ListDailyLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDailyLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDailyLogsData, undefined>;

interface ListDailyLogsRef {
  ...
  (dc: DataConnect): QueryRef<ListDailyLogsData, undefined>;
}
export const listDailyLogsRef: ListDailyLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDailyLogsRef:
```typescript
const name = listDailyLogsRef.operationName;
console.log(name);
```

### Variables
The `ListDailyLogs` query has no variables.
### Return Type
Recall that executing the `ListDailyLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDailyLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDailyLogsData {
  dailyLogs: ({
    date: DateString;
  })[];
}
```
### Using `ListDailyLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDailyLogs } from '@dataconnect/generated';


// Call the `listDailyLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDailyLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDailyLogs(dataConnect);

console.log(data.dailyLogs);

// Or, you can use the `Promise` API.
listDailyLogs().then((response) => {
  const data = response.data;
  console.log(data.dailyLogs);
});
```

### Using `ListDailyLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDailyLogsRef } from '@dataconnect/generated';


// Call the `listDailyLogsRef()` function to get a reference to the query.
const ref = listDailyLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDailyLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.dailyLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLogs);
});
```

## GetHabit
You can execute the `GetHabit` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getHabit(vars: GetHabitVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitData, GetHabitVariables>;

interface GetHabitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHabitVariables): QueryRef<GetHabitData, GetHabitVariables>;
}
export const getHabitRef: GetHabitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHabit(dc: DataConnect, vars: GetHabitVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitData, GetHabitVariables>;

interface GetHabitRef {
  ...
  (dc: DataConnect, vars: GetHabitVariables): QueryRef<GetHabitData, GetHabitVariables>;
}
export const getHabitRef: GetHabitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHabitRef:
```typescript
const name = getHabitRef.operationName;
console.log(name);
```

### Variables
The `GetHabit` query requires an argument of type `GetHabitVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHabitVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetHabit` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHabitData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetHabitData {
  habit?: {
    name: string;
    type: string;
  };
}
```
### Using `GetHabit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHabit, GetHabitVariables } from '@dataconnect/generated';

// The `GetHabit` query requires an argument of type `GetHabitVariables`:
const getHabitVars: GetHabitVariables = {
  id: ..., 
};

// Call the `getHabit()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHabit(getHabitVars);
// Variables can be defined inline as well.
const { data } = await getHabit({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHabit(dataConnect, getHabitVars);

console.log(data.habit);

// Or, you can use the `Promise` API.
getHabit(getHabitVars).then((response) => {
  const data = response.data;
  console.log(data.habit);
});
```

### Using `GetHabit`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHabitRef, GetHabitVariables } from '@dataconnect/generated';

// The `GetHabit` query requires an argument of type `GetHabitVariables`:
const getHabitVars: GetHabitVariables = {
  id: ..., 
};

// Call the `getHabitRef()` function to get a reference to the query.
const ref = getHabitRef(getHabitVars);
// Variables can be defined inline as well.
const ref = getHabitRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHabitRef(dataConnect, getHabitVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.habit);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.habit);
});
```

## ListHabits
You can execute the `ListHabits` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listHabits(options?: ExecuteQueryOptions): QueryPromise<ListHabitsData, undefined>;

interface ListHabitsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHabitsData, undefined>;
}
export const listHabitsRef: ListHabitsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHabits(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHabitsData, undefined>;

interface ListHabitsRef {
  ...
  (dc: DataConnect): QueryRef<ListHabitsData, undefined>;
}
export const listHabitsRef: ListHabitsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHabitsRef:
```typescript
const name = listHabitsRef.operationName;
console.log(name);
```

### Variables
The `ListHabits` query has no variables.
### Return Type
Recall that executing the `ListHabits` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHabitsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListHabitsData {
  habits: ({
    name: string;
  })[];
}
```
### Using `ListHabits`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHabits } from '@dataconnect/generated';


// Call the `listHabits()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHabits();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHabits(dataConnect);

console.log(data.habits);

// Or, you can use the `Promise` API.
listHabits().then((response) => {
  const data = response.data;
  console.log(data.habits);
});
```

### Using `ListHabits`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHabitsRef } from '@dataconnect/generated';


// Call the `listHabitsRef()` function to get a reference to the query.
const ref = listHabitsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHabitsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.habits);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.habits);
});
```

## GetHabitLog
You can execute the `GetHabitLog` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getHabitLog(vars: GetHabitLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitLogData, GetHabitLogVariables>;

interface GetHabitLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHabitLogVariables): QueryRef<GetHabitLogData, GetHabitLogVariables>;
}
export const getHabitLogRef: GetHabitLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getHabitLog(dc: DataConnect, vars: GetHabitLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitLogData, GetHabitLogVariables>;

interface GetHabitLogRef {
  ...
  (dc: DataConnect, vars: GetHabitLogVariables): QueryRef<GetHabitLogData, GetHabitLogVariables>;
}
export const getHabitLogRef: GetHabitLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getHabitLogRef:
```typescript
const name = getHabitLogRef.operationName;
console.log(name);
```

### Variables
The `GetHabitLog` query requires an argument of type `GetHabitLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetHabitLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetHabitLog` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetHabitLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetHabitLogData {
  habitLog?: {
    date: DateString;
    isCompleted: boolean;
  };
}
```
### Using `GetHabitLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getHabitLog, GetHabitLogVariables } from '@dataconnect/generated';

// The `GetHabitLog` query requires an argument of type `GetHabitLogVariables`:
const getHabitLogVars: GetHabitLogVariables = {
  id: ..., 
};

// Call the `getHabitLog()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getHabitLog(getHabitLogVars);
// Variables can be defined inline as well.
const { data } = await getHabitLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getHabitLog(dataConnect, getHabitLogVars);

console.log(data.habitLog);

// Or, you can use the `Promise` API.
getHabitLog(getHabitLogVars).then((response) => {
  const data = response.data;
  console.log(data.habitLog);
});
```

### Using `GetHabitLog`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getHabitLogRef, GetHabitLogVariables } from '@dataconnect/generated';

// The `GetHabitLog` query requires an argument of type `GetHabitLogVariables`:
const getHabitLogVars: GetHabitLogVariables = {
  id: ..., 
};

// Call the `getHabitLogRef()` function to get a reference to the query.
const ref = getHabitLogRef(getHabitLogVars);
// Variables can be defined inline as well.
const ref = getHabitLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getHabitLogRef(dataConnect, getHabitLogVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.habitLog);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.habitLog);
});
```

## ListHabitLogs
You can execute the `ListHabitLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listHabitLogs(options?: ExecuteQueryOptions): QueryPromise<ListHabitLogsData, undefined>;

interface ListHabitLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHabitLogsData, undefined>;
}
export const listHabitLogsRef: ListHabitLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listHabitLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHabitLogsData, undefined>;

interface ListHabitLogsRef {
  ...
  (dc: DataConnect): QueryRef<ListHabitLogsData, undefined>;
}
export const listHabitLogsRef: ListHabitLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listHabitLogsRef:
```typescript
const name = listHabitLogsRef.operationName;
console.log(name);
```

### Variables
The `ListHabitLogs` query has no variables.
### Return Type
Recall that executing the `ListHabitLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListHabitLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListHabitLogsData {
  habitLogs: ({
    date: DateString;
  })[];
}
```
### Using `ListHabitLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listHabitLogs } from '@dataconnect/generated';


// Call the `listHabitLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listHabitLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listHabitLogs(dataConnect);

console.log(data.habitLogs);

// Or, you can use the `Promise` API.
listHabitLogs().then((response) => {
  const data = response.data;
  console.log(data.habitLogs);
});
```

### Using `ListHabitLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listHabitLogsRef } from '@dataconnect/generated';


// Call the `listHabitLogsRef()` function to get a reference to the query.
const ref = listHabitLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listHabitLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.habitLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.habitLogs);
});
```

## GetStreak
You can execute the `GetStreak` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getStreak(vars: GetStreakVariables, options?: ExecuteQueryOptions): QueryPromise<GetStreakData, GetStreakVariables>;

interface GetStreakRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStreakVariables): QueryRef<GetStreakData, GetStreakVariables>;
}
export const getStreakRef: GetStreakRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getStreak(dc: DataConnect, vars: GetStreakVariables, options?: ExecuteQueryOptions): QueryPromise<GetStreakData, GetStreakVariables>;

interface GetStreakRef {
  ...
  (dc: DataConnect, vars: GetStreakVariables): QueryRef<GetStreakData, GetStreakVariables>;
}
export const getStreakRef: GetStreakRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getStreakRef:
```typescript
const name = getStreakRef.operationName;
console.log(name);
```

### Variables
The `GetStreak` query requires an argument of type `GetStreakVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetStreakVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetStreak` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetStreakData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetStreakData {
  streak?: {
    currentStreakCount: number;
  };
}
```
### Using `GetStreak`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getStreak, GetStreakVariables } from '@dataconnect/generated';

// The `GetStreak` query requires an argument of type `GetStreakVariables`:
const getStreakVars: GetStreakVariables = {
  id: ..., 
};

// Call the `getStreak()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getStreak(getStreakVars);
// Variables can be defined inline as well.
const { data } = await getStreak({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getStreak(dataConnect, getStreakVars);

console.log(data.streak);

// Or, you can use the `Promise` API.
getStreak(getStreakVars).then((response) => {
  const data = response.data;
  console.log(data.streak);
});
```

### Using `GetStreak`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getStreakRef, GetStreakVariables } from '@dataconnect/generated';

// The `GetStreak` query requires an argument of type `GetStreakVariables`:
const getStreakVars: GetStreakVariables = {
  id: ..., 
};

// Call the `getStreakRef()` function to get a reference to the query.
const ref = getStreakRef(getStreakVars);
// Variables can be defined inline as well.
const ref = getStreakRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getStreakRef(dataConnect, getStreakVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.streak);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.streak);
});
```

## ListStreaks
You can execute the `ListStreaks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listStreaks(options?: ExecuteQueryOptions): QueryPromise<ListStreaksData, undefined>;

interface ListStreaksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStreaksData, undefined>;
}
export const listStreaksRef: ListStreaksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listStreaks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListStreaksData, undefined>;

interface ListStreaksRef {
  ...
  (dc: DataConnect): QueryRef<ListStreaksData, undefined>;
}
export const listStreaksRef: ListStreaksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listStreaksRef:
```typescript
const name = listStreaksRef.operationName;
console.log(name);
```

### Variables
The `ListStreaks` query has no variables.
### Return Type
Recall that executing the `ListStreaks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListStreaksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListStreaksData {
  streaks: ({
    currentStreakCount: number;
  })[];
}
```
### Using `ListStreaks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listStreaks } from '@dataconnect/generated';


// Call the `listStreaks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listStreaks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listStreaks(dataConnect);

console.log(data.streaks);

// Or, you can use the `Promise` API.
listStreaks().then((response) => {
  const data = response.data;
  console.log(data.streaks);
});
```

### Using `ListStreaks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listStreaksRef } from '@dataconnect/generated';


// Call the `listStreaksRef()` function to get a reference to the query.
const ref = listStreaksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listStreaksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.streaks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.streaks);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface UpdateUserRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has no variables.
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser } from '@dataconnect/generated';


// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser().then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef } from '@dataconnect/generated';


// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateDailyLog
You can execute the `CreateDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDailyLog(vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface CreateDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
}
export const createDailyLogRef: CreateDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDailyLog(dc: DataConnect, vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface CreateDailyLogRef {
  ...
  (dc: DataConnect, vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
}
export const createDailyLogRef: CreateDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDailyLogRef:
```typescript
const name = createDailyLogRef.operationName;
console.log(name);
```

### Variables
The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDailyLogVariables {
  date: DateString;
  shalatData: string;
}
```
### Return Type
Recall that executing the `CreateDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDailyLogData {
  dailyLog_insert: DailyLog_Key;
}
```
### Using `CreateDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDailyLog, CreateDailyLogVariables } from '@dataconnect/generated';

// The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`:
const createDailyLogVars: CreateDailyLogVariables = {
  date: ..., 
  shalatData: ..., 
};

// Call the `createDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDailyLog(createDailyLogVars);
// Variables can be defined inline as well.
const { data } = await createDailyLog({ date: ..., shalatData: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDailyLog(dataConnect, createDailyLogVars);

console.log(data.dailyLog_insert);

// Or, you can use the `Promise` API.
createDailyLog(createDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_insert);
});
```

### Using `CreateDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDailyLogRef, CreateDailyLogVariables } from '@dataconnect/generated';

// The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`:
const createDailyLogVars: CreateDailyLogVariables = {
  date: ..., 
  shalatData: ..., 
};

// Call the `createDailyLogRef()` function to get a reference to the mutation.
const ref = createDailyLogRef(createDailyLogVars);
// Variables can be defined inline as well.
const ref = createDailyLogRef({ date: ..., shalatData: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDailyLogRef(dataConnect, createDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_insert);
});
```

## UpdateDailyLog
You can execute the `UpdateDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDailyLog(vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface UpdateDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
}
export const updateDailyLogRef: UpdateDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDailyLog(dc: DataConnect, vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface UpdateDailyLogRef {
  ...
  (dc: DataConnect, vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
}
export const updateDailyLogRef: UpdateDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDailyLogRef:
```typescript
const name = updateDailyLogRef.operationName;
console.log(name);
```

### Variables
The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDailyLogVariables {
  id: UUIDString;
  kajianCount?: number | null;
}
```
### Return Type
Recall that executing the `UpdateDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDailyLogData {
  dailyLog_update?: DailyLog_Key | null;
}
```
### Using `UpdateDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDailyLog, UpdateDailyLogVariables } from '@dataconnect/generated';

// The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`:
const updateDailyLogVars: UpdateDailyLogVariables = {
  id: ..., 
  kajianCount: ..., // optional
};

// Call the `updateDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDailyLog(updateDailyLogVars);
// Variables can be defined inline as well.
const { data } = await updateDailyLog({ id: ..., kajianCount: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDailyLog(dataConnect, updateDailyLogVars);

console.log(data.dailyLog_update);

// Or, you can use the `Promise` API.
updateDailyLog(updateDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_update);
});
```

### Using `UpdateDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDailyLogRef, UpdateDailyLogVariables } from '@dataconnect/generated';

// The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`:
const updateDailyLogVars: UpdateDailyLogVariables = {
  id: ..., 
  kajianCount: ..., // optional
};

// Call the `updateDailyLogRef()` function to get a reference to the mutation.
const ref = updateDailyLogRef(updateDailyLogVars);
// Variables can be defined inline as well.
const ref = updateDailyLogRef({ id: ..., kajianCount: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDailyLogRef(dataConnect, updateDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_update);
});
```

## DeleteDailyLog
You can execute the `DeleteDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDailyLog(vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface DeleteDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
}
export const deleteDailyLogRef: DeleteDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDailyLog(dc: DataConnect, vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface DeleteDailyLogRef {
  ...
  (dc: DataConnect, vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
}
export const deleteDailyLogRef: DeleteDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDailyLogRef:
```typescript
const name = deleteDailyLogRef.operationName;
console.log(name);
```

### Variables
The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDailyLogData {
  dailyLog_delete?: DailyLog_Key | null;
}
```
### Using `DeleteDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDailyLog, DeleteDailyLogVariables } from '@dataconnect/generated';

// The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`:
const deleteDailyLogVars: DeleteDailyLogVariables = {
  id: ..., 
};

// Call the `deleteDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDailyLog(deleteDailyLogVars);
// Variables can be defined inline as well.
const { data } = await deleteDailyLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDailyLog(dataConnect, deleteDailyLogVars);

console.log(data.dailyLog_delete);

// Or, you can use the `Promise` API.
deleteDailyLog(deleteDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_delete);
});
```

### Using `DeleteDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDailyLogRef, DeleteDailyLogVariables } from '@dataconnect/generated';

// The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`:
const deleteDailyLogVars: DeleteDailyLogVariables = {
  id: ..., 
};

// Call the `deleteDailyLogRef()` function to get a reference to the mutation.
const ref = deleteDailyLogRef(deleteDailyLogVars);
// Variables can be defined inline as well.
const ref = deleteDailyLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDailyLogRef(dataConnect, deleteDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_delete);
});
```

## CreateHabit
You can execute the `CreateHabit` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createHabit(vars: CreateHabitVariables): MutationPromise<CreateHabitData, CreateHabitVariables>;

interface CreateHabitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHabitVariables): MutationRef<CreateHabitData, CreateHabitVariables>;
}
export const createHabitRef: CreateHabitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createHabit(dc: DataConnect, vars: CreateHabitVariables): MutationPromise<CreateHabitData, CreateHabitVariables>;

interface CreateHabitRef {
  ...
  (dc: DataConnect, vars: CreateHabitVariables): MutationRef<CreateHabitData, CreateHabitVariables>;
}
export const createHabitRef: CreateHabitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createHabitRef:
```typescript
const name = createHabitRef.operationName;
console.log(name);
```

### Variables
The `CreateHabit` mutation requires an argument of type `CreateHabitVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateHabitVariables {
  name: string;
  type: string;
}
```
### Return Type
Recall that executing the `CreateHabit` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateHabitData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateHabitData {
  habit_insert: Habit_Key;
}
```
### Using `CreateHabit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createHabit, CreateHabitVariables } from '@dataconnect/generated';

// The `CreateHabit` mutation requires an argument of type `CreateHabitVariables`:
const createHabitVars: CreateHabitVariables = {
  name: ..., 
  type: ..., 
};

// Call the `createHabit()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createHabit(createHabitVars);
// Variables can be defined inline as well.
const { data } = await createHabit({ name: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createHabit(dataConnect, createHabitVars);

console.log(data.habit_insert);

// Or, you can use the `Promise` API.
createHabit(createHabitVars).then((response) => {
  const data = response.data;
  console.log(data.habit_insert);
});
```

### Using `CreateHabit`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createHabitRef, CreateHabitVariables } from '@dataconnect/generated';

// The `CreateHabit` mutation requires an argument of type `CreateHabitVariables`:
const createHabitVars: CreateHabitVariables = {
  name: ..., 
  type: ..., 
};

// Call the `createHabitRef()` function to get a reference to the mutation.
const ref = createHabitRef(createHabitVars);
// Variables can be defined inline as well.
const ref = createHabitRef({ name: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createHabitRef(dataConnect, createHabitVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habit_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habit_insert);
});
```

## UpdateHabit
You can execute the `UpdateHabit` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateHabit(vars: UpdateHabitVariables): MutationPromise<UpdateHabitData, UpdateHabitVariables>;

interface UpdateHabitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHabitVariables): MutationRef<UpdateHabitData, UpdateHabitVariables>;
}
export const updateHabitRef: UpdateHabitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateHabit(dc: DataConnect, vars: UpdateHabitVariables): MutationPromise<UpdateHabitData, UpdateHabitVariables>;

interface UpdateHabitRef {
  ...
  (dc: DataConnect, vars: UpdateHabitVariables): MutationRef<UpdateHabitData, UpdateHabitVariables>;
}
export const updateHabitRef: UpdateHabitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateHabitRef:
```typescript
const name = updateHabitRef.operationName;
console.log(name);
```

### Variables
The `UpdateHabit` mutation requires an argument of type `UpdateHabitVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateHabitVariables {
  id: UUIDString;
  targetValue?: number | null;
}
```
### Return Type
Recall that executing the `UpdateHabit` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateHabitData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateHabitData {
  habit_update?: Habit_Key | null;
}
```
### Using `UpdateHabit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateHabit, UpdateHabitVariables } from '@dataconnect/generated';

// The `UpdateHabit` mutation requires an argument of type `UpdateHabitVariables`:
const updateHabitVars: UpdateHabitVariables = {
  id: ..., 
  targetValue: ..., // optional
};

// Call the `updateHabit()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateHabit(updateHabitVars);
// Variables can be defined inline as well.
const { data } = await updateHabit({ id: ..., targetValue: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateHabit(dataConnect, updateHabitVars);

console.log(data.habit_update);

// Or, you can use the `Promise` API.
updateHabit(updateHabitVars).then((response) => {
  const data = response.data;
  console.log(data.habit_update);
});
```

### Using `UpdateHabit`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateHabitRef, UpdateHabitVariables } from '@dataconnect/generated';

// The `UpdateHabit` mutation requires an argument of type `UpdateHabitVariables`:
const updateHabitVars: UpdateHabitVariables = {
  id: ..., 
  targetValue: ..., // optional
};

// Call the `updateHabitRef()` function to get a reference to the mutation.
const ref = updateHabitRef(updateHabitVars);
// Variables can be defined inline as well.
const ref = updateHabitRef({ id: ..., targetValue: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateHabitRef(dataConnect, updateHabitVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habit_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habit_update);
});
```

## DeleteHabit
You can execute the `DeleteHabit` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteHabit(vars: DeleteHabitVariables): MutationPromise<DeleteHabitData, DeleteHabitVariables>;

interface DeleteHabitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHabitVariables): MutationRef<DeleteHabitData, DeleteHabitVariables>;
}
export const deleteHabitRef: DeleteHabitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteHabit(dc: DataConnect, vars: DeleteHabitVariables): MutationPromise<DeleteHabitData, DeleteHabitVariables>;

interface DeleteHabitRef {
  ...
  (dc: DataConnect, vars: DeleteHabitVariables): MutationRef<DeleteHabitData, DeleteHabitVariables>;
}
export const deleteHabitRef: DeleteHabitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteHabitRef:
```typescript
const name = deleteHabitRef.operationName;
console.log(name);
```

### Variables
The `DeleteHabit` mutation requires an argument of type `DeleteHabitVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteHabitVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteHabit` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteHabitData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteHabitData {
  habit_delete?: Habit_Key | null;
}
```
### Using `DeleteHabit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteHabit, DeleteHabitVariables } from '@dataconnect/generated';

// The `DeleteHabit` mutation requires an argument of type `DeleteHabitVariables`:
const deleteHabitVars: DeleteHabitVariables = {
  id: ..., 
};

// Call the `deleteHabit()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteHabit(deleteHabitVars);
// Variables can be defined inline as well.
const { data } = await deleteHabit({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteHabit(dataConnect, deleteHabitVars);

console.log(data.habit_delete);

// Or, you can use the `Promise` API.
deleteHabit(deleteHabitVars).then((response) => {
  const data = response.data;
  console.log(data.habit_delete);
});
```

### Using `DeleteHabit`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteHabitRef, DeleteHabitVariables } from '@dataconnect/generated';

// The `DeleteHabit` mutation requires an argument of type `DeleteHabitVariables`:
const deleteHabitVars: DeleteHabitVariables = {
  id: ..., 
};

// Call the `deleteHabitRef()` function to get a reference to the mutation.
const ref = deleteHabitRef(deleteHabitVars);
// Variables can be defined inline as well.
const ref = deleteHabitRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteHabitRef(dataConnect, deleteHabitVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habit_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habit_delete);
});
```

## CreateHabitLog
You can execute the `CreateHabitLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createHabitLog(vars: CreateHabitLogVariables): MutationPromise<CreateHabitLogData, CreateHabitLogVariables>;

interface CreateHabitLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHabitLogVariables): MutationRef<CreateHabitLogData, CreateHabitLogVariables>;
}
export const createHabitLogRef: CreateHabitLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createHabitLog(dc: DataConnect, vars: CreateHabitLogVariables): MutationPromise<CreateHabitLogData, CreateHabitLogVariables>;

interface CreateHabitLogRef {
  ...
  (dc: DataConnect, vars: CreateHabitLogVariables): MutationRef<CreateHabitLogData, CreateHabitLogVariables>;
}
export const createHabitLogRef: CreateHabitLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createHabitLogRef:
```typescript
const name = createHabitLogRef.operationName;
console.log(name);
```

### Variables
The `CreateHabitLog` mutation requires an argument of type `CreateHabitLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateHabitLogVariables {
  date: DateString;
  isCompleted: boolean;
  habitId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateHabitLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateHabitLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateHabitLogData {
  habitLog_insert: HabitLog_Key;
}
```
### Using `CreateHabitLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createHabitLog, CreateHabitLogVariables } from '@dataconnect/generated';

// The `CreateHabitLog` mutation requires an argument of type `CreateHabitLogVariables`:
const createHabitLogVars: CreateHabitLogVariables = {
  date: ..., 
  isCompleted: ..., 
  habitId: ..., 
};

// Call the `createHabitLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createHabitLog(createHabitLogVars);
// Variables can be defined inline as well.
const { data } = await createHabitLog({ date: ..., isCompleted: ..., habitId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createHabitLog(dataConnect, createHabitLogVars);

console.log(data.habitLog_insert);

// Or, you can use the `Promise` API.
createHabitLog(createHabitLogVars).then((response) => {
  const data = response.data;
  console.log(data.habitLog_insert);
});
```

### Using `CreateHabitLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createHabitLogRef, CreateHabitLogVariables } from '@dataconnect/generated';

// The `CreateHabitLog` mutation requires an argument of type `CreateHabitLogVariables`:
const createHabitLogVars: CreateHabitLogVariables = {
  date: ..., 
  isCompleted: ..., 
  habitId: ..., 
};

// Call the `createHabitLogRef()` function to get a reference to the mutation.
const ref = createHabitLogRef(createHabitLogVars);
// Variables can be defined inline as well.
const ref = createHabitLogRef({ date: ..., isCompleted: ..., habitId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createHabitLogRef(dataConnect, createHabitLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habitLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habitLog_insert);
});
```

## UpdateHabitLog
You can execute the `UpdateHabitLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateHabitLog(vars: UpdateHabitLogVariables): MutationPromise<UpdateHabitLogData, UpdateHabitLogVariables>;

interface UpdateHabitLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHabitLogVariables): MutationRef<UpdateHabitLogData, UpdateHabitLogVariables>;
}
export const updateHabitLogRef: UpdateHabitLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateHabitLog(dc: DataConnect, vars: UpdateHabitLogVariables): MutationPromise<UpdateHabitLogData, UpdateHabitLogVariables>;

interface UpdateHabitLogRef {
  ...
  (dc: DataConnect, vars: UpdateHabitLogVariables): MutationRef<UpdateHabitLogData, UpdateHabitLogVariables>;
}
export const updateHabitLogRef: UpdateHabitLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateHabitLogRef:
```typescript
const name = updateHabitLogRef.operationName;
console.log(name);
```

### Variables
The `UpdateHabitLog` mutation requires an argument of type `UpdateHabitLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateHabitLogVariables {
  id: UUIDString;
  isCompleted: boolean;
}
```
### Return Type
Recall that executing the `UpdateHabitLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateHabitLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateHabitLogData {
  habitLog_update?: HabitLog_Key | null;
}
```
### Using `UpdateHabitLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateHabitLog, UpdateHabitLogVariables } from '@dataconnect/generated';

// The `UpdateHabitLog` mutation requires an argument of type `UpdateHabitLogVariables`:
const updateHabitLogVars: UpdateHabitLogVariables = {
  id: ..., 
  isCompleted: ..., 
};

// Call the `updateHabitLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateHabitLog(updateHabitLogVars);
// Variables can be defined inline as well.
const { data } = await updateHabitLog({ id: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateHabitLog(dataConnect, updateHabitLogVars);

console.log(data.habitLog_update);

// Or, you can use the `Promise` API.
updateHabitLog(updateHabitLogVars).then((response) => {
  const data = response.data;
  console.log(data.habitLog_update);
});
```

### Using `UpdateHabitLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateHabitLogRef, UpdateHabitLogVariables } from '@dataconnect/generated';

// The `UpdateHabitLog` mutation requires an argument of type `UpdateHabitLogVariables`:
const updateHabitLogVars: UpdateHabitLogVariables = {
  id: ..., 
  isCompleted: ..., 
};

// Call the `updateHabitLogRef()` function to get a reference to the mutation.
const ref = updateHabitLogRef(updateHabitLogVars);
// Variables can be defined inline as well.
const ref = updateHabitLogRef({ id: ..., isCompleted: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateHabitLogRef(dataConnect, updateHabitLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habitLog_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habitLog_update);
});
```

## DeleteHabitLog
You can execute the `DeleteHabitLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteHabitLog(vars: DeleteHabitLogVariables): MutationPromise<DeleteHabitLogData, DeleteHabitLogVariables>;

interface DeleteHabitLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHabitLogVariables): MutationRef<DeleteHabitLogData, DeleteHabitLogVariables>;
}
export const deleteHabitLogRef: DeleteHabitLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteHabitLog(dc: DataConnect, vars: DeleteHabitLogVariables): MutationPromise<DeleteHabitLogData, DeleteHabitLogVariables>;

interface DeleteHabitLogRef {
  ...
  (dc: DataConnect, vars: DeleteHabitLogVariables): MutationRef<DeleteHabitLogData, DeleteHabitLogVariables>;
}
export const deleteHabitLogRef: DeleteHabitLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteHabitLogRef:
```typescript
const name = deleteHabitLogRef.operationName;
console.log(name);
```

### Variables
The `DeleteHabitLog` mutation requires an argument of type `DeleteHabitLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteHabitLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteHabitLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteHabitLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteHabitLogData {
  habitLog_delete?: HabitLog_Key | null;
}
```
### Using `DeleteHabitLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteHabitLog, DeleteHabitLogVariables } from '@dataconnect/generated';

// The `DeleteHabitLog` mutation requires an argument of type `DeleteHabitLogVariables`:
const deleteHabitLogVars: DeleteHabitLogVariables = {
  id: ..., 
};

// Call the `deleteHabitLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteHabitLog(deleteHabitLogVars);
// Variables can be defined inline as well.
const { data } = await deleteHabitLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteHabitLog(dataConnect, deleteHabitLogVars);

console.log(data.habitLog_delete);

// Or, you can use the `Promise` API.
deleteHabitLog(deleteHabitLogVars).then((response) => {
  const data = response.data;
  console.log(data.habitLog_delete);
});
```

### Using `DeleteHabitLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteHabitLogRef, DeleteHabitLogVariables } from '@dataconnect/generated';

// The `DeleteHabitLog` mutation requires an argument of type `DeleteHabitLogVariables`:
const deleteHabitLogVars: DeleteHabitLogVariables = {
  id: ..., 
};

// Call the `deleteHabitLogRef()` function to get a reference to the mutation.
const ref = deleteHabitLogRef(deleteHabitLogVars);
// Variables can be defined inline as well.
const ref = deleteHabitLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteHabitLogRef(dataConnect, deleteHabitLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.habitLog_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.habitLog_delete);
});
```

## CreateStreak
You can execute the `CreateStreak` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createStreak(vars: CreateStreakVariables): MutationPromise<CreateStreakData, CreateStreakVariables>;

interface CreateStreakRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStreakVariables): MutationRef<CreateStreakData, CreateStreakVariables>;
}
export const createStreakRef: CreateStreakRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createStreak(dc: DataConnect, vars: CreateStreakVariables): MutationPromise<CreateStreakData, CreateStreakVariables>;

interface CreateStreakRef {
  ...
  (dc: DataConnect, vars: CreateStreakVariables): MutationRef<CreateStreakData, CreateStreakVariables>;
}
export const createStreakRef: CreateStreakRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createStreakRef:
```typescript
const name = createStreakRef.operationName;
console.log(name);
```

### Variables
The `CreateStreak` mutation requires an argument of type `CreateStreakVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateStreakVariables {
  count: number;
  date: DateString;
}
```
### Return Type
Recall that executing the `CreateStreak` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateStreakData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateStreakData {
  streak_insert: Streak_Key;
}
```
### Using `CreateStreak`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createStreak, CreateStreakVariables } from '@dataconnect/generated';

// The `CreateStreak` mutation requires an argument of type `CreateStreakVariables`:
const createStreakVars: CreateStreakVariables = {
  count: ..., 
  date: ..., 
};

// Call the `createStreak()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createStreak(createStreakVars);
// Variables can be defined inline as well.
const { data } = await createStreak({ count: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createStreak(dataConnect, createStreakVars);

console.log(data.streak_insert);

// Or, you can use the `Promise` API.
createStreak(createStreakVars).then((response) => {
  const data = response.data;
  console.log(data.streak_insert);
});
```

### Using `CreateStreak`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createStreakRef, CreateStreakVariables } from '@dataconnect/generated';

// The `CreateStreak` mutation requires an argument of type `CreateStreakVariables`:
const createStreakVars: CreateStreakVariables = {
  count: ..., 
  date: ..., 
};

// Call the `createStreakRef()` function to get a reference to the mutation.
const ref = createStreakRef(createStreakVars);
// Variables can be defined inline as well.
const ref = createStreakRef({ count: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createStreakRef(dataConnect, createStreakVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.streak_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.streak_insert);
});
```

## UpdateStreak
You can execute the `UpdateStreak` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStreak(vars: UpdateStreakVariables): MutationPromise<UpdateStreakData, UpdateStreakVariables>;

interface UpdateStreakRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStreakVariables): MutationRef<UpdateStreakData, UpdateStreakVariables>;
}
export const updateStreakRef: UpdateStreakRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStreak(dc: DataConnect, vars: UpdateStreakVariables): MutationPromise<UpdateStreakData, UpdateStreakVariables>;

interface UpdateStreakRef {
  ...
  (dc: DataConnect, vars: UpdateStreakVariables): MutationRef<UpdateStreakData, UpdateStreakVariables>;
}
export const updateStreakRef: UpdateStreakRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStreakRef:
```typescript
const name = updateStreakRef.operationName;
console.log(name);
```

### Variables
The `UpdateStreak` mutation requires an argument of type `UpdateStreakVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStreakVariables {
  id: UUIDString;
  count: number;
}
```
### Return Type
Recall that executing the `UpdateStreak` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStreakData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStreakData {
  streak_update?: Streak_Key | null;
}
```
### Using `UpdateStreak`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStreak, UpdateStreakVariables } from '@dataconnect/generated';

// The `UpdateStreak` mutation requires an argument of type `UpdateStreakVariables`:
const updateStreakVars: UpdateStreakVariables = {
  id: ..., 
  count: ..., 
};

// Call the `updateStreak()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStreak(updateStreakVars);
// Variables can be defined inline as well.
const { data } = await updateStreak({ id: ..., count: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStreak(dataConnect, updateStreakVars);

console.log(data.streak_update);

// Or, you can use the `Promise` API.
updateStreak(updateStreakVars).then((response) => {
  const data = response.data;
  console.log(data.streak_update);
});
```

### Using `UpdateStreak`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStreakRef, UpdateStreakVariables } from '@dataconnect/generated';

// The `UpdateStreak` mutation requires an argument of type `UpdateStreakVariables`:
const updateStreakVars: UpdateStreakVariables = {
  id: ..., 
  count: ..., 
};

// Call the `updateStreakRef()` function to get a reference to the mutation.
const ref = updateStreakRef(updateStreakVars);
// Variables can be defined inline as well.
const ref = updateStreakRef({ id: ..., count: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStreakRef(dataConnect, updateStreakVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.streak_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.streak_update);
});
```

## DeleteStreak
You can execute the `DeleteStreak` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteStreak(vars: DeleteStreakVariables): MutationPromise<DeleteStreakData, DeleteStreakVariables>;

interface DeleteStreakRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteStreakVariables): MutationRef<DeleteStreakData, DeleteStreakVariables>;
}
export const deleteStreakRef: DeleteStreakRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteStreak(dc: DataConnect, vars: DeleteStreakVariables): MutationPromise<DeleteStreakData, DeleteStreakVariables>;

interface DeleteStreakRef {
  ...
  (dc: DataConnect, vars: DeleteStreakVariables): MutationRef<DeleteStreakData, DeleteStreakVariables>;
}
export const deleteStreakRef: DeleteStreakRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteStreakRef:
```typescript
const name = deleteStreakRef.operationName;
console.log(name);
```

### Variables
The `DeleteStreak` mutation requires an argument of type `DeleteStreakVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteStreakVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteStreak` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteStreakData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteStreakData {
  streak_delete?: Streak_Key | null;
}
```
### Using `DeleteStreak`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteStreak, DeleteStreakVariables } from '@dataconnect/generated';

// The `DeleteStreak` mutation requires an argument of type `DeleteStreakVariables`:
const deleteStreakVars: DeleteStreakVariables = {
  id: ..., 
};

// Call the `deleteStreak()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteStreak(deleteStreakVars);
// Variables can be defined inline as well.
const { data } = await deleteStreak({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteStreak(dataConnect, deleteStreakVars);

console.log(data.streak_delete);

// Or, you can use the `Promise` API.
deleteStreak(deleteStreakVars).then((response) => {
  const data = response.data;
  console.log(data.streak_delete);
});
```

### Using `DeleteStreak`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteStreakRef, DeleteStreakVariables } from '@dataconnect/generated';

// The `DeleteStreak` mutation requires an argument of type `DeleteStreakVariables`:
const deleteStreakVars: DeleteStreakVariables = {
  id: ..., 
};

// Call the `deleteStreakRef()` function to get a reference to the mutation.
const ref = deleteStreakRef(deleteStreakVars);
// Variables can be defined inline as well.
const ref = deleteStreakRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteStreakRef(dataConnect, deleteStreakVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.streak_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.streak_delete);
});
```

