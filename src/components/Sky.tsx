import { ThemeMode } from "@/enums";
import { useTheme } from "next-themes";

const Sky = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full overflow-hidden z-0">
      {theme === ThemeMode.DARK ? (
        <>
          <div className="stars absolute inset-0 bg-black bg-stars z-0"></div>
          <div className="twinkling absolute inset-0 bg-transparent bg-twinkling z-10 animate-twinkling"></div>
          <div className="clouds bottom-1/4 absolute inset-0 bg-transparent bg-clouds z-20 animate-clouds"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#03a9f445] backdrop-blur-sm backdrop-brightness-75 z-0"></div>
          <div className="absolute inset-0 ">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[#03a9f445]"></div>
            <div className="absolute inset-0 flex items-center h-[445px]">
              <div className="absolute inset-0 bg-clouds2 animate-move1"></div>
              <div className="absolute inset-0 bg-clouds3 animate-move2"></div>
            </div>
            <div className="absolute top-[10%] inset-0 bg-clouds3 animate-move2"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sky;
