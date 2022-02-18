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

export type ChildProps = {
  onIncreaseHandler: () => void;
  OnDecreaseHandler: () => void;
  OnStopCounter: () => void;
  signAlignment?: Alignment;
  sign?: string;
  counter: number;
  decimals?: number;
  verticalUpClass?: string;
  verticalDownClass?: string;
  parentStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  iconSize?: number;
};
