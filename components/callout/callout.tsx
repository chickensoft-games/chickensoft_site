import { JSX } from "react";
import { IconType } from "react-icons";
import { FaInfoCircle, FaRegLightbulb } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { SiFireship } from "react-icons/si";
import { SlNotebook } from "react-icons/sl";

export type CalloutType = "tip" | "info" | "note" | "caution" | "danger";

export type CalloutProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: string | JSX.Element | JSX.Element[];
  type?: CalloutType;
};

const iconMapping: { [n: string]: IconType } = {
  tip: FaRegLightbulb,
  info: FaInfoCircle,
  note: SlNotebook,
  warning: IoWarning,
  caution: IoWarning,
  danger: SiFireship,
  error: SiFireship,
};

const colorMapping: Record<CalloutType, string> = {
  tip: "bg-[var(--tip-bg)] border-[var(--tip-border)] text-[var(--tip-fg)]",
  note: "bg-[var(--note-bg)] border-[var(--note-border)] text-[var(--note-fg)]",
  info: "bg-[var(--info-bg)] border-[var(--info-border)] text-[var(--info-fg)]",
  caution:
    "bg-[var(--caution-bg)] border-[var(--caution-border)] text-[var(--caution-fg)]",
  danger:
    "bg-[var(--danger-bg)] border-[var(--danger-border)] text-[var(--danger-fg)]",
};

export default function Callout({
  className = "",
  style,
  children,
  type = "info",
}: CalloutProps): JSX.Element {
  const Icon = iconMapping[type];

  return (
    <div
      style={style}
      className={`my-4 flex flex-col items-start p-4 border-l-4 rounded-md ${colorMapping[type]} ${className}`}
    >
      <div className="mr-3 flex flex-row font-sans uppercase font-bold text-sm">
        <Icon className="w-4 h-4 mt-[0.15rem] mr-2" />
        <span> {type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
