// import type { TopicButtonProps } from "@/Interfaces/TopicsButtonProps";
// import { Button } from "../ui/button";

// export function TopicsButton({ logo, label }: TopicButtonProps) {
//   return (
//     <Button
//       asChild
//       variant="ghost"
//       className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-0 bg-transparent hover:bg-transparent"
//     >
//       <div className="logo-container">
//         <img
//           className="logo w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
//           src={logo}
//         />
//         <span className="logo-text">{label}</span>
//       </div>
//     </Button>
//   );
// }

import type { TopicButtonProps } from "@/Interfaces/TopicsButtonProps";
import { Button } from "../ui/button";

export function TopicsButton({
  logo,
  label,
  //   className,
  onClick,
}: TopicButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-0 bg-transparent hover:bg-transparent"
    >
      <div className={`logo-container`} onClick={onClick}>
        <img
          className="logo w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          src={logo}
          alt={label}
        />
        <span className="logo-text">{label}</span>
      </div>
    </Button>
  );
}
