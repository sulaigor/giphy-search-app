export interface IReducerAction {
  type: string;
  payload?: Record<string, any>;
}

export type ReducerFunctionType<T> = (state: T, action: IReducerAction) => T;
