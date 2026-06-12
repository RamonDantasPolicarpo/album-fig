<template>
    <div class="min-h-screen bg-mist-900 p-10">
        <div class="max-w-3xl mx-auto bg-emerald-900 p-8 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold text-white mb-6 text-center">
                Álbum de Figurinhas ⚽
            </h1>
        </div>
        <div v-if="listaPaises.length === 0" class="text-center text-gray-400 mt-6">
            <p>Carregando base de dados...</p>
        </div>
        <div v-else class="flex flex-col gap-2 mt-6">
            <label for="paises" class="font-semibold text-gray-200"> Escolha um País</label>
            <select 
            id="paises"
            v-model="paisSelecionado"
            class="p-3 border border-mist-600 rounded-3xl bg-mist-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white">
        <option value="" disabled>Selecione uma opção...</option>
        <option v-for="pais in listaPaises" :key="pais.name" :value="pais.name">
            {{ pais.name }}
        </option>
        </select>
        <p class="mt-4 text-sm text-white" v-if="paisSelecionado">
            País selecionado: <span class="font-bold text-emerald-300">{{ paisSelecionado }}</span>
        </p>
        </div>
        <div v-for="selecao in listaSelecao" :key="selecao.name">
            <p>{{ selecao.name }}</p>
        </div>
    </div>
</template>

<script>
import { getPaises } from '../service/apiFootball';
import { getSelecao } from '../service/apiFootball';

export default {
    name: "HomeView",
    data() {
        return {
            listaPaises: [],
            paisSelecionado: "",
            listaSelecao: []
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
        },

        async carregarSelecoes() {
            try {
                const dados = await getSelecao(this.paisSelecionado);
                this.listaSelecao = dados;
                console.log("Seleção carregadas com sucesso");
            } catch (erro) {
                console.error("Erro ao carregar seleção:", erro);
            }
        }
    },
    mounted() {
        this.carregarPaises();
    }
}

</script>

<style scoped></style>