const params = {
  location: 'Lima'
};

const query = Object.keys(params)
  .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
  .join('&');

const MENUS = `https://api.yelp.com/v3/businesses/search?${query}`;
const TOKEN = '29l1GH32Y2MBz_x1NHaMYe-QY0YQvAyVkx1OwmCQXIAUw8Q93xYlj8GNBI6Kc-HWVLnRHr3Bj1i_9CR4iormr-LQm5CLmywKSde_WY6miWl5B4pgTLAX7Z-ht2bQXHYx';


const config = {
  method: 'GET',
  headers: { Authorization: `Bearer ${TOKEN}` },
};

const fetchMenu = () => fetch(MENUS, config)
  .then(Response => Promise.all([Response, Response.json()]));

export default fetchMenu;
