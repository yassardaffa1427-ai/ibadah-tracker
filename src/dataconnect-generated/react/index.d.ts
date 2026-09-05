import { CreateUserData, UpdateUserData, DeleteUserData, GetUserData, ListUsersData, CreateDailyLogData, CreateDailyLogVariables, UpdateDailyLogData, UpdateDailyLogVariables, DeleteDailyLogData, DeleteDailyLogVariables, GetDailyLogData, GetDailyLogVariables, ListDailyLogsData, CreateHabitData, CreateHabitVariables, UpdateHabitData, UpdateHabitVariables, DeleteHabitData, DeleteHabitVariables, GetHabitData, GetHabitVariables, ListHabitsData, CreateHabitLogData, CreateHabitLogVariables, UpdateHabitLogData, UpdateHabitLogVariables, DeleteHabitLogData, DeleteHabitLogVariables, GetHabitLogData, GetHabitLogVariables, ListHabitLogsData, CreateStreakData, CreateStreakVariables, UpdateStreakData, UpdateStreakVariables, DeleteStreakData, DeleteStreakVariables, GetStreakData, GetStreakVariables, ListStreaksData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, void>): UseDataConnectMutationResult<UpdateUserData, undefined>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateDailyLog(options?: useDataConnectMutationOptions<CreateDailyLogData, FirebaseError, CreateDailyLogVariables>): UseDataConnectMutationResult<CreateDailyLogData, CreateDailyLogVariables>;
export function useCreateDailyLog(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDailyLogData, FirebaseError, CreateDailyLogVariables>): UseDataConnectMutationResult<CreateDailyLogData, CreateDailyLogVariables>;

export function useUpdateDailyLog(options?: useDataConnectMutationOptions<UpdateDailyLogData, FirebaseError, UpdateDailyLogVariables>): UseDataConnectMutationResult<UpdateDailyLogData, UpdateDailyLogVariables>;
export function useUpdateDailyLog(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDailyLogData, FirebaseError, UpdateDailyLogVariables>): UseDataConnectMutationResult<UpdateDailyLogData, UpdateDailyLogVariables>;

export function useDeleteDailyLog(options?: useDataConnectMutationOptions<DeleteDailyLogData, FirebaseError, DeleteDailyLogVariables>): UseDataConnectMutationResult<DeleteDailyLogData, DeleteDailyLogVariables>;
export function useDeleteDailyLog(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteDailyLogData, FirebaseError, DeleteDailyLogVariables>): UseDataConnectMutationResult<DeleteDailyLogData, DeleteDailyLogVariables>;

export function useGetDailyLog(vars: GetDailyLogVariables, options?: useDataConnectQueryOptions<GetDailyLogData>): UseDataConnectQueryResult<GetDailyLogData, GetDailyLogVariables>;
export function useGetDailyLog(dc: DataConnect, vars: GetDailyLogVariables, options?: useDataConnectQueryOptions<GetDailyLogData>): UseDataConnectQueryResult<GetDailyLogData, GetDailyLogVariables>;

export function useListDailyLogs(options?: useDataConnectQueryOptions<ListDailyLogsData>): UseDataConnectQueryResult<ListDailyLogsData, undefined>;
export function useListDailyLogs(dc: DataConnect, options?: useDataConnectQueryOptions<ListDailyLogsData>): UseDataConnectQueryResult<ListDailyLogsData, undefined>;

export function useCreateHabit(options?: useDataConnectMutationOptions<CreateHabitData, FirebaseError, CreateHabitVariables>): UseDataConnectMutationResult<CreateHabitData, CreateHabitVariables>;
export function useCreateHabit(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHabitData, FirebaseError, CreateHabitVariables>): UseDataConnectMutationResult<CreateHabitData, CreateHabitVariables>;

export function useUpdateHabit(options?: useDataConnectMutationOptions<UpdateHabitData, FirebaseError, UpdateHabitVariables>): UseDataConnectMutationResult<UpdateHabitData, UpdateHabitVariables>;
export function useUpdateHabit(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateHabitData, FirebaseError, UpdateHabitVariables>): UseDataConnectMutationResult<UpdateHabitData, UpdateHabitVariables>;

export function useDeleteHabit(options?: useDataConnectMutationOptions<DeleteHabitData, FirebaseError, DeleteHabitVariables>): UseDataConnectMutationResult<DeleteHabitData, DeleteHabitVariables>;
export function useDeleteHabit(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteHabitData, FirebaseError, DeleteHabitVariables>): UseDataConnectMutationResult<DeleteHabitData, DeleteHabitVariables>;

export function useGetHabit(vars: GetHabitVariables, options?: useDataConnectQueryOptions<GetHabitData>): UseDataConnectQueryResult<GetHabitData, GetHabitVariables>;
export function useGetHabit(dc: DataConnect, vars: GetHabitVariables, options?: useDataConnectQueryOptions<GetHabitData>): UseDataConnectQueryResult<GetHabitData, GetHabitVariables>;

export function useListHabits(options?: useDataConnectQueryOptions<ListHabitsData>): UseDataConnectQueryResult<ListHabitsData, undefined>;
export function useListHabits(dc: DataConnect, options?: useDataConnectQueryOptions<ListHabitsData>): UseDataConnectQueryResult<ListHabitsData, undefined>;

export function useCreateHabitLog(options?: useDataConnectMutationOptions<CreateHabitLogData, FirebaseError, CreateHabitLogVariables>): UseDataConnectMutationResult<CreateHabitLogData, CreateHabitLogVariables>;
export function useCreateHabitLog(dc: DataConnect, options?: useDataConnectMutationOptions<CreateHabitLogData, FirebaseError, CreateHabitLogVariables>): UseDataConnectMutationResult<CreateHabitLogData, CreateHabitLogVariables>;

export function useUpdateHabitLog(options?: useDataConnectMutationOptions<UpdateHabitLogData, FirebaseError, UpdateHabitLogVariables>): UseDataConnectMutationResult<UpdateHabitLogData, UpdateHabitLogVariables>;
export function useUpdateHabitLog(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateHabitLogData, FirebaseError, UpdateHabitLogVariables>): UseDataConnectMutationResult<UpdateHabitLogData, UpdateHabitLogVariables>;

export function useDeleteHabitLog(options?: useDataConnectMutationOptions<DeleteHabitLogData, FirebaseError, DeleteHabitLogVariables>): UseDataConnectMutationResult<DeleteHabitLogData, DeleteHabitLogVariables>;
export function useDeleteHabitLog(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteHabitLogData, FirebaseError, DeleteHabitLogVariables>): UseDataConnectMutationResult<DeleteHabitLogData, DeleteHabitLogVariables>;

export function useGetHabitLog(vars: GetHabitLogVariables, options?: useDataConnectQueryOptions<GetHabitLogData>): UseDataConnectQueryResult<GetHabitLogData, GetHabitLogVariables>;
export function useGetHabitLog(dc: DataConnect, vars: GetHabitLogVariables, options?: useDataConnectQueryOptions<GetHabitLogData>): UseDataConnectQueryResult<GetHabitLogData, GetHabitLogVariables>;

export function useListHabitLogs(options?: useDataConnectQueryOptions<ListHabitLogsData>): UseDataConnectQueryResult<ListHabitLogsData, undefined>;
export function useListHabitLogs(dc: DataConnect, options?: useDataConnectQueryOptions<ListHabitLogsData>): UseDataConnectQueryResult<ListHabitLogsData, undefined>;

export function useCreateStreak(options?: useDataConnectMutationOptions<CreateStreakData, FirebaseError, CreateStreakVariables>): UseDataConnectMutationResult<CreateStreakData, CreateStreakVariables>;
export function useCreateStreak(dc: DataConnect, options?: useDataConnectMutationOptions<CreateStreakData, FirebaseError, CreateStreakVariables>): UseDataConnectMutationResult<CreateStreakData, CreateStreakVariables>;

export function useUpdateStreak(options?: useDataConnectMutationOptions<UpdateStreakData, FirebaseError, UpdateStreakVariables>): UseDataConnectMutationResult<UpdateStreakData, UpdateStreakVariables>;
export function useUpdateStreak(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateStreakData, FirebaseError, UpdateStreakVariables>): UseDataConnectMutationResult<UpdateStreakData, UpdateStreakVariables>;

export function useDeleteStreak(options?: useDataConnectMutationOptions<DeleteStreakData, FirebaseError, DeleteStreakVariables>): UseDataConnectMutationResult<DeleteStreakData, DeleteStreakVariables>;
export function useDeleteStreak(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteStreakData, FirebaseError, DeleteStreakVariables>): UseDataConnectMutationResult<DeleteStreakData, DeleteStreakVariables>;

export function useGetStreak(vars: GetStreakVariables, options?: useDataConnectQueryOptions<GetStreakData>): UseDataConnectQueryResult<GetStreakData, GetStreakVariables>;
export function useGetStreak(dc: DataConnect, vars: GetStreakVariables, options?: useDataConnectQueryOptions<GetStreakData>): UseDataConnectQueryResult<GetStreakData, GetStreakVariables>;

export function useListStreaks(options?: useDataConnectQueryOptions<ListStreaksData>): UseDataConnectQueryResult<ListStreaksData, undefined>;
export function useListStreaks(dc: DataConnect, options?: useDataConnectQueryOptions<ListStreaksData>): UseDataConnectQueryResult<ListStreaksData, undefined>;
