import React, { PropsWithChildren, ReactNode, useCallback } from "react";
import useToggle from "@hooks/useToggle";

export interface SectionProps extends PropsWithChildren<{}> {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  onClose: () => void;
  minimized?: boolean;
}

const HeaderAction = React.memo<{
  iconClass: string;
  onClick: () => void;
}>(({ iconClass, onClick }) => (
  <li className={`action-${iconClass}`}>
    <i
      className={`fa fa-${iconClass}`}
      onClick={onClick}
      aria-hidden="true"
    ></i>
  </li>
));

const Section = ({
  title,
  subtitle,
  description,
  minimized = false,
  onClose,
  children,
}: SectionProps) => {
  const [open, toggle] = useToggle(!minimized);

  const handleToggle = useCallback(() => {
    toggle();
  }, [toggle]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <section
      className="group-type"
      aria-labelledby="section-title"
      aria-describedby="section-description"
    >
      <header>
        <div className="container">
          <div className="content">
            <ul className="actions">
              <HeaderAction
                iconClass={open ? "minus-square-o" : "plus-square-o"}
                onClick={handleToggle}
              />
              <HeaderAction iconClass="times-circle" onClick={handleClose} />
            </ul>
            <h2 id="section-title">{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
            {description && (
              <div className="results-display" id="section-description">
                {description}
              </div>
            )}
          </div>
        </div>
      </header>
      {open && <section className="results">{children}</section>}
    </section>
  );
};

export default React.memo(Section);
