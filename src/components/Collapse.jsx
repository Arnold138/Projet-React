import { useState } from "react";
import VectorOpen from "../assets/images/Vectorouvert.png";
import VectorClose from "../assets/images/Vectorfermer.png";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen((open) => !open)}>
        <span>{title}</span>
        <img
          src={isOpen ? VectorClose : VectorOpen}
          alt={isOpen ? "Fermer" : "Ouvrir"}
          className="collapse-icon"
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}
