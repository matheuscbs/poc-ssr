import useToggle from "../hooks/useToggle";
import React, { PropsWithChildren, ReactNode } from "react";

export type SectionProps = PropsWithChildren<{
    title?: ReactNode,
    subtitle?: ReactNode,
    description?: ReactNode
    onClose: () => void
    minimized?: boolean
}>
const Section = ({
    title,
    subtitle,
    description,
    minimized,
    onClose,
    children
}: SectionProps) => {
    const {open, toggle} = useToggle(!minimized)

    return (
        <section className="group-type">
            <header>
                <div className="container">
                    <div className="content">
                        <ul className="actions">
                            <li className="action-resize">
                                <i className={`fa fa-${open ? 'minus' : 'plus'}-square-o`} onClick={() => {
                                    toggle()
                                }}></i>
                            </li>
                            <li className="action-close">
                                <i className="fa fa-times-circle" onClick={onClose}></i>
                            </li>
                        </ul>
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                        <div className="results-display">{description}</div>
                    </div>
                </div>
            </header>
            {open && (
                <section className="results">
                    {children}
                </section>
            )}
        </section>
    )
}

export default Section;
