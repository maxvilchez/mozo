
const server = 'http://192.168.1.9:8080';

const MENUS = `${server}/ProyectoIntegrador/plato/listar`;
const MENU_DETAIL = `${server}/ProyectoIntegrador/plato/listar/`; // + id

const CATEGORIES = `${server}/ProyectoIntegrador/categoria/listar`;
const CATEGORY_DETAIL = `${server}/ProyectoIntegrador/plato/listar/categoria/`; // + id

const SEARCH_PRODUCTS = `${server}/ProyectoIntegrador/plato/listar/nombre/`; // + nombre

export const fetchMenu = () => fetch(MENUS)
  .then(Response => Promise.all([Response, Response.json()]));

export const fetchMenuDetail = id => fetch(`${MENU_DETAIL}${id}`)
  .then(Response => Promise.all([Response, Response.json()]));

export const fetchCategories = () => fetch(CATEGORIES)
  .then(Response => Promise.all([Response, Response.json()]));

export const fetchCategoryDetail = id => fetch(`${CATEGORY_DETAIL}${id}`)
  .then(Response => Promise.all([Response, Response.json()]));

export const fetchSearchProducts = name => fetch(`${SEARCH_PRODUCTS}${name}`)
  .then(Response => Promise.all([Response, Response.json()]));
