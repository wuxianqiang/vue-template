import {get, getAll, set, remove} from './utils/rc'

let config = async (action, k, v) => {
  switch (action) {
    case 'get':
      if (k) {
        let key = await get(k);
        console.log(key)
      } else {
        let obj = await getAll();
        Object.keys(obj).forEach(key => {
          console.log(`${key}=${obj[key]}`);
        })
      }
      break;
    case 'set':
      set(k, v)
      break;
    case 'remove':
      remove(k)
    default:
      return;
  }
}

export default config
