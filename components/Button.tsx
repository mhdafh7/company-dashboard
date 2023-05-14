import React, { MouseEventHandler, ReactElement } from "react";

type Props = {
  icon: ReactElement;
  text: string;
  additionalClasses?: string;
  onClickFunciton?: MouseEventHandler;
};
const Button = ({ icon, text, onClickFunciton, additionalClasses }: Props) => {
  return (
    <button
      className={`px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 transition-all max-h-14 min-w-min ${additionalClasses}`}
      onClick={onClickFunciton}
    >
      <span className="w-6 h-6">{icon}</span>
      {text}
    </button>
  );
};
export default Button;
