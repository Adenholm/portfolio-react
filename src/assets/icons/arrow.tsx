const ArrowIcon: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = "#353535" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 -960 960 960" width={`${size}px`} fill={color}>
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
    </svg>
  );
};

export default ArrowIcon;