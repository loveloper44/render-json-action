export function render(item) {
  if (item === null || item === undefined) return null;

  if (typeof item === "object") {
    if (Array.isArray(item)) {
      return item.map(i => render(i));
    } else {
      for (let [key, value] of Object.entries(item)) {
        item[key] = render(value);
      }
      return item;
    }
  } else {
    if (typeof item === "string" && item.match(/^\%d/)) {
      return process.env[item.substr(3)]
        ? parseInt(process.env[item.substr(3)], 10)
        : undefined;
    }

    if (typeof item === "string" && item.match(/^\%f/)) {
      return process.env[item.substr(3)]
        ? parseFloat(process.env[item.substr(3)])
        : undefined;
    }

    if (typeof item === "string" && item.match(/^\%s/)) {
      return process.env[item.substr(3)];
    }

    if (typeof item === "string" && item.match(/^\%b/)) {
      return process.env[item.substr(3)];
    }

    return item;
  }
}
