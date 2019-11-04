import axios from "axios";
import * as config from "./config";

const api = config.API;
const uploadApi = config.UPLOAD_API;

export async function getProducts() {
  const { data: products } = await axios.get(`${api}/products`);
  return products;
}

export async function getCategories() {
  const { data: categories } = await axios.get(`${api}/categories`);
  return categories;
}

export async function getCategory(title) {
  const { data: category } = await axios.get(
    `${api}/categories/${encodeURI(title)}`
  );
  return category;
}

export async function getPrices() {
  const { data: prices } = await axios.get(`${api}/prices`);
  return prices;
}

export async function getArticles() {
  const { data: articles } = await axios.get(`${api}/articles`);
  return articles;
}

export async function getNews() {
  const { data: news } = await axios.get(`${api}/news`);
  return news;
}

export async function getCategoryProducts(title) {
  const { data: news } = await axios.get(
    `${api}/categories/${encodeURI(title)}/products`
  );
  return news;
}

export async function getImages() {
  const { data: images } = await axios.get(`${api}/images`);
  return images;
}

export async function getMessages() {
  const { data: messages } = await axios.get(`${api}/messages`);
  return messages;
}

export function checkAuth(data) {
  return axios.post(`${api}/auth`, data);
}

export function login(data) {
  return axios.post(`${api}/auth`, data);
}

export function sendProduct(data) {
  return axios.post(`${api}/products`, data);
}

export function deleteProduct(data) {
  return axios.delete(`${api}/products`, data);
}

export function updateProduct(data) {
  return axios.put(`${api}/products`, data);
}

export function sendArticle(data) {
  return axios.post(`${api}/articles`, data);
}

export function deleteArticle(data) {
  return axios.delete(`${api}/articles`, data);
}

export function sendNews(data) {
  return axios.post(`${api}/news`, data);
}

export function deleteNews(data) {
  return axios.delete(`${api}/news`, data);
}

export function sendPrice(data) {
  return axios.post(`${api}/prices`, data);
}

export function deletePrice(data) {
  return axios.delete(`${api}/prices`, data);
}

export function deleteImage(data) {
  return axios.delete(`${api}/images`, data);
}

export function uploadImage(data) {
  return axios.post(`${uploadApi}/upload`, data);
}

export function sendMessage(data) {
  return axios.post(`${api}/contact`, data);
}
