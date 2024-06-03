import { createEffect } from 'solid-js';

import { CreateEvent } from '../../../Events/CreateEvent'
import { toggleNewEvent } from './events';

export function HoverCreateEvent(){

  return (
    <>
      {/* Content of the hovering component */}
      <div class="new-event-form">
        <div class="top-right-button-container">
          <button
            onClick={(event) => {
              toggleNewEvent(event, false);
            }}
          >
            x
          </button>
        </div>
        <CreateEvent/>
      </div>
    </>
  );
};