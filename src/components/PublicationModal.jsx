import { useEffect, useRef } from "react";

export default function PublicationModal({ pub, onClose }) {
  const modalRef = useRef(null);
  useEffect(() => {
    const focusable = modalRef.current.querySelectorAll("a, button");
    const first = focusable[0],
      last = focusable[focusable.length - 1];
    first.focus();
    const handle = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>{pub.title}</h1>
        <p>
          <strong>Venue:</strong> {pub.venue}
        </p>
        <p>
          <strong>Period:</strong> {pub.period}
        </p>
        <p>{pub.description}</p>
        <a href={pub.link} target="_blank" rel="noopener noreferrer">
          Read Full Paper
        </a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
