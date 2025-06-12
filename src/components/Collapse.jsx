import { useRef, useState, useEffect } from "react";
import VectorClose from "../assets/images/Vectorfermer.png";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen, children]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(open => !open)}>
        <span>{title}</span>
        <img
          src={VectorClose}
          alt={isOpen ? "Fermer" : "Ouvrir"}
          className={`collapse-icon${isOpen ? " rotated" : ""}`}
        />
      </div>
      <div
        ref={contentRef}
        className="collapse-contenttxt"
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="collapse-content-inner"
    style={{
      transform: isOpen ? "translatey(0)" : "translatey(-104px)",
      opacity: isOpen ? 1 : 0,
      transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.2s",
      padding: 5,
    }}> 
        {children}
        </div>
      </div>
    </div>
  );
}
