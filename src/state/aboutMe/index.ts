import { hookstate } from "@hookstate/core";

const original = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
commodo ornare. Phasellus gravida justo quis nulla elementum blandit.
Quisque ornare ullamcorper nisi, in laoreet metus auctor ac. Praesent
nisl erat, semper suscipit purus sed, semper pulvinar nunc. Morbi quis
nunc vitae nisl accumsan rutrum. Donec non felis ipsum. Vestibulum
mattis justo blandit dui lacinia mattis. Donec eget lorem non urna
faucibus iaculis. Quisque congue ipsum nec ornare commodo.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
commodo ornare. Phasellus gravida justo quis nulla elementum blandit.
Quisque ornare ullamcorper nisi, in laoreet metus auctor ac. Praesent
nisl erat, semper suscipit purus sed, semper pulvinar nunc. Morbi quis
nunc vitae nisl accumsan rutrum. Donec non felis ipsum. Vestibulum
mattis justo blandit dui lacinia mattis. Donec eget lorem non urna
faucibus iaculis. Quisque congue ipsum nec ornare commodo.

`.trim();

export const aboutMeTextState = hookstate(original);
export function resetAboutMe() {
  aboutMeTextState.set(original);
}
