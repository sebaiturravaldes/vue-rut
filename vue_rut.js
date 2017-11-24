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
            rut: function (val) {
                this.rut = this.cleanRut(this.rut);
                let len = this.rut.length - 1;
                if (len > 3) {
                    let dv = this.rut[len];
                    let beforeDv = this.rut.substring(0, len).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                    this.rut = beforeDv + '-' + dv;
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
