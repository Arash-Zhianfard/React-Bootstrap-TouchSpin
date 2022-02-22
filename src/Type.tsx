export interface TouchSpinProps {
  signAlignment?: Alignment;
  sign?: string;
  initValue?: number;
  step?: number;
  min?: number;
  max?: number;
  decimals?: number;
  counterHandler: (e: number) => void;
  verticalButtons?: boolean;
  verticalUpClass?: string;
  verticalDownClass?: string;
  parentStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  iconSize?: number;
}
export enum Alignment {
  Right = 1,
  Left,
}
export interface ChildProps {
  onIncreaseHandler: () => void;
  onDecreaseHandler: () => void;
  onStopCounter: () => void;
  counter: number;
  decimals?: number;
  parentStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export interface VerticalProps extends ChildProps {
  verticalUpClass?: string;
  verticalDownClass?: string;
  iconSize?: number;
}
export interface SideProps extends ChildProps {
  signAlignment?: Alignment;
  sign?: string;
}
