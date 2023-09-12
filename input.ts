/**
 * All the valid ButtonSizes
 */
export type ButtonSize = "small" | "medium" | "large";

export function MyButton({ size = "small" }: { size: ButtonSize }) {
  const sizes = {
    small: "px-1 py-[0.5]",
    medium: "px-2 py-1",
    large: "px-3 py-2",
  };

  const button = document.createElement("button");
  button.innerText = `I'm a ${size} button`;
  button.className = sizes[size];
  return button;
}

export function renderButton(): void {
  const mySmallButton = MyButton({ size: "small" });
  document.body.appendChild(mySmallButton);
}
