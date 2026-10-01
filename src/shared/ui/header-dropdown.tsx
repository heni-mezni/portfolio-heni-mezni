"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeaderDropdownProps = {
  className: string;
  label: string;
  trigger: ReactNode;
  children: ReactNode;
};

/** Native disclosure: keyboard support, outside dismissal, and one open menu at a time. */
export function HeaderDropdown({ className, label, trigger, children }: HeaderDropdownProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function dismissOutside(event: PointerEvent) {
      const menu = ref.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    }

    function dismissWithEscape(event: KeyboardEvent) {
      const menu = ref.current;
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissWithEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissWithEscape);
    };
  }, []);

  return (
    <details
      ref={ref}
      name="header-dropdown"
      className={className}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) event.currentTarget.open = false;
      }}
    >
      <summary aria-label={label}>{trigger}</summary>
      {children}
    </details>
  );
}
