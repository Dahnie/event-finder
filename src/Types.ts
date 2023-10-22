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

export interface IDropdownOption {
  key: string | number;
  value: string | number;
  default?: string;
}

// Event Filter Parameters Type
export interface IEventFilterParams {
  location: string;
  date: string;
  eventType: string;
}

// Event Type
export interface IEvent {
  event_name: string;
  event_location: string;
  event_image: string;
  event_type: string;
  event_date: string;
  event_time: string;
  event_description: string;
  event_id: string;
  event_duration: number;
  event_organizer: string;
  event_contact_email: string;
  event_contact_phone: string;
  event_website: string;
  event_ticket_price: number;
  event_capacity: number;
}
