import { Product_List } from '../components/ProductArray';


function on(eventName, listener) {
    document.addEventListener(eventName, listener);
  }

function trigger(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }

  on('start', (e) => {
    if (!Product_List.includes(e.detail.id)) {
      Product_List.push(e.detail.id);
    }
    console.log(
      `Start event triggered ${e.detail.id}`
    );
  })

export { trigger };
