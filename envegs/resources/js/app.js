import Vue from 'vue';

// Importamos la vista base
import App from './App.vue';



// importamos librerias
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


// Desactivamos el modo producción
Vue.config.productionTip = false

// Aqui cargamos el vue al id App
new Vue({
	el: '#app',
	render: h => h(App)
});




