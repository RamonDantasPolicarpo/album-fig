<template>
    <div class="bg-red-500 text-white p-10 font-bold text-3xl">
        <h1>Álbum de Figurinhas - Seleção de países</h1>

        <div v-if="listaPaises.length == 0">
            <p>Carregando países...</p>
        </div>

        <ul v-else>
            <li v-for="pais in listaPaises" :key="pais.name">
                {{ pais.name }} - {{ pais.code }}
            </li>
        </ul>
    </div>
</template>

<script>
import { getPaises } from '../service/apiFootball';

export default {
    name: "HomeView",
    data() {
        return {
            listaPaises: []
        }
    },
    methods: {
        async carregarPaises() {
            try {
                const dados = await getPaises();
                this.listaPaises = dados;
                console.log("Países carregados com sucesso");
            } catch (erro) {
                console.error("Erro ao carregar países:", erro);
            }
        }
    },
    mounted() {
        this.carregarPaises();
    }
}

</script>

<style scoped></style>