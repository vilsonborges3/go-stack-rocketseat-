import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com fisico: IP maquina
 * Android com emulador: localhost (com adb reverse)
 * Android com emulador: 10.0.2.2 (Android studio)
 * Android com fisico: IP da maquina
 */