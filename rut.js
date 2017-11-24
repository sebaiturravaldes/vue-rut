<template>
    <div> 
      <input v-model="rut" type="text" required autofocus>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rut: ''
            }
        },
        watch: {
            rut_empresa: function (val) {
                this.rut_empresa = this.cleanRut(this.rut_empresa);
                let largo = this.rut_empresa.length - 1;
                if (largo > 3) {
                    let dv = this.rut_empresa[largo];
                    let anteRut = this.rut_empresa.substring(0, largo).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                    this.rut_empresa = anteRut + '-' + dv;
                }
            }
        },
        methods: {
            cleanRut(value) {
                return value.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
            }
        }
    }
</script>
