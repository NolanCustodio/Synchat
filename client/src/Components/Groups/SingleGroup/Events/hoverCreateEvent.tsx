import { createEffect } from 'solid-js';

export function CreateEvent(){
  const show = true; // Control visibility here

  createEffect(() => {
    if (show) {
      // Apply styles to make the component visible and positioned over the page
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    } else {
      // Reset styles when hiding
      document.body.style.removeProperty('position');
      document.body.style.removeProperty('top');
      document.body.style.removeProperty('left');
      document.body.style.removeProperty('width');
      document.body.style.removeProperty('height');
      document.body.style.removeProperty('background-color');
    }
  });

  return (
    <>
      {/* Content of the hovering component */}
      <div class="new-event-form">
        Hovering Component
      </div>
    </>
  );
};