export interface IOption {
  value: number;
  label: string;
}

export interface IInput {
  placeholder: string;
  type: string;
  value: number | string;
  onChange: any;
}

export interface IButton {
  isDisabled: boolean;
  onClick: any;
}

export interface ICustomSelect {
  options: IOption[];
  value: IOption;
  onChange: any;
}
