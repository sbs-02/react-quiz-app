import type { ContainerProps } from "@/Interfaces/ContainerProps";

export function Container({
  children,
  center,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto  w-full  max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen ${center} ${className}`}
    >
      {children}
    </div>
  );
}

/*
mx-auto centers it horizontally.

max-w-7xl keeps it from stretching too much on big screens.

px-4 sm:px-6 lg:px-8 adds responsive padding:

px-4 for mobile

sm:px-6 for tablets

lg:px-8 for laptops/desktops

className lets you override or extend styles if needed.

min-h-screen → fills the viewport vertically.

flex items-center justify-center → centers child both vertically & horizontally.

center prop → makes it optional so your container can be used in multiple contexts.
*/
