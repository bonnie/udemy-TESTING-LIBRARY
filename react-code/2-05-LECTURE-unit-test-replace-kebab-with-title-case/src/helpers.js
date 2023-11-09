export function kebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replaceAll("-", " ");
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) =>
    match.toUpperCase()
  );

  return colorWithCaps;
}
