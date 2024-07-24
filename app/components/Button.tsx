import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title?: string;
    icon?: string;
    variant: 'btn_dark_green'|'btn_dark_hovergreen'; 
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  const altText = title || "Button icon";

  return (
    <button 
      className={`flex items-center justify-center gap-3 rounded-lg px-4 py-3 ${variant}`} 
      type={type}
    >
      {icon && <Image src={icon} alt={altText} width={24} height={24} />}
      {title && <span className="font-bold text-lg">{title}</span>}
    </button>
  );
}

export default Button;
