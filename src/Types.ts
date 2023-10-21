// Types and Interfaces
export type SetSuccessHandlerType = React.Dispatch<
  React.SetStateAction<{
    isSuccess: boolean;
    message: string;
    subMessage?: string;
  }>
>;
export type SetErrorHandlerType = React.Dispatch<
  React.SetStateAction<{
    hasError: boolean;
    message: string;
  }>
>;
export interface SuccessHandlerType {
  isSuccess: boolean;
  message: string;
  subMessage?: string;
}
export interface ErrorHandlerType {
  hasError: boolean;
  message: string;
}
export type SetIsLoadingType = React.Dispatch<React.SetStateAction<boolean>>;
export type SetStateForBoolean = React.Dispatch<React.SetStateAction<boolean>>;
