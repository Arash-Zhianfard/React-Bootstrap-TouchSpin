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
export declare enum BsPaddingY {
    Zero = "py-0",
    One = "py-1",
    Two = "py-2",
    Three = "py-3",
    Four = "py-4",
    Five = "py-5",
    Auto = "py-auto"
}
