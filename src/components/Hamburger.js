import "../variables.scss";

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx>
        {`
          .hamburger {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }

          .burger {
            width: 2rem;
            height: 0.35rem;
            border-radius: 1px;
            background-color: whitesmoke;
            tranform-origin: 1px;
            transition: all 0.3s linear;
          }

          .burger1 {
            transform: ${isOpen
              ? "translateY(11px) rotate(45deg)"
              : "rotate(0) translateY(0)"};
          }
          .burger2 {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
          .burger3 {
            transform: ${isOpen
              ? "translateY(-11px) rotate(-45deg)"
              : "rotate(0) translateY(0)"};
          }
        `}
      </style>
    </>
  );
}
