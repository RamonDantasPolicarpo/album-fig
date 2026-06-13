<template>
    <div>
        <div class="w-24 h-24 mb-3 border-4 border-mist-900 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <img :src="jogador.photo" :alt="'Foto de ' + jogador.name" class="w-full h-full object-cover">
        </div>

        <h2 class="text-white font-bold text-lg text-center leading-tight mb-1">
            {{ jogador.name }}
        </h2>
        <p class="text-emerald-400 font-semibold text-sm mb-3">
            {{ jogador.position }}
        </p>

        <div class="w-full bg-mist-900 rounded-lg p-2 flex justify-around text-center text-xs text-gray-300 mt-auto">
            <div>
                <span class="block font-bold text-white text-sm">{{ jogador.number || '-' }}</span>
                <span>Camisa</span>
            </div>
            <div>
                <span class="block font-bold text-white text-sm">{{ jogador.age }}</span>
                <span>Idade</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FigurinhaComponent",
    props: {
        jogador: {
            type: Object,
            required: true
        }
    }
}
</script>

<style></style>