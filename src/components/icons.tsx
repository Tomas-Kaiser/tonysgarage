import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LogoMark(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 32 32" strokeWidth={2.25} {...props}>
      <path d="M16 3.5l2.2 2.9 3.6-.6.9 3.5 3.4 1.3-1 3.5 2.3 2.9-2.9 2.2.6 3.6-3.5.9-1.3 3.4-3.5-1L16 28.5l-2.2-2.9-3.6.6-.9-3.5-3.4-1.3 1-3.5L4.5 16l2.9-2.2-.6-3.6 3.5-.9 1.3-3.4 3.5 1z" />
      <path d="M12.5 19.5l7-7m-1.5-1.5a2.5 2.5 0 103.5 3.5" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.8l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.1 6.4 20l1.1-6.2L3 9.4l6.2-.9z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4 18v-5.5C4 8.4 6.3 5.8 10 5l.8 1.6C8.6 7.4 7.6 9 7.5 11H10v7zm10 0v-5.5c0-4.1 2.3-6.7 6-7.5l.8 1.6c-2.2.8-3.2 2.4-3.3 4.4H20v7z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const servicePaths: Record<ServiceIcon, React.ReactNode> = {
  nct: (
    <>
      <path d="M9 4h6v3H9z" />
      <path d="M8 5.5H6a1 1 0 00-1 1V20a1 1 0 001 1h12a1 1 0 001-1V6.5a1 1 0 00-1-1h-2" />
      <path d="M8.5 13.5l2.5 2.5 4.5-5" />
    </>
  ),
  brakes: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M18.5 7.5a8.5 8.5 0 010 9" strokeWidth={3.5} />
    </>
  ),
  oil: (
    <>
      <path d="M3 10h4l2-2h5l7-2-4 7H5a2 2 0 01-2-2z" />
      <path d="M7 8V6h3" />
      <path d="M19.5 16.5c0 1.1-.7 2-1.5 2s-1.5-.9-1.5-2 1.5-3 1.5-3 1.5 1.9 1.5 3z" />
    </>
  ),
  engine: (
    <>
      <path d="M5 9h3V7h6v2h3l2 2v6h-2v2h-4l-2-2H8v-3H5z" />
      <path d="M5 11H3v4h2M10 4h4M12 4v3" />
    </>
  ),
  suspension: (
    <>
      <path d="M12 2v3M12 19v3" />
      <path d="M8 5h8M8 19h8" />
      <path d="M8 7.5l8 2-8 2 8 2-8 2 8 2" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M7 7V5h2v2M15 7V5h2v2" />
      <path d="M7 13.5h3M15.5 12v3M14 13.5h3" />
    </>
  ),
};

export function ServiceGlyph({ name, ...props }: IconProps & { name: ServiceIcon }) {
  return (
    <svg {...base} {...props}>
      {servicePaths[name]}
    </svg>
  );
}
