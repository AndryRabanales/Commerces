export const formatMXN = (cents) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" })
    .format((cents || 0) / 100);
