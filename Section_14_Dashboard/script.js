const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
