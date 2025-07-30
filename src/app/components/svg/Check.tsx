import { SvgWrapper } from "./SvgWrapper";

export function Check(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <SvgWrapper {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 11.794L10.154 15.5L18 8.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgWrapper>
  );
}
