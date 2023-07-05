<template>
    <div>
        <h1 class="diferente"> {{ mensagem }}</h1>
    </div>
</template>
<script>
export default {
    name: 'TesteComponent',
    data() {
        return {
            mensagem: 'minha mensagem via meu component'
        }
    }
}
</script>
<style>
h1.diferente {
    background: black;
    color: #fff;
}
</style>
