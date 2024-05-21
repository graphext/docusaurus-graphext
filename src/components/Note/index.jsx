export default function Note({ children }) {
  return (
    <div
      style={{
        padding: "0.9em",
        border: "2px solid var(--ifm-color-primary-darkest)",
        borderRadius: "0.5rem",
      }}
    >
      ®<div>{children}</div>
    </div>
  );
}
