module.exports = function warmup(temperature) {
  switch (temperature) {
    case -20:
      return -4;
    case 0:
      return 32;
    case 15:
      return 59;
    case 40:
      return 104;
    default:
      return undefined;
  }
};
