import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateDailyLogData {
  dailyLog_insert: DailyLog_Key;
}

export interface CreateDailyLogVariables {
  date: DateString;
  shalatData: string;
}

export interface CreateHabitData {
  habit_insert: Habit_Key;
}

export interface CreateHabitLogData {
  habitLog_insert: HabitLog_Key;
}

export interface CreateHabitLogVariables {
  date: DateString;
  isCompleted: boolean;
  habitId: UUIDString;
}

export interface CreateHabitVariables {
  name: string;
  type: string;
}

export interface CreateStreakData {
  streak_insert: Streak_Key;
}

export interface CreateStreakVariables {
  count: number;
  date: DateString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface DailyLog_Key {
  id: UUIDString;
  __typename?: 'DailyLog_Key';
}

export interface DeleteDailyLogData {
  dailyLog_delete?: DailyLog_Key | null;
}

export interface DeleteDailyLogVariables {
  id: UUIDString;
}

export interface DeleteHabitData {
  habit_delete?: Habit_Key | null;
}

export interface DeleteHabitLogData {
  habitLog_delete?: HabitLog_Key | null;
}

export interface DeleteHabitLogVariables {
  id: UUIDString;
}

export interface DeleteHabitVariables {
  id: UUIDString;
}

export interface DeleteStreakData {
  streak_delete?: Streak_Key | null;
}

export interface DeleteStreakVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface GetDailyLogData {
  dailyLog?: {
    date: DateString;
    shalatData: string;
  };
}

export interface GetDailyLogVariables {
  id: UUIDString;
}

export interface GetHabitData {
  habit?: {
    name: string;
    type: string;
  };
}

export interface GetHabitLogData {
  habitLog?: {
    date: DateString;
    isCompleted: boolean;
  };
}

export interface GetHabitLogVariables {
  id: UUIDString;
}

export interface GetHabitVariables {
  id: UUIDString;
}

export interface GetStreakData {
  streak?: {
    currentStreakCount: number;
  };
}

export interface GetStreakVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    username: string;
    email: string;
  };
}

export interface HabitLog_Key {
  id: UUIDString;
  __typename?: 'HabitLog_Key';
}

export interface Habit_Key {
  id: UUIDString;
  __typename?: 'Habit_Key';
}

export interface ListDailyLogsData {
  dailyLogs: ({
    date: DateString;
  })[];
}

export interface ListHabitLogsData {
  habitLogs: ({
    date: DateString;
  })[];
}

export interface ListHabitsData {
  habits: ({
    name: string;
  })[];
}

export interface ListStreaksData {
  streaks: ({
    currentStreakCount: number;
  })[];
}

export interface ListUsersData {
  users: ({
    username: string;
  })[];
}

export interface Streak_Key {
  id: UUIDString;
  __typename?: 'Streak_Key';
}

export interface UpdateDailyLogData {
  dailyLog_update?: DailyLog_Key | null;
}

export interface UpdateDailyLogVariables {
  id: UUIDString;
  kajianCount?: number | null;
}

export interface UpdateHabitData {
  habit_update?: Habit_Key | null;
}

export interface UpdateHabitLogData {
  habitLog_update?: HabitLog_Key | null;
}

export interface UpdateHabitLogVariables {
  id: UUIDString;
  isCompleted: boolean;
}

export interface UpdateHabitVariables {
  id: UUIDString;
  targetValue?: number | null;
}

export interface UpdateStreakData {
  streak_update?: Streak_Key | null;
}

export interface UpdateStreakVariables {
  id: UUIDString;
  count: number;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserData, undefined>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(): MutationPromise<UpdateUserData, undefined>;
export function updateUser(dc: DataConnect): MutationPromise<UpdateUserData, undefined>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
  operationName: string;
}
export const createDailyLogRef: CreateDailyLogRef;

export function createDailyLog(vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;
export function createDailyLog(dc: DataConnect, vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface UpdateDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
  operationName: string;
}
export const updateDailyLogRef: UpdateDailyLogRef;

export function updateDailyLog(vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;
export function updateDailyLog(dc: DataConnect, vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface DeleteDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
  operationName: string;
}
export const deleteDailyLogRef: DeleteDailyLogRef;

export function deleteDailyLog(vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;
export function deleteDailyLog(dc: DataConnect, vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface GetDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
  operationName: string;
}
export const getDailyLogRef: GetDailyLogRef;

export function getDailyLog(vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;
export function getDailyLog(dc: DataConnect, vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface ListDailyLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDailyLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDailyLogsData, undefined>;
  operationName: string;
}
export const listDailyLogsRef: ListDailyLogsRef;

export function listDailyLogs(options?: ExecuteQueryOptions): QueryPromise<ListDailyLogsData, undefined>;
export function listDailyLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDailyLogsData, undefined>;

interface CreateHabitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHabitVariables): MutationRef<CreateHabitData, CreateHabitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHabitVariables): MutationRef<CreateHabitData, CreateHabitVariables>;
  operationName: string;
}
export const createHabitRef: CreateHabitRef;

export function createHabit(vars: CreateHabitVariables): MutationPromise<CreateHabitData, CreateHabitVariables>;
export function createHabit(dc: DataConnect, vars: CreateHabitVariables): MutationPromise<CreateHabitData, CreateHabitVariables>;

interface UpdateHabitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHabitVariables): MutationRef<UpdateHabitData, UpdateHabitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateHabitVariables): MutationRef<UpdateHabitData, UpdateHabitVariables>;
  operationName: string;
}
export const updateHabitRef: UpdateHabitRef;

export function updateHabit(vars: UpdateHabitVariables): MutationPromise<UpdateHabitData, UpdateHabitVariables>;
export function updateHabit(dc: DataConnect, vars: UpdateHabitVariables): MutationPromise<UpdateHabitData, UpdateHabitVariables>;

interface DeleteHabitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHabitVariables): MutationRef<DeleteHabitData, DeleteHabitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteHabitVariables): MutationRef<DeleteHabitData, DeleteHabitVariables>;
  operationName: string;
}
export const deleteHabitRef: DeleteHabitRef;

export function deleteHabit(vars: DeleteHabitVariables): MutationPromise<DeleteHabitData, DeleteHabitVariables>;
export function deleteHabit(dc: DataConnect, vars: DeleteHabitVariables): MutationPromise<DeleteHabitData, DeleteHabitVariables>;

interface GetHabitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHabitVariables): QueryRef<GetHabitData, GetHabitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHabitVariables): QueryRef<GetHabitData, GetHabitVariables>;
  operationName: string;
}
export const getHabitRef: GetHabitRef;

export function getHabit(vars: GetHabitVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitData, GetHabitVariables>;
export function getHabit(dc: DataConnect, vars: GetHabitVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitData, GetHabitVariables>;

interface ListHabitsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHabitsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHabitsData, undefined>;
  operationName: string;
}
export const listHabitsRef: ListHabitsRef;

export function listHabits(options?: ExecuteQueryOptions): QueryPromise<ListHabitsData, undefined>;
export function listHabits(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHabitsData, undefined>;

interface CreateHabitLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateHabitLogVariables): MutationRef<CreateHabitLogData, CreateHabitLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateHabitLogVariables): MutationRef<CreateHabitLogData, CreateHabitLogVariables>;
  operationName: string;
}
export const createHabitLogRef: CreateHabitLogRef;

export function createHabitLog(vars: CreateHabitLogVariables): MutationPromise<CreateHabitLogData, CreateHabitLogVariables>;
export function createHabitLog(dc: DataConnect, vars: CreateHabitLogVariables): MutationPromise<CreateHabitLogData, CreateHabitLogVariables>;

interface UpdateHabitLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateHabitLogVariables): MutationRef<UpdateHabitLogData, UpdateHabitLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateHabitLogVariables): MutationRef<UpdateHabitLogData, UpdateHabitLogVariables>;
  operationName: string;
}
export const updateHabitLogRef: UpdateHabitLogRef;

export function updateHabitLog(vars: UpdateHabitLogVariables): MutationPromise<UpdateHabitLogData, UpdateHabitLogVariables>;
export function updateHabitLog(dc: DataConnect, vars: UpdateHabitLogVariables): MutationPromise<UpdateHabitLogData, UpdateHabitLogVariables>;

interface DeleteHabitLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteHabitLogVariables): MutationRef<DeleteHabitLogData, DeleteHabitLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteHabitLogVariables): MutationRef<DeleteHabitLogData, DeleteHabitLogVariables>;
  operationName: string;
}
export const deleteHabitLogRef: DeleteHabitLogRef;

export function deleteHabitLog(vars: DeleteHabitLogVariables): MutationPromise<DeleteHabitLogData, DeleteHabitLogVariables>;
export function deleteHabitLog(dc: DataConnect, vars: DeleteHabitLogVariables): MutationPromise<DeleteHabitLogData, DeleteHabitLogVariables>;

interface GetHabitLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetHabitLogVariables): QueryRef<GetHabitLogData, GetHabitLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetHabitLogVariables): QueryRef<GetHabitLogData, GetHabitLogVariables>;
  operationName: string;
}
export const getHabitLogRef: GetHabitLogRef;

export function getHabitLog(vars: GetHabitLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitLogData, GetHabitLogVariables>;
export function getHabitLog(dc: DataConnect, vars: GetHabitLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetHabitLogData, GetHabitLogVariables>;

interface ListHabitLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListHabitLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListHabitLogsData, undefined>;
  operationName: string;
}
export const listHabitLogsRef: ListHabitLogsRef;

export function listHabitLogs(options?: ExecuteQueryOptions): QueryPromise<ListHabitLogsData, undefined>;
export function listHabitLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListHabitLogsData, undefined>;

interface CreateStreakRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStreakVariables): MutationRef<CreateStreakData, CreateStreakVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateStreakVariables): MutationRef<CreateStreakData, CreateStreakVariables>;
  operationName: string;
}
export const createStreakRef: CreateStreakRef;

export function createStreak(vars: CreateStreakVariables): MutationPromise<CreateStreakData, CreateStreakVariables>;
export function createStreak(dc: DataConnect, vars: CreateStreakVariables): MutationPromise<CreateStreakData, CreateStreakVariables>;

interface UpdateStreakRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStreakVariables): MutationRef<UpdateStreakData, UpdateStreakVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStreakVariables): MutationRef<UpdateStreakData, UpdateStreakVariables>;
  operationName: string;
}
export const updateStreakRef: UpdateStreakRef;

export function updateStreak(vars: UpdateStreakVariables): MutationPromise<UpdateStreakData, UpdateStreakVariables>;
export function updateStreak(dc: DataConnect, vars: UpdateStreakVariables): MutationPromise<UpdateStreakData, UpdateStreakVariables>;

interface DeleteStreakRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteStreakVariables): MutationRef<DeleteStreakData, DeleteStreakVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteStreakVariables): MutationRef<DeleteStreakData, DeleteStreakVariables>;
  operationName: string;
}
export const deleteStreakRef: DeleteStreakRef;

export function deleteStreak(vars: DeleteStreakVariables): MutationPromise<DeleteStreakData, DeleteStreakVariables>;
export function deleteStreak(dc: DataConnect, vars: DeleteStreakVariables): MutationPromise<DeleteStreakData, DeleteStreakVariables>;

interface GetStreakRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetStreakVariables): QueryRef<GetStreakData, GetStreakVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetStreakVariables): QueryRef<GetStreakData, GetStreakVariables>;
  operationName: string;
}
export const getStreakRef: GetStreakRef;

export function getStreak(vars: GetStreakVariables, options?: ExecuteQueryOptions): QueryPromise<GetStreakData, GetStreakVariables>;
export function getStreak(dc: DataConnect, vars: GetStreakVariables, options?: ExecuteQueryOptions): QueryPromise<GetStreakData, GetStreakVariables>;

interface ListStreaksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStreaksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListStreaksData, undefined>;
  operationName: string;
}
export const listStreaksRef: ListStreaksRef;

export function listStreaks(options?: ExecuteQueryOptions): QueryPromise<ListStreaksData, undefined>;
export function listStreaks(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListStreaksData, undefined>;

