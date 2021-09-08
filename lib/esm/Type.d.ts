export interface TouchSpinProps {
    signAlignment?: Alignment;
    sign?: string;
    initValue?: number;
    step?: number;
    min?: number;
    max?: number;
    size?: BsSize;
}
export declare enum Alignment {
    Right = 1,
    Left = 2
}
export declare enum BsSize {
    Small = "sm",
    Medium = "md",
    Large = "lg"
}
