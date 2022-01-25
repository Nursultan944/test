export function CONTACT_GETTER (state) {
  return [...state.contacts].sort((a, b) => a.name.localeCompare(b.name));
}
