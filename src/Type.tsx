export interface TouchSpinProps {
  signAlignment?: Alignment;
  sign?: string;
  initValue?: number;
  step?: number;
  min?: number;
  max?: number;
  inputStyle?: any;
  decimals?: number;
  counterHandler: (e: number) => void;
  verticalButtons?: boolean;
  verticalUpClass?: string;
  verticalDownClass?: string;
}
export enum Alignment {
  Right = 1,
  Left,
}

export enum BsPaddingY {
  Zero = 'py-0',
  One = 'py-1',
  Two = 'py-2',
  Three = 'py-3',
  Four = 'py-4',
  Five = 'py-5',
  Auto = 'py-auto',
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
};
