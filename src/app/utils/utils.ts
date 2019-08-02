export function accessibleRouteChangeHandler() {
  setTimeout(() => {
    const mainContainer = document.getElementById('primary-app-container');
    if (mainContainer) {
      mainContainer.focus();
      console.log('did the focus thingie');
    }
  }, 2000);
}
