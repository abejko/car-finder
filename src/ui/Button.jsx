function Button({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  icon,
}) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span
        className={`flex-1 flex justify-center items-center ${textStyles}  text-center`}
      >
        {icon && <span className="center-align mr-2 text-lg">{icon}</span>}
        {title}
      </span>
      {rightIcon && (
        <div className="relative ">
          {typeof rightIcon === "string" ? (
            <img src={rightIcon} alt="icon" className="object-contain" />
          ) : (
            rightIcon
          )}
        </div>
      )}
    </button>
  );
}

export default Button;
