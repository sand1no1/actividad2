interface RectangleProps {
    color: string;
    width: string;
    height: string;
    showText?: boolean;
  }

  const widths: Record<string, string> = {
    small: "w-16",
    medium: "w-32",
    large: "w-64",
  };
  
  const heights: Record<string, string> = {
    small: "h-8",
    medium: "h-16",
    large: "h-32",
  };
  
  const colors: Record<string, string> = {
    green: "bg-green-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    yellow: "bg-yellow-400",
    gray: "bg-gray-500"
  };



  export default function Rectangle({ color, width, height, showText = true }: RectangleProps) {
    return (
      <div
        className={`border ${colors[color]} ${widths[width]} ${heights[height]} flex items-center justify-center`}
      >
        {showText ? color : ""}
      </div>
    );
  }
  
  