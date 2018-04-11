
<template>
  <div class="modal-backdrop">
    <div class="modal">
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
      <qrcode-reader  @decode="onDecode"  :paused="paused" ></qrcode-reader>
       <button
              type="button"
              class="btn-green"
              @click="close"
            >
              Close me!
          </button>
    </div>
  </div>
</template>

<script>
     import QrcodeReader from '@/components/QrcodeReader.vue'
var $ = require('jquery')
    export default {
        name: 'modal',
        components: {
           QrcodeReader 
            
        },
        data(){
            return{
              paused: false,  
                
            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
             onDecode(content) {
                this.paused = true
                console.log(content);
                
                
                // navigator.mediaDevices.getUserMedia({ audio: false, video: false });
                var str = content;
                var matchUrl = str.substr(0, 21);
                var urlToMach = 'https://sid.anubz.io/'
                var res = str.substr(21, 7);
                console.log(matchUrl, '<>', urlToMach);
                if (matchUrl === urlToMach) {
                 //   document.getElementById("tagNum").value = res;
                     
                TagN = res;
                       
     console.log('tagCarro....2> ', TagN);
                    console.log(res);
                   // $('.qrcode-reader').remove();
                } else {
                    console.log('woooops');
                }
            }
        },
    };
</script>
<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        width: inherit;
        height: inherit;
        flex-direction: column;
    }
    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }
    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }
    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .btn-close {
        border: none;
        width: 50px;
        height: 50px;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }
    .btn-green {
        position: relative;
        color: white;
        width: 100px;
        height: 45px;
        padding: 1em;
        margin-left: 180px;
        top: 400px;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>