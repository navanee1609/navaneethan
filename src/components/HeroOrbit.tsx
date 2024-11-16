import { PropsWithChildren } from "react";

export const HeroOrbit = ({
    children, // Use `children` (lowercase) to match React's naming convention
    size,
    rotation,
}: PropsWithChildren<{ size: number; rotation : number}>) => { // Fix `PropsWithChildren` usage
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className="flex items-start justify-start"
                style={{
                    transform:`rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`, // Wrap `size` in template literal for proper syntax
                }}
            >
                <div className="inline-flex" 
                style={{
                    transform: `rotate(${rotation * -1}deg)`,
                }}
                >{children}</div>
            </div>
        </div>
    );
};
